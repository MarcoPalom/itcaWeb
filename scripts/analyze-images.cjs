/**
 * Inventario de las imagenes de public/images: peso, dimensiones y formato.
 * Solo lee, no modifica nada. Uso: node scripts/analyze-images.cjs
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "public", "images");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    entry.isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
}

(async () => {
  const files = walk(ROOT).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const rows = [];
  let totalBytes = 0;

  for (const f of files) {
    const size = fs.statSync(f).size;
    totalBytes += size;
    try {
      const meta = await sharp(f).metadata();
      rows.push({
        f,
        mb: size / 1048576,
        w: meta.width,
        h: meta.height,
        fmt: meta.format,
      });
    } catch {
      rows.push({ f, mb: size / 1048576, w: 0, h: 0, fmt: "ILEGIBLE" });
    }
  }

  rows.sort((a, b) => b.mb - a.mb);
  const widths = rows
    .filter((r) => r.w)
    .map((r) => r.w)
    .sort((a, b) => a - b);

  console.log(
    `archivos: ${files.length}   peso total: ${(totalBytes / 1048576).toFixed(0)} MB`,
  );
  console.log(`con ancho > 1600px: ${rows.filter((r) => r.w > 1600).length}`);
  console.log(
    `ancho mediano: ${widths[Math.floor(widths.length / 2)]}px   maximo: ${widths[widths.length - 1]}px`,
  );
  console.log("\n=== las 12 mas pesadas ===");
  for (const r of rows.slice(0, 12)) {
    console.log(
      `  ${r.mb.toFixed(1).padStart(6)} MB  ${`${r.w}x${r.h}`.padStart(11)}  ${r.fmt.padEnd(5)}  ${r.f.split("images")[1]}`,
    );
  }
})();
