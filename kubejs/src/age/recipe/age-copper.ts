import { createRecipeHelper, RecipeHelper } from "../../lib/index";
import { createMachineHelper } from "./_lib";

const initMachine = (recipes: RecipeHelper) => {
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
        sequence: (transitionalItem) => [
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
        ],
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
    const colors = [
        "white",
        "yellow",
        "blue",
        "brown",
        "red",
        "black",
    ] as const;
    colors.forEach((color) => {
        recipes.create.sandpiperPolishing({
            output: Item.of(`minecraft:${color}_dye`),
            ingredient: Ingredient.of(`kubejs:${color}_unobtanium`),
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
        recipes,
        machine: "kubejs:copper_machine",
    });
};

export const ageCopper = (event: Internal.RecipeEventJS) => {
    const recipes = createRecipeHelper(event);
    const machine = initMachine(recipes);

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
