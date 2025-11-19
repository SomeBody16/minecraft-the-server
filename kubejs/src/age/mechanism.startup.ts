const createMechanism = (event: Registry.Item, id: string) => {
    event
        .create(`${id}_mechanism`)
        .maxStackSize(16)
        .texture(`kubejs:item/mechanism/${id}` as any)
        .displayName(`${id[0].toUpperCase()}${id.slice(1)} Mechanism`);

    event
        .create(`incomplete_${id}_mechanism`, 'create:sequenced_assembly')
        .maxStackSize(16)
        .texture(`kubejs:item/mechanism/${id}` as any)
        .displayName(
            `Incomplete ${id[0].toUpperCase()}${id.slice(1)} Mechanism`
        );
};

onEvent("item.registry", (event) => {
    createMechanism(event, "kinetic");
    createMechanism(event, "sealed");
    // createMechanism(event, 'precision') // This one already in game (create:precision_mechanism)
    createMechanism(event, "sturdy");

    // TODO:
    // createMechanism(event, 'steel')
    // createMechanism(event, 'vibration')
    // createMechanism(event, 'circuit')
    // createMechanism(event, 'calculation')
    // createMechanism(event, 'void')
    // createMechanism(event, 'angel')
});
