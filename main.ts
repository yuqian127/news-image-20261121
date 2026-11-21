// World News — 21 November 2026 (make.fun news-image-20261121).
//
// The poster lives in this repository as entry.png. This program only moves
// it to the grading output directory, byte for byte, and proves the copy
// matches before it exits. It never touches the network, so running it twice
// (as the grader does) always writes identical bytes.
//
// Run it locally:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// With MAKEFUN_OUTPUT_DIR unset it writes to /output/entry.png.
import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_NAME = "entry.png";
const OUTPUT_NAME = "entry.png";

function repoRoot(): string {
  return dirname(fileURLToPath(import.meta.url));
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv !== "") {
    return fromEnv;
  }
  return "/output";
}

async function sha256Hex(path: string): Promise<string> {
  const bytes = await readFile(path);
  return createHash("sha256").update(bytes).digest("hex");
}

async function main(): Promise<void> {
  const root = repoRoot();
  const source = join(root, SOURCE_NAME);
  const targetDir = outputDir();
  const target = join(targetDir, OUTPUT_NAME);

  await mkdir(targetDir, { recursive: true });
  await copyFile(source, target);

  const [sourceHash, targetHash] = await Promise.all([
    sha256Hex(source),
    sha256Hex(target),
  ]);
  if (sourceHash !== targetHash) {
    throw new Error(
      `copy mismatch: ${SOURCE_NAME} sha256 ${sourceHash} != ${target} sha256 ${targetHash}`,
    );
  }
  const size = (await stat(target)).size;
  console.log(`wrote ${target} (${size} bytes, sha256 ${targetHash})`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
