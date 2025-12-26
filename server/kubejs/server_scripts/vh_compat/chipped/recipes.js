
onEvent("recipes", event => {
    let chippedBlockTypes = ['amethyst_block', 'ancient_debris', 'andesite', 'barrel', 'basalt', 'blackstone', 'blue_ice',
        'bone_block', 'bookshelf', 'bricks', 'brown_mushroom_block', 'red_mushroom_block', 'calcite', 'carved_pumpkin', 'clay'
        , 'coal_block', 'cobblestone', 'crying_obsidian', 'dark_prismarine', 'deepslate', 'diamond_block', 'diorite'
        , 'dirt', 'dried_kelp_block', 'dripstone_block', 'emerald_block', 'end_stone', 'gilded_blackstone', 'glowstone'
        , 'gold_block', 'granite', 'gravel', 'hay_block', 'ice', 'iron_bars', 'iron_block', 'jack_o_lantern', 'ladder'
        , 'lapis_block', 'lodestone', 'magma_block', 'melon', 'mossy_cobblestone', 'moss_block', 'mossy_stone_bricks', 'mushroom_stem'
        , 'nether_bricks', 'nether_wart_block', 'netherite_block', 'netherrack', 'obsidian', 'packed_ice', 'prismarine', 'pumpkin'
        , 'purpur_block', 'quartz_block', 'raw_copper_block', 'raw_gold_block', 'raw_iron_block', 'red_nether_bricks', 'red_sandstone',
        'redstone_block', 'redstone_lamp', 'sand', 'sandstone', 'sea_lantern', 'shroomlight', 'smooth_stone', 'snow_block'
        , 'soul_sand', 'sponge', 'stone', 'tuff', 'warped_wart_block', 'waxed_copper_block', 'waxed_exposed_copper', 'waxed_oxidized_copper',
        'waxed_weather_copper', 'glass', 'glass_pane', 'white_stained_glass', 'orange_stained_glass', 'magenta_stained_glass', 'light_blue_stained_glass'
        , 'yellow_stained_glass', 'lime_stained_glass', 'pink_stained_glass', 'gray_stained_glass', 'light_gray_stained_glass'
        , 'cyan_stained_glass', 'purple_stained_glass', 'blue_stained_glass', 'brown_stained_glass', 'green_stained_glass', 'red_stained_glass', 'black_stained_glass',
        'white_stained_glass_pane', 'orange_stained_glass_pane', 'magenta_stained_glass_pane', 'light_blue_stained_glass_pane'
        , 'yellow_stained_glass_pane', 'lime_stained_glass_pane', 'pink_stained_glass_pane', 'gray_stained_glass_pane', 'light_gray_stained_glass_pane'
        , 'cyan_stained_glass_pane', 'purple_stained_glass_pane', 'blue_stained_glass_pane', 'brown_stained_glass_pane', 'green_stained_glass_pane',
        'red_stained_glass_pane', 'black_stained_glass_pane', 'acacia_planks', 'birch_planks', 'crimson_planks', 'dark_oak_planks'
        , 'jungle_planks', 'oak_planks', 'spruce_planks', 'warped_planks', 'acacia_log', 'birch_log', 'crimson_stem', 'dark_oak_log',
        'jungle_log', 'oak_log', 'spruce_log', 'warped_stem', 'stripped_acacia_log', 'stripped_birch_log', 'stripped_crimson_stem',
        'stripped_dark_oak_log', 'stripped_jungle_log', 'stripped_oak_log', 'stripped_spruce_log', 'stripped_warped_stem', 'acacia_leaves',
        'birch_leaves', 'dark_oak_leaves', 'jungle_leaves', 'oak_leaves', 'spruce_leaves', 'terracotta',
        'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta'
        , 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'light_gray_terracotta'
        , 'cyan_terracotta', 'purple_terracotta', 'blue_terracotta', 'brown_terracotta', 'green_terracotta', 'red_terracotta', 'black_terracotta',
        'white_glazed_terracotta', 'orange_glazed_terracotta', 'magenta_glazed_terracotta', 'light_blue_glazed_terracotta'
        , 'yellow_glazed_terracotta', 'lime_glazed_terracotta', 'pink_glazed_terracotta', 'gray_glazed_terracotta', 'light_gray_glazed_terracotta'
        , 'cyan_glazed_terracotta', 'purple_glazed_terracotta', 'blue_glazed_terracotta', 'brown_glazed_terracotta', 'green_glazed_terracotta', 'red_glazed_terracotta', 'black_glazed_terracotta',
        'white_concrete', 'orange_concrete', 'magenta_concrete', 'light_blue_concrete'
        , 'yellow_concrete', 'lime_concrete', 'pink_concrete', 'gray_concrete', 'light_gray_concrete'
        , 'cyan_concrete', 'purple_concrete', 'blue_concrete', 'brown_concrete', 'green_concrete', 'red_concrete', 'black_concrete',
        'white_carpet', 'orange_carpet', 'magenta_carpet', 'light_blue_carpet'
        , 'yellow_carpet', 'lime_carpet', 'pink_carpet', 'gray_carpet', 'light_gray_carpet'
        , 'cyan_carpet', 'purple_carpet', 'blue_carpet', 'brown_carpet', 'green_carpet', 'red_carpet', 'black_carpet',
        'white_wool', 'orange_wool', 'magenta_wool', 'light_blue_wool'
        , 'yellow_wool', 'lime_wool', 'pink_wool', 'gray_wool', 'light_gray_wool'
        , 'cyan_wool', 'purple_wool', 'blue_wool', 'brown_wool', 'green_wool', 'red_wool', 'black_wool', 'acacia_door', 'birch_door', 'crimson_door',
        'dark_oak_door', 'jungle_door', 'oak_door', 'spruce_door', 'warped_door',
        'acacia_trapdoor', 'birch_trapdoor', 'crimson_trapdoor',
        'dark_oak_trapdoor', 'jungle_trapdoor', 'oak_trapdoor', 'spruce_trapdoor', 'warped_trapdoor', 'brown_mushroom', 'cobweb',
        'crimson_fungus', 'crimson_roots', 'pointed_dripstone', 'lily_pad', 'nether_sprouts', 'red_mushroom', 'vine', 'warped_fungus'
        , 'warped_roots', 'torch', 'lantern', 'soul_lantern', 'special_soul_lantern']

    chippedBlockTypes.forEach(block => {
        for (let i = 1; i < 135; i++) {
            if (!Item.of(`chipped:${block}_${i}`).isEmpty()) {
                // event.custom({
                //     "conditions": [
                //         {
                //             "type": "forge:mod_loaded",
                //             "modid": "chipped"
                //         }
                //     ],
                //     "type": "create:cutting",
                //     "ingredients": [
                //         {
                //             "tag": `chipped:${block}`
                //         }
                //     ],
                //     "results": [
                //         {
                //             "item": `chipped:${block}_${i}`,
                //             "count": 1
                //         }
                //     ],
                //     "processingTime": 50
                // })
                event.stonecutting(`chipped:${block}_${i}`, `#chipped:${block}`)
            }
        }

    })

})



