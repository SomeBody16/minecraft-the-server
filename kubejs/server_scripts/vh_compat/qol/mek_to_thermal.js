let removedOutputsQOLTM = [
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'refinedstorage:1k_storage_part',
    'refinedstorage:4k_storage_part',
    'refinedstorage:16k_storage_part',
    'refinedstorage:64k_storage_part'
];
onEvent("recipes", event => {
    removedOutputsQOLTM.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    event.shapeless('3x mekanism:ingot_lead', ['3x thermal:lead_ingot'])
    event.shapeless('3x thermal:lead_ingot', ['3x mekanism:ingot_lead'])

    event.shapeless('3x mekanism:ingot_tin', ['3x thermal:tin_ingot'])
    event.shapeless('3x thermal:tin_ingot', ['3x mekanism:ingot_tin'])

})