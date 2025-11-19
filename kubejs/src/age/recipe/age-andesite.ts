import { createRecipeHelper, RecipeHelper } from "../../lib/index";
import { createMachineHelper } from "./_lib";

const initAndesiteAlloy = (recipes: RecipeHelper) => {
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

    const vents: {
        stone: Internal.IngredientJS_;
        resource: Internal.ItemStackJS_;
    }[] = [
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
            resource: Item.of(
                "create_ore_excavation_plus:raw_netherite_scrap"
            ).withChance(0.01),
        },
        {
            stone: "create:scoria",
            resource: Item.of("the_vault:chromatic_iron_nugget").withChance(
                0.05
            ),
        },
    ];

    vents.forEach((vent) => {
        recipes.vintageImprovements.vibrating({
            output: [
                Item.of("minecraft:andesite").withChance(0.5),
                vent.resource,
            ],
            ingredients: [vent.stone],
        });
    });
};

const initMachine = (recipes: RecipeHelper) => {
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
        sequence: (transitionalItem) => [
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
        ],
        transitionalItem: "kubejs:incomplete_kinetic_mechanism",
    });

    const woodTypes = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "crimson",
        "warped",
    ] as const;

    woodTypes.forEach((woodType) => {
        recipes.create.cutting({
            input: `minecraft:${woodType}_planks`,
            output: Item.of(`minecraft:${woodType}_slab`, 2),
        });
    });

    return createMachineHelper({
        recipes,
        machine: "kubejs:andesite_machine",
    });
};

export const ageAndesite = (event: Internal.RecipeEventJS) => {
    const recipes = createRecipeHelper(event);

    initAndesiteAlloy(recipes);
    const machine = initMachine(recipes);

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
