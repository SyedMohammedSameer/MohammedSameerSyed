#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script:
 * 1. Scans /public for PNG/JPG images
 * 2. Converts to WebP format (much smaller file sizes)
 * 3. Generates optimized versions
 * 4. Saves to /public/optimized/
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'optimized');

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
 * Create output directory if it doesn't exist
 */
function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`${colors.green}✓${colors.reset} Created output directory: ${OUTPUT_DIR}`);
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
 * Get original file size
 */
function getFileSize(filePath) {
  return fs.statSync(filePath).size;
}

/**
 * Optimize image to WebP
 */
async function optimizeImage(imagePath) {
  try {
    const baseName = path.basename(imagePath, path.extname(imagePath));
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    
    const originalSize = getFileSize(imagePath);
    
    // Convert to WebP with optimization
    await sharp(imagePath)
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile(outputPath);
    
    const optimizedSize = getFileSize(outputPath);
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    return {
      original: baseName,
      webp: `${baseName}.webp`,
      originalSize,
      optimizedSize,
      savings
    };
  } catch (error) {
    console.error(`${colors.red}✗${colors.reset} Error optimizing ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log(`${colors.bright}${colors.blue}Optimizing images to WebP format...${colors.reset}\n`);

  ensureOutputDir();

  const imageFiles = getImageFiles();
  
  if (imageFiles.length === 0) {
    console.log(`${colors.yellow}No PNG/JPG images found in ${PUBLIC_DIR}${colors.reset}`);
    return;
  }

  console.log(`Found ${imageFiles.length} image(s) to optimize:\n`);

  const results = [];
  let successCount = 0;
  let failCount = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of imageFiles) {
    const imagePath = path.join(PUBLIC_DIR, file);
    console.log(`${colors.blue}Processing:${colors.reset} ${file}`);
    
    const result = await optimizeImage(imagePath);
    
    if (result) {
      results.push(result);
      successCount++;
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
      const originalKB = (result.originalSize / 1024).toFixed(2);
      const optimizedKB = (result.optimizedSize / 1024).toFixed(2);
      console.log(`${colors.green}✓${colors.reset} ${result.webp} (${originalKB} KB → ${optimizedKB} KB, ${result.savings}% smaller)\n`);
    } else {
      failCount++;
      console.log(`${colors.red}✗${colors.reset} Failed to optimize: ${file}\n`);
    }
  }

  // Summary
  console.log(`${colors.bright}${colors.green}Optimization Complete!${colors.reset}\n`);
  console.log(`Successfully optimized: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  const totalOriginalKB = (totalOriginalSize / 1024).toFixed(2);
  const totalOptimizedKB = (totalOptimizedSize / 1024).toFixed(2);
  const totalSavings = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
  console.log(`\nTotal size: ${totalOriginalKB} KB → ${totalOptimizedKB} KB (${totalSavings}% reduction)`);
  console.log(`\nOptimized files saved to: ${OUTPUT_DIR}`);
  console.log(`\n${colors.yellow}Next step: Update your components to use the optimized WebP images from /public/optimized/${colors.reset}`);
}

// Run the script
main().catch(error => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, error);
  process.exit(1);
});
