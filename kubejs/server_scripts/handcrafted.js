ServerEvents.recipes((event) => {
  // Remove every recipe added by the Handcrafted mod.
  event.remove({ mod: "handcrafted" });

  // Machine automation chain for handcrafted:hammer.
  // This intentionally touches multiple machines so players can build a furniture factory.
  event
    .custom({
      type: "create:crushing",
      ingredients: [{ item: "minecraft:cobblestone" }],
      processingTime: 200,
      results: [{ id: "kubejs:stone_dust", amount: 1 }],
    })
    .id("kubejs:handcrafted/hammer/stone_dust_from_crushing");

  event
    .custom({
      type: "create:mixing",
      ingredients: [
        { item: "kubejs:stone_dust" },
        { item: "minecraft:iron_nugget" },
        { item: "minecraft:iron_nugget" },
        { item: "create:andesite_alloy" },
      ],
      heatRequirement: "heated",
      results: [{ id: "kubejs:hammer_alloy_blend", amount: 1 }],
    })
    .id("kubejs:handcrafted/hammer/hammer_alloy_blend_from_mixing");

  event
    .custom({
      type: "create:compacting",
      ingredients: [
        { item: "kubejs:hammer_alloy_blend" },
        { item: "kubejs:hammer_alloy_blend" },
        { item: "kubejs:hammer_alloy_blend" },
        { item: "kubejs:hammer_alloy_blend" },
      ],
      results: [{ id: "kubejs:dense_hammer_ingot", amount: 1 }],
    })
    .id("kubejs:handcrafted/hammer/dense_ingot_from_compacting");

  event
    .custom({
      type: "create:pressing",
      ingredients: [{ item: "kubejs:dense_hammer_ingot" }],
      results: [{ id: "kubejs:hammer_head_blank", amount: 1 }],
    })
    .id("kubejs:handcrafted/hammer/head_blank_from_pressing");

  event
    .custom({
      type: "create:cutting",
      ingredients: [{ tag: "c:stripped_logs" }],
      processingTime: 120,
      results: [
        { id: "kubejs:wood_handle_blank", amount: 2 },
        { id: "minecraft:stick", amount: 1 },
      ],
    })
    .id("kubejs:handcrafted/hammer/wood_handle_blank_from_cutting");

  event
    .custom({
      type: "create:deploying",
      ingredients: [
        { item: "kubejs:hammer_head_blank" },
        { item: "minecraft:iron_nugget" },
      ],
      results: [{ id: "kubejs:reinforced_hammer_head", amount: 1 }],
    })
    .id("kubejs:handcrafted/hammer/reinforced_head_from_deploying");

  event
    .smelting("kubejs:treated_handle", "kubejs:wood_handle_blank")
    .xp(0.35)
    .cookingTime(200)
    .id("kubejs:handcrafted/hammer/treated_handle_from_cooking");

  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "kubejs:treated_handle" },
      transitional_item: { id: "kubejs:unfinished_hammer", amount: 1 },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:unfinished_hammer" },
            { item: "kubejs:reinforced_hammer_head" },
          ],
          results: [{ id: "kubejs:unfinished_hammer", amount: 1 }],
        },
        {
          type: "create:pressing",
          ingredients: [{ item: "kubejs:unfinished_hammer" }],
          results: [{ id: "kubejs:unfinished_hammer", amount: 1 }],
        },
        {
          type: "create:deploying",
          ingredients: [
            { item: "kubejs:unfinished_hammer" },
            { item: "minecraft:string" },
          ],
          results: [{ id: "kubejs:unfinished_hammer", amount: 1 }],
        },
      ],
      results: [{ id: "handcrafted:hammer", amount: 1 }],
      loops: 1,
    })
    .id("kubejs:handcrafted/hammer/final_sequenced_assembly");

  // Make every Handcrafted item (except the hammer itself) come from stonecutting.
  // Input is the hammer, so all Handcrafted progression routes through it.
  Ingredient.of("@handcrafted").itemIds.forEach((id) => {
    if (id === "handcrafted:hammer") return;
    event
      .stonecutting(id, "handcrafted:hammer")
      .id(`kubejs:handcrafted/stonecutting/${id.replace(":", "_")}`);
  });

  event
    .smithing(
      "handcrafted:hammer",
      "minecraft:string",
      "kubejs:treated_handle",
      "kubejs:reinforced_hammer_head",
    )
    .id("kubejs:handcrafted/hammer/smithing_final");

  event
    .shapeless("2x kubejs:wood_handle_blank", [
      "#c:stripped_logs",
      "#c:stripped_logs",
    ])
    .id("kubejs:handcrafted/hammer/wood_handle_blank_shapeless");

  event
    .smithing(
      "kubejs:reinforced_hammer_head",
      "minecraft:iron_ingot",
      "kubejs:hammer_head_blank",
      "minecraft:iron_ingot",
    )
    .id("kubejs:handcrafted/hammer/reinforced_head_smithing");

  event
    .smithing(
      "kubejs:hammer_head_blank",
      "minecraft:iron_nugget",
      "kubejs:dense_hammer_ingot",
      "kubejs:dense_hammer_ingot",
    )
    .id("kubejs:handcrafted/hammer/head_blank_smithing");

  event
    .shaped("kubejs:dense_hammer_ingot", ["AAA", "AAA", "AAA"], {
      A: "kubejs:hammer_alloy_blend",
    })
    .id("kubejs:handcrafted/hammer/dense_ingot_from_grid");

  event
    .shapeless("kubejs:hammer_alloy_blend", [
      "minecraft:stone",
      "minecraft:iron_nugget",
      "minecraft:iron_nugget",
      "minecraft:iron_nugget",
      "create:andesite_alloy",
      "create:andesite_alloy",
    ])
    .id("kubejs:handcrafted/hammer/hammer_alloy_blend_shapeless");
});
