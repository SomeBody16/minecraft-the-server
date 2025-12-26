let removedOutputsQOL = [
];
onEvent("recipes", event => {
    removedOutputsQOL.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    event.shapeless('refinedstorage:1k_storage_part', ['ae2:cell_component_1k'])
    event.shapeless('refinedstorage:4k_storage_part', ['ae2:cell_component_4k'])
    event.shapeless('refinedstorage:16k_storage_part', ['ae2:cell_component_16k'])
    event.shapeless('refinedstorage:64k_storage_part', ['ae2:cell_component_64k'])

    event.shapeless('ae2:cell_component_1k', ['refinedstorage:1k_storage_part'])
    event.shapeless('ae2:cell_component_4k', ['refinedstorage:4k_storage_part'])
    event.shapeless('ae2:cell_component_16k', ['refinedstorage:16k_storage_part'])
    event.shapeless('ae2:cell_component_64k', ['refinedstorage:64k_storage_part'])

})