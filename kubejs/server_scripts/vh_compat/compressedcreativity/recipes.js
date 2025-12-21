let removedOutputsCCCA = [
];
onEvent("recipes", event => {
    removedOutputsCCCA.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    event.replaceInput({ id: 'compressedcreativity:crafting/compressed_air_engine' }, 'pneumaticcraft:ingot_iron_compressed', 'the_vault:gem_pog')
    event.replaceInput({ id: 'compressedcreativity:crafting/air_blower' }, 'minecraft:iron_bars', 'the_vault:perfect_larimar')
    event.replaceInput({ id: 'compressedcreativity:crafting/industrial_air_blower' }, 'minecraft:iron_bars', 'the_vault:extraordinary_larimar')


})