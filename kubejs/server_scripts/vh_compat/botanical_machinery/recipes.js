let removedOutputsBM = [
    'botanicalmachinery:alfheim_market',
    'botanicalmachinery:industrial_agglomeration_factory',
    'botanicalmachinery:mana_battery',
    'botanicalmachinery:mechanical_apothecary',
    'botanicalmachinery:mechanical_brewery',
    'botanicalmachinery:mechanical_daisy',
    'botanicalmachinery:mechanical_mana_pool',
    'botanicalmachinery:mechanical_runic_altar'
];
onEvent("recipes", event => {
    removedOutputsBM.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('botanicalmachinery:alfheim_market'),
        [
            'IWI',
            'GTG',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: 'botania:dreamwood',
        G: 'botania:glimmering_livingwood',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:alfheim_portal'
    })

    event.shaped(Item.of('botanicalmachinery:industrial_agglomeration_factory'),
        [
            'IWI',
            'YTG',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: 'botania:manasteel_ingot',
        Y: 'botania:mana_diamond',
        G: 'botania:mana_pearl',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:terra_plate'
    })

    event.shaped(Item.of('botanicalmachinery:mana_battery'),
        [
            'IWI',
            'WTW',
            'IXI'
        ], {
        I: 'botania:dragonstone',
        W: 'botania:gaia_ingot',
        T: 'the_vault:vault_diamond_block',
        X: 'botanicalmachinery:mana_emerald_block'
    })

    event.shaped(Item.of('botanicalmachinery:mechanical_apothecary'),
        [
            'IWI',
            'WTW',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: '#botania:petals',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:apothecary_default'
    })

    event.shaped(Item.of('botanicalmachinery:mechanical_brewery'),
        [
            'IRI',
            'WTW',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: 'botania:flask',
        R: 'minecraft:blaze_rod',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:brewery'
    })

    event.shaped(Item.of('botanicalmachinery:mechanical_daisy'),
        [
            ' T ',
            'IXI'
        ], {
        I: 'botania:elementium_block',
        T: 'botania:floating_pure_daisy',
        X: 'the_vault:vault_diamond_block'
    })

    event.shaped(Item.of('botanicalmachinery:mechanical_mana_pool'),
        [
            'IWI',
            'YTG',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: 'botania:diluted_pool',
        Y: 'botania:alchemy_catalyst',
        G: 'botania:conjuration_catalyst',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:fabulous_pool'
    })

    event.shaped(Item.of('botanicalmachinery:mechanical_runic_altar'),
        [
            'IWI',
            'WTW',
            'IXI'
        ], {
        I: 'botania:elementium_ingot',
        W: '#botania:runes',
        T: 'the_vault:vault_diamond_block',
        X: 'botania:runic_altar'
    })

    //event.shapeless('botania:gaia_ingot', ['the_vault:chromatic_steel_ingot', 'botania:life_essence', 'the_vault:vault_essence'])
})