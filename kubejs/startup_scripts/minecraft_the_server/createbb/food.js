onEvent('item.modification', event => {
    const colors = [
        ['red', 'red'],
        ['orange', 'orange'],
        ['yellow', 'yellow'],
        ['green', 'green'],
        ['blue', 'blue'],
        ['indigo', 'cyan'],
        ['violet', 'magenta'],
        ['white', 'white'],
        ['black', 'black'],
    ]
    
    for (let i = 0; i < colors.length; i++) {
        event.modify(`quark:${colors[i][0]}_corundum_cluster`, item => {
            item.foodProperties = (food) => {
                food.hunger(8)
                food.saturation(12)
                food.effect('minecraft:speed', 20, 1, 1)
                food.alwaysEdible(true)
                food.fastToEat(true)
            }
        })
    }

})