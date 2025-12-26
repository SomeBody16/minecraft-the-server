let removedOutputsFD = [
    'fluiddrawerslegacy:fluiddrawer'
];
onEvent("recipes", event => {
    removedOutputsFD.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('fluiddrawerslegacy:fluiddrawer'),
        [
            'BXB',
            'XTX',
            'BXB'
        ], {
        B: 'minecraft:bucket',
        X: 'the_vault:chromatic_steel_ingot',
        T: 'the_vault:extraordinary_larimar'

    })


})