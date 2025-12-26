let removedOutputsIRC = [
    'ironchests:iron_chest',
    'ironchests:gold_chest',
    'ironchests:diamond_chest',
    'ironchests:blank_chest_upgrade',
    'ironchests:iron_chest_upgrade',
    'ironchests:gold_chest_upgrade',
    'ironchests:diamond_chest_upgrade',
    'ironchests:obsidian_chest',
    'ironchests:netherite_chest',
    'ironchests:netherite_chest_upgrade',
    'ironchests:crystal_chest',
    'ironchests:crystal_chest',
    'ironchests:obsidian_chest_upgrade',
    'ironchests:crystal_chest_upgrade'
];
onEvent("recipes", event => {
    removedOutputsIRC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('ironchests:iron_chest'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:iron_ingot',
        X: 'the_vault:chromatic_iron_ingot',
        T: 'ironchests:copper_chest'
    })

    event.shaped(Item.of('ironchests:gold_chest'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:gold_ingot',
        X: 'the_vault:vault_essence',
        T: 'ironchests:iron_chest'
    })

    event.shaped(Item.of('ironchests:diamond_chest'),
        [
            'PPP',
            'XTX',
            'PPP'
        ], {
        P: 'minecraft:gold_ingot',
        X: 'the_vault:vault_diamond',
        T: 'ironchests:gold_chest'
    })

    event.shaped(Item.of('ironchests:blank_chest_upgrade'),
        [
            'PPP',
            'PTP',
            'PPP'
        ], {
        P: 'the_vault:wooden_planks',
        T: 'minecraft:flint'
    })

    event.shaped(Item.of('ironchests:iron_chest_upgrade'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:iron_ingot',
        X: 'the_vault:chromatic_iron_ingot',
        T: 'ironchests:blank_chest_upgrade'
    })

    event.shaped(Item.of('ironchests:iron_chest_upgrade'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:iron_ingot',
        X: 'the_vault:chromatic_iron_ingot',
        T: 'ironchests:blank_chest_upgrade'
    })

    event.shaped(Item.of('ironchests:diamond_chest_upgrade'),
        [
            'PPP',
            'XTX',
            'PPP'
        ], {
        P: 'minecraft:gold_ingot',
        X: 'the_vault:vault_diamond',
        T: 'ironchests:blank_chest_upgrade'
    })

    event.shaped(Item.of('ironchests:gold_chest_upgrade'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:gold_ingot',
        X: 'the_vault:vault_essence',
        T: 'ironchests:blank_chest_upgrade'
    })

    event.smithing('ironchests:netherite_chest', 'ironchests:diamond_chest', 'the_vault:black_chromatic_steel_ingot')
    event.smithing('ironchests:netherite_chest_upgrade', 'ironchests:diamond_chest_upgrade', 'the_vault:black_chromatic_steel_ingot')


})