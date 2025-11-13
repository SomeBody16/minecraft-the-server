let removedOutputsTGG = [
    'tinygates:and_gate_item',
    'tinygates:clock_item',
    'tinygates:counter_item',
    'tinygates:edge_detector_item',
    'tinygates:not_gate_item',
    'tinygates:or_gate_item',
    'tinygates:rs_latch_item',
    'tinygates:t_flip_flop_item',
    'tinygates:xor_gate_item'
];
onEvent("recipes", event => {
    removedOutputsTGG.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('tinygates:and_gate_item', 4),
        [
            'GGG',
            'GCG',
            'GGG'
        ], {
        G: 'minecraft:redstone_torch',
        C: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('tinygates:clock_item', 4),
        [
            ' G ',
            'GCG',
            ' G '
        ], {
        G: 'minecraft:repeater',
        C: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('tinygates:counter_item', 4),
        [
            'RGR',
            'GCG',
            'RGR'
        ], {
        G: 'minecraft:repeater',
        C: 'the_vault:perfect_larimar',
        R: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('tinygates:edge_detector_item', 4),
        [
            'RGR',
            'GCG',
            'RGR'
        ], {
        G: 'the_vault:vault_essence',
        C: 'the_vault:perfect_larimar',
        R: 'minecraft:piston'
    })

    event.shaped(Item.of('tinygates:not_gate_item', 4),
        [
            ' G ',
            'GCG',
            ' G '
        ], {
        G: 'minecraft:redstone_torch',
        C: 'the_vault:perfect_larimar',
    })

    event.shaped(Item.of('tinygates:or_gate_item', 4),
        [
            'GGG',
            'GCG',
            'GGG'
        ], {
        G: 'minecraft:redstone',
        C: 'the_vault:perfect_larimar',
    })

    event.shaped(Item.of('tinygates:rs_latch_item', 4),
        [
            'XGX',
            'GCG',
            'XGX'
        ], {
        G: 'minecraft:lever',
        C: 'the_vault:perfect_larimar',
        X: 'minecraft:redstone_torch'
    })

    event.shaped(Item.of('tinygates:t_flip_flop_item', 4),
        [
            'XGX',
            'GCG',
            'XGX'
        ], {
        G: 'minecraft:comparator',
        C: 'the_vault:perfect_larimar',
        X: 'minecraft:repeater'
    })

    event.shaped(Item.of('tinygates:xor_gate_item', 4),
        [
            'XGX',
            'GCG',
            'XGX'
        ], {
        G: 'minecraft:redstone',
        C: 'the_vault:perfect_larimar',
        X: 'minecraft:redstone_torch'
    })


})