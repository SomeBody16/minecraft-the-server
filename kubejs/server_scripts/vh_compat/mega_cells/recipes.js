let removedOutputsMC = [
    'megacells:mega_crafting_unit',
    'megacells:mega_item_cell_housing',
    'megacells:mega_fluid_cell_housing',
    'megacells:mega_chemical_cell_housing',
    'megacells:cell_component_1m',
    'megacells:cell_component_4m',
    'megacells:cell_component_16m',
    'megacells:cell_component_64m',
    'megacells:cell_component_256m',
    'megacells:item_storage_cell_1m',
    'megacells:item_storage_cell_4m',
    'megacells:item_storage_cell_16m',
    'megacells:item_storage_cell_64m',
    'megacells:item_storage_cell_256m',
    'megacells:fluid_storage_cell_1m',
    'megacells:fluid_storage_cell_4m',
    'megacells:fluid_storage_cell_16m',
    'megacells:fluid_storage_cell_64m',
    'megacells:fluid_storage_cell_256m',
    'megacells:bulk_item_cell',
    'megacells:fluid_storage_cell_1m',
    'megacells:mega_chemical_cell_housing',
    'megacells:chemical_storage_cell_1m',
    'megacells:chemical_storage_cell_4m',
    'megacells:chemical_storage_cell_16m',
    'megacells:chemical_storage_cell_64m',
    'megacells:chemical_storage_cell_256m',
    'megacells:radioactive_chemical_cell'
];
onEvent("recipes", event => {
    removedOutputsMC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('megacells:mega_crafting_unit'),
        [
            'IXI',
            'LOL',
            'IXI'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        X: 'ae2:logic_processor',
        L: 'ae2:fluix_smart_cable',
        O: 'ae2:engineering_processor'
    })

    event.shaped(Item.of('megacells:mega_item_cell_housing'),
        [
            'LXL',
            'X X',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1'
    })

    event.shaped(Item.of('megacells:mega_fluid_cell_housing'),
        [
            'LXL',
            'X X',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1'
    })

    event.shaped(Item.of('megacells:cell_component_1m'),
        [
            'IXI',
            'OGO',
            'IOI'
        ], {
        I: 'the_vault:echoing_ingot',
        X: 'ae2:calculation_processor',
        O: 'ae2:cell_component_256k',
        G: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('megacells:cell_component_4m'),
        [
            'IXI',
            'OGO',
            'IOI'
        ], {
        I: 'the_vault:echoing_ingot',
        X: 'ae2:calculation_processor',
        O: 'megacells:cell_component_1m',
        G: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('megacells:cell_component_16m'),
        [
            'IXI',
            'OGO',
            'IOI'
        ], {
        I: 'the_vault:echoing_ingot',
        X: 'ae2:calculation_processor',
        O: 'megacells:cell_component_4m',
        G: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('megacells:cell_component_64m'),
        [
            'IXI',
            'OGO',
            'IOI'
        ], {
        I: 'the_vault:echo_pog',
        X: 'ae2:calculation_processor',
        O: 'megacells:cell_component_16m',
        G: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('megacells:cell_component_256m'),
        [
            'IXI',
            'OIO',
            'IOI'
        ], {
        I: 'the_vault:omega_pog',
        X: 'ae2:calculation_processor',
        O: 'megacells:cell_component_64m',
    })

    event.shaped(Item.of('megacells:item_storage_cell_1m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_1m'
    })

    event.shapeless('megacells:item_storage_cell_1m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_1m'])

    event.shaped(Item.of('megacells:item_storage_cell_4m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_4m'
    })

    event.shapeless('megacells:item_storage_cell_4m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_4m'])

    event.shaped(Item.of('megacells:item_storage_cell_16m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_16m'
    })

    event.shapeless('megacells:item_storage_cell_16m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_16m'])

    event.shaped(Item.of('megacells:item_storage_cell_64m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_64m'
    })

    event.shapeless('megacells:item_storage_cell_64m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_64m'])

    event.shaped(Item.of('megacells:item_storage_cell_256m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_256m'
    })

    event.shapeless('megacells:item_storage_cell_256m', ['megacells:mega_item_cell_housing', 'megacells:cell_component_256m'])

    event.shaped(Item.of('megacells:fluid_storage_cell_1m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_1m'
    })

    event.shapeless('megacells:fluid_storage_cell_1m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_1m'])

    event.shaped(Item.of('megacells:fluid_storage_cell_4m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_4m'
    })

    event.shapeless('megacells:fluid_storage_cell_4m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_4m'])

    event.shaped(Item.of('megacells:fluid_storage_cell_16m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_16m'
    })

    event.shapeless('megacells:fluid_storage_cell_16m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_16m'])

    event.shaped(Item.of('megacells:fluid_storage_cell_64m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_64m'
    })

    event.shapeless('megacells:fluid_storage_cell_64m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_64m'])

    event.shaped(Item.of('megacells:fluid_storage_cell_256m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'the_vault:ancient_copper_block',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_256m'
    })

    event.shapeless('megacells:fluid_storage_cell_256m', ['megacells:mega_fluid_cell_housing', 'megacells:cell_component_256m'])

    event.shaped(Item.of('megacells:bulk_item_cell'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'minecraft:netherite_ingot',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:bulk_cell_component'
    })

    event.shaped(Item.of('megacells:mega_chemical_cell_housing'),
        [
            'LXL',
            'X X',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1'
    })

    event.shaped(Item.of('megacells:chemical_storage_cell_1m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_1m'
    })

    event.shapeless('megacells:chemical_storage_cell_1m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_1m'])

    event.shaped(Item.of('megacells:chemical_storage_cell_4m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_4m'
    })

    event.shapeless('megacells:chemical_storage_cell_4m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_4m'])

    event.shaped(Item.of('megacells:chemical_storage_cell_16m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_16m'
    })

    event.shapeless('megacells:chemical_storage_cell_1m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_16m'])

    event.shaped(Item.of('megacells:chemical_storage_cell_64m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_64m'
    })

    event.shapeless('megacells:chemical_storage_cell_64m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_64m'])

    event.shaped(Item.of('megacells:chemical_storage_cell_256m'),
        [
            'LXL',
            'XDX',
            'III'
        ], {
        I: 'mekanism:ingot_osmium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:cell_component_256m'
    })

    event.shapeless('megacells:chemical_storage_cell_256m', ['megacells:mega_chemical_cell_housing', 'megacells:cell_component_256m'])

    event.shaped(Item.of('megacells:radioactive_chemical_cell'),
        [
            'LXL',
            'XDX',
            'SPS'
        ], {
        S: 'mekanism:hdpe_sheet',
        P: 'mekanism:pellet_polonium',
        X: 'the_vault:gem_black_opal',
        L: 'compressium:obsidian_1',
        D: 'megacells:radioactive_cell_component'
    })
})