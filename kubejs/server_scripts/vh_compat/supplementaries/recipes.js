onEvent("recipes", event => {


    event.shaped(Item.of('supplementaries:cage'),
        [
            'GGG',
            'D D',
            'LLL'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        D: 'the_vault:perfect_larimar',
        L: 'the_vault:wooden_planks'

    }).id('supplementaries:cage')


})