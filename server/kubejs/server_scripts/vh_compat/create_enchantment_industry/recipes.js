let removedOutputsCEE = [
    'create_enchantment_industry:disenchanter',
    'create_enchantment_industry:printer'
];
onEvent("recipes", event => {
    removedOutputsCEE.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'create_enchantment_industry:mixing/hyper_experience' })

    event.shaped(Item.of('create_enchantment_industry:disenchanter'),
        [
            'XPX',
            'LCL',
            'XXX'
        ], {
        P: 'create:sand_paper',
        C: 'create:copper_casing',
        X: 'the_vault:magic_silk_block',
        L: 'the_vault:vault_diamond_block'
    })

    event.shaped(Item.of('create_enchantment_industry:printer'),
        [
            'LPL',
            'LCL',
            ' X '
        ], {
        C: 'the_vault:magic_silk_block',
        P: 'create:copper_casing',
        X: 'woldsvaults:extraordinary_pog_prism',
        L: 'the_vault:black_chromatic_steel_block'
    })

    event.recipes.createMixing(Fluid.of('create_enchantment_industry:hyper_experience', 10), [
        'minecraft:glow_ink_sac',
        'minecraft:lapis_lazuli',
        Fluid.of('create_enchantment_industry:experience', 100),
        'the_vault:gem_benitoite'
    ]).superheated()

})