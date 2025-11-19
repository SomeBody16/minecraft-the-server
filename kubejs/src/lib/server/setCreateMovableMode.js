// place this file under kubejs/server_scripts
// https://github.com/Creators-of-Create/Create/blob/mc1.18/dev/src/main/java/com/simibubi/create/foundation/config/ContraptionMovementSetting.java
const ContraptionMovementSetting = Java.loadClass(
    "com.simibubi.create.api.contraption.ContraptionMovementSetting"
);

// Create provides 3 types of movement:
// MOVABLE: Block can be part of a contraption and the cart can be picked up with a wrench.
//          Most blocks behave this way by default.
// NO_PICKUP: Block can be moved, but if it is part of a cart contraption the cart can not be picked up.
//            Spawners and Budding Amethysts work like this by default.
// UNMOVABLE: Block can not become part of a create contraption.
//            Obsidian works like this by default.
export const MOVABLE = ContraptionMovementSetting.MOVABLE;
export const NO_PICKUP = ContraptionMovementSetting.NO_PICKUP;
export const UNMOVABLE = ContraptionMovementSetting.UNMOVABLE;

/**
 * @param {string} blockID
 * @param {typeof MOVABLE | typeof NO_PICKUP | typeof UNMOVABLE} moveMode
 * @returns
 */
export const setCreateMovableMode = (blockID, moveMode) =>
    ContraptionMovementSetting.REGISTRY.register(blockID, () => moveMode);
