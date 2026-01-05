onEvent("recipes", event => {
    const colors = [
        ['red', 'red'],
        ['orange', 'orange'],
        ['yellow', 'yellow'],
        ['green', 'green'],
        ['blue', 'light_blue'],
        ['indigo', 'blue'],
        ['violet', 'magenta'],
        ['white', 'white'],
        ['black', 'black'],
    ]

    for (let i = 0; i < colors.length; i++) {
        event.recipes.createFilling(`quark:${colors[i][0]}_corundum_cluster`, [
            'createbb:blue_meth',
            Fluid.of(`auxiliaryblocks:${colors[i][1]}_water`, 250)
        ])
    }
})