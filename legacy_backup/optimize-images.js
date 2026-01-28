const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'images');
const outputDir = path.join(sourceDir, 'optimized');

const defaultConfig = { width: 1600, quality: 72 };
const overrides = {
  'hero.JPG': { width: 2200, quality: 70 },
  'wood_HD.JPG': { width: 1400, quality: 70 },
  'workshop.JPG': { width: 1700, quality: 72 },
  'workshop_worker.JPG': { width: 1700, quality: 72 },
};

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => /\.(jpe?g)$/i.test(file));

const processImage = async (file) => {
  const inputPath = path.join(sourceDir, file);
  const outputName = `${path.parse(file).name}.webp`;
  const outputPath = path.join(outputDir, outputName);

  const { width, quality } = overrides[file] || defaultConfig;

  try {
    await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
    console.log(`Optimized ${file} -> images/optimized/${outputName}`);
  } catch (error) {
    console.error(`Error optimizing ${file}:`, error.message);
    process.exitCode = 1;
  }
};

const main = async () => {
  await Promise.all(imageFiles.map(processImage));
};

main();
