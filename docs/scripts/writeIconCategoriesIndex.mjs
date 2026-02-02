import fs from 'fs';
import path from 'path';

const currentDir = process.cwd();
const ICONS_DIR = path.resolve(currentDir, 'icons');
const OUTPUT_FILE = path.resolve(currentDir, 'docs/.vitepress/data/iconCategoriesIndex.json');

async function getJsonFiles() {
  const files = await fs.promises.readdir(ICONS_DIR);
  return files.filter(f => f.endsWith('.json')).map(f => path.join(ICONS_DIR, f));
}

const iconJsonFiles = await getJsonFiles();
const iconCategories = {};

for (const file of iconJsonFiles) {
  const iconName = path.basename(file, '.json');
  try {
    const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
    if (content.categories) {
      iconCategories[iconName] = content.categories;
    }
  } catch (e) {
    console.error(`Error reading ${file}:`, e);
  }
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconCategories, null, 2));
console.log(`Generated iconCategoriesIndex.json with ${Object.keys(iconCategories).length} entries`);
