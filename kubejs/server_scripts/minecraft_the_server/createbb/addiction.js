const addiction = {
    isCrystalItem: (itemId) => {
        return itemId.includes('corundum_cluster')
    },
    isPlayerAddicted: (player) => {
        return player.persistentData.isAddicted 
            || player.name === 'Ventura42' 
            || player.name === 'SiogunJH'
    },
    setPlayerAddicted: (player) => {
        player.persistentData.isAddicted = true
    },
    setLastDoseTime: (player, level) => {
        player.persistentData.lastDoseTime = level.time
    },
    getTimeSinceLastDose: (player, level) => {
        return level.time - player.persistentData.lastDoseTime
    },
}

onEvent('item.food_eaten', (event) => {
    let player = event.player
    let item = event.item.id

    if (addiction.isCrystalItem(item)) {
        if (!addiction.isPlayerAddicted(player)) {
            player.tell(Text.green('This feels... good.'))
            addiction.setPlayerAddicted(player)

            player.potionEffects.add('minecraft:speed', 1200, 1);
            player.potionEffects.add('minecraft:haste', 1200, 1);
            player.potionEffects.add('minecraft:strength', 1200, 1);
        }

        if (addiction.getTimeSinceLastDose(player, event.level) > 20 * 60 * 7) {
            player.potionEffects.remove('minecraft:nausea')
            player.potionEffects.remove('minecraft:hunger')
            player.potionEffects.remove('minecraft:slowness')
            player.potionEffects.remove('minecraft:weakness')
            player.tell(Text.green('You feel better.'))
        }

        addiction.setLastDoseTime(player, event.level)
    }
    
    if (!addiction.isCrystalItem(item) && addiction.isPlayerAddicted(player)) {
        player.tell(Text.red('Only crystal can help you!'))
        player.potionEffects.add('minecraft:hunger', 20 * 10, 9);
    }
})

onEvent('player.tick', event => {
    let player = event.player

    const SECOND = 20
    const MINUTE = SECOND * 60

    // Check every minute
    if (event.level.time % MINUTE !== 0) return;
    if (!addiction.isPlayerAddicted(player)) return;

    let timeSinceLastDose = addiction.getTimeSinceLastDose(player, event.level)

    if (timeSinceLastDose >= MINUTE * 5 && timeSinceLastDose < MINUTE * 6) {
        player.tell(Text.yellow('You\'re starting to feel withdrawal symptoms...'))
    }

    if (timeSinceLastDose > MINUTE * 7) {
        let getTime = () => {
            return Math.floor(Math.random() * MINUTE) + 20
        }
        if (Math.random() < 0.05) {
            player.potionEffects.add('minecraft:nausea', getTime(), 1);
        }
        if (Math.random() < 0.1) {
            player.potionEffects.add('minecraft:hunger', getTime(), 9);
        }
        if (Math.random() < 0.1) {
            player.potionEffects.add('minecraft:slowness', getTime(), 2);
        }
        if (Math.random() < 0.1) {
            player.potionEffects.add('minecraft:weakness', getTime(), 2);
        }
        if (Math.random() < 0.25) {
            player.tell(Text.red('Your hands are shaking... You need crystal.'))
        }
    }
})