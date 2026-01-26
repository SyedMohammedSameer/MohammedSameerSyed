#!/usr/bin/env node

/**
 * Convert PNG/JPG images to SVG format
 * 
 * WARNING: This embeds raster images as base64 in SVG, which will NOT improve performance.
 * SVG is for vector graphics. For better performance, use WebP format instead.
 * 
 * This script:
 * 1. Scans /public for PNG/JPG/JPEG images
 * 2. Converts them to base64
 * 3. Embeds them in SVG format
 * 4. Saves as .svg files
 * 
 * Usage: node scripts/convert-to-svg.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const SVG_DIR = path.join(PUBLIC_DIR, 'svg');

// Image extensions to process
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

/**
 * Create SVG directory if it doesn't exist
 */
function ensureSvgDir() {
  if (!fs.existsSync(SVG_DIR)) {
    fs.mkdirSync(SVG_DIR, { recursive: true });
    console.log(`${colors.green}✓${colors.reset} Created SVG directory: ${SVG_DIR}`);
  }
}

/**
 * Get all image files from public directory (excluding optimized and svg folders)
 */
function getImageFiles() {
  const files = fs.readdirSync(PUBLIC_DIR);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(PUBLIC_DIR, file);
    const isFile = fs.statSync(fullPath).isFile();
    return isFile && IMAGE_EXTENSIONS.includes(ext);
  });
}

/**
 * Convert image to base64 data URI
 */
async function imageToBase64(imagePath) {
  const imageBuffer = await sharp(imagePath).toBuffer();
  const ext = path.extname(imagePath).toLowerCase();
  const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg';
  const base64 = imageBuffer.toString('base64');
  return `data:${mimeType};base64,${base64}`;
}

/**
 * Get image dimensions
 */
async function getImageDimensions(imagePath) {
  const metadata = await sharp(imagePath).metadata();
  return {
    width: metadata.width,
    height: metadata.height
  };
}

/**
 * Convert image to SVG format
 */
async function convertToSvg(imagePath) {
  try {
    const baseName = path.basename(imagePath, path.extname(imagePath));
    const dimensions = await getImageDimensions(imagePath);
    const dataUri = await imageToBase64(imagePath);
    
    // Create SVG with embedded image
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${dimensions.width}" height="${dimensions.height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="${dimensions.width}" height="${dimensions.height}" xlink:href="${dataUri}"/>
</svg>`;

    const outputPath = path.join(SVG_DIR, `${baseName}.svg`);
    fs.writeFileSync(outputPath, svgContent);
    
    return {
      original: baseName,
      svg: `${baseName}.svg`,
      size: fs.statSync(outputPath).size
    };
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} Error converting ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log(`${colors.bright}${colors.blue}Converting PNG/JPG images to SVG format...${colors.reset}\n`);
  console.log(`${colors.yellow}⚠ WARNING: This embeds raster images in SVG, which won't improve performance.${colors.reset}`);
  console.log(`${colors.yellow}   For better performance, use WebP format instead.${colors.reset}\n`);

  ensureSvgDir();

  const imageFiles = getImageFiles();
  
  if (imageFiles.length === 0) {
    console.log(`${colors.yellow}No PNG/JPG images found in ${PUBLIC_DIR}${colors.reset}`);
    return;
  }

  console.log(`Found ${imageFiles.length} image(s) to convert:\n`);

  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (const file of imageFiles) {
    const imagePath = path.join(PUBLIC_DIR, file);
    console.log(`${colors.blue}Processing:${colors.reset} ${file}`);
    
    const result = await convertToSvg(imagePath);
    
    if (result) {
      results.push(result);
      successCount++;
      const sizeKB = (result.size / 1024).toFixed(2);
      console.log(`${colors.green}✓${colors.reset} Created: ${result.svg} (${sizeKB} KB)\n`);
    } else {
      failCount++;
      console.log(`${colors.red}✗${colors.reset} Failed to convert: ${file}\n`);
    }
  }

  // Summary
  console.log(`${colors.bright}${colors.green}Conversion Complete!${colors.reset}\n`);
  console.log(`Successfully converted: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`\nSVG files saved to: ${SVG_DIR}`);
  console.log(`\n${colors.yellow}Note: To use these SVG files, update your imports to point to /public/svg/ instead of /public/${colors.reset}`);
}

// Run the script
main().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
