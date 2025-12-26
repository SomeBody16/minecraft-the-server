onEvent("recipes", event => {
    event.shapeless(Item.of('2x ae2:fluix_dust'), ['minecraft:redstone', 'ae2:charged_certus_quartz_crystal', 'minecraft:quartz'])
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
            { "item": "ae2:certus_quartz_crystal" }
        ],
        "energy": 10000,
        "result": {
            "item": "ae2:charged_certus_quartz_crystal"
        }
    })
    event.shaped(Item.of('ae2:charged_certus_quartz_crystal', 2),
        [
            'LVL',
            'VGV',
            'LVL'
        ], {
        L: 'the_vault:gem_larimar',
        V: 'the_vault:vault_essence',
        G: 'ae2:certus_quartz_crystal'
    })

    event.shaped(Item.of('ae2:fluix_crystal', 2),
        [
            'LVL',
            'VGV',
            'LVL'
        ], {
        L: 'the_vault:gem_larimar',
        V: 'the_vault:vault_essence',
        G: 'ae2:fluix_dust'
    })
})