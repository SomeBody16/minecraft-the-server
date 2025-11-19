// priority: -1000

(function () {
    'use strict';

    var createMachine = function (event, id) {
        return event
            .create("".concat(id, "_machine"))
            .model("kubejs:block/machine/".concat(id))
            .hardness(3.0)
            .notSolid()
            .displayName("".concat(id[0].toUpperCase()).concat(id.slice(1), " Machine"));
    };
    onEvent("block.registry", function (event) {
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

    var createMechanism = function (event, id) {
        event
            .create("".concat(id, "_mechanism"))
            .maxStackSize(16)
            .texture("kubejs:item/mechanism/".concat(id))
            .displayName("".concat(id[0].toUpperCase()).concat(id.slice(1), " Mechanism"));
        event
            .create("incomplete_".concat(id, "_mechanism"), 'create:sequenced_assembly')
            .maxStackSize(16)
            .texture("kubejs:item/mechanism/".concat(id))
            .displayName("Incomplete ".concat(id[0].toUpperCase()).concat(id.slice(1), " Mechanism"));
    };
    onEvent("item.registry", function (event) {
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

    console.log('@src/startup');

})();
