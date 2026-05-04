ServerEvents.recipes((event) => {
  event.remove({ output: "simulated:physics_assembler" });

  // End-game: assembled on a Mechanical Crafter (Create). Uses event.custom JSON (see kubejs/AGENTS.md).
  event
    .custom({
      type: "create:mechanical_crafting",
      accept_mirrored: false,
      category: "misc",
      key: {
        C: { item: "create:precision_mechanism" },
        N: { item: "minecraft:nether_star" },
        B: { item: "create:electron_tube" },
        E: { item: "minecraft:echo_shard" },
        A: { item: "create:mechanical_crafter" },
        F: { item: "minecraft:netherite_block" },
        R: { item: "minecraft:dragon_egg" },
      },
      pattern: ["CNB", "EAE", "FRF"],
      result: { count: 1, id: "simulated:physics_assembler" },
      show_notification: true,
    })
    .id("kubejs:simulated/physics_assembler_mechanical_crafting");
});
