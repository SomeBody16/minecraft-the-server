
onEvent("recipes", event => {

    event.shaped(Item.of('travel_anchors:travel_staff'),
        [
            '  E',
            ' D ',
            'D  '
        ], {
        E: 'the_vault:perfect_larimar',
        D: 'the_vault:driftwood'
    }).id('travel_anchors:travel_staff')

    event.shaped(Item.of('travel_anchors:travel_anchor'),
        [
            'IBI',
            'BXB',
            'IBI'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        B: 'minecraft:iron_block',
        X: 'the_vault:perfect_larimar'
    }).id('travel_anchors:travel_anchor')




})