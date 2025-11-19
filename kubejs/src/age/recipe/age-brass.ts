import { createRecipeHelper, RecipeHelper } from "../../lib/index";
import { createMachineHelper } from "./_lib";

const initMachine = (recipes: RecipeHelper) => {
    recipes.minecraft.shaped({
        output: "kubejs:brass_machine",
        pattern: ["MMM", "MCM", "MMM"],
        items: {
            M: "create:brass_casing",
            C: "create:precision_mechanism",
        },
    });

    recipes.minecraft.shapeless({
        output: "create:precision_mechanism",
        inputs: [
            "create:electron_tube",
            "#the_vault:playergems",
            "#the_vault:playergems",
            "minecraft:gold_block",
        ],
    });

    recipes.create.sequencedAssembly({
        output: ["create:precision_mechanism"],
        input: "kubejs:sealed_mechanism",
        transitionalItem: Item.of("create:incomplete_precision_mechanism"),
        sequence: (transitionalItem) => [
            recipes.create.deploying({
                output: transitionalItem,
                input: transitionalItem,
                ingredient: "#the_vault:playergems",
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
};
