onEvent("recipes", event => {
    event.shaped(Item.of('immersivepetroleum:gas_generator', 1),
        [
            'PPP',
            'XGE',
            'PPP'
        ], {
        P: '#forge:plates/iron',
        G: 'immersiveengineering:generator',
        E: 'immersiveengineering:capacitor_lv',
        X: 'the_vault:gem_pog'
    }).id('immersivepetroleum:gas_generator')
})