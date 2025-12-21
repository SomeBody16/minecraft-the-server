let removedOutputsTC = [
    'tropicraft:bamboo_sign',
    'tropicraft:mahogany_sign',
    'tropicraft:thatch_sign',
    'tropicraft:mangrove_sign',
    'tropicraft:palm_sign'
];
onEvent("recipes", event => {
    removedOutputsTC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shapeless('2x tropicraft:pineapple_cubes', ['tropicraft:pineapple'])
    event.shapeless('1x tropicraft:coconut_chunk', ['ecologics:coconut_slice'])
    event.shapeless('2x tropicraft:coconut_chunk', ['tropicraft:coconut'])
})