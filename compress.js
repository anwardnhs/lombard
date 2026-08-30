import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const files = fs.readdirSync(assetsDir);

async function compress() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const filePath = path.join(assetsDir, file);
    const tmpPath = path.join(assetsDir, 'tmp_' + file);
    
    try {
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true })
          .toFile(tmpPath);
        fs.renameSync(tmpPath, filePath);
        console.log('Compressed JPG: ' + file);
      } else if (ext === '.png') {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(tmpPath);
        fs.renameSync(tmpPath, filePath);
        console.log('Compressed PNG: ' + file);
      }
    } catch (e) {
      console.error('Failed to compress ' + file, e);
    }
  }
}
compress();
