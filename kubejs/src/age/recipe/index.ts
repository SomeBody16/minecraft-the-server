import { ageAndesite } from "./age-andesite";
import { ageCopper } from "./age-copper";

onEvent("recipes", (event) => {
    event.remove({ mod: "createdieselgenerators" });
    event.remove({ mod: "create_enchantment_industry" });
    event.remove({ mod: "create_power_loader" });
    event.remove({ mod: "createaddition" });
    event.remove({ mod: "create_power_loader" });

    ageAndesite(event);
    ageCopper(event);
});
