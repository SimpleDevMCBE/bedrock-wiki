---
title: Entity Counter
category: Scoreboard Systems
mentions:
    - BedrockCommands
    - zheaEvyline
nav_order: 3
description: This system allows you to track the total number of players/entities on your world and subsequently execute your desired commands based on the values obtained.
---

## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system allows you to track the total number of players/entities on your world and subsequently execute your desired commands based on the values obtained.

> Note: Entities in unloaded chunks will not be tracked. However, players can be tracked regardless.

## Setup

*To be typed in Chat:*

`/scoreboard objectives add count dummy`

If you are working with functions and prefer to have the objective added automatically on world initialisation, follow the process outlined in [On First World Load.](/commands/on-first-world-load)

## System

<CodeHeader>BP/functions/entity_counter.mcfunction</CodeHeader>

```yaml
scoreboard players set * count 0
execute as @e [type=player] run scoreboard players add alivePlayers count 1
execute as @e [type=creeper] run scoreboard players add creepers count 1


#Your Commands Here (examples)
execute if score alivePlayers count matches 4.. run title @a actionbar There are more than 4 players on the world.
execute if score creepers count matches ..3 run title @a actionbar There are less than 3 creepers on the world.
```
![Chain Of 5 Command Blocks](/assets/images/commands/commandBlockChain/5.png)


Here, we are tracking alive players and creepers as examples, but you can track any entity you like and as many as you need. You may also alter the fake-player-names to your preference. Example: 'alivePlayers' to just 'players'.

Similarly, we're running `/title` commands as examples:
- a) when there are 4 or more players `4..`
- b) when there are 3 creepers or less `..3`

You can modify/expand these as well. Example: a `/kill` command instead of a `/title` command.

## Explanation

1. **Command 1:** Sets the score to `0` for all fake-player-names in the`count` scoreboard objective, including that of any tracked players and entities.
2. **Command 2, 3:** From each target that you want to track the count of, a score will be added to their corresponding fake-player-name. Thus, obtaining their total count.
    - Example: Creeper mobs to 'creepers' fake-player-name.
3. **Command 4, 5:** These are example commands which can be modified / expanded.
    - Based on the total count obtained, we can use the `/execute if score` condition to run our desired commands when certain values are met.
        - **` n `** any number *n*
        - **` n.. `** any number *n* and above
        - **` ..n `** any number *n* and below
        - **` n..n1 `** any number *n* to any number *n1*. (smaller number first)

## Tick JSON

If you are using functions instead of command blocks, the ` entity_counter ` function must be added to the ` tick.json ` in order to loop and run it continuously. Multiple files can be added to the ` tick.json ` by placing a comma after each string. Refer to [Functions](/commands/mcfunctions#tick-json) documentation for further info.

<CodeHeader>BP/functions/tick.json</CodeHeader>
```json
{
  "values": [
    "entity_counter"
  ]
}
```

If using functions, your pack folder structure will be as follows:

<FolderView
	:paths="[
    'BP',
    'BP/functions',
    'BP/pack_icon.png',
    'BP/manifest.json',
    'BP/functions/entity_counter.mcfunction',
    'BP/functions/tick.json'
]"
></FolderView>

:::info NOTE:

The scoreboard names (in this case: 'count') may end up being used by other people. Appending ` _ ` and a set of randomly generated characters after would be a choice that reduces the probability of collisions. Similar technique can be employed for the ` .mcfunction ` filenames. Ex:
- ` count_0fe678 `
- ` entity_counter_0fe678.mcfunction `

:::
