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

const files = getAllFiles(path.join(__dirname, 'src'));
console.log('Total source files:', files.length);

const linkRegexes = [
  /href=["']([^"']+)["']/g,
  /href=\{["']([^"']+)["']\}/g,
  /href=\{`([^`]+)`\}/g,
  /href=\{(ROUTES\.[A-Z_]+)\}/g,
  /href=\{`\$\{ROUTES\.([A-Z_]+)\}([^`]*)`\}/g,
  /router\.(push|replace)\(["']([^"']+)["']\)/g,
  /router\.(push|replace)\(`([^`]+)`\)/g,
  /router\.(push|replace)\((ROUTES\.[A-Z_]+)\)/g,
];

const found = [];
files.forEach(f => {
  const relPath = path.relative(path.join(__dirname, 'src'), f);
  const content = fs.readFileSync(f, 'utf8');
  
  // check custom patterns like route: ROUTES.XYZ or link: '...'
  const lines = content.split('\n');
  lines.forEach((line, lineNum) => {
    if (line.includes('href=') || line.includes('router.push') || line.includes('router.replace') || line.includes('ROUTES.') || line.includes('link:') || line.includes('route:')) {
      found.push({ file: relPath, lineNum: lineNum + 1, text: line.trim() });
    }
  });
});

console.log('Found ' + found.length + ' link-related lines:');
found.forEach(item => {
  console.log(`[${item.file}:${item.lineNum}] ${item.text}`);
});
