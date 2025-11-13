onEvent('item.tags', event => {
    event.add('pneumaticcraft:upgrade_components', 'the_vault:perfect_larimar')
    event.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')
})