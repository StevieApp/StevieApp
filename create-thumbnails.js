const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = "./public/assets/designs";
const OUTPUT_DIR = "./public/assets/designs/thumbs";
const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}


fs.readdirSync(INPUT_DIR).forEach(file => {
  const inputPath = path.join(INPUT_DIR, file);
  const outputPath = path.join(OUTPUT_DIR, file);

  if (fs.statSync(inputPath).isDirectory()) {
    console.log("Skipping folder:", file);
    return;
  }

  // ⛔ Skip non-image files
  const ext = path.extname(file).toLowerCase();
  if (!IMAGE_EXT.includes(ext)) {
    console.log("Skipping non-image:", file);
    return;
  }
  sharp.concurrency(1);
  sharp.cache({ items: 200, memory: 4096 });
  sharp.simd(true);


  // const largeLimit = 1000 * 1000 * 1000; // 1 billion pixels
  // sharp.limitInputPixels(largeLimit);

  sharp(inputPath, { limitInputPixels: false, unlimited: true })
    .resize(300) // thumbnail width
    .toFile(outputPath)
    .then(() => console.log("Created:", outputPath))
    .catch(err => console.error("Error processing", inputPath, '\n', err));
});
