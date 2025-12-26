onEvent('recipes', event => {
	// Wooden Planks
	event.shaped('9x the_vault:wooden_planks',
	[
		'BBB',
		'BBB',
		'BBB'
	],{
		B: 'everycomp:ap/the_vault/wooden_boards'
	});
	// Overgrown Wooden Planks
	event.shaped('9x the_vault:overgrown_wooden_planks',
	[
		'BBB',
		'BBB',
		'BBB'
	],{
		B: 'everycomp:ap/the_vault/overgrown_wooden_boards'
	});
	// Driftwood Planks
	event.shaped('9x the_vault:driftwood_planks',
	[
		'BBB',
		'BBB',
		'BBB'
	],{
		B: 'everycomp:ap/the_vault/driftwood_boards'
	});
});