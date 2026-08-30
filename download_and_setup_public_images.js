const fs = require('fs');
const path = require('path');
const https = require('https');

const brainDir = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\ef93e244-4b6a-4585-a7ea-d72075503e9a';
const publicDir = path.join(__dirname, 'public');

// Ensure directories
['vehicles', 'blog', 'team', 'about'].forEach(d => {
  const full = path.join(publicDir, d);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

// Copy generated brain images
const copyMap = [
  { src: 'hero_finance_car_1788097606721.jpg', dest: ['og-image.jpg', 'hero-finance.jpg', 'og-loans.jpg', 'og-home-loan.jpg'] },
  { src: 'car_swift_red_1788097628294.jpg', dest: ['vehicles/swift.jpg', 'vehicles/car-1.jpg', 'og-car-loan.jpg'] },
  { src: 'car_i20_blue_1788097649776.jpg', dest: ['vehicles/i20.jpg', 'vehicles/car-2.jpg', 'og-car-resale.jpg'] },
  { src: 'car_city_white_1788097672648.jpg', dest: ['vehicles/city.jpg', 'vehicles/car-3.jpg', 'og-sell-vehicle.jpg'] },
  { src: 'car_creta_grey_1788097694640.jpg', dest: ['vehicles/creta.jpg', 'og-vehicle-default.jpg', 'og-vehicles.jpg'] },
  { src: 'bike_re_classic_1788097717793.jpg', dest: ['vehicles/classic350.jpg', 'vehicles/bike-1.jpg', 'og-bike-loan.jpg'] },
];

copyMap.forEach(({ src, dest }) => {
  const srcPath = path.join(brainDir, src);
  if (fs.existsSync(srcPath)) {
    dest.forEach(d => {
      const destPath = path.join(publicDir, d);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${src} -> ${d}`);
    });
  }
});

// Additional curated high-res assets to download directly into public
const downloads = [
  // Two wheeler / Scooter
  {
    url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    dest: 'vehicles/activa.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80',
    dest: 'vehicles/pulsar.jpg'
  },
  // Blog
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/loan-eligibility.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/home-vs-personal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/used-car-checklist.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/bike-finance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/business-funding.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
    dest: 'blog/cibil-score.jpg'
  },
  // Default Blog & OG
  {
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-blog-default.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-blog.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-personal-loan.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-business-loan.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-emi-calculator.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-contact.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    dest: 'og-about.jpg'
  },
  // Team & Office
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    dest: 'about/office.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    dest: 'team/member-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    dest: 'team/member-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    dest: 'team/member-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    dest: 'team/member-4.jpg'
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(publicDir, dest);
    const file = fs.createWriteStream(fullDest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fullDest, () => {});
      console.error(`Error downloading ${dest}:`, err.message);
      resolve(); // continue
    });
  });
}

async function run() {
  console.log('Downloading assets...');
  for (const item of downloads) {
    await downloadFile(item.url, item.dest);
  }
  console.log('All public assets prepared successfully!');
}

run();
