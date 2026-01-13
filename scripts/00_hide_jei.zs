import crafttweaker.api.recipe.RecipeManagerWrapper;
import mods.jei.JEI;

var hide = {
    "create_power_loader": [
        "empty_andesite_chunk_loader",
        "andesite_chunk_loader"
    ],
    "create_dd": [
        "industrial_fan",
        "furnace_engine",
        "kinetic_motor",
        "accelerator_motor",
        "bronze_saw",
        "bronze_drill",
        "forest_ravager",
        "deforester_saw",
        "ponder_stone_generation",
        "infastone",
        "infagranite",
        "infadiorite",
        "infaandesite",
        "infacobbled_deepslate",
        "infacalcite",
        "infatuff",
        "infadripstone_block",
        "infadirt",
        "infacoarse_dirt",
        "infacobblestone",
        "infasand",
        "infared_sand",
        "infagravel",
        "infaobsidian",
        "infaice",
        "infasnow_block",
        "infasoul_sand",
        "infaend_stone",
        "infanetherrack",
        "infamagma_block",
        "infamoss_block"
    ]
}

for modId in hide {
    for itemId in hide[modId] {
        // var recipes = RecipeManagerWrapper.getRecipesByOutput(<item:${modId}:${itemId}>); 
        RecipeManagerWrapper.remove(<item:${modId}:${itemId}>);
        JEI.hideIngredient(<item:${modId}:${itemId}>);
    }
}
