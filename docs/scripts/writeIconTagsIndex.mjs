import fs from 'fs';
import path from 'path';

const currentDir = process.cwd();
const ICONS_DIR = path.resolve(currentDir, '../icons');
const OUTPUT_FILE = path.resolve(currentDir, '.vitepress/data/iconTagsIndex.json');

async function getJsonFiles() {
  const files = await fs.promises.readdir(ICONS_DIR);
  return files.filter(f => f.endsWith('.json')).map(f => path.join(ICONS_DIR, f));
}

const iconJsonFiles = await getJsonFiles();
const iconTags = {};

for (const file of iconJsonFiles) {
  const iconName = path.basename(file, '.json');
  try {
    const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
    if (content.tags) {
      iconTags[iconName] = content.tags;
    }
  } catch (e) {
    console.error(`Error reading ${file}:`, e);
  }
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(iconTags, null, 2));
console.log(`Generated iconTagsIndex.json with ${Object.keys(iconTags).length} entries`);
