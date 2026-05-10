StartupEvents.registry('item', (event) => {
  return;
  event
    .create('stone_dust')
    .displayName('Stone Dust')
    .tooltip('Fine mineral filler used for hammer alloy blending.');

  event
    .create('hammer_alloy_blend')
    .displayName('Hammer Alloy Blend')
    .tooltip('Hot pre-alloy mixture for handcrafted hammer production.');

  event
    .create('dense_hammer_ingot')
    .displayName('Dense Hammer Ingot')
    .tooltip('Compacted alloy billet waiting to be pressed into a head.');

  event
    .create('hammer_head_blank')
    .displayName('Hammer Head Blank')
    .tooltip('Rough hammer head before reinforcing and final assembly.');

  event
    .create('reinforced_hammer_head')
    .displayName('Reinforced Hammer Head')
    .tooltip('Deploying-upgraded head component for the handcrafted hammer.');

  event
    .create('wood_handle_blank')
    .displayName('Wood Handle Blank')
    .tooltip('Cut timber core for a furniture-grade hammer handle.');

  event
    .create('treated_handle')
    .displayName('Treated Handle')
    .tooltip('Resin-treated handle ready for precision assembly.');

  event
    .create('unfinished_hammer')
    .displayName('Unfinished Furniture Hammer')
    .tooltip('Transitional assembly item used by sequenced assembly.');
});
