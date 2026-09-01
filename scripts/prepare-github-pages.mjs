import { copyFile, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "dist", "client");
const indexPath = join(outputDirectory, "index.html");
const repositoryPath = "/tochka-prityazheniya";

let html = await readFile(indexPath, "utf8");

// The page is fully rendered HTML and its interactions are native links and
// details elements, so GitHub Pages does not need the RSC hydration runtime.
html = html
  .replace(/<link rel="modulepreload"[^>]*>/g, "")
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replaceAll('href="/assets/', `href="${repositoryPath}/assets/`)
  .replaceAll('src="/assets/', `src="${repositoryPath}/assets/`)
  .replaceAll('data-rsc-css-href="/assets/', `data-rsc-css-href="${repositoryPath}/assets/`);

await writeFile(indexPath, html, "utf8");
await copyFile(indexPath, join(outputDirectory, "404.html"));
await writeFile(join(outputDirectory, ".nojekyll"), "", "utf8");

await Promise.all([
  rm(join(outputDirectory, ".vite"), { recursive: true, force: true }),
  rm(join(outputDirectory, ".assetsignore"), { force: true }),
  rm(join(outputDirectory, "_headers"), { force: true }),
  rm(join(outputDirectory, "index.rsc"), { force: true }),
]);
