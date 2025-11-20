import { RecipeHelper } from "../../lib/index"

export const handleItem = <T>(props: {
    item: T,
    handler: (item: T) => void
}) => props.handler(props.item)

export const createMachineHelper = (helperProps: {
    recipes: RecipeHelper,
    machine: Internal.ItemStackJS_,
}) => {
    const helper = {
        itemApplication: (props: {
            output: Internal.ItemStackJS_,
            ingredient: Internal.IngredientJS_,
        }) => {
            helperProps.recipes.remove({ output: props.output })
            return helperProps.recipes.create.itemApplication({
                output: props.output,
                input: helperProps.machine,
                ingredient: props.ingredient,
            })
        },
        stonecutting: (props: {
            output: Internal.ItemStackJS_,
        }) => {
            helperProps.recipes.remove({ output: props.output })
            return helperProps.recipes.minecraft.stonecutting({
                output: props.output,
                input: helperProps.machine,
            })
        },
    }
    return helper
}
