onEvent("recipes", event => {
    event.remove({ mod: 'ae2additions' })
    event.shaped(Item.of('ae2additions:me_wireless_transceiver'),
        [
            'BPB',
            'XTX',
            'BPB'
        ], {
        B: 'ae2:fluix_crystal',
        X: 'ae2:wireless_receiver',
        T: 'the_vault:vault_diamond_block',
        P: 'ae2:engineering_processor'
    })
})