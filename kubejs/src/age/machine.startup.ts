const createMachine = (event: Registry.Block, id: string) => {
    return event
        .create(`${id}_machine`)
        .model(`kubejs:block/machine/${id}`)
        .hardness(3.0)
        .notSolid()
        .displayName(`${id[0].toUpperCase()}${id.slice(1)} Machine`) as Internal.BasicBlockJS$Builder;
};

onEvent("block.registry", (event) => {
    createMachine(event, "andesite").renderType("solid");
    createMachine(event, "copper").renderType("cutout");
    createMachine(event, "brass").renderType("translucent");
    createMachine(event, "transport").renderType("cutout");

    // TODO:
    // createMachine(event, 'steel').renderType('cutout')
    // createMachine(event, 'optical').renderType('cutout')
    // createMachine(event, 'overcharged').renderType('cutout')
    // createMachine(event, 'science').renderType('cutout')
    // createMachine(event, 'enderium').renderType('cutout')
    // createMachine(event, 'god').renderType('cutout')
});
