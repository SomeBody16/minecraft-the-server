
onEvent("recipes", event => {
    event.remove({ mod: 'cabletiers' })


    event.shaped(Item.of('cabletiers:elite_exporter'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'refinedstorage:exporter',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_exporter'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_exporter',
        C: 'refinedstorage:advanced_processor'
    })

    event.shaped(Item.of('cabletiers:elite_importer'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'refinedstorage:importer',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_importer'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_importer',
        C: 'refinedstorage:advanced_processor'
    })



    event.shaped(Item.of('cabletiers:elite_constructor'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'refinedstorage:constructor',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_constructor'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_constructor',
        C: 'refinedstorage:advanced_processor'
    })


    event.shaped(Item.of('cabletiers:elite_destructor'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'refinedstorage:destructor',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_destructor'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_destructor',
        C: 'refinedstorage:advanced_processor'
    })


    event.shaped(Item.of('cabletiers:elite_disk_manipulator'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'refinedstorage:disk_manipulator',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_disk_manipulator'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_disk_manipulator',
        C: 'refinedstorage:advanced_processor'
    })


    event.shaped(Item.of('cabletiers:elite_requester'),
        [
            'XEX',
            'ECE',
            'BEB'
        ], {
        X: 'the_vault:chromatic_steel_ingot',
        E: 'rsrequestify:requester',
        C: 'refinedstorage:advanced_processor',
        B: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('cabletiers:ultra_requester'),
        [
            'XEX',
            'ECE',
            'XEX'
        ], {
        X: 'the_vault:vault_diamond_block',
        E: 'cabletiers:elite_requester',
        C: 'refinedstorage:advanced_processor'
    })

})