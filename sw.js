if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.e9f29259.js",revision:null},{url:"assets/404.md.e9f29259.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4f2e100f.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4f2e100f.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b1ebf8ad.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.b1ebf8ad.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.7a757ff6.js",revision:null},{url:"assets/animation-controllers_death-commands.md.7a757ff6.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.ff697213.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.ff697213.lean.js",revision:null},{url:"assets/animation-controllers_index.md.1623b30d.js",revision:null},{url:"assets/animation-controllers_index.md.1623b30d.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.6cc1482a.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.6cc1482a.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.8c953ac1.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.8c953ac1.lean.js",revision:null},{url:"assets/app.6d5655b0.js",revision:null},{url:"assets/blocks_applying-effects.md.8eb66e2f.js",revision:null},{url:"assets/blocks_applying-effects.md.8eb66e2f.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.fca07be0.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.fca07be0.lean.js",revision:null},{url:"assets/blocks_block-components.md.eb78d8e9.js",revision:null},{url:"assets/blocks_block-components.md.eb78d8e9.lean.js",revision:null},{url:"assets/blocks_block-events.md.cb76660d.js",revision:null},{url:"assets/blocks_block-events.md.cb76660d.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.885684b8.js",revision:null},{url:"assets/blocks_block-permutations.md.885684b8.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.dec4254b.js",revision:null},{url:"assets/blocks_block-shapes.md.dec4254b.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.a4dd7d9b.js",revision:null},{url:"assets/blocks_block-sounds.md.a4dd7d9b.lean.js",revision:null},{url:"assets/blocks_block-states.md.f14a45da.js",revision:null},{url:"assets/blocks_block-states.md.f14a45da.lean.js",revision:null},{url:"assets/blocks_block-tags.md.439ea885.js",revision:null},{url:"assets/blocks_block-tags.md.439ea885.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.94697437.js",revision:null},{url:"assets/blocks_block-texture-variation.md.94697437.lean.js",revision:null},{url:"assets/blocks_block-traits.md.7b28df1a.js",revision:null},{url:"assets/blocks_block-traits.md.7b28df1a.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.c5634dbe.js",revision:null},{url:"assets/blocks_blocks-experimental.md.c5634dbe.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.32587058.js",revision:null},{url:"assets/blocks_blocks-intro.md.32587058.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.4a372411.js",revision:null},{url:"assets/blocks_custom-crops.md.4a372411.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.59df28e5.js",revision:null},{url:"assets/blocks_custom-fluids.md.59df28e5.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.3bffc094.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.3bffc094.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.cf4c9c5c.js",revision:null},{url:"assets/blocks_custom-slabs.md.cf4c9c5c.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.70227236.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.70227236.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.33b966c8.js",revision:null},{url:"assets/blocks_custom-trees.md.33b966c8.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.3897e387.js",revision:null},{url:"assets/blocks_fake-blocks.md.3897e387.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.30962cb7.js",revision:null},{url:"assets/blocks_flipbook-textures.md.30962cb7.lean.js",revision:null},{url:"assets/blocks_index.md.4ff1659c.js",revision:null},{url:"assets/blocks_index.md.4ff1659c.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.94f71960.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.94f71960.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.b0d2b828.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.b0d2b828.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.a362c601.js",revision:null},{url:"assets/blocks_precise-interaction.md.a362c601.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.e5399634.js",revision:null},{url:"assets/blocks_precise-rotation.md.e5399634.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.2a1e2559.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.2a1e2559.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.c50b4c3f.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.c50b4c3f.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.212ff351.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.628be0de.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.196c879c.js",revision:null},{url:"assets/commands_block-states.md.196c879c.lean.js",revision:null},{url:"assets/commands_damage.md.522ab2d1.js",revision:null},{url:"assets/commands_damage.md.522ab2d1.lean.js",revision:null},{url:"assets/commands_entity-counter.md.7633e015.js",revision:null},{url:"assets/commands_entity-counter.md.7633e015.lean.js",revision:null},{url:"assets/commands_index.md.0e14c06c.js",revision:null},{url:"assets/commands_index.md.0e14c06c.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f85fc3e1.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.f85fc3e1.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.c125eb37.js",revision:null},{url:"assets/commands_mcfunctions.md.c125eb37.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.590773c6.js",revision:null},{url:"assets/commands_nbt-commands.md.590773c6.lean.js",revision:null},{url:"assets/commands_new-execute.md.f5775aba.js",revision:null},{url:"assets/commands_new-execute.md.f5775aba.lean.js",revision:null},{url:"assets/commands_on-first-join.md.6c3a0570.js",revision:null},{url:"assets/commands_on-first-join.md.6c3a0570.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.0294fad1.js",revision:null},{url:"assets/commands_on-first-world-load.md.0294fad1.lean.js",revision:null},{url:"assets/commands_on-player-death.md.76bee5db.js",revision:null},{url:"assets/commands_on-player-death.md.76bee5db.lean.js",revision:null},{url:"assets/commands_on-player-join.md.e2791785.js",revision:null},{url:"assets/commands_on-player-join.md.e2791785.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.3dfc37d3.js",revision:null},{url:"assets/commands_on-player-leave.md.3dfc37d3.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.c0c52abf.js",revision:null},{url:"assets/commands_on-player-respawn.md.c0c52abf.lean.js",revision:null},{url:"assets/commands_playsound.md.db795fbf.js",revision:null},{url:"assets/commands_playsound.md.db795fbf.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.b9a99816.js",revision:null},{url:"assets/commands_relative-coordinates.md.b9a99816.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.17154f96.js",revision:null},{url:"assets/commands_scoreboard-operations.md.17154f96.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.2f1f6829.js",revision:null},{url:"assets/commands_scoreboard-timers.md.2f1f6829.lean.js",revision:null},{url:"assets/commands_selectors.md.8d5f47a3.js",revision:null},{url:"assets/commands_selectors.md.8d5f47a3.lean.js",revision:null},{url:"assets/commands_tellraw.md.669b6439.js",revision:null},{url:"assets/commands_tellraw.md.669b6439.lean.js",revision:null},{url:"assets/concepts_contents.md.1bcab8bb.js",revision:null},{url:"assets/concepts_contents.md.1bcab8bb.lean.js",revision:null},{url:"assets/concepts_emojis.md.1f1874ff.js",revision:null},{url:"assets/concepts_emojis.md.1f1874ff.lean.js",revision:null},{url:"assets/concepts_index.md.0a90f671.js",revision:null},{url:"assets/concepts_index.md.0a90f671.lean.js",revision:null},{url:"assets/concepts_molang.md.e49c5686.js",revision:null},{url:"assets/concepts_molang.md.e49c5686.lean.js",revision:null},{url:"assets/concepts_namespaces.md.70a71a3d.js",revision:null},{url:"assets/concepts_namespaces.md.70a71a3d.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.b2bd0486.js",revision:null},{url:"assets/concepts_overwriting-assets.md.b2bd0486.lean.js",revision:null},{url:"assets/concepts_shaders.md.f24e372b.js",revision:null},{url:"assets/concepts_shaders.md.f24e372b.lean.js",revision:null},{url:"assets/concepts_sounds.md.c6a6ae37.js",revision:null},{url:"assets/concepts_sounds.md.c6a6ae37.lean.js",revision:null},{url:"assets/concepts_subpacks.md.f1dc1b4e.js",revision:null},{url:"assets/concepts_subpacks.md.f1dc1b4e.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.cf094c51.js",revision:null},{url:"assets/concepts_text-and-translations.md.cf094c51.lean.js",revision:null},{url:"assets/concepts_textures-list.md.ce004325.js",revision:null},{url:"assets/concepts_textures-list.md.ce004325.lean.js",revision:null},{url:"assets/contribute-how-to.md.418d1205.js",revision:null},{url:"assets/contribute-how-to.md.418d1205.lean.js",revision:null},{url:"assets/contribute-style.md.b844e922.js",revision:null},{url:"assets/contribute-style.md.b844e922.lean.js",revision:null},{url:"assets/contribute.md.1288a442.js",revision:null},{url:"assets/contribute.md.1288a442.lean.js",revision:null},{url:"assets/discord.md.39481621.js",revision:null},{url:"assets/discord.md.39481621.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.774aef81.js",revision:null},{url:"assets/documentation_advanced-molang.md.774aef81.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.e5f19ae4.js",revision:null},{url:"assets/documentation_creative-categories.md.e5f19ae4.lean.js",revision:null},{url:"assets/documentation_file-types.md.6ab99e52.js",revision:null},{url:"assets/documentation_file-types.md.6ab99e52.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.11e74b9c.js",revision:null},{url:"assets/documentation_fog-ids.md.11e74b9c.lean.js",revision:null},{url:"assets/documentation_index.md.d57e53b3.js",revision:null},{url:"assets/documentation_index.md.d57e53b3.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.ddaa77d4.js",revision:null},{url:"assets/documentation_material-config-description.md.ddaa77d4.lean.js",revision:null},{url:"assets/documentation_materials.md.80015044.js",revision:null},{url:"assets/documentation_materials.md.80015044.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.20356551.js",revision:null},{url:"assets/documentation_pack-structure.md.20356551.lean.js",revision:null},{url:"assets/documentation_projectiles.md.bdb6d56a.js",revision:null},{url:"assets/documentation_projectiles.md.bdb6d56a.lean.js",revision:null},{url:"assets/documentation_queries.md.1f2cc359.js",revision:null},{url:"assets/documentation_queries.md.1f2cc359.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.0a6d9cab.js",revision:null},{url:"assets/documentation_shared-constructs.md.0a6d9cab.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.3160f9fd.js",revision:null},{url:"assets/documentation_sound-definitions.md.3160f9fd.lean.js",revision:null},{url:"assets/entities_boat-entities.md.d67909a1.js",revision:null},{url:"assets/entities_boat-entities.md.d67909a1.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3b6837a0.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3b6837a0.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f708ab69.js",revision:null},{url:"assets/entities_disabling-team-damage.md.f708ab69.lean.js",revision:null},{url:"assets/entities_dummy-components.md.a0aa48fb.js",revision:null},{url:"assets/entities_dummy-components.md.a0aa48fb.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.def4c41d.js",revision:null},{url:"assets/entities_dummy-entities.md.def4c41d.lean.js",revision:null},{url:"assets/entities_entity-attack.md.1d6c628c.js",revision:null},{url:"assets/entities_entity-attack.md.1d6c628c.lean.js",revision:null},{url:"assets/entities_entity-events.md.bb25aaec.js",revision:null},{url:"assets/entities_entity-events.md.bb25aaec.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.0fd4e092.js",revision:null},{url:"assets/entities_entity-holds-item.md.0fd4e092.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.dacc1419.js",revision:null},{url:"assets/entities_entity-intro-bp.md.dacc1419.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.a65a7c89.js",revision:null},{url:"assets/entities_entity-intro-rp.md.a65a7c89.lean.js",revision:null},{url:"assets/entities_entity-movement.md.384bcb2c.js",revision:null},{url:"assets/entities_entity-movement.md.384bcb2c.lean.js",revision:null},{url:"assets/entities_entity-properties.md.399a12a2.js",revision:null},{url:"assets/entities_entity-properties.md.399a12a2.lean.js",revision:null},{url:"assets/entities_flying-entities.md.9e8feb10.js",revision:null},{url:"assets/entities_flying-entities.md.9e8feb10.lean.js",revision:null},{url:"assets/entities_index.md.6aa2619a.js",revision:null},{url:"assets/entities_index.md.6aa2619a.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.197a05a0.js",revision:null},{url:"assets/entities_introduction-to-aec.md.197a05a0.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.d0fe134a.js",revision:null},{url:"assets/entities_invulnerable-entities.md.d0fe134a.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.cac1662e.js",revision:null},{url:"assets/entities_look-at-entity.md.cac1662e.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.39ba70a8.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.39ba70a8.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.5b8bd364.js",revision:null},{url:"assets/entities_npc-dialogs.md.5b8bd364.lean.js",revision:null},{url:"assets/entities_render-controllers.md.327d7170.js",revision:null},{url:"assets/entities_render-controllers.md.327d7170.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.4e5b7a2f.js",revision:null},{url:"assets/entities_runtime-identifier.md.4e5b7a2f.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.ea1e0ca7.js",revision:null},{url:"assets/entities_sleeping-entities.md.ea1e0ca7.lean.js",revision:null},{url:"assets/entities_solid-entities.md.c6cd300d.js",revision:null},{url:"assets/entities_solid-entities.md.c6cd300d.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.8ded31c8.js",revision:null},{url:"assets/entities_spawn-rules.md.8ded31c8.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.a73b42a0.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.a73b42a0.lean.js",revision:null},{url:"assets/entities_timers.md.e370b134.js",revision:null},{url:"assets/entities_timers.md.e370b134.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.ce8294c7.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.ce8294c7.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.dcf83d7a.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.dcf83d7a.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.02bd0545.js",revision:null},{url:"assets/entities_village-mechanic.md.02bd0545.lean.js",revision:null},{url:"assets/entities_vuc-full.md.5aa95143.lean.js",revision:null},{url:"assets/entities_vusr-full.md.dcaa1fdb.js",revision:null},{url:"assets/entities_vusr-full.md.dcaa1fdb.lean.js",revision:null},{url:"assets/graph-test.md.2e19edbc.js",revision:null},{url:"assets/graph-test.md.2e19edbc.lean.js",revision:null},{url:"assets/guide_addons.md.5e335d95.js",revision:null},{url:"assets/guide_addons.md.5e335d95.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.154782ba.js",revision:null},{url:"assets/guide_advancedmanifest.md.154782ba.lean.js",revision:null},{url:"assets/guide_blockbench.md.eed9b4f1.js",revision:null},{url:"assets/guide_blockbench.md.eed9b4f1.lean.js",revision:null},{url:"assets/guide_custom-entity.md.51def3ee.js",revision:null},{url:"assets/guide_custom-entity.md.51def3ee.lean.js",revision:null},{url:"assets/guide_custom-item.md.34d88f49.js",revision:null},{url:"assets/guide_custom-item.md.34d88f49.lean.js",revision:null},{url:"assets/guide_download-packs.md.4ca296ad.js",revision:null},{url:"assets/guide_download-packs.md.4ca296ad.lean.js",revision:null},{url:"assets/guide_format-version.md.8be265a3.js",revision:null},{url:"assets/guide_format-version.md.8be265a3.lean.js",revision:null},{url:"assets/guide_index.md.33dad3d1.js",revision:null},{url:"assets/guide_index.md.33dad3d1.lean.js",revision:null},{url:"assets/guide_introduction.md.80e044e7.js",revision:null},{url:"assets/guide_introduction.md.80e044e7.lean.js",revision:null},{url:"assets/guide_loot-table.md.64e4973e.js",revision:null},{url:"assets/guide_loot-table.md.64e4973e.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.a493c4ad.js",revision:null},{url:"assets/guide_project-setup-android.md.a493c4ad.lean.js",revision:null},{url:"assets/guide_project-setup.md.e1e26f72.js",revision:null},{url:"assets/guide_project-setup.md.e1e26f72.lean.js",revision:null},{url:"assets/guide_software-preparation.md.8f4b3367.js",revision:null},{url:"assets/guide_software-preparation.md.8f4b3367.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.b1fa5e89.js",revision:null},{url:"assets/guide_troubleshooting.md.b1fa5e89.lean.js",revision:null},{url:"assets/guide_understanding-json.md.77a45341.js",revision:null},{url:"assets/guide_understanding-json.md.77a45341.lean.js",revision:null},{url:"assets/hacktoberfest.md.fe90922e.js",revision:null},{url:"assets/hacktoberfest.md.fe90922e.lean.js",revision:null},{url:"assets/index.md.16235a68.js",revision:null},{url:"assets/index.md.16235a68.lean.js",revision:null},{url:"assets/items_attachables.md.250cc455.js",revision:null},{url:"assets/items_attachables.md.250cc455.lean.js",revision:null},{url:"assets/items_custom-armor.md.ac81d8cb.js",revision:null},{url:"assets/items_custom-armor.md.ac81d8cb.lean.js",revision:null},{url:"assets/items_custom-weapon.md.7340c67b.js",revision:null},{url:"assets/items_custom-weapon.md.7340c67b.lean.js",revision:null},{url:"assets/items_enchantments.md.9ab5c1c7.js",revision:null},{url:"assets/items_enchantments.md.9ab5c1c7.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.632c7163.js",revision:null},{url:"assets/items_equipped-item-commands.md.632c7163.lean.js",revision:null},{url:"assets/items_index.md.5926f4fb.js",revision:null},{url:"assets/items_index.md.5926f4fb.lean.js",revision:null},{url:"assets/items_item-identifiers.md.81d945e9.js",revision:null},{url:"assets/items_item-identifiers.md.81d945e9.lean.js",revision:null},{url:"assets/items_items-16.md.08405929.js",revision:null},{url:"assets/items_items-16.md.08405929.lean.js",revision:null},{url:"assets/items_items-intro.md.1ac7c380.js",revision:null},{url:"assets/items_items-intro.md.1ac7c380.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.a3eb3ace.js",revision:null},{url:"assets/items_numerical-item-ids.md.a3eb3ace.lean.js",revision:null},{url:"assets/items_spawning-items.md.025cc612.js",revision:null},{url:"assets/items_spawning-items.md.025cc612.lean.js",revision:null},{url:"assets/items_spear.md.d8ddaf92.js",revision:null},{url:"assets/items_spear.md.d8ddaf92.lean.js",revision:null},{url:"assets/items_throwable.md.4f0def66.js",revision:null},{url:"assets/items_throwable.md.4f0def66.lean.js",revision:null},{url:"assets/items_tool-durability.md.4e8925df.js",revision:null},{url:"assets/items_tool-durability.md.4e8925df.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.22faa607.js",revision:null},{url:"assets/items_troubleshooting-items.md.22faa607.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.febe7bb2.js",revision:null},{url:"assets/items_vanilla-usage-items.md.febe7bb2.lean.js",revision:null},{url:"assets/items_vui-full.md.5b977f18.js",revision:null},{url:"assets/items_vui-full.md.5b977f18.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.917b3300.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.917b3300.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.2d3ad707.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.2d3ad707.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.6101defd.js",revision:null},{url:"assets/json-ui_best-practices.md.6101defd.lean.js",revision:null},{url:"assets/json-ui_index.md.f5b9e329.js",revision:null},{url:"assets/json-ui_index.md.f5b9e329.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6810c8f7.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.6810c8f7.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.538aea3b.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.538aea3b.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b616a859.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.b616a859.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.16b95246.js",revision:null},{url:"assets/json-ui_string-to-number.md.16b95246.lean.js",revision:null},{url:"assets/loot_index.md.0fb4e146.js",revision:null},{url:"assets/loot_index.md.0fb4e146.lean.js",revision:null},{url:"assets/loot_item-functions.md.7d41be1c.js",revision:null},{url:"assets/loot_item-functions.md.7d41be1c.lean.js",revision:null},{url:"assets/loot_loot-tables.md.f517c290.js",revision:null},{url:"assets/loot_loot-tables.md.f517c290.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.e795edfd.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.e795edfd.lean.js",revision:null},{url:"assets/loot_recipes.md.9ef1b0ae.js",revision:null},{url:"assets/loot_recipes.md.9ef1b0ae.lean.js",revision:null},{url:"assets/loot_trade-tables.md.c49ec6e5.js",revision:null},{url:"assets/loot_trade-tables.md.c49ec6e5.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.9c759af9.js",revision:null},{url:"assets/loot_trading-behavior.md.9c759af9.lean.js",revision:null},{url:"assets/meta_addon-performance.md.2f349c62.js",revision:null},{url:"assets/meta_addon-performance.md.2f349c62.lean.js",revision:null},{url:"assets/meta_index.md.27fa0364.js",revision:null},{url:"assets/meta_index.md.27fa0364.lean.js",revision:null},{url:"assets/meta_jq.md.90fe7fbc.js",revision:null},{url:"assets/meta_jq.md.90fe7fbc.lean.js",revision:null},{url:"assets/meta_style-guide.md.7485d3f5.js",revision:null},{url:"assets/meta_style-guide.md.7485d3f5.lean.js",revision:null},{url:"assets/meta_useful-links.md.a3b4de8d.js",revision:null},{url:"assets/meta_useful-links.md.a3b4de8d.lean.js",revision:null},{url:"assets/meta_using-schemas.md.7cd15a7c.js",revision:null},{url:"assets/meta_using-schemas.md.7cd15a7c.lean.js",revision:null},{url:"assets/meta_version-control.md.47cb8d11.js",revision:null},{url:"assets/meta_version-control.md.47cb8d11.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.c969cd24.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.c969cd24.lean.js",revision:null},{url:"assets/nbt_index.md.3751b173.js",revision:null},{url:"assets/nbt_index.md.3751b173.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.d48fee98.js",revision:null},{url:"assets/nbt_mcstructure.md.d48fee98.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.0647136f.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.0647136f.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.2e1e54a5.js",revision:null},{url:"assets/nbt_step-by-step-example.md.2e1e54a5.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.a5183645.js",revision:null},{url:"assets/nbt_structure-limits.md.a5183645.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.791e4444.js",revision:null},{url:"assets/particles_disabling-particles.md.791e4444.lean.js",revision:null},{url:"assets/particles_index.md.5cf6d736.js",revision:null},{url:"assets/particles_index.md.5cf6d736.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.0a7bba55.js",revision:null},{url:"assets/particles_particles-and-sounds.md.0a7bba55.lean.js",revision:null},{url:"assets/particles_particles.md.a84b3dc9.js",revision:null},{url:"assets/particles_particles.md.a84b3dc9.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.e036dad2.js",revision:null},{url:"assets/particles_vanilla-particles.md.e036dad2.lean.js",revision:null},{url:"assets/privacy.md.0c88c374.js",revision:null},{url:"assets/privacy.md.0c88c374.lean.js",revision:null},{url:"assets/scripting_api-environment.md.f2fced55.js",revision:null},{url:"assets/scripting_api-environment.md.f2fced55.lean.js",revision:null},{url:"assets/scripting_custom-command.md.4b66353a.js",revision:null},{url:"assets/scripting_custom-command.md.4b66353a.lean.js",revision:null},{url:"assets/scripting_game-tests.md.7dba0fd0.js",revision:null},{url:"assets/scripting_game-tests.md.7dba0fd0.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.b1b6d10f.js",revision:null},{url:"assets/scripting_gametest-form.md.b1b6d10f.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.d1f0b85b.js",revision:null},{url:"assets/scripting_gametest-qna.md.d1f0b85b.lean.js",revision:null},{url:"assets/scripting_index.md.22d45d0b.js",revision:null},{url:"assets/scripting_index.md.22d45d0b.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.38775628.js",revision:null},{url:"assets/scripting_placement-prevention.md.38775628.lean.js",revision:null},{url:"assets/scripting_resources.md.b81f391f.js",revision:null},{url:"assets/scripting_resources.md.b81f391f.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.24d8c472.js",revision:null},{url:"assets/scripting_saving-loading.md.24d8c472.lean.js",revision:null},{url:"assets/scripting_script-modules.md.70df5296.js",revision:null},{url:"assets/scripting_script-modules.md.70df5296.lean.js",revision:null},{url:"assets/scripting_script-net.md.3a29f834.js",revision:null},{url:"assets/scripting_script-net.md.3a29f834.lean.js",revision:null},{url:"assets/scripting_script-server.md.ebbf2d52.js",revision:null},{url:"assets/scripting_script-server.md.ebbf2d52.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.b7021bb9.js",revision:null},{url:"assets/scripting_script-watchdog.md.b7021bb9.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.c94e72c3.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.c94e72c3.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.b3cef3e3.js",revision:null},{url:"assets/scripting_scripting-intro.md.b3cef3e3.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.9f00987a.js",revision:null},{url:"assets/scripting_starting-scripts.md.9f00987a.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.d8076dce.js",revision:null},{url:"assets/scripting_troubleshooting.md.d8076dce.lean.js",revision:null},{url:"assets/scripting_typescript.md.85048456.js",revision:null},{url:"assets/scripting_typescript.md.85048456.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.6479d92d.js",revision:null},{url:"assets/scripting_what-is-script.md.6479d92d.lean.js",revision:null},{url:"assets/servers_index.md.44b32dbf.js",revision:null},{url:"assets/servers_index.md.44b32dbf.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c3aa25f5.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.c3aa25f5.lean.js",revision:null},{url:"assets/servers_server-software.md.1f87dc79.js",revision:null},{url:"assets/servers_server-software.md.1f87dc79.lean.js",revision:null},{url:"assets/style.0869b4e0.css",revision:null},{url:"assets/test.md.e6202b88.js",revision:null},{url:"assets/test.md.e6202b88.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3f24eff8.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.3f24eff8.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.8ef4ea3e.js",revision:null},{url:"assets/visuals_animation-effects.md.8ef4ea3e.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.bfd94754.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.bfd94754.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.b34a2bc4.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.b34a2bc4.lean.js",revision:null},{url:"assets/visuals_death-animations.md.529b443d.js",revision:null},{url:"assets/visuals_death-animations.md.529b443d.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.5eecc186.js",revision:null},{url:"assets/visuals_glowing-texture.md.5eecc186.lean.js",revision:null},{url:"assets/visuals_index.md.2f6f3b49.js",revision:null},{url:"assets/visuals_index.md.2f6f3b49.lean.js",revision:null},{url:"assets/visuals_introduction.md.836fb492.js",revision:null},{url:"assets/visuals_introduction.md.836fb492.lean.js",revision:null},{url:"assets/visuals_leash-position.md.1ed6361d.js",revision:null},{url:"assets/visuals_leash-position.md.1ed6361d.lean.js",revision:null},{url:"assets/visuals_material-creations.md.f90ee91b.js",revision:null},{url:"assets/visuals_material-creations.md.f90ee91b.lean.js",revision:null},{url:"assets/visuals_materials.md.91dcbbd2.js",revision:null},{url:"assets/visuals_materials.md.91dcbbd2.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.15ce690e.js",revision:null},{url:"assets/visuals_math-based-animations.md.15ce690e.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.08d019c3.js",revision:null},{url:"assets/visuals_player-geometry.md.08d019c3.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.8cba3b23.js",revision:null},{url:"assets/visuals_remove-shadows.md.8cba3b23.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.e84763b2.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.e84763b2.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.ad498d59.js",revision:null},{url:"assets/visuals_structure-presentation.md.ad498d59.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d7e1835b.js",revision:null},{url:"assets/vr_editing-your-first-model.md.d7e1835b.lean.js",revision:null},{url:"assets/vr_index.md.0f7fc9a3.js",revision:null},{url:"assets/vr_index.md.0f7fc9a3.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.eb6f16dd.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.eb6f16dd.lean.js",revision:null},{url:"assets/vr_pack_setup.md.c495d8ce.js",revision:null},{url:"assets/vr_pack_setup.md.c495d8ce.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.79cbedeb.js",revision:null},{url:"assets/world-generation_biome-tags.md.79cbedeb.lean.js",revision:null},{url:"assets/world-generation_biomes.md.918307ef.js",revision:null},{url:"assets/world-generation_biomes.md.918307ef.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.68d6a7d3.js",revision:null},{url:"assets/world-generation_custom-ores.md.68d6a7d3.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.6ef237da.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.6ef237da.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.e34daf39.js",revision:null},{url:"assets/world-generation_feature-types.md.e34daf39.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3fd6cc14.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3fd6cc14.lean.js",revision:null},{url:"assets/world-generation_index.md.c0be4db8.js",revision:null},{url:"assets/world-generation_index.md.c0be4db8.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.35fb3b38.js",revision:null},{url:"assets/world-generation_structure-features.md.35fb3b38.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.95398a28.js",revision:null},{url:"assets/world-generation_surface-builder.md.95398a28.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c2e90c21.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c2e90c21.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
