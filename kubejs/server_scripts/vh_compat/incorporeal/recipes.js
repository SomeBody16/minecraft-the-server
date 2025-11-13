let removedOutputsBIC = [
];
onEvent("recipes", event => {
    removedOutputsBIC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('incorporeal:corporea_solidifier'),
        [
            'GGG',
            'DCD',
            'GGG'
        ], {
        G: 'the_vault:magic_silk_block',
        D: 'botania:elementium_ingot',
        C: 'botania:corporea_funnel'
    }).id('incorporeal:corporea_solidifier')

    // event.shaped(Item.of('incorporeal:corporea_solidifier'),
    //     [
    //         'GGG',
    //         'DCD',
    //         'GGG'
    //     ], {
    //     G: 'the_vault:magic_silk_block',
    //     D: 'botania:elementium_ingot',
    //     C: 'botania:corporea_funnel'
    // }).id('incorporeal:corporea_solidifier')


})