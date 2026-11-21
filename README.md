# Clearance

Agent network for thirty legal creative tools. A company integrates the module in [`integration/`](integration/). The console composes a chain and packages a run. This repository is the contract those systems share.

## Integrate

```js
import { runChain, buildRepo } from "./integration/index.mjs";

const ids = ["perplexity", "napkin", "v0", "cursor", "bolt", "gamma"];
const brief = "A one-page site for a neighborhood bakery that takes weekend orders.";
const artifacts = runChain(ids, brief);
const files = buildRepo(brief, ids, artifacts, "Integrate: bakery site");
```

The call is local. It does not contact the vendors. Read [`integration/INTEGRATION.md`](integration/INTEGRATION.md) for the handoff rule, the request schema, and the six presets.

## Workflows

- **Ship a site** — Research, diagram, interface, code, deploy, deck.
- **Product film** — Still, two motion desks, cutdowns, a presenter.
- **Meeting to memo** — Transcript, doc, long edit, public draft.
- **Song drop** — Write it, tag it, read the hook.
- **Photo finish** — Clean light, erase, upscale, cut out.
- **Research desk** — Sources, the code angle, a model check, the close.

## Catalog

Thirty agents across picture, motion, voice, sound, code, search, and words. Each entry in [`catalog/agents.json`](catalog/agents.json) links to the real product.

Clearance writes the handoff. It does not impersonate someone who did not agree.
