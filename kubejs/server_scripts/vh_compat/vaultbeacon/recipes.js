
onEvent("recipes", event => {

    event.shaped(Item.of('vaultbeacon:vault_beacon'),
        [
            ' B ',
            'BGB',
            'OXO'
        ], {
        B: '#forge:glass',
        G: 'the_vault:pog_prism',
        O: 'the_vault:chromatic_steel_block',
        X: 'minecraft:obsidian'
    }).id('vaultbeacon:vault_beacon')

})