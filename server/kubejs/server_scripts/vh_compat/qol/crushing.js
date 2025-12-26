onEvent("recipes", event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:soul_sand"
            }
        ],
        "results": [
            {
                "item": "thermal_extra:soul_sand_dust"
            }
        ],
        "processingTime": 400
    })

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "ingredient": {
                "item": "minecraft:soul_sand"
            }
        },
        "output": {
            "item": "thermal_extra:soul_sand_dust"
        }
    })
})