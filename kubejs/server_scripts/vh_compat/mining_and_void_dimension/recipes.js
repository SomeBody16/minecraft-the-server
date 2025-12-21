let removedOutputsMAD = [
    'javd:portal_block',
    'mining_dimension:teleporter',
];
onEvent("recipes", event => {
    removedOutputsMAD.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('javd:portal_block'),
        [
            'PPP',
            'PTP',
            'PPP'
        ], {
        P: 'minecraft:obsidian',
        T: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('mining_dimension:teleporter'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:driftwood_planks',
        X: 'the_vault:wooden_planks',
        T: 'minecraft:golden_pickaxe'
    })

})