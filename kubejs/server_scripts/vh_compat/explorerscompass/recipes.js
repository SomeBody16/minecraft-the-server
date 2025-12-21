let removedOutputsEC = [
    'explorerscompass:explorerscompass'
];
onEvent("recipes", event => {
    removedOutputsEC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('explorerscompass:explorerscompass'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'minecraft:cobweb',
        X: 'the_vault:perfect_black_opal',
        T: 'naturescompass:naturescompass'
    })

})