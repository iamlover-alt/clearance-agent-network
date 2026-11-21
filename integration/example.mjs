import { PRESETS, runChain, buildRepo } from "./index.mjs";

const preset = PRESETS.find((item) => item.id === "site");
const brief = "A one-page site for a neighborhood bakery that takes weekend orders.";
const artifacts = runChain(preset.agents, brief);
const files = buildRepo(brief, preset.agents, artifacts, "Integrate: ship a site");

console.log(artifacts.map((item) => item.agentId + " -> " + item.handoff).join("\n"));
console.log("---");
console.log(files.map((file) => file.path).join("\n"));
