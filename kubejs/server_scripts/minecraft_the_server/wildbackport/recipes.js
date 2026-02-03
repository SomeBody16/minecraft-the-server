onEvent("recipes", event => {
    event.shapeless('buildscape:mud', ['wildbackport:mud'])
    event.shapeless('wildbackport:mud', ['buildscape:mud'])

    event.recipes.createFilling(`wildbackport:mud`, [
        'minecraft:coarse_dirt',
        Fluid.of(`minecraft:water`, 100)
    ])
})
