/**
 * Reduce las imagenes de public/images a un tamano razonable para web.
 *
 * Los originales son archivos de camara (hasta 8688px de ancho, 23 MB) que se
 * muestran en tarjetas de ~300px. Este script los reescala a MAX_WIDTH y los
 * recomprime EN EL MISMO ARCHIVO, conservando nombre y extension para no tocar
 * ninguna referencia del codigo.
 *
 * La entrega en WebP/AVIF y el srcset responsivo los resuelve next/image en
 * tiempo de peticion; aqui solo quitamos el exceso de origen.
 *
 * Uso:
 *   node scripts/optimize-images.cjs --dry    (solo reporta, no escribe)
 *   node scripts/optimize-images.cjs          (aplica los cambios)
 *
 * Los originales estan en el historial de git: `git checkout HEAD -- public/images`
 * los restaura si hace falta.
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "public", "images");
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1600;
const JPEG_QUALITY = 80;
const DRY = process.argv.includes("--dry");

// Logos e iconos: pesan poco, necesitan transparencia y se usan a tamano chico.
const SKIP_DIRS = ["logos", "icons"];

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    entry.isDirectory() ? walk(p, acc) : acc.push(p);
  }
  return acc;
}

(async () => {
  const files = walk(ROOT)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .filter((f) => !SKIP_DIRS.some((d) => f.includes(path.sep + d + path.sep)));

  let before = 0;
  let after = 0;
  let touched = 0;
  const changes = [];

  for (const file of files) {
    const originalSize = fs.statSync(file).size;
    before += originalSize;

    // Leemos a memoria: si sharp conserva el descriptor del archivo, escribir
    // encima falla en Windows con UNKNOWN/EBUSY.
    const input = fs.readFileSync(file);
    const meta = await sharp(input).metadata();
    const needsResize = meta.width > MAX_WIDTH || meta.height > MAX_HEIGHT;
    const isPng = meta.format === "png";

    let pipeline = sharp(input).rotate(); // respeta la orientacion EXIF
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }
    pipeline = isPng
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

    const output = await pipeline.toBuffer();

    // Solo reescribimos si de verdad ahorra: recomprimir puede engordar.
    if (output.length < originalSize * 0.95) {
      if (!DRY) {
        // Escritura atomica: primero al temporal, luego renombrado.
        const tmp = file + ".tmp";
        fs.writeFileSync(tmp, output);
        fs.renameSync(tmp, file);
      }
      after += output.length;
      touched++;
      changes.push({
        f: file.split("images")[1],
        from: originalSize,
        to: output.length,
        dim: `${meta.width}x${meta.height}`,
      });
    } else {
      after += originalSize;
    }
  }

  changes.sort((a, b) => b.from - b.to - (a.from - a.to));

  console.log(DRY ? "== PRUEBA, no se escribio nada ==\n" : "== APLICADO ==\n");
  console.log("=== las 10 con mayor ahorro ===");
  for (const c of changes.slice(0, 10)) {
    console.log(
      `  ${(c.from / 1048576).toFixed(1).padStart(6)} MB -> ${(c.to / 1048576).toFixed(2).padStart(6)} MB  ${c.dim.padStart(11)}  ${c.f}`,
    );
  }
  console.log(
    `\narchivos procesados: ${files.length}   reescritos: ${touched}`,
  );
  console.log(
    `peso: ${(before / 1048576).toFixed(0)} MB -> ${(after / 1048576).toFixed(0)} MB  ` +
      `(-${(100 - (after / before) * 100).toFixed(1)}%)`,
  );
})();
