# Company integration

Clearance is an ordered agent network. A company system sends a brief and a list of agent ids. The module returns one artifact per desk and, if you want a review bundle, the files to commit.

This package does not call Raphael, Cursor, Claude, or any other vendor. It writes the handoff each desk should receive. A person or your own worker does the tool.

## Install

The module is plain ESM. No build step and no dependencies.

```js
import { runChain, buildRepo, AGENTS, PRESETS } from "./index.mjs";
```

Copy the `integration/` directory into the service that will own the run, or depend on this repository at a pinned commit.

## Call

```js
const brief = "A one-page site for a neighborhood bakery that takes weekend orders.";
const ids = ["perplexity", "napkin", "v0", "cursor", "bolt", "gamma"];

const artifacts = runChain(ids, brief);
const files = buildRepo(brief, ids, artifacts, "Integrate: bakery site");
```

`integration/schema.json` is the request shape: `brief`, `agentIds` (1 to 8), optional `commit`. The schema cap is the console rule. `runChain` itself will accept a longer list and will skip an id that is not in the catalog.

`node example.mjs` runs the ship-a-site preset and prints each handoff plus the file paths.

## What comes back

Each artifact:

| Field | Meaning |
|---|---|
| `agentId` | Catalog id |
| `title` | `{Name} · {delivers}` |
| `sections` | Three blocks for a person. The third is always "Pass forward". |
| `handoff` | The only sentence the next desk is allowed to treat as input |
| `summary` | Section bodies joined. Safe to ignore |

`files` is `{ path, content }[]`: a README, `workflow.json`, and `steps/NN-{id}.md`.

## Handoff rule

The original brief is passed to every desk, clipped to 120 characters inside the template. The previous desk contributes only its `handoff` string, prefixed with its name. Sections are not forwarded. The first desk is told that nothing is upstream.

There is no router. A handoff that says "stop" is still a string. The next id in `agentIds` still runs. Rights desks (`deepswap`, `eleven`, `did`, `cleanup`, `otter`) state the limit in the card. They do not return a boolean.

If `agent.id` has no template, `voice` falls back to the catalog blurb, the upstream line, and a generic handoff. All thirty current ids have a template.

## Presets

| Id | Chain |
|---|---|
| `site` | perplexity, napkin, v0, cursor, bolt, gamma |
| `film` | krea, runway, kling, opus, did |
| `notes` | otter, notion, claude, jasper |
| `song` | suno, musiio, eleven |
| `photo` | clipdrop, cleanup, magnific, removebg |
| `desk` | perplexity, phind, poe, claude, gamma |

Ids and vendor URLs also live in `catalog/agents.json` at the repository root.

## What not to send

Do not put secrets, customer audio, or a person's likeness in `brief`. The brief is copied into the handoff text and into every generated file. Face and voice desks require consent in the written card. They will not block a chain on your behalf.
