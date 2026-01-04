import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../.output/public');

const fixFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace absolute paths with relative
  // 1. Assets (href="/_nuxt/..." -> href="./_nuxt/...")
  content = content.replace(/href="\/_nuxt\//g, 'href="./_nuxt/');
  // 2. Scripts (src="/_nuxt/..." -> src="./_nuxt/...")
  content = content.replace(/src="\/_nuxt\//g, 'src="./_nuxt/');
  // 3. BaseURL config (baseURL:"/" -> baseURL:"./")
  content = content.replace(/baseURL:"\/"/g, 'baseURL:"./"');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed paths in ${filePath}`);
};

// Fix root files
fixFile(path.join(distPath, 'index.html'));
fixFile(path.join(distPath, '404.html'));
fixFile(path.join(distPath, '200.html'));
