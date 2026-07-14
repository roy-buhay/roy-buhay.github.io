const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../public/images");
const QUALITY = 80;

function convert(filePath) {
  const dst = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  sharp(filePath)
    .webp({ quality: QUALITY })
    .toFile(dst)
    .then(() => {
      const s1 = fs.statSync(filePath).size;
      const s2 = fs.statSync(dst).size;
      const pct = ((1 - s2 / s1) * 100).toFixed(1);
      console.log(
        `${path.relative(IMAGES_DIR, filePath)}: ${(s1 / 1024).toFixed(0)}KB → ${(s2 / 1024).toFixed(0)}KB (${pct}% smaller)`
      );
    })
    .catch((err) => console.error(`Failed: ${filePath}: ${err.message}`));
}

console.log(`Watching ${IMAGES_DIR} for JPG/PNG changes...\n`);

fs.watch(IMAGES_DIR, { recursive: true }, (event, filename) => {
  if (!filename || !/\.(jpg|jpeg|png)$/i.test(filename)) return;
  const filePath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(filePath)) return;

  // Debounce — wait for the file write to finish
  setTimeout(() => convert(filePath), 300);
});
