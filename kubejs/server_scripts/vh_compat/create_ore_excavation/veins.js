onEvent("recipes", event => {
    //Iron vein only in overworld and a stress requirement of 512 xRPM (default is 256 xRPM)
    //With a finite vein size between 3x-8.5x base (if finite veins are enabled)
    //event.recipes.createoreexcavation.vein('{"text": "My iron vein"}', 'minecraft:iron_ore').placement(1024, 128, 6894685).veinSize(3, 8.5).biomeWhitelist('forge:is_overworld').id("kubejs:my_iron_vein")
    //event.recipes.createoreexcavation.drilling('minecraft:raw_iron', 'kubejs:my_iron_vein', 100).stress(512).id("kubejs:my_vein3");
    //biomeBlacklist is also available

    event.recipes.createoreexcavation.drilling([Item.of('create:raw_zinc')], '{"text": "Zinc Vein"}', 10, 120).drill('createoreexcavation:drill').fluid('minecraft:water').biomeWhitelist('forge:is_overworld').alwaysInfinite().id("zinc_vein");
    event.recipes.createoreexcavation.drilling([Item.of('minecraft:andesite')], '{"text": "Andesite Vein"}', 10, 60).fluid('minecraft:water').alwaysInfinite().biomeWhitelist('forge:is_overworld').id("andesite_vein");
    event.recipes.createoreexcavation.drilling([Item.of('mekanism:raw_tin')], '{"text": "Tin Vein"}', 10, 100).fluid('minecraft:water').alwaysInfinite().biomeWhitelist('forge:is_overworld').id("tin_vein");
    event.recipes.createoreexcavation.drilling([Item.of('mekanism:raw_osmium')], '{"text": "Osmium Vein"}', 10, 120).fluid('minecraft:water').biomeWhitelist('forge:is_overworld').alwaysInfinite().id("osmium_vein");
    event.recipes.createoreexcavation.drilling([Item.of('mekanism:raw_uranium')], '{"text": "Uranium Vein"}', 10, 200).fluid('minecraft:lava 10').biomeWhitelist('forge:is_overworld').drill('createoreexcavation:diamond_drill').alwaysInfinite().id("uranium_vein");
    event.recipes.createoreexcavation.drilling([Item.of('mekanism:fluorite_gem')], '{"text": "Fluorite Vein"}', 10, 140).fluid('minecraft:water').drill('createoreexcavation:diamond_drill').biomeWhitelist('forge:is_overworld').alwaysInfinite().id("fluorite_vein");
    event.recipes.createoreexcavation.drilling([Item.of('minecraft:amethyst_shard')], '{"text": "Amethyst Vein"}', 10, 200).fluid('the_vault:void_liquid 5').biomeWhitelist('forge:is_overworld').drill('createoreexcavation:netherite_drill').alwaysInfinite().id("amethyst_vein");
    event.recipes.createoreexcavation.drilling([Item.of('minecraft:gold_nugget')], '{"text": "Gold Nugget Vein"}', 40, 20).biomeWhitelist('minecraft:is_nether').drill('createoreexcavation:diamond_drill').alwaysInfinite().id("gold_nugget_vein");
    event.recipes.createoreexcavation.drilling([Item.of('powah:uraninite_raw')], '{"text": "Uraninite Vein"}', 10, 120).biomeWhitelist('forge:is_overworld').drill('createoreexcavation:diamond_drill').alwaysInfinite().id("uranite_vein");
    event.recipes.createoreexcavation.drilling([Item.of('thermal:raw_silver')], '{"text": "Silver Vein"}', 10, 140).biomeWhitelist('forge:is_overworld').drill('createoreexcavation:drill').alwaysInfinite().id("silver_vein");
    event.recipes.createoreexcavation.drilling([Item.of('thermal:raw_nickel')], '{"text": "Nickel Vein"}', 10, 100).biomeWhitelist('forge:is_overworld').drill('createoreexcavation:drill').alwaysInfinite().id("nickel_vein");
    event.recipes.createoreexcavation.drilling([Item.of('the_vault:raw_chromatic_iron')], '{"text": "Chromatic Iron Vein"}', 10, 300).biomeWhitelist('forge:is_overworld').drill('createoreexcavation:diamond_drill').alwaysInfinite().id("chromatic_iron_vein");
    event.recipes.createoreexcavation.drilling([Item.of('minecraft:obsidian')], '{"text": "Obsidian Vein"}', 20, 200).biomeWhitelist('minecraft:is_nether').drill('createoreexcavation:netherite_drill').alwaysInfinite().id("obsidian_vein");
    event.recipes.createoreexcavation.drilling([Item.of('minecraft:obsidian')], '{"text": "Obsidian Vein"}', 20, 200).biomeWhitelist('minecraft:is_nether').drill('createoreexcavation:netherite_drill').alwaysInfinite().id("obsidian_vein");
    //Fluid extractor recipes (Fluids)
    event.recipes.createoreexcavation.extracting(Fluid.of('the_vault:void_liquid', 100), '{"text": "Void Liquid Well"}', 60, 100).alwaysInfinite().stress(512).drill('createoreexcavation:diamond_drill').biomeWhitelist('forge:is_end').id("void_liquid_well");
    event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:lava', 500), '{"text": "Lava Well (Nether)"}', 60, 40).alwaysInfinite().stress(256).biomeWhitelist('forge:is_nether').id("lava_well_nether");
    event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:lava', 50), '{"text": "Lava Well (Overworld)"}', 20, 120).alwaysInfinite().stress(512).biomeWhitelist('forge:is_overworld').id("lava_well_overworld");
    event.recipes.createoreexcavation.extracting(Fluid.of('mekanism:heavy_water', 500), '{"text": "Heavy Water Vein"}', 20, 40).alwaysInfinite().stress(512).biomeWhitelist('forge:is_overworld').id("heavy_water_overworld");
})