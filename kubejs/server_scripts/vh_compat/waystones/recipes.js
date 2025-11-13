let removedOutputsWS = [
    'waystones:sharestone'
];
onEvent("recipes", event => {
    removedOutputsWS.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('waystones:sharestone'),
        [
            'DBD',
            'DGD',
            'OOO'
        ], {
        O: 'the_vault:chromatic_steel_ingot',
        D: 'waystones:warp_dust',
        G: 'waystones:warp_stone',
        B: 'the_vault:polished_vault_stone'
    })

})