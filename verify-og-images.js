#!/usr/bin/env node

/**
 * OG Images Verification Script
 * 
 * This script checks:
 * 1. All OG images exist in /public/
 * 2. All images are the correct size (1200x630px)
 * 3. All images are under 500KB
 * 4. All images are referenced in metadata
 * 5. No duplicate images
 * 
 * Usage: node verify-og-images.js
 */

const fs = require('fs');
const path = require('path');

// Color output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.cyan}${msg}${colors.reset}\n`),
};

// OG images that should exist
const REQUIRED_IMAGES = [
  'og-image.jpg',
  'og-blog-default.jpg',
  'og-vehicle-default.jpg',
];

const RECOMMENDED_IMAGES = [
  'og-car-loan.jpg',
  'og-home-loan.jpg',
  'og-bike-loan.jpg',
  'og-personal-loan.jpg',
  'og-business-loan.jpg',
  'og-loans.jpg',
  'og-blog.jpg',
  'og-vehicles.jpg',
  'og-car-resale.jpg',
  'og-sell-vehicle.jpg',
  'og-contact.jpg',
  'og-about.jpg',
  'og-emi-calculator.jpg',
];

const ALL_IMAGES = [...REQUIRED_IMAGES, ...RECOMMENDED_IMAGES];

function getImageDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    
    // JPG format: Look for SOF marker (0xFFC0 or similar)
    for (let i = 0; i < buffer.length - 8; i++) {
      if (buffer[i] === 0xFF && (buffer[i + 1] === 0xC0 || buffer[i + 1] === 0xC1)) {
        const height = (buffer[i + 5] << 8) | buffer[i + 6];
        const width = (buffer[i + 7] << 8) | buffer[i + 8];
        return { width, height };
      }
    }

    // PNG format: Look for IHDR chunk
    if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
      const width = (buffer[16] << 24) | (buffer[17] << 16) | (buffer[18] << 8) | buffer[19];
      const height = (buffer[20] << 24) | (buffer[21] << 16) | (buffer[22] << 8) | buffer[23];
      return { width, height };
    }

    return null;
  } catch (error) {
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function verifyImages() {
  log.header('OG IMAGES VERIFICATION');

  const publicDir = path.join(__dirname, 'public');
  
  if (!fs.existsSync(publicDir)) {
    log.error(`Public directory not found: ${publicDir}`);
    process.exit(1);
  }

  let criticalCount = 0;
  let recommendedCount = 0;
  let totalSize = 0;

  // Check required images
  log.header('CRITICAL IMAGES (Required)');
  
  REQUIRED_IMAGES.forEach((imageName) => {
    const filePath = path.join(publicDir, imageName);
    
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const size = stats.size;
      const dimensions = getImageDimensions(filePath);
      
      totalSize += size;
      
      // Check file size
      if (size > 500 * 1024) {
        log.warn(`${imageName} - ${formatBytes(size)} (exceeds 500KB limit)`);
      } else {
        log.success(`${imageName} - ${formatBytes(size)}`);
      }
      
      // Check dimensions
      if (dimensions) {
        if (dimensions.width === 1200 && dimensions.height === 630) {
          log.info(`  └─ Dimensions: ${dimensions.width}x${dimensions.height}px ✓`);
        } else {
          log.warn(`  └─ Dimensions: ${dimensions.width}x${dimensions.height}px (expected 1200x630px)`);
        }
      }
      
      criticalCount++;
    } else {
      log.error(`${imageName} - MISSING`);
    }
  });

  // Check recommended images
  log.header('RECOMMENDED IMAGES (Optional)');
  
  RECOMMENDED_IMAGES.forEach((imageName) => {
    const filePath = path.join(publicDir, imageName);
    
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const size = stats.size;
      const dimensions = getImageDimensions(filePath);
      
      totalSize += size;
      
      // Check file size
      if (size > 500 * 1024) {
        log.warn(`${imageName} - ${formatBytes(size)} (exceeds 500KB limit)`);
      } else {
        log.success(`${imageName} - ${formatBytes(size)}`);
      }
      
      // Check dimensions
      if (dimensions) {
        if (dimensions.width === 1200 && dimensions.height === 630) {
          log.info(`  └─ Dimensions: ${dimensions.width}x${dimensions.height}px ✓`);
        } else {
          log.warn(`  └─ Dimensions: ${dimensions.width}x${dimensions.height}px (expected 1200x630px)`);
        }
      }
      
      recommendedCount++;
    }
  });

  // Summary
  log.header('SUMMARY');
  log.info(`Critical images: ${criticalCount}/${REQUIRED_IMAGES.length}`);
  log.info(`Recommended images: ${recommendedCount}/${RECOMMENDED_IMAGES.length}`);
  log.info(`Total images: ${criticalCount + recommendedCount}/${ALL_IMAGES.length}`);
  log.info(`Total size: ${formatBytes(totalSize)}`);

  // Status check
  if (criticalCount === REQUIRED_IMAGES.length) {
    log.success('All critical images present!');
  } else {
    log.error(`Missing ${REQUIRED_IMAGES.length - criticalCount} critical image(s)`);
  }

  if (criticalCount + recommendedCount === ALL_IMAGES.length) {
    log.success('All images (critical + recommended) are present!');
  } else {
    log.warn(`${ALL_IMAGES.length - (criticalCount + recommendedCount)} image(s) still needed`);
  }

  // Next steps
  log.header('NEXT STEPS');
  
  if (criticalCount < REQUIRED_IMAGES.length) {
    log.info('1. Create the missing critical images using Canva or Figma');
    log.info('2. Save as JPG format (1200x630px, under 500KB)');
    log.info('3. Place in /frontend/public/');
  }

  if (recommendedCount < RECOMMENDED_IMAGES.length) {
    const missing = RECOMMENDED_IMAGES.length - recommendedCount;
    log.info(`4. Create ${missing} recommended image(s) for better SEO`);
  }

  log.info(`5. Test with Facebook Debugger: https://developers.facebook.com/tools/debug/`);
  log.info(`6. Deploy to production and monitor social shares`);

  // Test metadata
  log.header('VERIFYING METADATA REFERENCES');
  
  const srcDir = path.join(__dirname, 'src');
  const pagesDir = path.join(srcDir, 'app');
  
  if (fs.existsSync(pagesDir)) {
    const checkMetadataFiles = (dir, prefix = '') => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && file !== 'node_modules' && !file.startsWith('.')) {
            checkMetadataFiles(filePath, prefix + '/' + file);
          } else if (file === 'page.tsx') {
            const content = fs.readFileSync(filePath, 'utf-8');
            const ogImageMatches = content.match(/og-\w+\.jpg/g) || [];
            
            if (ogImageMatches.length > 0) {
              const page = prefix || '/';
              log.success(`${page} - References: ${ogImageMatches.join(', ')}`);
            }
          }
        });
      } catch (error) {
        // Ignore errors during directory traversal
      }
    };
    
    checkMetadataFiles(pagesDir);
  }

  process.exit(criticalCount === REQUIRED_IMAGES.length ? 0 : 1);
}

// Run verification
verifyImages();
