
onEvent("recipes", event => {

    event.shaped(Item.of('transmog:transmogrification_table', 1),
        [
            ' X ',
            'GAG',
            'ABA'
        ], {
        A: 'the_vault:block_gem_wutodie',
        B: 'the_vault:transmog_table',
        G: 'minecraft:glass',
        X: 'transmog:void_fragment'
    }).id('transmog:transmogrification_table')

    event.shaped(Item.of('transmog:void_fragment', 1),
        [
            ' X ',
            'OAO',
            ' O '
        ], {
        O: 'minecraft:obsidian',
        A: 'the_vault:gem_wutodie',
        X: 'the_vault:vault_essence'
    }).id('transmog:void_fragment')

})