const create_dd = () => {
    const id = "create_dd"
    const itemsToRemove = [
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

    onEvent("recipes", event => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            event.remove({ output: `${id}:${itemsToRemove[i]}` })
        }
    })

    onEvent('jei.hide.items', event => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            event.hide(`${id}:${itemsToRemove[i]}`)
        }
    })
}

create_dd();