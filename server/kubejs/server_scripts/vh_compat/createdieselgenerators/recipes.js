let removedOutputsCDG = [
    'createdieselgenerators:pumpjack_crank',
    'createdieselgenerators:chemical_sprayer'
];
onEvent("recipes", event => {
    removedOutputsCDG.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('createdieselgenerators:pumpjack_crank'),
        [
            'ASA',
            'APA',
            'IAI'
        ], {
        A: 'create:andesite_alloy',
        I: 'create:zinc_ingot',
        P: 'create:shaft',
        S: '#railways:internal/plates/iron_plates'
    })





})