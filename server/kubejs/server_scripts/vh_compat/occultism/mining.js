onEvent("recipes", event => {
    event.remove({ id: 'occultism:miner/ores/inferium_ore' })
    event.remove({ id: 'occultism:miner/ores/prosperity_ore' })

    event.custom({
        "type": "occultism:miner",
        "ingredient": {
            "tag": "occultism:miners/ores"
        },
        "result": {
            "item": "the_vault:chromatic_iron_ore"
        },
        "weight": 250
    })

    event.custom({
        "type": "occultism:miner",
        "ingredient": {
            "tag": "occultism:miners/basic_resources"
        },
        "result": {
            "item": "the_vault:vault_stone"
        },
        "weight": 1000
    })

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_tamed",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:possess_djinni",
        "duration": 30,
        "entity_to_sacrifice": {
            "tag": "forge:parrots",
            "display_name": "ritual.occultism.sacrifice.parrots"
        },
        "entity_to_summon": "occultism:otherworld_bird",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/familiar_otherworld_bird"
        },
        "ingredients": [
            {
                "item": "the_vault:angel_block"
            },
            {
                "item": "the_vault:angel_block"
            },
            {
                "item": "minecraft:cobweb"
            },
            {
                "tag": "minecraft:leaves"
            },
            {
                "tag": "forge:string"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/familiar_otherworld_bird')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:familiar",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:possess_foliot",
        "duration": 30,
        "entity_to_sacrifice": {
            "tag": "forge:zombies",
            "display_name": "ritual.occultism.sacrifice.zombies"
        },
        "entity_to_summon": "occultism:greedy_familiar",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/familiar_greedy"
        },
        "ingredients": [
            {
                "tag": "forge:chests"
            },
            {
                "item": "the_vault:chromatic_iron_block"
            },
            {
                "item": "minecraft:dispenser"
            },
            {
                "item": "minecraft:hopper"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/familiar_greedy')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:familiar",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:possess_foliot",
        "duration": 15,
        "entity_to_sacrifice": {
            "tag": "forge:cows",
            "display_name": "ritual.occultism.sacrifice.cows"
        },
        "entity_to_summon": "occultism:deer_familiar",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/familiar_deer"
        },
        "ingredients": [
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "the_vault:magic_silk_block"
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/familiar_deer')

    event.remove({ id: 'occultism:ritual/familiar_blacksmith' })
    event.remove({ id: 'occultism:ritual/familiar_guardian' })
})