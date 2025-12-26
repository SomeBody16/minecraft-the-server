let removedOutputsHC = [
    'hexcasting:empty_impetus',
    'hexcasting:empty_directrix',
    'hexcasting:charged_amethyst',
    'hexcasting:slate',
    'hexcasting:slate_block',
    'hexcasting:scroll_paper',
    'hexcasting:wand_oak',
    'hexcasting:wand_birch',
    'hexcasting:wand_dark_oak',
    'hexcasting:wand_acacia',
    'hexcasting:wand_akashic',
    'hexcasting:wand_spruce',
    'hexcasting:wand_warped',
    'hexcasting:wand_crimson',
    'hexcasting:wand_jungle',
    'hexcasting:lens',
    'hexcasting:focus',
    'hexcasting:abacus',
    'hexcasting:cypher',
    'hexcasting:trinket',
    'hexcasting:artifact',
    'hexcasting:jeweler_hammer',
    'hexcasting:scroll_small',
    'hexcasting:scroll_medium',
    'hexcasting:scroll'
];
onEvent("recipes", event => {
    removedOutputsHC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('hexcasting:empty_impetus'),
        [
            'PVV',
            'BTB',
            'VVP'
        ], {
        P: 'minecraft:purpur_block',
        V: 'hexcasting:slate_block',
        T: 'hexcasting:charged_amethyst',
        B: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('hexcasting:empty_directrix'),
        [
            'PVV',
            'BTB',
            'VVP'
        ], {
        P: 'minecraft:purpur_block',
        V: 'hexcasting:slate_block',
        T: 'hexcasting:charged_amethyst',
        B: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('hexcasting:charged_amethyst'),
        [
            'LVL',
            'VTV',
            'LVL'
        ], {
        L: 'the_vault:gem_larimar',
        V: 'the_vault:vault_essence',
        T: 'minecraft:amethyst_shard'
    })

    event.shaped(Item.of('hexcasting:slate', 4),
        [
            'VTV',
            'LLL'
        ], {
        L: 'the_vault:vault_stone',
        V: 'the_vault:chromatic_steel_ingot',
        T: 'hexcasting:amethyst_dust'
    })

    event.shaped(Item.of('hexcasting:slate_block'),
        [
            'V',
            'V'
        ], {
        V: 'hexcasting:slate'
    })

    event.shaped(Item.of('hexcasting:scroll_paper'),
        [
            'PPP',
            'PAP',
            'PPP'
        ], {
        P: 'the_vault:magic_silk',
        A: 'minecraft:amethyst_shard'
    })

    event.shaped(Item.of('hexcasting:wand_oak'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:oak_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_spruce'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:spruce_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_birch'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:birch_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_jungle'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:jungle_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_acacia'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:acacia_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_dark_oak'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:dark_oak_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_crimson'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:crimson_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_warped'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'minecraft:warped_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:wand_akashic'),
        [
            ' SA',
            ' WS',
            'D  '
        ], {
        S: 'the_vault:gem_pog',
        W: 'hexcasting:akashic_planks',
        A: 'hexcasting:charged_amethyst',
        D: 'the_vault:driftwood'
    })

    event.shaped(Item.of('hexcasting:lens'),
        [
            'LVL',
            'VTV',
            'LVL'
        ], {
        L: 'the_vault:gem_larimar',
        V: 'minecraft:glass',
        T: 'hexcasting:amethyst_dust'
    })

    event.shaped(Item.of('hexcasting:abacus'),
        [
            'LTL',
            'VTV',
            'LTL'
        ], {
        L: 'the_vault:wooden_planks',
        V: 'the_vault:driftwood',
        T: 'minecraft:amethyst_shard'
    })

    event.shaped(Item.of('hexcasting:focus'),
        [
            'LVL',
            'VTV',
            'LVL'
        ], {
        L: '#forge:leather',
        V: 'the_vault:vault_essence',
        T: 'hexcasting:charged_amethyst'
    })

    event.shaped(Item.of('hexcasting:spellbook'),
        [
            'IVL',
            'ITL',
            'IVL'
        ], {
        L: 'hexcasting:charged_amethyst',
        V: 'minecraft:writable_book',
        T: 'the_vault:gem_pog',
        I: 'the_vault:perfect_larimar'
    }).id('hexcasting:spellbook')

    event.shaped(Item.of('hexcasting:cypher'),
        [
            'LVL',
            'VTV',
            'LVL'
        ], {
        L: 'the_vault:vault_essence',
        V: 'minecraft:copper_ingot',
        T: 'hexcasting:amethyst_dust'
    })

    event.shaped(Item.of('hexcasting:trinket'),
        [
            'LVL',
            'VTV',
            'LVL'
        ], {
        L: 'the_vault:vault_essence',
        V: 'minecraft:iron_ingot',
        T: 'hexcasting:amethyst_dust'
    })

    event.shaped(Item.of('hexcasting:artifact'),
        [
            'LVL',
            'VTV',
            'LDL'
        ], {
        L: 'the_vault:vault_essence',
        V: 'minecraft:iron_ingot',
        T: 'hexcasting:amethyst_dust',
        D: '#minecraft:music_discs'
    })

    event.shaped(Item.of('hexcasting:jeweler_hammer'),
        [
            'LVI',
            ' D ',
            ' D '
        ], {
        L: 'the_vault:chromatic_iron_ingot',
        V: 'minecraft:amethyst_shard',
        I: 'the_vault:chromatic_iron_nugget',
        D: 'the_vault:driftwood',
    })

    event.shaped(Item.of('hexcasting:scroll_small'),
        [
            ' A ',
            'P  ',
        ], {
        A: 'minecraft:amethyst_shard',
        P: 'the_vault:magic_silk'
    })

    event.shaped(Item.of('hexcasting:scroll_medium'),
        [
            ' A ',
            'PP ',
            'PP '
        ], {
        A: 'minecraft:amethyst_shard',
        P: 'the_vault:magic_silk'
    })

    event.shaped(Item.of('hexcasting:scroll'),
        [
            'PPA',
            'PPP',
            'PPP'
        ], {
        A: 'minecraft:amethyst_shard',
        P: 'the_vault:magic_silk'
    })
})