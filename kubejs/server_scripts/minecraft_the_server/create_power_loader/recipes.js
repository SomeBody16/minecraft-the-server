const create_power_loader = () => {
    const id = "create_power_loader"
    const itemsToRemove = [
        "empty_andesite_chunk_loader",
        "andesite_chunk_loader",
    ]

    onEvent("recipes", event => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            event.remove({ output: `${id}:${itemsToRemove[i]}` })
        }

        event.remove({ output: `${id}:empty_brass_chunk_loader` })
        event.custom({
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
                "G": {
                    "tag": "forge:glass"
                },
                "R": {
                    "item": "minecraft:respawn_anchor"
                },
                "S": {
                    "item": "create:shaft"
                },
                "C": {
                    "item": "create:brass_casing"
                },
                "P": {
                    "item": "create:precision_mechanism"
                },
                "E": {
                    "item": "the_vault:echo_pog"
                }
            },
            "pattern": [
                "GGGGG",
                "G   G",
                "G R G",
                "CPEPC",
                "CCSCC"
            ],
            "result": {
                "item": "create_power_loader:empty_brass_chunk_loader"
            }
        })
    })

    onEvent('jei.hide.items', event => {
        for (let i = 0; i < itemsToRemove.length; i++) {
            event.hide(`${id}:${itemsToRemove[i]}`)
        }
    })
}

create_power_loader();