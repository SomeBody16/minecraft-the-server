import mods.jei.JEI;

craftingTable.remove(<item:create_power_loader:empty_andesite_chunk_loader>);
JEI.hideIngredient(<item:create_power_loader:empty_andesite_chunk_loader>);

craftingTable.remove(<item:create_power_loader:andesite_chunk_loader>);
JEI.hideIngredient(<item:create_power_loader:andesite_chunk_loader>);

<recipetype:create:mechanical_crafting>.removeRecipe(<item:create_power_loader:empty_brass_chunk_loader>);
<recipetype:create:mechanical_crafting>.addRecipe(
    "empty_brass_chunk_loader",
    <item:create_power_loader:empty_brass_chunk_loader>,
    [
        [<tag:items:forge:glass>, <tag:items:forge:glass>, <tag:items:forge:glass>, <tag:items:forge:glass>, <tag:items:forge:glass>],
        [<tag:items:forge:glass>, <item:minecraft:air>, <item:the_vault:echo_pog>, <item:minecraft:air>, <tag:items:forge:glass>],
        [<tag:items:forge:glass>, <item:minecraft:air>, <item:minecraft:respawn_anchor>, <item:minecraft:air>, <tag:items:forge:glass>],
        [<item:create:brass_casing>, <item:create:precision_mechanism>, <item:create:precision_mechanism>, <item:create:precision_mechanism>, <item:create:brass_casing>],
        [<item:create:brass_casing>, <item:create:brass_casing>, <item:create:shaft>, <item:create:brass_casing>, <item:create:brass_casing>]
    ]
);
