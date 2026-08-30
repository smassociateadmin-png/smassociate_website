const fs = require('fs');
const path = require('path');

function getAllFiles(dir, allFilesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, allFilesList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      allFilesList.push(filePath);
    }
  });
  return allFilesList;
}

const appDir = path.join(__dirname, 'src', 'app');
const srcDir = path.join(__dirname, 'src');

// Get all defined routes in App Router
const existingRoutes = new Set(['/']);
function mapAppRoutes(dir, baseRoute = '') {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      if (item.startsWith('(') && item.endsWith(')')) {
        mapAppRoutes(itemPath, baseRoute);
      } else {
        const routePart = item;
        const currentRoute = `${baseRoute}/${routePart}`;
        mapAppRoutes(itemPath, currentRoute);
      }
    } else if (item === 'page.tsx' || item === 'page.js' || item === 'page.jsx' || item === 'page.ts') {
      existingRoutes.add(baseRoute === '' ? '/' : baseRoute);
    }
  });
}
mapAppRoutes(appDir);

console.log('--- ALL EXISTING APP ROUTES ---');
Array.from(existingRoutes).sort().forEach(r => console.log(r));

// Now inspect all files for links / routes
const allSrcFiles = getAllFiles(srcDir);
const linkHits = [];

allSrcFiles.forEach(file => {
  const rel = path.relative(__dirname, file);
  const content = fs.readFileSync(file, 'utf8');
  
  // Match href="..." or href={'...'} or href={`...`}
  const regex = /href=(?:["']([^"']+)["']|\{["']([^"']+)["']\}|\{`([^`]+)`\})/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const raw = match[1] || match[2] || match[3];
    linkHits.push({ file: rel, raw });
  }
  
  // Also check Link href={ROUTES.XYZ}
  const routesRegex = /href=\{ROUTES\.([A-Z_]+)\}/g;
  while ((match = routesRegex.exec(content)) !== null) {
    linkHits.push({ file: rel, raw: `ROUTES.${match[1]}` });
  }
});

console.log('\n--- ALL FOUND LINK TARGETS ---');
linkHits.forEach(h => console.log(`${h.file}: ${h.raw}`));
