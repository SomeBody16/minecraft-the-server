// priority: -1000

(function () {
    'use strict';

    var createRecipeHelper = function (event) {
        var recipes = event.recipes;
        var helper = {
            remove: function (filter) {
                event.remove(filter);
            },
            custom: function (recipe) {
                return event.custom(recipe);
            },
            minecraft: {
                shaped: function (props) {
                    return event.recipes.minecraft.crafting_shaped(props.output, props.pattern, props.items);
                },
                shapeless: function (props) {
                    return event.recipes.minecraft.crafting_shapeless(props.output, props.inputs);
                },
                smoking: event.recipes.minecraft.smoking,
                smelting: event.recipes.minecraft.smelting,
                smithing: event.recipes.minecraft.smithing,
                blasting: event.recipes.minecraft.blasting,
                stonecutting: function (props) {
                    return event.recipes.minecraft.stonecutting(props.output, props.input);
                },
                campfireCooking: event.recipes.minecraft.campfire_cooking,
            },
            create: {
                sequencedAssembly: function (props) {
                    var _a;
                    return recipes
                        .createSequencedAssembly(props.output, props.input, props.sequence(props.transitionalItem))
                        .transitionalItem(props.transitionalItem)
                        .loops((_a = props.loops) !== null && _a !== void 0 ? _a : 1);
                },
                mechanicalCrafting: function (props) {
                    return recipes.createMechanicalCrafting(props.output, props.pattern, props.items);
                },
                itemApplication: function (props) {
                    return helper.custom({
                        type: "create:item_application",
                        ingredients: [
                            Item.of(props.input),
                            Item.of(props.ingredient),
                        ],
                        results: [Item.of(props.output)],
                    });
                },
                deploying: function (props) {
                    return recipes.createDeploying(props.output, [
                        props.input,
                        props.ingredient,
                    ]);
                },
                pressing: function (props) {
                    return recipes.createPressing(props.output, props.input);
                },
                cutting: function (props) {
                    var _a;
                    return helper.custom({
                        type: "create:cutting",
                        ingredients: [Item.of(props.input)],
                        results: [Item.of(props.output)],
                        processingTime: (_a = props.processingTime) !== null && _a !== void 0 ? _a : 50,
                    });
                },
                filling: function (props) {
                    return helper.custom({
                        type: "create:filling",
                        ingredients: [props.input, props.ingredient],
                        results: [props.output],
                    });
                },
                sandpiperPolishing: function (props) {
                    return helper.custom({
                        type: "create:sandpaper_polishing",
                        ingredients: [props.ingredient],
                        results: [props.output],
                    });
                },
            },
            vintageImprovements: {
                centrifuge: function (props) {
                    var _a;
                    return helper.custom({
                        type: "vintageimprovements:centrifugation",
                        ingredients: props.ingredients,
                        results: props.output,
                        processingTime: (_a = props.processingTime) !== null && _a !== void 0 ? _a : 1000,
                    });
                },
                vibrating: function (props) {
                    var _a;
                    return helper.custom({
                        type: "vintageimprovements:vibrating",
                        ingredients: props.ingredients.map(function (i) {
                            return Item.of(i);
                        }),
                        results: props.output.map(function (i) { return Item.of(i); }),
                        processingTime: (_a = props.processingTime) !== null && _a !== void 0 ? _a : 1000,
                    });
                },
                pressurizing: function (props) {
                    var _a;
                    return helper.custom({
                        type: "vintageimprovements:pressurizing",
                        secondaryFluidInput: props.secondaryFluidInput ? 1 : 0,
                        secondaryFluidOutput: props.secondaryFluidOutput ? 1 : 0,
                        ingredients: props.ingredients,
                        results: props.output,
                        processingTime: (_a = props.processingTime) !== null && _a !== void 0 ? _a : 600,
                    });
                },
            },
        };
        return helper;
    };

    var createMachineHelper = function (helperProps) {
        var helper = {
            itemApplication: function (props) {
                helperProps.recipes.remove({ output: props.output });
                return helperProps.recipes.create.itemApplication({
                    output: props.output,
                    input: helperProps.machine,
                    ingredient: props.ingredient,
                });
            },
            stonecutting: function (props) {
                helperProps.recipes.remove({ output: props.output });
                return helperProps.recipes.minecraft.stonecutting({
                    output: props.output,
                    input: helperProps.machine,
                });
            },
        };
        return helper;
    };

    var initAndesiteAlloy = function (recipes) {
        recipes.remove({ output: "create:andesite_alloy" });
        recipes.minecraft.shaped({
            output: Item.of("create:andesite_alloy", 4),
            pattern: ["AA ", "aa ", "CC "],
            items: {
                A: "minecraft:andesite",
                a: "architects_palette:algal_brick",
                C: "the_vault:chromatic_iron_ingot",
            },
        });
        var vents = [
            {
                stone: "create:veridium",
                resource: Item.of("create:copper_nugget").withChance(0.05),
            },
            {
                stone: "create:asurine",
                resource: Item.of("create:zinc_nugget", 2).withChance(0.1),
            },
            {
                stone: "create:crimsite",
                resource: Item.of("minecraft:iron_nugget").withChance(0.05),
            },
            {
                stone: "create:ochrum",
                resource: Item.of("minecraft:gold_nugget").withChance(0.05),
            },
            {
                stone: "create:scorchia",
                resource: Item.of("create_ore_excavation_plus:raw_netherite_scrap").withChance(0.01),
            },
            {
                stone: "create:scoria",
                resource: Item.of("the_vault:chromatic_iron_nugget").withChance(0.05),
            },
        ];
        vents.forEach(function (vent) {
            recipes.vintageImprovements.vibrating({
                output: [
                    Item.of("minecraft:andesite").withChance(0.5),
                    vent.resource,
                ],
                ingredients: [vent.stone],
            });
        });
    };
    var initMachine$1 = function (recipes) {
        recipes.minecraft.shaped({
            output: "kubejs:andesite_machine",
            pattern: ["MMM", "MCM", "MMM"],
            items: {
                M: "kubejs:kinetic_mechanism",
                C: "create:andesite_casing",
            },
        });
        recipes.minecraft.shapeless({
            output: "kubejs:kinetic_mechanism",
            inputs: ["#minecraft:logs", "create:cogwheel", "create:andesite_alloy"],
        });
        recipes.create.sequencedAssembly({
            output: ["kubejs:kinetic_mechanism"],
            input: "#minecraft:wooden_slabs",
            sequence: function (transitionalItem) { return [
                recipes.create.deploying({
                    output: transitionalItem,
                    input: transitionalItem,
                    ingredient: "create:andesite_alloy",
                }),
                recipes.create.deploying({
                    output: transitionalItem,
                    input: transitionalItem,
                    ingredient: "create:andesite_alloy",
                }),
                recipes.create.pressing({
                    output: transitionalItem,
                    input: transitionalItem,
                }),
            ]; },
            transitionalItem: "kubejs:incomplete_kinetic_mechanism",
        });
        var woodTypes = [
            "oak",
            "spruce",
            "birch",
            "jungle",
            "acacia",
            "dark_oak",
            "crimson",
            "warped",
        ];
        woodTypes.forEach(function (woodType) {
            recipes.create.cutting({
                input: "minecraft:".concat(woodType, "_planks"),
                output: Item.of("minecraft:".concat(woodType, "_slab"), 2),
            });
        });
        return createMachineHelper({
            recipes: recipes,
            machine: "kubejs:andesite_machine",
        });
    };
    var ageAndesite = function (event) {
        var recipes = createRecipeHelper(event);
        initAndesiteAlloy(recipes);
        var machine = initMachine$1(recipes);
        // @create
        machine.itemApplication({
            output: "create:schematicannon",
            ingredient: "minecraft:dispenser",
        });
        machine.itemApplication({
            output: "create:encased_fan",
            ingredient: "create:propeller",
        });
        machine.itemApplication({
            output: "create:mechanical_press",
            ingredient: "minecraft:iron_block",
        });
        machine.itemApplication({
            output: "create:mechanical_mixer",
            ingredient: "create:whisk",
        });
        machine.itemApplication({
            output: "create:rope_pulley",
            ingredient: "quark:rope",
        });
        machine.stonecutting({
            output: "create:contraption_controls",
        });
        machine.stonecutting({
            output: "create:mechanical_drill",
        });
        machine.stonecutting({
            output: "create:mechanical_saw",
        });
        machine.itemApplication({
            output: "create:deployer",
            ingredient: "create:brass_hand",
        });
        machine.stonecutting({
            output: Item.of("create:portable_storage_interface", 2),
        });
        machine.stonecutting({
            output: Item.of("create:mechanical_harvester", 2),
        });
        machine.stonecutting({
            output: Item.of("create:mechanical_plough", 2),
        });
        machine.itemApplication({
            output: Item.of("create:mechanical_roller"),
            ingredient: Item.of("create:andesite_alloy_block"),
        });
        machine.stonecutting({
            output: Item.of("create:andesite_funnel", 4),
        });
        machine.stonecutting({
            output: Item.of("create:andesite_tunnel", 4),
        });
        // @create_power_loader
        machine.itemApplication({
            output: "create_power_loader:empty_andesite_chunk_loader",
            ingredient: "minecraft:respawn_anchor",
        });
        // @vintageimprovements
        machine.itemApplication({
            output: "vintageimprovements:belt_grinder",
            ingredient: "vintageimprovements:grinder_belt",
        });
        machine.itemApplication({
            output: "vintageimprovements:spring_coiling_machine",
            ingredient: "vintageimprovements:spring_coiling_machine_wheel",
        });
        machine.itemApplication({
            output: "vintageimprovements:vibrating_table",
            ingredient: "vintageimprovements:iron_spring",
        });
        machine.itemApplication({
            output: "vintageimprovements:centrifuge",
            ingredient: "create:shaft",
        });
        machine.stonecutting({
            output: "vintageimprovements:curving_press",
        });
        machine.itemApplication({
            output: "vintageimprovements:helve_hammer",
            ingredient: "minecraft:anvil",
        });
        // @createaddition
        machine.stonecutting({
            output: "createaddition:rolling_mill",
        });
    };

    var initMachine = function (recipes) {
        recipes.minecraft.shaped({
            output: "kubejs:copper_machine",
            pattern: ["MMM", "MCM", "MMM"],
            items: {
                M: "kubejs:sealed_mechanism",
                C: "create:copper_casing",
            },
        });
        recipes.minecraft.shapeless({
            output: "kubejs:sealed_mechanism",
            inputs: [
                "kubejs:kinetic_mechanism",
                "thermal:cured_rubber",
                "thermal:cured_rubber",
                "lava_bucket",
            ],
        });
        recipes.create.sequencedAssembly({
            output: ["kubejs:sealed_mechanism"],
            input: "kubejs:kinetic_mechanism",
            transitionalItem: Item.of("kubejs:incomplete_sealed_mechanism"),
            sequence: function (transitionalItem) { return [
                recipes.create.deploying({
                    output: transitionalItem,
                    input: transitionalItem,
                    ingredient: "thermal:cured_rubber",
                }),
                recipes.create.filling({
                    output: transitionalItem,
                    input: transitionalItem,
                    ingredient: Ingredient.of(Fluid.of("minecraft:lava", 100)),
                }),
                recipes.create.pressing({
                    output: transitionalItem,
                    input: transitionalItem,
                }),
            ]; },
        });
        recipes.vintageImprovements.pressurizing({
            secondaryFluidInput: true,
            ingredients: [
                Ingredient.of(Fluid.of("thermal:resin", 100)),
                {
                    fluid: "create:potion",
                    amount: 100,
                    nbt: {
                        Bottle: "REGULAR",
                        Potion: "minecraft:leaping",
                    },
                },
            ],
            output: [Item.of("thermal:rubber")],
        });
        // unobtanium to dyes
        var colors = [
            "white",
            "yellow",
            "blue",
            "brown",
            "red",
            "black",
        ];
        colors.forEach(function (color) {
            recipes.create.sandpiperPolishing({
                output: Item.of("minecraft:".concat(color, "_dye")),
                ingredient: Ingredient.of("kubejs:".concat(color, "_unobtanium")),
            });
        });
        recipes.vintageImprovements.centrifuge({
            output: [
                {
                    fluid: "create:potion",
                    amount: 500,
                    nbt: {
                        Bottle: "REGULAR",
                        Potion: "minecraft:leaping",
                    },
                },
            ],
            ingredients: [Ingredient.of("minecraft:slime_block")],
        });
        return createMachineHelper({
            recipes: recipes,
            machine: "kubejs:copper_machine",
        });
    };
    var ageCopper = function (event) {
        var recipes = createRecipeHelper(event);
        var machine = initMachine(recipes);
        // @create
        machine.stonecutting({
            output: "create:smart_fluid_pipe",
        });
        machine.itemApplication({
            output: "create:hose_pulley",
            ingredient: "minecraft:dried_kelp_block",
        });
        machine.itemApplication({
            output: "create:spout",
            ingredient: "minecraft:dried_kelp",
        });
        machine.stonecutting({
            output: Item.of("create:portable_fluid_interface", 2),
        });
        machine.itemApplication({
            output: "create:steam_engine",
            ingredient: "create:steam_whistle",
        });
        machine.itemApplication({
            output: "create:item_drain",
            ingredient: "iron_bars",
        });
        // @thermal
        machine.itemApplication({
            output: "thermal:device_tree_extractor",
            ingredient: "supplementaries:faucet",
        });
        // @createdieselgenerators
        machine.itemApplication({
            output: "createdieselgenerators:pumpjack_hole",
            ingredient: "create:fluid_pipe",
        });
        // @vintageimprovements
        machine.itemApplication({
            output: "vintageimprovements:vacuum_chamber",
            ingredient: "create:mechanical_pump",
        });
    };

    onEvent("recipes", function (event) {
        event.remove({ mod: "createdieselgenerators" });
        event.remove({ mod: "create_enchantment_industry" });
        event.remove({ mod: "create_power_loader" });
        event.remove({ mod: "createaddition" });
        event.remove({ mod: "create_power_loader" });
        ageAndesite(event);
        ageCopper(event);
    });

    console.log('@src/server');

})();
