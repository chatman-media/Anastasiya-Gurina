const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '.output/public');
const basePath = '/Anastasiya-Gurina';

function fixPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Заменяем абсолютные пути на относительные с basePath
  content = content.replace(/href="\//g, `href="${basePath}/`);
  content = content.replace(/src="\//g, `src="${basePath}/`);
  content = content.replace(/"\/_build\//g, `"${basePath}/_build/`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed paths in: ${filePath}`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixPathsInFile(filePath);
    }
  });
}

console.log('Fixing paths for GitHub Pages...');
processDirectory(publicDir);
console.log('Done!');