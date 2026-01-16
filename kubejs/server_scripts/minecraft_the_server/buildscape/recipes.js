onEvent("recipes", event => {
    const colors = [
        'red',
        'cyan',
        'blue',
        'orange',
        'purple'
    ]

    for (let i = 0; i < colors.length; i++) {
        event.shapeless(`buildscape:${colors[i]}_spore_blossom`, [
            'minecraft:spore_blossom',
            `minecraft:${colors[i]}_dye`
        ])
    }
})
