export const createRecipeHelper = (event: Internal.RecipeEventJS) => {
    const recipes = event.recipes as any;

    const helper = {
        remove: (filter: Internal.RecipeFilter_) => {
            event.remove(filter);
        },
        custom: (recipe: { type: Special.RecipeType; [key: string]: any }) => {
            return event.custom(recipe);
        },
        minecraft: {
            shaped: (props: {
                output: Internal.ItemStackJS_;
                pattern: string[];
                items: Record<string, Internal.IngredientJS_>;
            }) => {
                return event.recipes.minecraft.crafting_shaped(
                    props.output,
                    props.pattern,
                    props.items
                );
            },
            shapeless: (props: {
                output: Internal.ItemStackJS_;
                inputs: Internal.IngredientJS_[];
            }) => {
                return event.recipes.minecraft.crafting_shapeless(
                    props.output,
                    props.inputs
                );
            },
            smoking: event.recipes.minecraft.smoking,
            smelting: event.recipes.minecraft.smelting,
            smithing: event.recipes.minecraft.smithing,
            blasting: event.recipes.minecraft.blasting,
            stonecutting: (props: {
                output: Internal.ItemStackJS_;
                input: Internal.IngredientJS_;
            }) => {
                return event.recipes.minecraft.stonecutting(
                    props.output,
                    props.input
                );
            },
            campfireCooking: event.recipes.minecraft.campfire_cooking,
        },
        create: {
            sequencedAssembly: (props: {
                output: Internal.ItemStackJS_[];
                input: Internal.IngredientJS_;
                sequence: (
                    transitionalItem: Internal.ItemStackJS_
                ) => Internal.ProcessingRecipeJS_[];
                transitionalItem: Internal.ItemStackJS_;
                loops?: number;
            }): Internal.SequencedAssemblyRecipeJS => {
                return recipes
                    .createSequencedAssembly(
                        props.output,
                        props.input,
                        props.sequence(props.transitionalItem)
                    )
                    .transitionalItem(props.transitionalItem)
                    .loops(props.loops ?? 1);
            },
            mechanicalCrafting: (props: {
                output: Internal.ItemStackJS_;
                pattern: string[];
                items: { [key in string]: Internal.IngredientJS_ };
            }): Internal.ProcessingRecipeJS => {
                return recipes.createMechanicalCrafting(
                    props.output,
                    props.pattern,
                    props.items
                );
            },
            itemApplication: (props: {
                output: Internal.ItemStackJS_;
                input: Internal.IngredientJS_;
                ingredient: Internal.IngredientJS_;
            }) => {
                return helper.custom({
                    type: "create:item_application",
                    ingredients: [
                        Item.of(props.input as any),
                        Item.of(props.ingredient as any),
                    ],
                    results: [Item.of(props.output)],
                });
            },
            deploying: (props: {
                output: Internal.ItemStackJS_;
                input: Internal.IngredientJS_;
                ingredient: Internal.IngredientJS_;
            }): Internal.ItemApplicationRecipeJS => {
                return recipes.createDeploying(props.output, [
                    props.input,
                    props.ingredient as any,
                ]);
            },
            pressing: (props: {
                output: Internal.ItemStackJS_;
                input: Internal.IngredientJS_;
            }): Internal.ProcessingRecipeJS => {
                return recipes.createPressing(props.output, props.input);
            },
            cutting: (props: {
                input: Internal.IngredientJS_;
                output: Internal.ItemStackJS_;
                processingTime?: number;
            }) => {
                return helper.custom({
                    type: "create:cutting",
                    ingredients: [Item.of(props.input as any)],
                    results: [Item.of(props.output)],
                    processingTime: props.processingTime ?? 50,
                });
            },
            filling: (props: {
                output: Internal.ItemStackJS_;
                input: Internal.IngredientJS_;
                ingredient: Internal.IngredientJS_;
            }) => {
                return helper.custom({
                    type: "create:filling",
                    ingredients: [props.input, props.ingredient as any],
                    results: [props.output],
                }) as Internal.ProcessingRecipeJS;
            },
            sandpiperPolishing: (props: {
                output: Internal.ItemStackJS_;
                ingredient: Internal.IngredientJS_;
            }) => {
                return helper.custom({
                    type: "create:sandpaper_polishing",
                    ingredients: [props.ingredient],
                    results: [props.output],
                });
            },
        },
        vintageImprovements: {
            centrifuge: (props: {
                output: (Internal.ItemStackJS_ | Internal.FluidStackJS_)[];
                ingredients: Internal.IngredientJS_[];
                processingTime?: number;
            }) => {
                return helper.custom({
                    type: "vintageimprovements:centrifugation",
                    ingredients: props.ingredients,
                    results: props.output,
                    processingTime: props.processingTime ?? 1000,
                });
            },
            vibrating: (props: {
                output: Internal.ItemStackJS_[];
                ingredients: Internal.IngredientJS_[];
                processingTime?: number;
            }) => {
                return helper.custom({
                    type: "vintageimprovements:vibrating",
                    ingredients: props.ingredients.map((i) =>
                        Item.of(i as any)
                    ),
                    results: props.output.map((i) => Item.of(i as any)),
                    processingTime: props.processingTime ?? 1000,
                });
            },
            pressurizing: (props: {
                ingredients: Internal.IngredientJS_[];
                output: (Internal.ItemStackJS_ | Internal.FluidStackJS_)[];
                heatRequirement?: "heated" | "superheated";
                secondaryFluidInput?: boolean;
                secondaryFluidOutput?: boolean;
                processingTime?: number;
            }) => {
                return helper.custom({
                    type: "vintageimprovements:pressurizing",
                    secondaryFluidInput: props.secondaryFluidInput ? 1 : 0,
                    secondaryFluidOutput: props.secondaryFluidOutput ? 1 : 0,
                    ingredients: props.ingredients,
                    results: props.output,
                    processingTime: props.processingTime ?? 600,
                });
            },
        },
    };
    return helper;
};

export type RecipeHelper = ReturnType<typeof createRecipeHelper>;
