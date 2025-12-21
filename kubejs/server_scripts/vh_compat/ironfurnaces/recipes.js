let removedOutputsIAF = [
    'ironfurnaces:augment_generator',
];
onEvent("recipes", event => {
    removedOutputsIAF.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('ironfurnaces:augment_generator'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        R: 'the_vault:vault_diamond',
        P: 'the_vault:magic_silk_block',
        F: 'irongenerators:iron_generator'
    })





})