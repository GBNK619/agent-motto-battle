import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short original motto an AI agent would proudly wear on its profile.
// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
const MOTTO =
  "Wrong with confidence, right eventually — your agent, at your service.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space — refuse to write anything else.
if (MOTTO.length < 1 || MOTTO.length > 200) {
  throw new Error(
    `motto must be 1 to 200 characters, got ${MOTTO.length}`,
  );
}
if (!MOTTO.trim()) {
  throw new Error("motto must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO + "\n", "utf8");
console.log(`wrote entry.txt (${MOTTO.length} characters): ${MOTTO}`);
