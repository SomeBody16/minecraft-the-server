let removedOutputsMT = [
    'morphtool:tool'
];
onEvent("recipes", event => {
    removedOutputsMT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('morphtool:tool'),
        [
            ' GB',
            ' IR',
            'I  '
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        G: 'the_vault:perfect_alexandrite',
        B: 'the_vault:perfect_benitoite',
        R: 'the_vault:perfect_painite'
    })


})