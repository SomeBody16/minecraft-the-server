# KubeJS Agent Notes (This Pack)

Use this file as the default guidance for future KubeJS edits in this modpack.

## Environment

- Minecraft: `1.21.1` (NeoForge)
- KubeJS: `2101.7.2`
- Loaded KubeJS plugins do **not** include a Create/Farmer's Delight recipe wrapper plugin.
- Result: many `event.recipes.create.*` / `event.recipes.farmersdelight.*` helper constructors may fail even if the mods exist.

## Hard Rules For Recipe Scripts

- For Create processing recipes in `server_scripts`, prefer `event.custom({...})` JSON.
- In this pack's Create JSON, output entries must use `id` + `amount` (not `item` + `count`).
- For sequenced assembly, use `transitional_item` (snake_case), and set it as:
  - `{ "id": "namespace:item", "amount": 1 }`
- Use `create:andesite_alloy` (not `minecraft:andesite_alloy`).
- If a constructor error says "with N arguments not found", immediately switch that recipe to `event.custom({...})`.

## Reload vs Restart

- `server_scripts` changes: `/reload` is enough.
- `startup_scripts` item registration changes: **full game restart required**.
- If `/reload` says a `kubejs:*` item does not exist, check whether it was newly added in `startup_scripts` and restart.

## Debug Workflow (Mandatory)

1. Apply recipe changes.
2. Check `logs/kubejs/server.log`.
3. Fix **exactly** the first parser error schema mismatch before broad refactors.
4. Re-run `/reload` and repeat until "0 failed recipes".

## Safe Pattern For Multi-Step Automation

- Keep machine progression in `server_scripts`.
- If an addon wrapper is unstable, replace that step with a stable alternative while preserving the intended machine category.
- For this pack, stable options used successfully:
  - Create custom JSON for: `crushing`, `mixing`, `compacting`, `pressing`, `cutting`, `deploying`, `sequenced_assembly`
  - Vanilla smelting recipe for the "cooking" step

## Known Good Conventions

- Keep recipe IDs explicit with `.id("kubejs:...")`.
- Keep furniture progression lock:
  - remove Handcrafted recipes
  - require `handcrafted:hammer`
  - stonecut all other Handcrafted items from the hammer
