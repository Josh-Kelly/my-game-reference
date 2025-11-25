// MAGIC ITEMS DATA

const magicItems = {
  "Adamantine Armor": {
    type: "Armor (medium or heavy, but no hide), uncommon",
    description:
      "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
  },
  "Alchemy Jug": {
    type: '<div class="item-name">Wondrous item, uncommon</div>',
    description: `
      <div>This ceramic jug has a stopper that fits snugly in its mouth and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty.</div>
      <div>You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.</div>
      <div>Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.</div>
      <div><table><tr><th>Liquid</th><th>Maximum Amount</th></tr>
      <tr><td>Acid</td><td>8 ounces</td></tr>
      <tr><td>Basic poison</td><td>1/2 ounce</td></tr>
      <tr><td>Beer</td><td>4 gallons</td></tr>
      <tr><td>Honey</td><td>1 gallon</td></tr>
      <tr><td>Mayonnaise</td><td>2 gallons</td></tr>
      <tr><td>Oil</td><td>1 quart</td></tr>
      <tr><td>Vinegar</td><td>2 gallons</td></tr>
      <tr><td>Water, fresh</td><td>8 gallons</td></tr>
      <tr><td>Water, salt</td><td>12 gallons</td></tr>
      <tr><td>Wine</td><td>1 gallon</td></tr>
      </table></div>
    `,
  },
  Ammunition: {
    type: "Weapon (any ammunition), uncommon (+1), rare (+2), or very rare (+3)",
    description:
      "You have a bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
  },
  "Amulet of Health": {
    type: "Wondrous item, rare (requires attunement)",
    description:
      "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.",
  },
  "Amulet of Proof against Detection and Location": {
    type: "Wondrous item, uncommon (requires attunement)",
    description:
      "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
  },
  "Amulet of the Planes": {
    type: "Wondrous item, very rare (requires attunement)",
    description:
      '<div>While wearing this amulet, you can use an action to name a location that you are fmiliar with on another plane of existence. Then make a DC 15 Intelligence check.</div><div>On a successful check, you cast the <span class="italics">plane shift</span> spell.</div><div>On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence.</div>',
  },
  "Animated Shield": {
    type: "Armor (shield), very rare (requires attunement)",
    description:
      "<div>While holding this shield, you can use a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free.</div><div>The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.</div>",
  },
  "Apparatus of Kwalish": {
    type: "Woundrous item, legendary",
    description: `
      <div>This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside.</div>
      <div>Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.</div>
      <div>The apparatus of Kwalish is a Large object with the following statistics:</div>
      <div><span class="bold">Armor Class</span>: 20</div>
      <div><span class="bold">Hit Points</span>: 200</div>
      <div><span class="bold">Speed</span>: 30 ft., swim 30 ft.</div>
      <div><span class="bold">Damage Immunities</span>: poison, psychic</div>
      <div>To be used as a vehicle, the apparatus requires one pilot. While the apparatus's hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.</div>
      <div>The apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.</div>
      <div>A creature in the compartment can use an action to move as many as two of the apparatus's levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of Kwalish Levers table</div>
      <div>
      <table><tr><th>Liquid</th><th>Maximum Amount</th></tr>
      <tr><td>1</td><td>Legs and tail extend, allowing the apparatus to walk and swim.</td><td>Legs and tail retract, reducing the apparatus's speed to 0 and making it unable to benefit from bonuses to speed.</td></tr>
      <tr><td>2</td><td>Forward window shutter opens.</td><td></td>Forward window shutter closes.</tr>
      <tr><td>3</td><td>Side window shutters open (two per side)</td><td>Side window shutters close (two per side)</td></tr>
      <tr><td>4</td><td>Two claws extend from the front sides of the apparatus.</td><td>The claws retract.</td></tr>
      <tr><td>5</td><td>Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. <span class="italics">Hit</span>: 7 (2d6) bludgeoning damage.</td><td>Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. <span class="italic">Hit</span>: the target is grappled (escape DC 15).</td></tr>
      <tr><td>6</td><td>The apparatus walks or swims forward.</td><td>The apparatus swims or walks backward.</td></tr>
      <tr><td>7</td><td>The apparatus turns 90 degrees left.</td><td>The apparatus turns 90 degrees right.</td></tr>
      <tr><td>8</td><td>Eyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet.</td><td>The light turns off.</td></tr>
      <tr><td>9</td><td>The apparatus sinks as much as 20 feet in liquid.</td><td>The apparatus rises up to 20 feet in liquid.</td></tr>
      <tr><td>10</td><td>The rear hatch unseals and opens.</td><td>The rear hatch closes and seals.</td></tr>
      </table>
      </div>.
      `,
  },
  "Armor, +1": {
    type: "Armor (light, medium, or heavy), rare (+1), very rare (+2), or legendary (+3)",
    description: "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity.",
  },
  "Armor, +2": {
    type: "Armor (light, medium, or heavy), rare (+1), very rare (+2), or legendary (+3)",
    description: "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity.",
  },
  "Armor, +3": {
    type: "Armor (light, medium, or heavy), rare (+1), very rare (+2), or legendary (+3)",
    description: "You have a bonus to AC while wearing this armor. The bonus is determined by its rarity.",
  },
  "Armor of Invulnerability": {
    type: "Armor (plate), legendary (requires attunement)",
    description:
      "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn.",
  },
  "Armor of Resistance": {
    type: "Armor (light, medium, or heavy), rare (requires attunement)",
    description: `
    <div>You have resistance to one type of damage while you wear this armor. The DM chooses the type or determines it randomly from the options below.</div>
    <div>
    <table><tr><th>d10</th><th>Damage Type</th></tr>
    <tr><td>1</td><td>Acid</td></tr>
    <tr><td>2</td><td>Cold</td></tr>
    <tr><td>3</td><td>Fire</td></tr>
    <tr><td>4</td><td>Force</td></tr>
    <tr><td>5</td><td>Lightning</td></tr>
    <tr><td>6</td><td>Necrotic</td></tr>
    <tr><td>7</td><td>Poison</td></tr>
    <tr><td>8</td><td>Psychic</td></tr>
    <tr><td>9</td><td>Radiant</td></tr>
    <tr><td>10</td><td>Thunder</td></tr>
    </table>
    </div>
    `,
  },
  "Armor of Vulnerability": {
    type: "Armor (plate), rare (requires attunement)",
    description: `
      <div>While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The DM choose sthe type or determines it randomly.</div>
      <div><span class="bold">Curse.</span> This armor is cursed, a fact that is revealed only when an <span class="italic">identify</span> spell is cast on the armor or you attune to it. Attuning to the armor curses you until yo uare targeted by the <span class="italic">remove curse</span> spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance).</div>
      `,
  },
  "Arrow-Catching Shield": {
    type: "Armor (shield), rare (requires attunement)",
    description:
      "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
  },
  "Arrow of Slaying": {
    type: "Weapon (arrow), very rare",
    description: `An <span class="italic">arrow of slaying</span> is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both <span class="italic">arrows of dragon slaying</span> and <span class="italic">arrows of blue dragon slaying</span>. If a creature belonging to the type, race, or group associated with an <span class="italic">arrow of slaying</span> takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.</div>
    <div>Once an <span class="italic">arrow of slaying</span> deals its extra damage to one creature, it becomes a nonmagical arrow.</div>
    <div>Other types of magic ammunition of this kind exist, such as <span class="italic">bolts of slaying</span> meant for a crossbow, though arrows are most common.
    `,
  },
  "Bag of Beans": {
    type: "Wondrous item, rare",
    description: `
    <div>Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains.</div>
    <div>If you dump the bag's contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried.</div>
    <div> If you remove a bean from the bag, plant it in dirt or sand, and the nwater it, the bean produces an effect 1 minute later from the ground where it was planted. The DM can choose an effect from the following table, determine it randomly, or create an effect.</div>
    <div>
    <table><tr><th>d100</th><th>Effect</th></tr>
    <tr><td>01</td><td>5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.</td></tr>
    <tr><td>02-10</td><td>A geyser erupts and spouts water, beer, berry juice, tea, vingegard, wine, or oil (DM's choice) 30 feet into the air for 1d12 rounds.</td></tr>
    <tr><td>11-20</td><td>A <span class="bold">treant</span> sprouts (see the <span class="italic">Monster Manual</span> for statistics). There's a 50 percent chance that the treant is chaotic evil and attacks.</td></tr>
    <tr><td>21-30</td><td>An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours.</td></tr>
    <tr><td>31-40</td><td>A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).</td></tr>
    <tr><td>41-50</td><td>1d6 + 6 <span class="bold">shriekers</span> sprout (see the <span class="italic">Monster Manual</span> for statistics).</td></tr>
    <tr><td>51-60</td><td>1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the DM's choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke.</td></tr>
    <tr><td>61-70</td><td>A hungry <span class="bold">bulette</span> (see the <span class="italic">Monster Manual</span> for statistics) burrows up and attacks.</td></tr>
    <tr><td>71-80</td><td>A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the DM's choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.</td></tr>
    <tr><td>81-90</td><td>A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest abiliy score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.</td></tr>
    <tr><td>91-99</td><td>A pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a <span class="bold">mummy lord</span> (see the <span class="italic">Monster Manual</span> for statistics). The pyramid is treated as the mummy lord's lair, and its sarcophagus contains treasure of the DM's choice.</td></tr>
    <tr><td>00</td><td>A giant beanstalk sprouts, growing to a height of the DM's choice. The top leads where the DM chooses, such as to a great view, a cloud giant's castle, or a different plane of existence.</td></tr>
    </table>
    </div>
    `,
  },
  "Bag of Devouring": {
    type: "Wondrosu item, very rare",
    description: `
    <div>This bag superficially resembles a <span class="italic">Monster Manual</span> buyt is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.</div>
    <div>The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal of vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creatureis placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.</div>
    <div>Inanimate objects can be stored in the bag, which can hold a cubic of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane.</div>
    <div>If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.</div>
    `,
  },
  "Bag of Holding": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.</div>
    <div>If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum of 1 minute), after which time the begin to suffocate.</div>
    <div>Placing a <span class="italic">bag of holding</span> inside an extradimensional space created by a <span class="italic">Heward's handy haversack</span>, <span class="italic">portable hole</span>, or similar item instantly destroyed both items and opens a gate to the Astral Plane. The gate originates where the one item was palced inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.</div>
    `,
  },
  "Bag of Tricks": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.</div>
    <div>You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag's color. See the <span class="italic">Monster Manual</span> for the creature's statistics.</div>
    <div>The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion approriate to its nature.</div>
    <div>Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.</div>
    <div>
    <div class="bold">Gray Bag of Tricks</div>
    <table><tr><th>d8</th><th>Creature</th></tr>
      <tr><td>1</td><td>Weasel</td></tr>
    <tr><td>2</td><td>Giant rat</td></tr>
    <tr><td>3</td><td>Badger</td></tr>
    <tr><td>4</td><td>Boar</td></tr>
    <tr><td>5</td><td>Panther</td></tr>
    <tr><td>6</td><td>Giant badger</td></tr>
    <tr><td>7</td><td>Dire wolf</td></tr>
    <tr><td>8</td><td>Giant elk</td></tr>
    </div>
    <table>
      <div class="bold">Rust Bag of Tricks</div>
    <table><tr><th>d8</th><th>Creature</th></tr>
    <tr><td>1</td><td>Rat</td></tr>
    <tr><td>2</td><td>Owl</td></tr>
    <tr><td>3</td><td>Mastiff</td></tr>
    <tr><td>4</td><td>Goat</td></tr>
    <tr><td>5</td><td>Giant goat</td></tr>
    <tr><td>6</td><td>Giant boar</td></tr>
    <tr><td>7</td><td>Lion</td></tr>
    <tr><td>8</td><td>Brown bear</td></tr>
    </div>
    </table>
    <table>
        <div class="bold">Tan Bag of Tricks</div>
    <table><tr><th>d8</th><th>Creature</th></tr>
    <tr><td>1</td><td>Jackal</td></tr>
    <tr><td>2</td><td>Ape</td></tr>
    <tr><td>3</td><td>Baboon</td></tr>
    <tr><td>4</td><td>Axe beak</td></tr>
    <tr><td>5</td><td>Black bear</td></tr>
    <tr><td>6</td><td>Giant weasel</td></tr>
    <tr><td>7</td><td>Giant hyena</td></tr>
    <tr><td>8</td><td>Tiger</td></tr>
    </div>
    </table>
    `,
  },
  "Bead of Force": {
    type: "Wondrous item, rare",
    description: `
    <div>This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 <span class="italic">beads of force</span> are found together.</div>
    <div>You can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No attack or other effect can.</div>
    <div>An enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.</div>
    `,
  },
  "Belt of Dwarvenkind": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>While wearing this belt, you gain the following benefits:</div>
    <div>• Your Constitution score increases by 2, to a maximum of 20.</div>
    <div>• You have advantage on Charisma (Persuasion) checks made to interact with dwarves.</div>
    <div>In addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.</div>
    <div>If you aren't a dwarf, you gain the following additional benefits while wearing the belt:</div>
    <div>• You have advantage on saving throws against poison, and you have resistance against poison damage.</div>
    <div>• You have darkvision out to a range of 60 feet.</div>
    <div>• You can speak, read, and write Dwarvish.</div>
    `,
  },
  "Belt of Giant Strength": {
    type: "Wondrous item, rarity varies (requires attunement)",
    description: `
    <div>While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no effect on you.</div>
    <div>Six varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The <span class="italic">belt of stone giant strength</span> and the <span class="italic">belt of frost giant strength</span> look different, but they have the same effect.</div>
    <table><tr><th>Type</th><th>Strength</th><th>Rarity</th></tr>
    <tr><td>Hill giant</td><td>21</td><td>Rare</td></tr>
    <tr><td>Stone/frost giant</td><td>23</td><td>Very Rare</td></tr>
    <tr><td>Fire giant</td><td>25</td><td>Very Rare</td></tr>
    <tr><td>Cloud giant</td><td>27</td><td>Legendary</td></tr>
    <tr><td>Storm giant</td><td>29</td><td>Legendary</td></tr>
    `,
  },
  "Berserker Axe": {
    type: "Weapon (any axe), rare (requires attunement)",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.</div>
    <div><span class="bold">Curse.</span> This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.</div>
    <div>Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures wtihin 60 feet of you that you can see or hear.</div>
    `,
  },
  "Boots of Elvenkind": {
    type: "Wondrous item, uncommon",
    description: `While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.`,
  },
  "Boots of Levitation": {
    type: "Wondrous item, rare (requires attunement)",
    description: `While you wear these boots, you can use an action to cast the <span class="italic">levitate</span> spell on yourself at will.`,
  },
  "Boots of Speed": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>While you wear these boots, you can use a bonus action and click the boots' heals together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.</div>
    <div>When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.</div>
    `,
  },
  "Boots of Striding and Springing": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.</div>`,
  },
  "Boots of the Winterlands": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `
    <div>These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:</div>
    <div>• You have resistance to cold damage.</div>
    <div>• You ignore difficult terrain created by ice or snow.</div>
    <div>• You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.</div>
    `,
  },
  "Bowl of Commanding Water Elementals": {
    type: "Wondrous item, rare",
    description: `
    <div>While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the <span class="italic">conjure elemental</span> spell. The bowl can't be used this way again until the next dawn.</div>
    <div>The bow is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.</div>
    `,
  },
  "Bracers of Archery": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.`,
  },
  "Bracers of Defense": {
    type: "Wondrous item, rare (requires attunement)",
    description: `While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.`,
  },
  "Brazier of Commanding Fire Elementals": {
    type: "Wondrous item, rare",
    description: `
    <div>While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a fire elemental, as if you had cast the <span class="italic">conjure elemental</span> spell. The brazier can't be used this way again until the next dawn.</div>
    <div>The brazier weighs about 5 pounds.</div>
    `,
  },
  "Brooch of Shielding": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the <span class="italic">magic missile</span> spell.`,
  },
  "Broom of Flying": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `
    <div>This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering where you land.</div>
    <div>You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.</div>
    `,
  },
  "Candle of Invocation": {
    type: "Wondrous item, very rare (requires attunement)",
    description: `
    <div>This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the <span class="italic">detect evil and good</span> spell. The DM chooses the god and associated alignment or deterines the alignment or determines the alignment randomly.</div>
    <div>
    <table><tr><th>d20</th><th>Alignment</th></tr>
    <tr><td>1-2</td><td>Chaotic evil</td></tr>
    <tr><td>3-4</td><td>Chaotic neutral</td></tr>
    <tr><td>5-7</td><td>Chaotic good</td></tr>
    <tr><td>8-9-14</td><td>Neutral evil</td></tr>
    <tr><td>10-11</td><td>Neutral</td></tr>
    <tr><td>12-13</td><td>Neutral good</td></tr>
    <tr><td>14-15</td><td>Lawful evil</td></tr>
    <tr><td>16-17</td><td>Lawful neutral</td></tr>
    <tr><td>18-20</td><td>Lawful good</td></tr>
    </table>
    </div>
    <div>The candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time.</div>
    <div>While lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack roll,s saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st-level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot.</div>
    <div>Alternatively, when you light the candle for the first time, you can cast the <span class="italic">gate</span> spell with it. Doing so destroys the candle.</div>
    `,
  },
  "Cap of Water Breathing": {
    type: "Wondrous item, uncommon",
    description: `While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater.`,
  },
  "Cape of the Mountebank": {
    type: "Wondrous item, rare",
    description: `
    <div>This cape smells faintly of brimstone. While wearing it, yo ucan use it to cast the <span class="italic">dimension door</span> spell as an action. This property of the cape can't be used again until the next dawn.</div>
    <div>When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.</div>
    `,
  },
  "Carpet of Flying": {
    type: "Wondrous item, very rare",
    description: `
    <div>You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.</div>
    <div>Four sizes of <span class="italic">carpet of flying</span> exist, each with a different flying speed and carrying capacity.</div>
    <table><tr><th>d100</th><th>Size</th><th>Capacity</th><th>Flying Speed</th></tr>
    <tr><td>01-50</td><td>Small</td><td>200 pounds</td><td>30 feet</td></tr>
    <tr><td>51-80</td><td>Medium</td><td>400 pounds</td><td>40 feet</td></tr>
    <tr><td>81-95</td><td>Large</td><td>800 pounds</td><td>50 feet</td></tr>
    <tr><td>96-100</td><td>Huge</td><td>1,200 pounds</td><td>60 feet</td></tr>
    `,
  },
  "Censer of Controlling Air Elementals": {
    type: "Wondrous item, rare",
    description: `
    <div>This 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.</div>
    <div>While incense is burning in this censer, you can use an action to speak the censer's command word and summon an air elemental, as if you had cast the conjure elemental spell. The censer can't be used this way again until the next dawn.</div>
    `,
  },
  "Chime of Opening": {
    type: "Wondrous item, rare",
    description: `
    <div>This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens.</div>
    <div>The chime can be used ten times. After the tenth time, it cracks and becomes useless.</div>`,
  },
  "Circlet of Blasting": {
    type: "Wondrous item, uncommon",
    description: `While wearing this circlet, you can use an action to cast the scorching ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.`,
  },
  "Cloak of Arachnida": {
    type: "Wondrous item, very rare (requires attunement)",
    description: `
    <div>This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:</div>
    <div>• You have resistance to poison damage.</div>
    <div>• You have a climbing speed equal to your walking speed.</div>
    <div>• You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.</div>
    <div>• You can't be caught in webs of any sort and can move through webs as if they were difficult terrain.</div>
    <div>• You can use an action to cast the Web spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can't be used again until the next dawn.</div>
    `,
  },
  "Cloak of Displacement": {
    type: "Wondrous item, rare (requires attunement)",
    description: `While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.`,
  },
  "Cloak of Elvenkind": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.`,
  },
  "Cloak of Invisibility": {
    type: "Wondrous item, legendary (requires attunement)",
    description: `
    <div>While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action.</div>
    <div>Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours, the cloak goes unused, it regains 1 hour of duration.</div>
    `,
  },
  "Cloak of Protection": {
    type: "Wondrouys item, uncommon (requires attunement)",
    description: `You gain a +1 bonus to AC and saving throws while you wear this cloak.`,
  },
  "Cloak of the Bat": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.</div>
    <div>While wearing the cloak in an area of dim light or darkness, you can use your action to cast <span class="italic">polymorph</span> on yourself, transforming into a bat. While you are in the form of the bat, you retina your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.</div>
    `,
  },
  "Cloak of the Manta Ray": {
    type: "Wondrous item, uncommon",
    description: `While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.`,
  },
  "Crystal Ball": {
    type: "Wondrous item, very rare or legendary (requires attunement)",
    description: `
    <div>The typical <span class="italic">crystal ball</span>, a very rare item, is about 6 inches in diameter. While touching it, you can cast the <span class="italic">scrying</span> spell (save DC 17) with it.</div>
    <div>The following <span class="italic">crystal ball</span> variants are legendary items and have additional properties.</div>
    <div><span class="bold">Crystal Ball of Mind Reading.</span> You can use an action to cast the <span class="italic">detect thoughts</span> spell (save DC 17) while you are scrying with the <span class="italic">crystal ball</span>, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this <span class="italic">detect thoughts</span> to maintain it during its duration, but it ends if <span class="italic">scrying</span> ends.</div>
    <div><span class="bold">Crystal Ball of Telepathy.</span> While scrying with the <span class="italic">crystal ball</span>, you can communicate telepathically with creatures yo ucan see within 30 feet of the spell's sensor. You can also use an action to cast the <span class="italic">suggestion</span> spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this <span class="italic">suggestion</span> to maintain it during its duration, but it ends if <span class="italic">scrying</span> ends. Once used, the <span class="italic">suggestion</span> power of the <span class="italic">crystal ball</span> can't be used again until the next dawn.</div>
    <div><span class="bold">Crystal Ball of True Seeing.</span> While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.</div>
    `,
  },
  "Cube of Force": {
    type: "Wondrous item, legendary",
    description: `
    <div>This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.</div>
    <div>You can use an action to press one of the cube's faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect.</div>
    <div>If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of charges. You can change the barrier's effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.</div>
    <div>If your movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains.</div>
    <div>
    <table><tr><th>Face</th><th>Charges</th><th>Effect</th></tr>
    <tr><td>1</td><td>1</td><td>Gases, wind, and fog can't pass through the barrier.</td></tr>
    <tr><td>2</td><td>2</td><td>Nonliving matter can't pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.</td></tr>
    <tr><td>3</td><td>3</td><td>Living matter can't pass through the barrier.</td></tr>
    <tr><td>4</td><td>4</td><td>Spell effects can't pass through the barrier.</td></tr>
    <tr><td>5</td><td>5</td><td>Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.</td></tr>
    <tr><td>6</td><td>0</td><td>The barrier deactivates.</td></tr>
    </table>
    </div>
    `,
  },
  "Cubic Gate": {
    type: "Wondrous item, legendary",
    description: `
    <div>This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the DM.</div>
    <div>You can use an action to press one side of the cube to cast the <span class="italic">gate</span> spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the <span class="italic">plane shift</span> spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.</div>
    <div>The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.</div>
    `,
  },
  "Daern's Instant Fortress": {
    type: "Wondrous item, rare",
    description: `
    <div>You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.</div>
    <div>The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the <span class="italic">knock</span> spell and similar magic, such as that of a <span class="italic">chime of opening</span></div>
    <div>Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.</div>
    <div>The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a <span class="italic">wish</span> spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of <span class="italic">wish</span> causes the roof, the door, or one wall to regain 50 hit points.</div>
    `,
  },
  "Dagger of Venom": {
    type: "Waepon (dagger), rare",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon.</div>
    <div>You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.</div>
    `,
  },
  "Dancing Sword": {
    type: "Weapon (any sword), very rare (requires attunement)",
    description: `
    <div>You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.</div>
    <div>While the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.</div>
    <div>After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or more more than 30 feet away from it.</div>
    `,
  },
  "Decanter of Endless Water": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.</div>
    <div>You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:</div>
    <div>• "Stream" produces 1 gallon of water.</div>
    <div>• "Fountain" produces 5 gallons of water.</div>
    <div>• "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.</div>
    `,
  },
  "Deck of Illusions": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 - 1 cards.</div>
    <div>The magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.</div>
    <div>An illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature (as presented in the <span class="italic">Monster Manual</span> except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent.</div>
    <div>The illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card dsiappears, and that card can't be used again.</div>
    <div>
    <table><tr><th>Playing Card</th><th>Illusion</th></tr>
    <tr><td>Ace of Hearts</td><td>Red dragon</td></tr>
    <tr><td>King of Hearts</td><td>Knight and four guards</td></tr>
    <tr><td>Queen of Hearts</td><td>Succubus or incubus</td></tr>
    <tr><td>Jack of Hearts</td><td>Druid</td></tr>
    <tr><td>Ten of Hearts</td><td>Cloud giant</td></tr>
    <tr><td>Nine of Hearts</td><td>Ettin</td></tr>
    <tr><td>Eight of Hearts</td><td>Bugbear</td></tr>
    <tr><td>Two of Hearts</td><td>Goblin</td></tr>
    <tr><td>Ace of Diamonds</td><td>Beholder</td></tr>
    <tr><td>King of Diamonds</td><td>Archmage and mage apprentice</td></tr>
    <tr><td>Queen of Diamonds</td><td>Night hag</td></tr>
    <tr><td>Jack of Diamonds</td><td>Assassin</td></tr>
    <tr><td>Ten of Diamonds</td><td>Fire giant</td></tr>
    <tr><td>Nine of Diamonds</td><td>Ogre mage</td></tr>
    <tr><td>Eight of Diamonds</td><td>Gnoll</td></tr>
    <tr><td>Two of Diamonds</td><td>Kobold</td></tr>
    <tr><td>Ace of Spades</td><td>Lich</td></tr>
    <tr><td>King of Spades</td><td>Priest and two acolytes</td></tr>
    <tr><td>Queen of Spades</td><td>Medusa</td></tr>
    <tr><td>Jack of Spades</td><td>Veteran</td></tr>
    <tr><td>Ten of Spades</td><td>Frost giant</td></tr>
    <tr><td>Nine of Spades</td><td>Troll</td></tr>
    <tr><td>Eight of Spades</td><td>Hobgoblin</td></tr>
    <tr><td>Two of Spades</td><td>Goblin</td></tr>
    <tr><td>Ace of Clubs</td><td>Iron golem</td></tr>
    <tr><td>King of Clubs</td><td>Bandit captain and three bandits</td></tr>
    <tr><td>Queen of Clubs</td><td>Erinyes</td></tr>
    <tr><td>Jack of Clubs</td><td>Berserker</td></tr>
    <tr><td>Ten of Clubs</td><td>Hill giant</td></tr>
    <tr><td>Nine of Clubs</td><td>Ogre</td></tr>
    <tr><td>Eight of Clubs</td><td>Orc</td></tr>
    <tr><td>Two of Clubs</td><td>Kobold</td></tr>
    <tr><td>Jokers(2)</td><td>You (the deck's owner)</td></tr>
    </table>
    </div>
    `,
  },
  "Deck of Many Things": {
    type: "Wondrous item, legendary",
    description: `
    <div>Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.</div>
    <div>Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.</div>
    <div>Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it impossible to draw the same card twice.</div>
        <div>
    <table><tr><th>Playing Card</th><th>Illusion</th></tr>
    <tr><td>Ace of Diamonds</td><td>Vizier*</td></tr>
    <tr><td>King of Diamonds</td><td>Sun</td></tr>
    <tr><td>Queen of Diamonds</td><td>Moon</td></tr>
    <tr><td>Jack of Diamonds</td><td>Star</td></tr>
    <tr><td>Two of Diamonds</td><td>Comet*</td></tr>
    <tr><td>Ace of Hearts</td><td>The Fates*</td></tr>
    <tr><td>King of Hearts</td><td>Throne</td></tr>
    <tr><td>Queen of Hearts</td><td>Key</td></tr>
    <tr><td>Jack of Hearts</td><td>Knight</td></tr>
    <tr><td>Two of Hearts</td><td>Gem*</td></tr>
    <tr><td>Ace of Clubs</td><td>Talons*</td></tr>
    <tr><td>King of Clubs</td><td>The Void</td></tr>
    <tr><td>Queen of Clubs</td><td>Flames</td></tr>
    <tr><td>Jack of Clubs</td><td>Skull</td></tr>
    <tr><td>Two of Clubs</td><td>Idiot*</td></tr>
    <tr><td>Ace of Spades</td><td>Donjon*</td></tr>
    <tr><td>King of Spades</td><td>Ruin</td></tr>
    <tr><td>Queen of Spades</td><td>Euryale</td></tr>
    <tr><td>Jack of Spades</td><td>Rogue</td></tr>
    <tr><td>Two of Spades</td><td>Balance*</td></tr>
    <tr><td>Joker (with TM)</td><td>Fool*</td></tr>
    <tr><td>Joker (without TM)</td><td>Jester*</td></tr>
    <tr><td colspan="2">*Found only in a deck with twenty-two cards</td></tr>
    </table>
    </div>
    `,
  },
  Defender: {
    type: "Weapon (any sword), legendary (requires attunement)",
    description: `
    <div>You gain a +3 bonus to attack and damage rolls made with this magic weapon.</div>
    <div>The first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 to gain +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.</div>
    `,
  },
  "Demon Armor": {
    type: "Armor (plate), very rare (requires attunement)",
    description: `
    <div>While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into amgic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8.</div>
    <div><span class="bold">Curse.</span> Once you don this cursed armor, you can't doff it unless you are targeted by the <span class="italic">remove curse</span> spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.</div>
    `,
  },
  "Dimensional Shackles": {
    type: "Wondrous item, rare",
    description: `
    <div>You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing through an interdimensional portal.</div>
    <div>You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles.</div>
    `,
  },
  "Dragon Scale Mail": {
    type: "Armor (scale mail), very rare (requires attunement)",
    description: `
    <div>Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued.</div>
    <div>While wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath wapons of dragons, and you have resistance to one damage type that is determined byu the kind of dragon that provided the scales (see the table).</div>
    <div>Additionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.</div>
    <div>
    <table><tr><th>Dragon</th><th>Resistance</th><th>|</th><th>Dragon</th><th>Resistance</th></tr>
    <tr><td>Black</td><td>Acid</td><td>|</td><td>Gold</td><td>Fire</td></tr>
    <tr><td>Blue</td><td>Lightning</td><td>|</td><td>Green</td><td>Poison</td></tr>
    <tr><td>Brass</td><td>Fire</td><td>|</td><td>Red</td><td>Fire</td></tr>
    <tr><td>Bronze</td><td>Lightning</td><td>|</td><td>Silver</td><td>Cold</td></tr>
    <tr><td>Copper</td><td>Acid</td><td>|</td><td>White</td><td>Cold</td></tr>
    </table>
    </div>
    `,
  },
  "Dragon Slayer": {
    type: "Weapon (any sword), rare",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon.</div>
    <div>When you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, "dragon" refers to any creature with the dragon type, including dragon turtles and wyverns.</div>
    `,
    image: "",
  },
  Driftglobe: {
    type: "Wondrous item, uncommon",
    description: `
    <div>This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the <span class="italic">light</span> or <span class="italic">daylight</span> spell. Once used, the <span class="italic">daylight</span> effect can't be used again until the next dawn.</div>
    <div>You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.</div>
    `,
  },
  "Dust of Disappearance": {
    type: "Wondrous item, uncommon",
    description: `Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.`,
  },
  "Dust of Dryness": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.</div>
    <div>Someone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dus absorbed. Doing so ends the pellet's magic.</div>
    <div>An elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one.</div>
    `,
  },
  "Dust of Sneezing and Choking": {
    type: "Wondrous item, uncommon",
    description: `
    <div>Found in a small container, this powder resembles very fine sand. It appears to be <span class="italic">dust of disappearance</span>, and an <div>identify</div> spell reveals it to be such. There is enough of it for one use.</div>
    <div>When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The <span class="italic">lesser restoration</span> spell can also end the effect on a creature.</div>
    `,
  },
  "Dwarven Plate": {
    type: "Armor (plate), very rare",
    description: `While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.`,
  },
  "Dwarven Thrower": {
    type: "Weapon (warhammer), very rare (requires attunement by a dwarf)",
    description: `You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown proeprty with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.`,
  },
  "Efreeti Bottle": {
    type: "Wondrous item, very rare",
    description: `
    <div>This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you. See the <span class="italic">Monster Manual</span> for the efreeti's statistics.</div>
    <div>The first time the bottle is opened, the DM rolls to determine what happens.</div>
    <div>
    <table><tr><th>d100</th><th>Effect</th></tr>
    <tr><td>01-10</td><td>The efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic.</td></tr>
    <tr><td>11-90</td><td>The efreeti serves you for 1 hour, doing as you command. Then the efreeti returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic</td></tr>
    <tr><td>91-00</td><td>The efreeti can cast the <span class="italic">wish</span> spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic.</td></tr>
    </table>
    </div>
    `,
  },
  "Efreeti Chain": {
    type: "Armor (chain mail), legendary (requires attunement)",
    description: `While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rocks as if it were solid ground.`,
  },
  "Elemental Gem": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you cast the <span class="italic">conjure elemental</span> spell, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.</div>
    <div>
    <table>
    <tr><th>Gem</th><th>Summoned Elemental</th></tr>
    <tr><td>Blue sapphire</td><td>Air elemental</td></tr>
    <tr><td>Yellow diamond</td><td>Earth elemental</td></tr>
    <tr><td>Red corundum</td><td>Fire elemental</td></tr>
    <tr><td>Emerald</td><td>Water elemental</td></tr>
    </table>
    </div>
    `,
  },
  "Elixir of Health": {
    type: "Potion, rare",
    description: `When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.`,
  },
  "Elven Chain": {
    type: "Armor (chain shirt), uncommon",
    description: `
    <div>You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.</div>
    `,
  },
  "Eversmoking Bottle": {
    type: "Wondrous item, uncommon",
    description: `
    <div>Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stpper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.</div>
    <div>The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.</div>
    `,
  },
  "Eyes of Charming": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the <span class="italic">charm person</span> spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.`,
  },
  "Eyes of Minute Seeing": {
    type: "Wondrous item, uncommon",
    description: `These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searing an area or studying an object within that range.`,
  },
  "Eyes of the Eagle": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.`,
  },
  "Figurine of Wondrous Power": {
    type: "Wondrous item, rarity by figurine",
    description: `
    <div>A <span class="italic">figurine of wondrous power</span> is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.</div>
    <div>The creature is friendly to you and your companions. It understands your language and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the <span class="italic">Monster Manual</span> for the creature's statistics, except for the giant fly.</div>
    <div>The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.</div>
    <div><span class="bold">Bronze Griffon (Rare)</span>. This bronze statuette is of a griffon rampant. It can become a griffon for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed.</div>
    <div><span class="bold">Ebony Fly (Rare)</span>. This ebony statuette is carved in the likeness of a horsefly. It can become a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 days have passed.</div>
    <div><span class="bold">Golden Lions (Rare)</span>. These gold statuettes of lions are always created in pairs. You can use one figurine or both simultaneously. Each can become a lion for up to 1 hour. Once a lion has been used, it can't be used again until 7 days have passed.</div>
    <div><span class="bold">Ivory Goats (Rare)</span>. These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows:</div>
    <div>• The <span class="italic">goat of traveling</span> can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.</div>
    <div>• The <span class="italic">goat of travail</span> becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.</div>
    <div>• The <span class="italic">goat of terror</span> becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a <span class="italic">+1 lance</span>, and the other becomes a <span class="italic">+2 longsword</span>. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the efect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.</div>
    <div><span class="bold">Marble Elephant (Rare)</span>. This marble statuette is about 4 inches high and long. It can become an elephant for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed.</div>
    <div><span class="bold">Obsidiant Steed (Very Rare)</span>. This polished obsidian horse can become a nightmare for up to 24 hours. The nightmare fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed.</div>
    <div>If you have a good alignment, the figure has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to its figurine form.</div>
    <div><span class="bold">Onys Dog (Rare)</span>. This onyx statuette of a dog can become a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed.</div>
    <div><span class="bold">Serpentine Owl (rare)</span>. This serpentine statuette of an owl can become a giant owl for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.</div>
    <div><span class="bold">Silver Raven (Uncommon)</span>. This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the <span class="italic">animal messenger</span> spell on it at will.</div>
    `,
  },
  "Flame Tongue": {
    type: "Weapon (any sword), rare (requires attunement)",
    description: `You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.`,
  },
  "Folding Boat": {
    type: "Wondrous item, rare",
    description: `
    <div>This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.</div>
    <div>Once command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.</div>
    <div>The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steeting oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.</div>
    <div>When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.</div>
    <div>The third command word causes the <span class="italic">folding boat</span> to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.</div>
    `,
  },
  "Frost Brand": {
    type: "Weapon (any sword), very rare (requires attunement)",
    description: `
    <div>When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.</div>
    <div>In freezing temperatures, the balde sheds bright light in a 10-foot radius and dim light for an additional 10 feet.</div>
    <div>When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.</div>
    `,
  },
  "Gauntlets of Ogre Power": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `Your strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher.`,
  },
  "Gem of Brightness": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:</div>
    <div>• The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.</div>
    <div>• The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</div>
    <div>• The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.</div>
    <div>When all the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.</div>
    `,
  },
  "Gem of Seeing": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem.</div>
    <div>The gem regains 1d3 expended charges daily at dawn.</div>
    `,
  },
  "Giant Slayer": {
    type: "Weapon (any axe or sword), rare",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon.</div>
    <div>When you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the prupose of this weapon, "giant" refers to any creature with the giant type, including ettins and trolls.</div>
    `,
  },
  "Glamoured Studded Leather": {
    type: "Armor (studded leather), rare",
    description: `While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor.`,
  },
  "Gloves of Missile Snaring": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.`,
  },
  "Gloves of Swimming and Climbing": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.`,
  },
  "Gloves of Thievery": {
    type: "Wondrous item, uncommon",
    description: `These gloves are invisible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.`,
  },
  "Goggles of Night": {
    type: "Wondrous item, uncommon",
    description: `While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.`,
  },
  "Hammer of Thunderbolts": {
    type: "Weapon (maul), legendary",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon.</div>
    <div><span class="bold">Giant's Bane (Requires Attunement)</span>. You must be wearing a <span class="italic">belt of giant strength</span> (any variety) and <span class="italic">gauntlets of ogre power</span> to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die.</div>
    <div>The hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constituon saving throw or be stunned until the end of your next turn. The hammer regains 1d4 + 1 expended charges daily at dawn.</div>
    `,
  },
  "Hat of Disguise": {
    type: "Wondrous item uncommon (requires attunement)",
    description: `While wearing this hat, you can use an action to cast the <span class="italic">disguise self</span> spell from it at will. The spell ends if the hat is removed.`,
  },
  "Headband of Intellect": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `Your intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher.`,
  },
  "Helm of Brilliance": {
    type: "Wondrous item, very rare (requires attunement)",
    description: `
    <div>This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.</div>
    <div>You gain the following benefits while wearing it:</div>
    <div>• You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: <span class="italic">daylight</span> (opal), <span class="italic">fireball</span> (fire opal), <span class="italic">prismatic spray</span> (diamond), or <span class="italic">wall of fire</span> (ruby). The gem is destroyed when the spell is cast and disappears from the helm.</div>
    <div>• As long as it has at least one diamond, the helm emits dim light in a 300-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.</div>
    <div>• As long as the helm has at least one ruby, you have resistance to fire damage.</div>
    <div>• As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.</div>
    <div>Roll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must suceed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are destroyed.</div>
    `,
  },
  "Helm of Comprehending Languages": {
    type: "Wondrous item, uncommon",
    description: `While wearing this helm, you can use an action to cast the <span class="italic">comprehend languages</span> spell from it at will.`,
  },
  "Helm of Telepathy": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `
    <div>While wearing this helm, you can use an action to cast the <span class="italic">detect thoughts</span> spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply - using a bonus action to do so - while your focus on it continues.</div>
    <div>While focusing on a creature with <span class="italic">detect thoughts</span>, you can use an action to cast the <span class="italic">suggestion</span> spell (save DC 13) from the helm on that creature. Once used, the <span class="italic">suggestion</span> property can't be used again until the next dawn.</div>
    `,
  },
  "Helm of Teleportation": {
    type: "Wondrous item, rare (requires attunement)",
    description: `THis helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the <span class="italic">teleport</span> spell from it. The helm regains 1d3 expended charges daily at dawn.`,
  },
  "Heward's Handy Haversack": {
    type: "Wondrous item, rare",
    description: `
    <div>This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.</div>
    <div>Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.</div>
    <div>The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.</div>
    <div>Placing the haversack inside an extradimensional space created by a <span class="italic">bag of holding</span>, <span class="italic">portable hold</span>, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.</div>
    `,
  },
  "Holy Avenger": {
    type: "Weapon (any sword), legendary (requires attunement by a paladin)",
    description: `
    <div>You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.</div>
    <div>While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.</div>
    `,
  },
  "Horn of Blasting": {
    type: "Wondrous item, rare",
    description: `
    <div>You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.</div>
    <div>Each use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.</div>
    `,
  },
  "Horn of Valhalla": {
    type: "Wondrous item, rare (silver or brass), very rare (bronze), or legendary (iron)",
    description: `
    <div>You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics from the <span class="italic">Monster Manual</span>. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.</div>
    <div>Four types of <span class="italic">horn of Valhalla</span> are known to exist, each made of a different metal. The horn's type determines how many berserkers answer its summons, as well as the requirement for its use. The DM chooses the horn's type or determines it randomly.</div>
    <div>
    <table>
    <tr><th>d100</th><th>Horn Type</th><th>Berserkers Summoned</th><th>Requirement</th>
    <tr><td>01-40</td><td>Silver</td><td>2d4 + 2</td><td>None</td></tr>
    <tr><td>41-75</td><td>Brass</td><td>3d4 + 3</td><td>Proficiency with all simple weapons</td></tr>
    <tr><td>76-90</td><td>Bronze</td><td>4d4 + 4</td><td>Proficiency with all medium armor</td></tr>
    <tr><td>91-00</td><td>Iron</td><td>5d4 + 5</td><td>Proficiency with all martial weapons</td></tr>
    <div>If you blow the horn without meeting its requirements, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.</div>
    </table>
    </div>
    `,
  },
  "Horseshoes of a Zephyr": {
    type: "Wondrous item, very rare",
    description: `These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a hrose or similar creature, they allow the creature move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march.`,
  },
  "Horseshoes of Speed": {
    type: "Wondrous item, rare",
    description: `These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet.`,
  },
  "Immovable Rod": {
    type: "Rod, uncommon",
    description: `This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod ot deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.`,
  },
  "Instrument of the Bards": {
    type: "Wondrous item, rarity varies (requires attunement by a bard)",
    description: `
    <div>An <span class="italic">instrument of the bards</span> is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.</div>
    <div>You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.</div>
    <div>When you use the instrument to cast a spell that causes targets to become charmed on a failed save, the targets have disadvantage on the saving throw. This effect applies whether you are using the instrument as the source of the spell or as a spellcasting focus.</div>
    <div>
    <table>
    <tr><th>Instrument</th><th>Rarity</th><th>Spells</th></tr>
    <tr><td>All</td><td>-</td><td><span class="italic">fly, invisibility, levitate, protection from evil and good</span>, plus the spells listed for the particular instrument</td></tr>
    <tr><td>Anstruth harp</td><td>Very rare</td><td><span class="italic">control weather, cure wounds</span> (5th level), <span class="italic">wall of thorns</span></td></tr>
    <tr><td>Canaith mandolin</td><td>Rare</td><td><span class="italic">cure wounds</span> (3rd level), <span class="italic">dispel magic, protection from energy</span> (lightning only)</td></tr>
    <tr><td>Cli lyre</td><td>Rare</td><td><span class="italic">stone shape, wall of fire, wind wall</span></td></tr>
    <tr><td>Doss lute</td><td>Uncommon</td><td><span class="italic">animal friendship, protection from energy</span> (fire only), <span class="italic">protection from poison</span></td></tr>
    <tr><td>Fochlucan bandore</td><td>Uncommon</td><td><span class="italic">entangle, faerie fire, shillelagh, speak with animals</span></td></tr>
    <tr><td>Mac-Fuirmidh cittern</td><td>Uncommon</td><td><span class="italic">barkskin, cure wounds, fog cloud</span></td></tr>
    <tr><td>Ollamh harp</td><td>Legendary</td><td><span class="italic">confusion, control weather, fire storm</span></td></tr>
    </table>
    </div>
    `,
  },
  "Ioun Stone": {
    type: "Wondrous item, rarity varies (requires attunement)",
    description: `
    <div>An <span class="italic">Ioun stone</span> is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of <span class="italic">Ioun stone</span> exist, each type a distinct combination of shape and color.</div>
    <div>When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet an confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.</div>
    <div>A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.</div>
    <div><span class="bold">Absorption (Very Rare)</span>. While this pale lavendar ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you.</div>
    <div>Once the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targete by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.</div>
    <div><span class="bold">Agility (Very Rare)</span>. Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head.</div>
    <div><span class="bold">Awareness (Rare)</span>. You can't be surprised while this dark blue rhomboid orbits your head.</div>
    <div><span class="bold">Fortitude (Very Rare)</span>. Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.</div>
    <div><span class="bold">Greater Absorption (Legendary)</span>. While this marbled lavendar and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you.</div>
    <div>Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.</div>
    <div><span class="bold">Insight (Very Rare)</span>. Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.</div>
    <div><span class="bold">Intellect (Very Rare)</span>. Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.</div>
    <div><span class="bold">Leadership (Very rare)</span>. Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.</div>
    <div><span class="bold">Mastery (Legendary)</span>. Your proficiency bonus increases by 1 while this pale green prism orbits your head.</div>
    <div><span class="bold">Protection (Rare)</span>. You gain a +1 bonus to AC while this dusty rose prism orbits your head.</div>
    <div><span class="bold">Regeneration (Legendary)</span>. You regain 15 hit points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point.</div>
    <div><span class="bold">Reserve (Rare)</span>. This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains 1d4 - 1 levels of stored spells chosen by the DM.</div>
    <div>Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stoen can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.</div>
    <div>While this stone orbits your head, yo ucan cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer storied in it, freeing up space.</div>
    <div><span class="bold">Strength (Very Rare)</span>. Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.</div>
    <div><span class="bold">Sustenance (Rare)</span>. You don't need to eat or drink while this clear spindle orbits your head.</div>
    `,
  },
  "Iron Bands of Bilarro": {
    type: "Wondrous item, rare",
    description: `
    <div>This rusty iron sphere measrues 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.</div>
    <div>Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.</div>
    <div>A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.</div>
    <div>Once the bands are used they can't be used again until the next dawn.</div>
    `,
  },
  "Iron Flask": {
    type: "Wondrous item, legendary",
    description: `
    <div>This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.</div>
    <div>You can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.</div>
    <div>An <span class="italic">identify</span> reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly.</div>
    <div>
        <table>
    <tr><th>d100</th><th>Contents</th><th>d100</th><th>Contents</th></tr>
    <tr><td>01-50</td><td>Empty</td><td>77-78</td><td>Elemental (any)</td></tr>
    <tr><td>51</td><td>Arcanaloth</td><td>79</td><td>Githyanki knight</td></tr>
    <tr><td>52</td><td>Cambion</td><td>80</td><td>Githzerai zerth</td></tr>
    <tr><td>53-54</td><td>Dao</td><td>81-82</td><td>Invisible stalker</td></tr>
    <tr><td>55-57</td><td>Demon (type 1)</td><td>83-84</td><td>Marid</td></tr>
    <tr><td>58-60</td><td>Demon (type 2)</td><td>85-86</td><td>Mezzoloth</td></tr>
    <tr><td>61-62</td><td>Demon (type 3)</td><td>87-88</td><td>Night hag</td></tr>
    <tr><td>63-64</td><td>Demon (type 4)</td><td>89-90</td><td>Nycaloth</td></tr>
    <tr><td>65</td><td>Demon (type 5)</td><td>91</td><td>Planetar</td></tr>
    <tr><td>66</td><td>Demon (type 6)</td><td>92-93</td><td>Salamander</td></tr>
    <tr><td>67</td><td>Deva</td><td>94-95</td><td>Slaad (any)</td></tr>
    <tr><td>68-69</td><td>Devil (greater)</td><td>96</td><td>Solar</td></tr>
    <tr><td>70-72</td><td>Devil (lesser)</td><td>97-98</td><td>Succubus/incubus</td></tr>
    <tr><td>73-74</td><td>Djinni</td><td>99</td><td>Ultroloth</td></tr>
    <tr><td>75-76</td><td>Efreeti</td><td>00</td><td>Xorn</td></tr>
    </table>
    </div>
    `,
  },
  "Javelin of Lightning": {
    type: "Weapon (javelin), uncommon",
    description: `
    <div>This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.</div>
    <div>The javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.</div>
    `,
  },
  "Keoghtom's Ointment": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of alow. The jar and its contents weigh 1/2 pound.</div>
    <div>As an action, one does of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.</div>
    `,
  },
  "Lantern of Revealing": {
    type: "Wondrous item, uncommon",
    description: `<div>While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.</div>`,
  },
  "Luck Blade": {
    type: "Weapon (any sword), legendary (requires attunement)",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.</div>
    <div><span class="bold">Luck</span>. If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.</div>
    <div><span class="bold">Wish</span>. The sword has 1d4 - 1 charges. While holding it, you can use an action to expend 1 charge and cast the <span class="italic">wish</span> spell from it. This property can't be used again until the next dawn. The sword loses this proeprty if it has no charges.</div>
    `,
  },
  "Mace of Disruption": {
    type: "Weapon (mace), rare (requires attunement)",
    description: `
    <div>When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.</div>
    <div>While you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.</div>
    `,
  },
  "Mace of Smiting": {
    type: "Weapon (mace), rare",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.</div>
    <div>When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or an extra 14 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.</div>
    `,
  },
  "Mace of Terror": {
    type: "Weapon (mace), rare (requires attunement)",
    description: `
    <div>This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.</div>
    <div>The mace regains 1d3 expended charges daily at dawn.</div>
    `,
  },
  "Magic armor (d12)": {
    type: "Armor",
    description: `
    <div>
    <table>
    <tr><th>d12</th><th>Result</th></tr>
    <tr><td>1-2</td><td>Armor, +2 half plate</td></tr>
    <tr><td>3-4</td><td>Armor, +2 plate</td></tr>
    <tr><td>5-6</td><td>Armor, +3 studded leather</td></tr>
    <tr><td>7-8</td><td>Armor, +3 breastplate</td></tr>
    <tr><td>9-10</td><td>Armor, +3 splint</td></tr>
    <tr><td>11</td><td>Armor, +3 half plate</td></tr>
    <tr><td>12</td><td>Armor, +3 plate</td></tr>
    </table>
    </div>
    `,
  },
  "Mantle of Spell Resistance": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>You have advantage on saving throws against spells while you wear this cloak.</div>
    `,
  },
  "Manual of Bodily Health": {
    type: "Wondrous item, very rare",
    description: `This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, you Constitution score increases by 2, as does your maximum for that score. The manual then lsoes its magic, but regains it in a century.`,
  },
  "Manual of Gainful Exercise": {
    type: "Wondrous item, very rare",
    description: `This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.`,
  },
  "Manual of Golems": {
    type: "Wondrous item, very rare",
    description: `
    <div>This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a <span class="italic">manual of golems</span> and attempts to read it takes 6d6 psychic damage.</div>
    <div>
    <table>
    <tr><th>d20</th><th>Golem</th><th>Time</th><th>Cost</th></tr>
    <tr><td>1-5</td><td>Clay</td><td>30 days</td><td>65,000 gp</td></tr>
    <tr><td>6-17</td><td>Flesh</td><td>60 days</td><td>50,000 gp</td></tr>
    <tr><td>18</td><td>Iron</td><td>120 days</td><td>100,000 gp</td></tr>
    <tr><td>19-20</td><td>Stone</td><td>90 days</td><td>80,000 gp</td></tr>
    </table>
    </div>
    <div>To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.</div>
    <div>Once you finish creating the golem, the book is consumed in eldritch glames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands. See the <span class="italic">Monster Manual</span> for its game statistics.</div>
    `,
  },
  "Manual of Quickness of Action": {
    type: "Wondrous item, very rare",
    description: `This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.`,
  },
  "Mariner's Armor": {
    type: "Armor (light, medium, or heavy), uncommon",
    description: `While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.`,
  },
  "Medallion of Thoughts": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the <span class="italic">detect thoughts</span> spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.`,
  },
  "Mirror of Life Trapping": {
    type: "Wondrous item, very rare",
    description: `
    <div>When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.</div>
    <div>If the mirror is hanging on a vertical surface and you are within 4 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.</div>
    <div>Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.</div>
    <div>An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.</div>
    <div>If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in an unoccupied spaces near it.</div>
    <div>While within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.</div>
    <div>In a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.</div>
    `,
  },
  "Mithral Armor": {
    type: "Armor (medium or heavy, but not hide), uncommon",
    description: `Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.`,
  },
  "Necklace of Adaptation": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While waering this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as <span class="italic">cloudkil</span> and <span class="italic">stinking cloud</span> effects, inhaled poisons, and the breath weapons of some dragons).`,
  },
  "Necklace of Fireballs": {
    type: "Wondrous item, rare",
    description: `
    <div>This necklace has 1d6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level <span class="italic">fireball</span> spell (save DC 15).</div>
    <div>You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the <span class="italic">fireball</span> by 1 for each bead beyond the first.</div>
    `,
  },
  "Necklace of Prayer Beads": {
    type: "Wondrous item, rare (requires attunement by a cleric, druid, or paladin",
    description: `
    <div>This necklace has 1d4 + 2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.</div>
    <div>Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (use your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.</div>
    <div>
    <table>
    <tr><th>d20</th><th>Bead of...</th><th>Spell</th></tr>
    <tr><td>1-6</td><td>Blessing</td><td><span class="italic">bless</span></td></tr>
    <tr><td>7-12</td><td>Curing</td><td><span class="italic">cure wounds</span> (2nd level) or <span class="italic">lesser restoration</span></td></tr>
    <tr><td>13-16</td><td>Favor</td><td><span class="italic"><span class="italic">Greater restoration</span></span></td></tr>
    <tr><td>17-18</td><td>Smiting</td><td><span class="italic"><span class="italic">Branding smite</span></span></td></tr>
    <tr><td>19</td><td>Summons</td><td><span class="italic"><span class="italic">Planar ally</span></span></td></tr>
    <tr><td>20</td><td>Wind walking</td><td><span class="italic"><span class="italic">Wind walk</span></span></td></tr>
    </table>
    </div>
    `,
  },
  "Nine Lives Stealer": {
    type: "Weapon (any sword), very rare (requires attunement)",
    description: `
    <div>You gain a +2 bonus to attack and damage rolls made with this magic weapon.</div>
    <div>The sword has 1d8 + 1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword lsoes 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.</div>
    `,
  },
  "Nolzur's Marvelous Pigments": {
    type: "WOndrous item, very rare",
    description: `
    <div>Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image.</div>
    <div>Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features - such as a door, a pit, flowers, trees, cells, rooms, or weapons - that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.</div>
    <div>When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to wahtever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create.</div>
    <div>Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material.</div>
    <div>If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything.</div>
    `,
  },
  Oathbow: {
    type: "Weapon (longbow), very rare (requires attunement)",
    description: `
    <div>When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until ti dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.</div>
    <div>When you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.</div>
    <div>While your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.</div>
    `,
  },
  "Oil of Etherealness": {
    type: "Potion, rare",
    description: `Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the <span class="italic">etherealness</span> spell for 1 hour.`,
  },
  "Oil of Sharpness": {
    type: "Potion, uncommon",
    description: `
    <div>This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.</div>
    `,
  },
  "Oil of Slipperiness": {
    type: "Potion, uncommon",
    description: `
    <div>This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a <span class="italic">freedom of movement</span> spell for 8 hours.</div>
    <div>Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the <span class="italic">grease</span> spell in that area for 8 hours.</div>
    `,
  },
  "Pearl of Power": {
    type: "Wondrous item, uncommon (requires attunement by a spellcaster",
    description: `You can use an action to speak this pearl's command word and regain one expended spell slot of up to 3rd level. Once you have used the pearl, it can't be used again until the next dawn.`,
  },
  "Periapt of Health": {
    type: "Wondrous item, uncommon",
    description: `You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed for you while you wear the pendant.`,
  },
  "Periapt of Proof Against Poison": {
    type: "Wondrous item, rare",
    description: `This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.`,
  },
  "Periapt of Wound Closure": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.`,
  },
  "Philter of Love": {
    type: "Potion, uncommon",
    description: `The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.`,
  },
  "Pipes of Haunting": {
    type: "Wondrous item, uncommon",
    description: `You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on a the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.`,
  },
  "Pipes of the Sewers": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `
    <div>You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.</div>
    <div>The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats (see the <span class="italic">Monster Manual</span> for statistics) with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as deteremined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.</div>
    <div>Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your comnpanions for as long as you continue to play the pipes each round as an action. A fridnly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.</div>
    `,
  },
  "Plate Armor of Etherealness": {
    type: "Armor (palte), legendary (requires attunement)",
    description: `While you're wearing this armor, you can speak its command word as an action to gain the effect of the <span class="italic">etherealness</span> spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.`,
  },
  "Portable Hole": {
    type: "Wondrous item, rare",
    description: `
    <div>This fine black sloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.</div>
    <div>You can use an action to unfold a <span class="italic">portable hold</span> and place it on or against a solid surface, whereupon the <span class="italic">portable hold</span> creates an extradimensional hole 10 feet deep. The cylindrical space within the hold exists on a different plane, so it can't be used to create open passages. Any creature inside an open <span class="italic">portable hole</span> can exit the hold by clombing out of it.</div>
    <div>You can use an action to close a <span class="italic">portable hold</span> by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.</div>
    <div>If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the <span class="italic">portable hole</span> or the creature carrying it. A breathing creature within a closed <span class="italic">portable hold</span> can survive for up to 10 minutes, after which time it begins to suffocate.</div>
    <div>Placing a <span class="italic">portable hole</span> inside an extradimensional space created by a <span class="italic">bag of holding</span>, <span class="italic">Heward's handy haversack</span>, or similar itme instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was palced inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.</div>
    `,
  },
  "Potion of Animal Friendship": {
    type: "Potion, uncommon",
    description: `When you drink this potion, you can cast the <span class="italic">animal friendship</span> spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.`,
  },
  "Potion of Clairvoyance": {
    type: "Potion, rare",
    description: `When you drink this potion, you gain the effect of the <span class="italic">clairvoyance</span> spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.`,
  },
  "Potion of Climbing": {
    type: "Potion, common",
    description: `When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.`,
  },
  "Potion of Diminution": {
    type: "Potion, rare",
    description: `When you drink this potion, you gain the "reduce" effect of the <span class="italic">enlarge/reduce</span> spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.`,
  },
  "Potion of Fire Breath": {
    type: "Potion, uncommon",
    description: `
    <div>After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effecte ends after you exhale the fire three times or when 1 hour has passed.</div>
    <div>This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.</div>
    `,
  },
  "Potion of Flying": {
    type: "Potion, very rare",
    description: `When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.`,
  },
  "Potion of Gaseous Form": {
    type: "Potion, rare",
    description: `When you drink this potion, you gain the effect of the <span class="italic">gaseous form</span> spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water.`,
  },
  "Potion of Giant Strength": {
    type: "Potion, rarity varies",
    description: `
    <div>When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.</div>
    <div>This potion's transparent liquid has floating in it a silver of fingernail from a giant of the appropriate type. The <span class="italic">potion of frost giant strength</span> and the <span class="italic">potion of stone giant strength</span> have the same effect.</div>
    <div>
    <table>
    <tr><th>Type of Giant</th><th>Strength</th><th>Rarity</th></tr>
    <tr><td>Hill giant</td><td>21</td><td>Uncommon</td></tr>
    <tr><td>Frost/stone giant</td><td>23</td><td>Rare</td></tr>
    <tr><td>Fire giant</td><td>25</td><td>Rare</td></tr>
    <tr><td>Cloud giant</td><td>27</td><td>Very rare</td></tr>
    <tr><td>Storm giant</td><td>29</td><td>Legendary</td></tr>
    </table>
    </div>
    `,
  },
  "Potion of Growth": {
    type: "Potion, uncommon",
    description: `When you drink this potion, you gain the "enlarge" effect of the <span class="italic">enlarge/reduce</span> spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.`,
  },
  "Potion of Healing": {
    type: "Potion, rarity varies",
    description: `
    <div>You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.</div>
    <div>
    <table>
    <tr><th>Potion of...</th><th>Rarity</th><th>HP Regained</th></tr>
    <tr><td>Healing</td><td>Common</td><td>2d4 + 2</td></tr>
    <tr><td>Greater healing</td><td>Uncommon</td><td>4d4 + 4</td></tr>
    <tr><td>Superior healing</td><td>Rare</td><td>8d4 + 8</td></tr>
    <tr><td>Supreme healing</td><td>Very rare</td><td>10d4 + 20</td></tr>
    </table>
    </div>
    `,
  },
  "Potion of Heroism": {
    type: "Potion, rare",
    description: `For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the <span class="italic">bless</span> spell (no concentration required). This blue potion bubbles and steams as if boiling.`,
  },
  "Potion of Invisibility": {
    type: "Potion, very rare",
    description: `This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.`,
  },
  "Potion of Invulnerability": {
    type: "Potion, rare",
    description: `For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquified iron.`,
  },
  "Potion of Longevity": {
    type: "Potion, very rare",
    description: `When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a <span class="italic">potion of longevity</span>, there is a 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.`,
  },
  "Potion of Mind Reading": {
    type: "Potion, rare",
    description: `When you drink this potion, you gain the effect of the <span class="italic">detect thoughts</span> spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.`,
  },
  "Potion of Poison": {
    type: "Potion, uncommon",
    description: `
    <div>This concoction looks, smells, and tastes like a <span class="italic">potion of healing</span> or other beneficial potion. However, it is actually poison masked by illusion magic. An <span class="italic">identify</span> spell reveals its true nature.</div>
    <div>If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.</div>
    `,
  },
  "Potion of Resistance": {
    type: "Potion, uncommon",
    description: `
    <div>When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below.</div>
    <div>
    <table>
    <tr><th>d10</th><th>Damage Type</th><th>d10</th><th>Damage Type</th></tr>
    <tr><td>1</td><td>Acid</td><td>6</td><td>Necrotic</td></tr>
    <tr><td>2</td><td>Cold</td><td>7</td><td>Poison</td></tr>
    <tr><td>3</td><td>Fire</td><td>8</td><td>Psychic</td></tr>
    <tr><td>4</td><td>Force</td><td>9</td><td>Radiant</td></tr>
    <tr><td>5</td><td>Lightning</td><td>10</td><td>Thunder</td></tr>
    </table>
    </div>
    `,
  },
  "Potion of Speed": {
    type: "Potion, very rare",
    description: `When you drink this potion, you gain the effect of the <span class="italic">haste</span> spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.`,
  },
  "Potion of Vitality": {
    type: "Potion, very rare",
    description: `When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.`,
  },
  "Potion of Water Breathing": {
    type: "Potion, uncommon",
    description: `You can breathe underwater for 1 hour after drinking this potion. Its cloudly green fluid smells of the sea and has a jellyfish-like bubble floating in it.`,
  },
  "Quaal's Feather Token": {
    type: "Wondrous item, rare",
    description: `
    <div>This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect. The DM chooses the kind of token or determines it randomly.</div>
    <div>
    <table>
    <tr><th>d100</th><th>Feather Token</th><th>d100</th><th>Feather Token</th></tr>
    <tr><td>01-20</td><td>Anchor</td><td>51-65</td><td>Swan boat</td></tr>
    <tr><td>21-35</td><td>Bird</td><td>66-90</td><td>Tree</td></tr>
    <tr><td>36-50</td><td>Fan</td><td>91-00</td><td>Whip</td></tr>
    </table>
    </div>
    <div><span class="bold">Anchor</span>. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.</div>
    <div><span class="bold">Bird</span>. You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc (see the <span class="italic">Monster Manual</span>), but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.</div>
    <div><span class="bold">Fan</span>. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.</div>
    <div><span class="bold">Swan Boat</span>. You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The baot can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.</div>
    <div><span class="bold">Tree</span>. You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.</div>
    <div><span class="bold">Whip</span>. You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes it splace. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage.</div>
    <div>As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.</div>
    `,
  },
  "Quiver of Ehlonna": {
    type: "Wondrous item, uncommon",
    description: `
    <div>Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.</div>
    <div>You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.</div>
    `,
  },
  "Ring of Animal Influence": {
    type: "Ring, rare",
    description: `
    <div>This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:</div>
    <div>• <span class="italic">Animal friendship</span> (save DC 13)</div>
    <div>• <span class="italic">Fear</span> (save DC 13), targeting only beasts that have an Intelligence of 3 or lower</div>
    <div>• <span class="italic">Speak with animals</span></div>
    `,
  },
  "Ring of Djinni Summoning": {
    type: "Ring, legendary (requires attunement)",
    description: `
    <div>While wearing this ring, you can speak its command word as an action to summon a particular djinni from  the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane.</div>
    <div>While summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions.</div>
    <div>After the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.</div>
    `,
  },
  "Ring of Elemental Command": {
    type: "Ring, legendary (requires attunement)",
    description: `
    <div>This ring is linked to one of the four Elemental Planes. The DM chooses are randomly determines the linked plane.</div>
    <div>While wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane.</div>
    <div>The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.</div>
    
    <div><span class="bold">Ring of Air Elemental Command</span>. You can expend 2 of the ring's charges to cast <span class="italic">dominate monster</span> on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.</div>
    <div>If you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:</div>
    <div>• You have resistance to lightning damage.</div>
    <div>• You have a flying speed equal to your walking speed and can hover.</div>
    <div>• You can cast the following spells from the ring, expending the necessary number of charges: <span class="italic">chain lightning</span> (3 charges), <span class="italic">gust of wind</span> (2 charges), or <span class="italic">wind wall</span> (1 charge)</div>
    
    <div><span class="bold">Ring of Earth Elemental Command</span>. You can expend 2 of the ring's charges to cast <span class="italic">dominate monster</span> on an earth elemental. In addition, you can move in difficult terrain that is compsoed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.</div>
    <div>If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:</div>
    <div>• You have resistance to acid damage.</div>
    <div>• You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.</div>
    <div>• You can cast the following spells from the ring, expending the necessary number of charges: <span class="italic">stone shape</span> (2 charges), <span class="italic">stoneskin</span> (3 charges), or <span class="italic">wall of stone</span> (3 charges)</div>
    
    <div><span class="bold">Ring of Fire Elemental Command</span>. You can expend 2 of the ring's charges to cast <span class="italic">dominate monster</span> on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.</div>
    <div>If you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:</div>
    <div>• You are immune to fire damage.</div>
    <div>• You can cast the following spells from the ring, expending the necessary number of charges: <span class="italic">burning hands</span> (1 charge), <span class="italic">fireball</span> (2 charges), or <span class="italic">wall of fire</span> (3 charges)</div>
   
    <div><span class="bold">Ring of Water Elemental Command</span>. You can expend 2 of the ring's charges to cast <span class="italic">dominate monster</span> on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.</div>
    <div>If you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:</div>
    <div>• You can breathe underwater and have a swimming speed equal to your walking speed.</div>
    <div>• You can cast the following spells from the ring, expending the necessary number of charges: <span class="italic">create or destroy water</span> (1 charge), <span class="italic">control water</span> (3 charges), <span class="italic">ice storm</span> (2 charges), or <span class="italic">wall of ice</span> (3 charges)</div>
    `,
  },
  "Ring of Evasion": {
    type: "Ring, rare (requires attunement)",
    description: `The ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.`,
  },
  "Ring of Feather Falling": {
    type: "Ring, rare (requires attunement)",
    description: `When you fall while wearing this ring, you descend 6 0feet per round and take no damage from falling.`,
  },
  "Ring of Free Action": {
    type: "Ring, rare (requires attunement)",
    description: `While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.`,
  },
  "Ring of Invisibility": {
    type: "Ring, legendary (requires attunement)",
    description: `While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.`,
  },
  "Ring of Jumping": {
    type: "Ring, uncommon (requires attunement)",
    description: `While wearing this ring, you can cast the <span class="italic">jump</span> spell from it as a bonus action at will, but can target only yourself when you do so.`,
  },
  "Ring of Mind Shielding": {
    type: "Ring, uncommon (requires attunement)",
    description: `
    <div>While wearing this ring, yo uare immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.</div>
    <div>You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.</div>
    <div>If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.</div>
    `,
  },
  "Ring of Protection": {
    type: "Ring, rare (requires attunement)",
    description: `You gain a +1 bonus to AC and saving throws while wearing this ring.`,
  },
  "Ring of Regeneration": {
    type: "Ring, very rare (requires attunement)",
    description: `While wearing this ring, yo uregain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.`,
  },
  "Ring of Resistance": {
    type: "Ring, rare (requires attunement)",
    description: `
    <div>You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the DM chooses or determines randomly.</div>
    <div>
    <table>
    <tr><th>d10</th><th>Damage Type</th><th>Gem</th></tr>
    <tr><td>1</td><td>Acid</td><td>Pearl</td></tr>
    <tr><td>2</td><td>Cold</td><td>Tourmaline</td></tr>
    <tr><td>3</td><td>Fire</td><td>Garnet</td></tr>
    <tr><td>4</td><td>Force</td><td>Sapphire</td></tr>
    <tr><td>5</td><td>Lightning</td><td>Citrine</td></tr>
    <tr><td>6</td><td>Necrotic</td><td>Jet</td></tr>
    <tr><td>7</td><td>Poison</td><td>Amethyst</td></tr>
    <tr><td>8</td><td>Psychic</td><td>Jade</td></tr>
    <tr><td>9</td><td>Radiant</td><td>Topaz</td></tr>
    <tr><td>10</td><td>Thunder</td><td>Spinel</td></tr>
    </table>
    </div>
    `,
  },
  "Ring of Shooting Stars": {
    type: "Ring, very rare (requires attunement outdoors at night)",
    description: `
    <div>While wearing this ring in dim light or darkness, you can cast <span class="italic">dancing lights</span> and <span class="italic">light</span> from the ring at will. Casting either spell from the ring requires an action.</div>
    <div>The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.</div>
    <div><span class="bold">Faerie Fire</span>. You can expend 1 charge as an action to cast <span class="italic">faerie fire</span> from the ring.</div>
    <div><span class="bold">Ball Lightning</span>. You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.</div>
    <div>Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.</div>
    <div>As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created.</div>
    <div>
    <table>
    <tr><th>Spheres</th><th>Lightning Damage</th></tr>
    <tr><td>4</td><td>2d4</td></tr>
    <tr><td>3</td><td>2d6</td></tr>
    <tr><td>2</td><td>5d4</td></tr>
    <tr><td>1</td><td>4d12</td></tr>
    </table>
    </div>
    <div><span class="bold">Shooting Stars</span>. You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one.</div>
    `,
  },
  "Ring of Spell Storing": {
    type: "Ring, rare (requires attunement)",
    description: `
    <div>This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6 - 1 levels of stored spells chosen by the DM.</div>
    <div>Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.</div>
    <div>While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.</div>
    `,
  },
  "Ring of Spell Turning": {
    type: "Ring, legendary (requires attunement)",
    description: `While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.`,
  },
  "Ring of Swimming": {
    type: "Ring, uncommon",
    description: `You have a swimming speed of 40 feet while wearing this ring.`,
  },
  "Ring of Telekinesis": {
    type: "Ring, very rare (requires attunement)",
    description: `While wearing this ring, you can cast the <span class="italic">telekinesis</span> spell at will, but you can target only objects that aren't being worn or carried.`,
  },
  "Ring of the Ram": {
    type: "Ring, rare (requires attunement)",
    description: `
    <div>This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature yo ucan see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.</div>
    <div>Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object yo ucan see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.</div>
    `,
  },
  "Ring of Three Wishes": {
    type: "Ring, legendary",
    description: `While wearing this ring, yo ucan use an action to expend 1 to 3 of its charges to cast the <span class="italic">wish</span> spell from it. The ring becomes nonmagical when you use the last charge.`,
  },
  "Ring of Warmth": {
    type: "Ring, uncommon (requires attunement)",
    description: `While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.`,
  },
  "Ring of Water Walking": {
    type: "Ring, uncommon",
    description: `While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.`,
  },
  "Ring of X-Ray Vision": {
    type: "Ring, rare (requires attunement)",
    description: `
    <div>While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.</div>
    <div>Whenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gian one level of exhaustion.</div>
    `,
  },
  "Robe of Eyes": {
    type: "Wondrous item, rare (requires attunement)",
    description: `
    <div>This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:</div>
    <div>• The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.</div>
    <div>• You have darvision out to a range of 120 feet.</div>
    <div>• You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.</div>
    <div>The eyes on the robe can't be closed or averted. Although yo ucan close or avert your own eyes, you are neve considered to be doing so while wearing this robe.</div>
    <div>A <span class="italic">light</span> spell cast on the robe or a <span class="italic">daylight</span> spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, yo ucan make a Constitutio nsaving throw (DC 11 for <span class="italic">light</span> or DC 15 for <span class="italic">daylight</span>, ending the blindness on a success.</div>
    `,
  },
  "Robe of Scintillating Colors": {
    type: "Wondrous item, very rare (requires attunement)",
    description: `This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.`,
  },
  "Robe of Stars": {
    type: "Wondrous item, very rare (requires attunement)",
    description: `
    <div>This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.</div>
    <div>Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast <span class="italic">magic missile</span> as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.</div>
    <div>While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.</div>
    `,
  },
  "Robe of the Archmagi": {
    type: "Wondrous item, legendary (requires attunement by a sorcerer, warlock, or wizard",
    description: `
    <div>This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe's color corresponds to the alignment for which the item was created. A white robe was made for good, gray for neutral, and black for evil. You can't attune to a <span class="italic">robe of the archmagi</span> that doesn't correspond to your alignment.</div>
    <div>You gain these benefits while wearing the robe:</div>
    <div>• If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.</div>
    <div>• You have advantage on saving throws against spells and other magical effects.</div>
    <div>• Your spell save DC and spell attack bonus each increase by 2.</div>
    `,
  },
  "Robe of Useful Items": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.</div>
    <div>The robe has two of each of the following patches:</div>
    <div>• Dagger</div>
    <div>• Bullseye lantern (filled and lit)</div>
    <div>• Steel mirror</div>
    <div>• 10-foot pole</div>
    <div>• Hempen rope (50 feet, coiled)</div>
    <div>• Sack</div>
    <div>In addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly.</div>
    <div>
    <table>
    <tr><th>d100</th><th>Patch</th></tr>
    <tr><td>01-08</td><td>Bag of 100 gp</td></tr>
    <tr><td>09-15</td><td>Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp</td></tr>
    <tr><td>16-22</td><td>Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself</td></tr>
    <tr><td>23-30</td><td>10 gems worth 100 gp each</td></tr>
    <tr><td>31-44</td><td>Wooden ladder (24 feet long)</td></tr>
    <tr><td>45-51</td><td>A <span class="bold">riding horse</span> with saddle bags (see the <span class="italic">Monster Manual</span> for statistics)</td></tr>
    <tr><td>52-59</td><td>Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you</td></tr>
    <tr><td>60-68</td><td>4 <span class="italic">potions of healing</span></td></tr>
    <tr><td>69-75</td><td>Rowboat (12 feet long)</td></tr>
    <tr><td>76-83</td><td><span class="italic">Spell scroll</span> containing one spell of 1st to 3rd level></td></tr>
    <tr><td>84-90</td><td>2 <span class="bold">mastiffs</span> (see the <span class="italic">Monster Manual</span> for statistics)</td></tr>
    <tr><td>91-96</td><td>Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach</td></tr>
    <tr><td>97-00</td><td>Portable ram</td></tr>
    </table>
    </div>
    `,
  },
  "Rod of Absorption": {
    type: "Rod, very rare (requires attunement)",
    description: `
    <div>While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy - not hte spell itself - is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.</div>
    <div>When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.</div>
    <div>If you are a spellcaster holding the rod, you can covert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.</div>
    <div>A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.</div>
    `,
  },
  "Rod of Alertness": {
    type: "Rod, very rare (requires attunement)",
    description: `
    <div>This rod has a flanged head and the following properties.</div>
    <div><span class="bold">Alertness</span>. While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.</div>
    <div><span class="bold">Spells</span>. While holding the rod, you can use an action to cast one of the following spells from it: <span class="italic">detect evil and good, detect magic, detect poison and disease,</span> or <span class="italic">see invisibility</span></div>
    <div><span class="bold">Protective Aura</span>. As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.</div>
    <div>The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.</div>
    `,
  },
  "Rod of Lordly Might": {
    type: "Rod, legendary (requires attunement)",
    description: `
    <div>This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.</div>
    <div><span class="bold">Six Buttons</span>. You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.</div>
    <div>If you press <span class="bold">button 1</span>, the rod becomes a <span class="italic">flame tongue</span>, as a fiery blade sprouts from the end opposite the rod's flanged head.</div>
    <div>If you press <span class="bold">button 2</span>, the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.</div>
    <div>If you press <span class="bold">button 3</span>, the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.</div>
    <div>If you press <span class="bold">button 4</span>, the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds.</div>
    <div>More weight or lack of solid anchoring causes the rod to revert to its normal form.</div>
    <div>If you press <span class="bold">button 5</span>, the rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.</div>
    <div>If you press <span class="bold">button 6</span>, the rod assumes or remains in its normal form and indicates magnetic north (Nothing happens if this function of the rod is used in a location that has no magnetic north). The rod also gives you knowledge of you approximate depth beneath ground or your height above it.</div>
    <div><span class="bold">Drain Life</span>. When you hit a creature with a melee attack using the rod, yo ucan force the target to make a DC 17 Constitution saving throw. On a failure, the target takes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.</div>
    <div><span class="bold">Paralyze</span>. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure, the target i sparalyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.</div>
    <div><span class="bold">Terrify</span>. While holding the rod, you can use an action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.</div>
    <div></div>
    `,
  },
  "Rod of the Pact Keeper": {
    type: "Rod, uncommon (+1), rare (+2), or very rare (+3) (requires attunement by a warlock",
    description: `
    <div>While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. The bonus is determined by the rod's rarity.</div>
    <div>In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest.</div>
    `,
  },
  "Rod of Resurrection": {
    type: "Rod, legendary (requires attunemetn by a cleric, druid, or paladin)",
    description: `
    <div>The rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it: <span class="italic">heal</span> (expends 1 charge) or <span class="italic">resurrection</span> (expends 5 charges).</div>
    <div>The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.</div>
    `,
  },
  "Rod of Rulership": {
    type: "Rod, rare (requires attunement)",
    description: `You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.`,
  },
  "Rod of Security": {
    type: "Rod, very rare",
    description: `
    <div>While holding this rod, yo ucan use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garde, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enoug hwater and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.</div>
    <div>For each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).</div>
    <div>When time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.</div>
    `,
  },
  "Rope of Climbing": {
    type: "Wondrous item, uncommon",
    description: `
    <div>This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.</div>
    <div>If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.</div>
    <div>The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.</div>
    `,
  },
  "Rope of Entanglement": {
    type: "Wondrous item, rare",
    description: `
    <div>This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target mut succeed on a DC 15 Dexterity saving throw or become restrained.</div>
    <div>You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.</div>
    <div>The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.</div>
    `,
  },
  "Saddle of the Cavalier": {
    type: "Wondrous item, uncommon",
    description: `While in this saddle on a mount, you can't be dismounted against your will if your're conscious, and attack rolls against the mount have disadvantage.`,
  },
  "Scarab of Protection": {
    type: "Wondrous item, legendary (requires attunement)",
    description: `
    <div>If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:</div>
    <div>• You have advantage on saving throws against spells.</div>
    <div>• The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead crature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.</div>
    `,
  },
  "Scimitar of Speed": {
    type: "Weapon (scimitar), very rare (requires attunement)",
    description: `
    <div>You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.</div>
    `,
  },
  "Scroll of Protection": {
    type: "Scroll, rare",
    description: `
    <div>Each <span class="italic">scroll of protection</span> works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.</div>
    <div>
    <table>
    <tr><th>d100</th><th>Creature Type</th><th>d100</th><th>Creature Type</th></tr>
    <tr><td>01-10</td><td>Aberrations</td><td>41-50</td><td>Fey</td></tr>
    <tr><td>11-20</td><td>Beasts</td><td>51-75</td><td>Fiends</td></tr>
    <tr><td>21-30</td><td>Celestials</td><td>76-80</td><td>Plants</td></tr>
    <tr><td>31-40</td><td>Elementals</td><td>81-00</td><td>Undead</td></tr>
    </table>
    </div>
    <div>Using an action to read the scroll encloses you in an invisible barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specific type from entering or affecting anything within the cylinder.</div>
    <div>The cylinder moves with you and remains centered on you. However, if you move in such a way that a creature of the specified type would be inside the cylinder, the effect ends.</div>
    <div>A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier.</div>
    `,
  },
  "Sending Stones": {
    type: "Wondrous item, uncommon",
    description: `
    <div><span class="italic">Sending stones</span> come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the <span class="italic">sending</span> spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.</div>
    <div>Once <span class="italic">sending</span> is cast through the stones, they can't be used again until the next danw. If one of the stones in a pair is destroyed, the other one becomes nonmagical.</div>
    `,
  },
  "Sentinel Shield": {
    type: "Armor (shield), uncommon",
    description: `While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.`,
  },
  "Shield, +": {
    type: "Armor (shield), uncommon (+1), rare (+2), or very rare (+3)",
    description: `While holding this shield, you have a bonus to AC determined by the shield's rarity. This bonus is in addition to the shield's normal bonus to AC.`,
  },
  "Shield of Missile Attraction": {
    type: "Armor (shield), rare (requires attunement)",
    description: `
    <div>While holding this shield, you have resistance to damage from ranged weapon attacks.</div>
    <div><span class="bold">Curse</span>. This shield is cursed. Attuning to it curses you until you are targeted by the <span class="italic">remove curse</span> spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.</div>
    `,
  },
  "Slippers of Spider Climbing": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to you walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.`,
  },
  "Sovereign Glue": {
    type: "Wondrous item, legendary",
    description: `
    <div>This viscous, mily-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with <span class="italic">oil of lsipperiness</span>. When found, a container contains 1d6 + 1 ounces.</div>
    <div>One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of <span class="italic">universal solvent</span> or <span class="italic">oil of etherealness</span>, or with a <span class="italic">wish</span> spell.</div>
    `,
  },
  "Spell Scroll": {
    type: "Scroll, varies",
    description: `
    <div>A <span class="italic">spell scroll</span> bears the words of a single spell, written in a mystical cipher. If the spell is on your class's spell list, you can use an action to read the scroll and cast its spell without having to provide any of the spell's components. Otherwise, the scroll is unintelligible.</div>
    <div>If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.</div>
    <div>Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.</div>
    <div>The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.</div>
    <div>
    <table>
    <tr><th>Spell Level</th><th>Rarity</th><th>Save DC</th><th>Attack Bonus</th></tr>
    <tr><td>Cantrip</td><td>Common</td><td>13</td><td>+5</td></tr>
    <tr><td>1st</td><td>Common</td><td>13</td><td>+5</td></tr>
    <tr><td>2nd</td><td>Uncommon</td><td>13</td><td>+5</td></tr>
    <tr><td>3rd</td><td>Uncommon</td><td>15</td><td>+7</td></tr>
    <tr><td>4th</td><td>Rare</td><td>15</td><td>+7</td></tr>
    <tr><td>5th</td><td>Rare</td><td>17</td><td>+9</td></tr>
    <tr><td>6th</td><td>Very rare</td><td>17</td><td>+9</td></tr>
    <tr><td>7th</td><td>Very rare</td><td>18</td><td>+10</td></tr>
    <tr><td>8th</td><td>Very rare</td><td>18</td><td>+10</td></tr>
    <tr><td>9th</td><td>Legendary</td><td>19</td><td>+11</td></tr>
    </table>
    </div>
    <div>A wizard spell on a <span class="italic">spell scroll</span> can be copied just as spells in spellbooks can be copied. When a spell is copied from a <span class="italic">spell scroll</span>, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the <span class="italic">spell scroll</span> is destroyed.</div>
    `,
  },
  "Spellguard Shield": {
    type: "Armor (shield), very rare (requires attunement)",
    description: `While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.`,
  },
  "Sphere of Annihilation": {
    type: "Wondrous item, legendary",
    description: `
    <div>This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.</div>
    <div>The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact os susceptible to damage from a <span class="italic">sphere of annihilation</span>, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.</div>
    <div>The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet euqal to 5 x your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.</div>
    <div>If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.</div>
    <div>If the sphere comes into contact with a planar portal, such as that creature by the <span class="italic">gate</span> spell, or an extradimensional space, such as that within a <span class="italic">portable hole</span>, the DM determines randomly what happens, using the following table.</div>
    <div>
    <tr><th>d100</th><th>Result</th></tr>
    <tr><td>01-50</td><td>The sphere is destroyed.</td></tr>
    <tr><td>51-85</td><td>The sphere moves through the portal or into the extradimensional space.</td></tr>
    <tr><td>86-00</td><td>A spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.</td></tr>
    </div>
    `,
  },
  "Staff of Charming": {
    type: "Staff, rare (requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard)",
    description: `
    <div>While holding this staff, you can use an action to expend 1 of its 10 charges to cast <span class="italic">charm person</span>, <span class="italic">command</span>, or <span class="italic">comprehend languages</span> from it using your spell save DC. The staff can also be used as a magic quarterstaff.</div>
    <div>If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this porperty of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.</div>
    <div>The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.</div>
    `,
  },
  "Staff of Fire": {
    type: "Staff, very rare (requires attunement by a druid, sorcerer, warlock, or wizard)",
    description: `
    <div>You have resistance to fire damage while you hold this staff.</div>
    <div>The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: <span class="italic">burning hands</span> (1 charge), <span class="italic">fireball</span> (3 charges), or <span class="italic">wall of fire</span> (4 charges).</div>
    <div>The staff regians 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.</div>
    `,
  },
  "Staff of Frost": {
    type: "Staff, very rare (requires attunement by a druid, sorcerer, warlock, or wizard",
    description: `
    <div>You have resistance to cold damage while you hold this staff.</div>
    <div>The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: <span class="italic">fog cloud</span> (1 charge), <span class="italic">ice storm</span> (4 charges), <span class="italic">wall of ice</span> (4 charges), or <span class="italic">cone of cold</span> (5 charges).</div>
    <div>The staff regians 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.</div>
    `,
  },
  "Staff of Healing": {
    type: "Staff, rare (requires attunement by a bard, cleric, or druid)",
    description: `
    <div>The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: <span class="italic">cure wounds</span> (1 charge per spell level, up to 4th), <span class="italic">lesser restoration</span> (2 charges), or <span class="italic">mass cure wounds</span> (5 charges).</div>
    <div>The staff regains 1d6 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.</div>
    `,
  },
  "Staff of Power": {
    type: "Staff, very rare (requires attunement by a sorcerer, warlock, or wizard)",
    description: `
    <div>This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.</div>
    <div>The staff has 20 charges for the following properties. The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls, but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.</div>
    <div><span class="bold">Power Strike </span>. When you hit with a melee attack using the staff, you can expend 1 caharge to deal an extra 1d6 force damage to the target.</div>
    <div><span class="bold">Spells</span>. While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: <span class="italic">cone of cold</span> (5 charges), <span class="italic">fireball</span> (5th-level version, 5 charges), <span class="italic">globe of invulnerability</span> (6 charges), <span class="italic">hold monster</span> (5 charges), <span class="italic">levitate</span> (2 charges), <span class="italic">lightning bolt</span> (5th-level version, 5 charges), <span class="italic">magic missile</span> (1 charge), <span class="italic">ray of enfeeblement</span> (1 charge), or <span class="italic">wall of force</span> (5 charges)</div>
    <div><span class="bold">Restributive Strike</span>. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.</div>
    <div>You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 x the number of charges in the staff. Every other creature in the area must succeed on a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.</div>
    <div>
    <table>
    <tr><th>Distance from Origin</th><th>Damage</th></tr>
    <tr><td>10 ft. away or closer</td><td>8 x the number of charges in the staff</td></tr>
    <tr><td>11 to 20 ft. away</td><td>6 x the number of charges in the staff</td></tr>
    <tr><td>21 to 30 ft. away</td><td>4 x the number of charges in the staff</td></tr>
    </table>
    </div>
    `,
  },
  "Staff of Striking": {
    type: "Staff, very rare (requires attunement)",
    description: `
    <div>This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.</div>
    <div>The staff has 10 charges. When you hit with a melee attack using it, yo ucan expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.</div>
    `,
  },
  "Staff of Swarming Insects": {
    type: "Staff, rare (requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard)",
    description: `
    <div>This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.</div>
    <div><span class="bold">While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: <span class="italic">giant insect</span> (4 charges) or <span class="italic">insect plague</span> (5 charges).</div>
    <div><span class="bold">Insect Cloud</span>. While holding the staff, you can use an action and expend 1 cahrge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.</div>
    `,
  },
  "Staff of the Adder": {
    type: "Staff, uncommon (requires attunement by a cleric, druid, or warlock)",
    description: `
    <div>You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.</div>
    <div>You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.</div>
    <div>The snake head can be attacked with it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.</div>
    `,
  },
  "Staff of the Magi": {
    type: "Staff, legendary (requires attunement by a sorcerer, warlock, or wizard)",
    description: `
    <div>This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.</div>
    <div>The staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.</div>
    <div><span class="bold">Spell Absorption</span>. While holding the stadd, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).</div>
    <div><span class="bold">Spells</span>. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: <span class="italic">conjure elemental</span> (7 charges), <span class="italic">dispel magic</span> (3 charges), <span class="italic">fireball</span> (7th-level version, 7 charges), <span class="italic">flaming sphere</span> (2 charges), <span class="italic">ice storm</span> (4 charges), <span class="italic">invisibility</span> (2 charges), <span class="italic">knock</span> (2 charges), <span class="italic">lightning bolt</span> (7th-level version, 7 charges), <span class="italic">passwall</span> (5 charges), <span class="italic">plane shift</span> (7 charges), <span class="italic">telekinesis</span> (5 charges), <span class="italic">wall of fire</span> (4 charges), or <span class="italic">web</span> (2 charges).</div>
    <div>You can also use an action to cast one of the following spells from the staff without using any charges: <span class="italic">arcane lock, detect magic, enlarge/reduce, light, mage hand</span>, or <span class="italic">protection from evil and good</span>.</div>
    <div><span class="bold">Restributive Strike</span>. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.</div>
    <div>You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 x the number of charges in the staff. Every other creature in the area must succeed on a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.</div>
    <div>
    <table>
    <tr><th>Distance from Origin</th><th>Damage</th></tr>
    <tr><td>10 ft. away or closer</td><td>8 x the number of charges in the staff</td></tr>
    <tr><td>11 to 20 ft. away</td><td>6 x the number of charges in the staff</td></tr>
    <tr><td>21 to 30 ft. away</td><td>4 x the number of charges in the staff</td></tr>
    </table>
    </div>
    `,
  },
  "Staff of the Python": {
    type: "Staff, uncommon (requires attunement by a cleric, druid, or warlock",
    description: `
    <div>You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake (see the <span class="italic">Monster Manual</span> for staistics) under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.</div>
    <div>On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.</div>
    <div>If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.</div>
    `,
  },
  "Staff of the Woodlands": {
    type: "Staff, rare (requires attunement by a druid)",
    description: `
    <div>This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.</div>
    <div>The staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.</div>
    <div><span class="bold">Spells</span>. You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: <span class="italic">animal friendship</span> (1 charge), <span class="italic">awaken</span> (5 charges), <span class="italic">barkskin</span> (2 charges), <span class="italic">locate animals or plants</span> (2 charges), <span class="italic">speak with animals</span> (1 charge), <span class="italic">speak with plants</span> (3 charges), or <span class="italic">wall of thorns</span> (6 charges).</div>
    <div>You can also use an action to cast the <span class="italic">pass without trace</span> spell from the staff without using any carges.</div>
    <div><span class="bold">Tree Form</span>. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by <span class="italic">detect magic</span>. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.</div>
    `,
  },
  "Staff of Thunder and Lightning": {
    type: "Staff, very rare (requires attunement)",
    description: `
    <div>This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.</div>
    <div><span class="bold">Lightning</span>.</div> When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.
    <div><span class="bold">Thunder</span>.</div> When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.
    <div><span class="bold">Lightning Strike</span>. You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.</div>
    <div><span class="bold">Thunderclap</span>. You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 6 0feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.</div>
    <div><span class="bold">Thunder and Lightning</span>. You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, on the use of this one.</div>
    `,
  },
  "Staff of Withering": {
    type: "Staff, rare (requires attunement by a cleric, druid, or warlock)",
    description: `
    <div>This staff has 3 charges and regains 1d3 expended charges daily at dawn.</div>
    <div>The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.</div>
    `,
  },
  "Stone of Controlling Earth Elementals": {
    type: "Wondrous item, rare",
    description: `If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the <span class="italic">conjure elemental</span> spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.`,
  },
  "Stone of Good Luck": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.`,
  },
  "Sun Blade": {
    type: "Weapon (longsword), rare (requires attunement)",
    description: `
    <div>This itme appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the <span class="italic">sun blade</span>.</div>
    <div>You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.</div>
    <div>The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, yo ucan use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.</div>
    `,
  },
  "Sword of Answering": {
    type: "Weapon (longsword), legendary (requires attunement by a creature with the same alignment as the sword)",
    description: `
    <div>In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as "Final Word." Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel.</div>
    <div>
    <table>
    <tr><th>Name</th><th>Alignment</th><th>Gem</th></tr>
    <tr><td>Answerer</td><td>Chaotic good</td><td>Emerald</td></tr>
    <tr><td>Back Talker</td><td>Chaotic evil</td><td>Jet</td></tr>
    <tr><td>Concluder</td><td>Lawful neutral</td><td>Amethyst</td></tr>
    <tr><td>Last Quip</td><td>Chaotic neutral</td><td>Tourmaline</td></tr>
    <tr><td>Rebutter</td><td>Neutral good</td><td>Topaz</td></tr>
    <tr><td>Replier</td><td>Neutral</td><td>Peridot</td></tr>
    <tr><td>Retorter</td><td>Lawful good</td><td>Aquamarine</td></tr>
    <tr><td>Scather</td><td>Lawful evil</td><td>Garnet</td></tr>
    <tr><td>Squelcher</td><td>Neutral evil</td><td>Spinel</td></tr>
    </table>
    </div>
    <div>You gain a +2 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealth with this special attack ignores any damage immunity or resistance the target has.</div>
    `,
  },
  "Sword of Life Stealing": {
    type: "Weapon (any sword), rare (requires attunement)",
    description: `When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 10 necrotic damage if it isn't a construct or an undead. You also gain 10 temporary hit points.`,
  },
  "Sword of Sharpness": {
    type: "Weapon (any sword that deals slashing damage), very rare (requires attunement)",
    description: `
    <div>When you attack an object with this magic sword and hit, maximum your weapon damage dice against the target.</div>
    <div>When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.</div>
    <div>In addition, you can speak the sword's command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the sommand word again or sheathing the sword puts out the light.</div>
    `,
  },
  "Sword of Vengeance": {
    type: "Weapon (any sword), uncommon (requires attunement)",
    description: `
    <div>You gain a +1 bonus to attack and damage rolls made with this magic weapon.</div>
    <div><span class="bold">Curse</span>. This word is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.</div>
    <div>In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save, you msut attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.</div>
    <div>You can break the curse in the usual ways. Alternatively, casting <span class="italic">banishment</span> on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.</div>
    `,
  },
  "Sword of Wounding": {
    type: "Weapon (any sword), rare (requires attunement)",
    description: `
    <div>Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.</div>
    <div>Once per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. ALternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.</div>
    `,
  },
  "Talisman of Pure Good": {
    type: "Woundrous item, legendary (requires attunement by a creature of good alignment)",
    description: `
    <div>This talisman is a mighty symbol of goodness. A creature that is neighter good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.</div>
    <div>If you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.</div>
    <div>The talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissue opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.</div>
    `,
  },
  "Talisman of the Sphere": {
    type: "Wondrous item, legendary (requires attunement)",
    description: `When you make an Intelligence (Arcana) check to control a <span class="italic">sphere of annihilation</span> while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a <span class="italic">sphere of annihiliation</span>, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 x your Intelligence modifier.`,
  },
  "Talisman of Ultimate Evil": {
    type: "Wondrous item, legendary (requires attunement by a creature of evil alignment)",
    description: `
    <div>This item symbolizes unrepentant evil. A creature that is neither good nore evil in alignment takes 6d6 necrotic damage up on touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.</div>
    <div>If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.</div>
    <div>The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.</div>
    `,
  },
  "Tentacle Rod": {
    type: "Rod, rare (requires attunement)",
    description: `Made by the drow, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacles make a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reaction for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.`,
  },
  "Tome of Clear Thought": {
    type: "Wondrous item, very rare",
    description: `This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.`,
  },
  "Tome of Leadership and Influence": {
    type: "Wondrous item, very rare",
    description: `This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.`,
  },
  "Tome of the Stilled Tongue": {
    type: "Wondrous item, legendary (requires attunement by a wizard)",
    description: `
    <div>This thick, leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first <span class="italic">tome of the stilled tongue</span> once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters wh ocrossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.</div>
    <div>If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can't be used again until the next dawn.</div>
    <div>While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.</div>
    <div>Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.</div>
    `,
  },
  "Tome of Understanding": {
    type: "Wondrous item, very rare",
    description: `This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses is magic, but regains it in a century.`,
  },
  "Trident of Fish Command": {
    type: "Weapon (trident), uncommon (requires attunement)",
    description: `This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast <span class="italic">dominate beast</span> (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.`,
  },
  "Universal Solvent": {
    type: "Wondrous item, legendary",
    description: `This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including <span class="italic">sovereign glue</span>.`,
  },
  "Vicious Weapon": {
    type: "Weapon (any), rare",
    description: `When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon's type.`,
  },
  "Vorpal Sword": {
    type: "Weapon (any sword that deals slashing damage), legendary (requires attunement)",
    description: `
    <div>You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.</div>
    <div>When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads/ The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.</div>
    `,
  },
  "Wand of Binding": {
    type: "Wand, rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    <div><span class="bold">Spells</span>. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): <span class="italic">hold monster</span> (5 charges) or <span class="italic">hold person</span> (2 charges).</div>
    <div><span class="bold">Assisted Escape</span>. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.</div>
    `,
  },
  "Wand of Enemy Detection": {
    type: "Wand, rare (requires attunement)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Fear": {
    type: "Wand, rare (requires attunement)",
    description: `
    <div>This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    <div><span class="bold">Command</span>. While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the <span class="italic">command</span> spell (save DC 15).</div>
    <div><span class="bold">Cone of Fear</span>. While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.</div>
    `,
  },
  "Wand of Fireballs": {
    type: "Wand, rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the <span class="italic">fireball</span> spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Lightning Bolts": {
    type: "Wand, rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the <span class="italic">lightning bolt</span> spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Magic Detection": {
    type: "Wand, uncommon",
    description: `This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the <span class="italic">detect magic</span> spell from it. The wand regains 1d3 expended charges daily at dawn.`,
  },
  "Wand of Magic Missiles": {
    type: "Wand, uncommon",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the <span class="italic">magic missile</span> spell from it. For 1 charge, yo ucast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge yo uspend.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Paralysis": {
    type: "Wand, rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. Make a ranged attack roll against that creature using your spell attack bonus. On a hit, the target is paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Polymorph": {
    type: "Wand, very rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the <span class="italic">polymorph</span> spell (save DC 15) from it.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Secrets": {
    type: "Wand, uncommon",
    description: `The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.`,
  },
  "Wand of the War Mage": {
    type: "Wand, uncommon (+1), rare (+2), or very rare (+3) (requires attunement by a spellcaster)",
    description: `Thile holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity. In addition, you ignore half cover when making a spell attack.`,
  },
  "Wand of Web": {
    type: "Wand, uncommon (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the <span class="italic">web</span> spell (save DC 15) from it.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.</div>
    `,
  },
  "Wand of Wonder": {
    type: "Wand, rare (requires attunement by a spellcaster)",
    description: `
    <div>This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens.</div>
    <div>If the effect causes a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.</div>
    <div>If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.</div>
    <div>The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand cumbles into dust and is destroyed.</div>
    <div>
    <table>
    <tr><th>d100</th><th>Effect</th><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">slow</span>.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">faerie fire</span>.</td><tr>
    <tr><td>BOOM</td><td>You are stunned until the start of your next turn, believing something awesome just happened.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">gust of wind</span>.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">detect thoughts</span> on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">stinking cloud</span>.</td><tr>
    <tr><td>BOOM</td><td>Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.</td><tr>
    <tr><td>BOOM</td><td>An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normalyl would. Roll a d100 to determine which animal appears. On a 01-25, a <span class="bold">rhinoceros</span> appears; on a 26-50, an <span class="bold">elephant</span> appears; and on a 51-100, a <span class="bold">rat</span> appears. See the <span class="italic">Mosnter Manual</span> for the animal's statistics.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">lightning bolt</span>.</td><tr>
    <tr><td>BOOM</td><td>A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.</td><tr>
    <tr><td>BOOM</td><td>You enlarge a target as if you had cast <span class="italic">enlarge/reduce</span>. If the target can't be affected by that spell, or if you didn't target a creature, you become the target.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">darkness</span>.</td><tr>
    <tr><td>BOOM</td><td>Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.</td><tr>
    <tr><td>BOOM</td><td>An object of the DM's choice disappears into the ethereal plane. The object must be neither worn nor carried, within 120 feet of the target, and no large than 10 feet in any dimension.</td><tr>
    <tr><td>BOOM</td><td>You shrink yourself as if you had cast <span class="italic">enlarge/reduce</span> on yourself.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">fireball</span>.</td><tr>
    <tr><td>BOOM</td><td>You cast <span class="italic">invisibility</span> on yourself.</td><tr>
    <tr><td>BOOM</td><td>Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.</td><tr>
    <tr><td>BOOM</td><td>A stream of 1d4 x 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.</td><tr>
    <tr><td>BOOM</td><td>A burst of colorful shimmering light extends from you in a 30-foot radius. You and each craeture in the area that can see must succeed on a DC 15 Constitutio nsaving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</td><tr>
    <tr><td>BOOM</td><td>The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.</td><tr>
    <tr><td>BOOM</td><td>If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the <span class="italic">greater restoration</span> spell or similar magic.</td><tr>
    </div>
    `,
  },
  Weapon: {
    type: "Weapon (any), uncommon (+1), rare (+2), or very rare (+3)",
    description: `You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity.`,
  },
  "Weapon of Warning": {
    type: "Weapon (any), uncommon (requires attunement)",
    description: `This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.`,
  },
  "Well of Many Worlds": {
    type: "Wondrous item, legendary",
    description: `
    <div>This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular shape 6 feet in diameter.</div>
    <div>You can use an action to unfold and place the <span class="italic">well of many worlds</span> on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once <span class="italic">well of many worlds</span> has opened a portal, it can't do so again for 1d8 hours.</div>
    `,
  },
  "Wind Fan": {
    type: "Wondrous item, uncommon",
    description: `While holding this fan, you can use an action to cast the <span class="italic">gust of wind</span> spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters.`,
  },
  "Winged Boots": {
    type: "Wondrous item, uncommon (requires attunement)",
    description: `
    <div>While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.</div>
    <div>The boots regain 2 hours of flying capability for every 12 hours they aren't in use.</div>
    `,
  },
  "Wings of Flying": {
    type: "Wondrous item, rare (requires attunement)",
    description: `While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.`,
  },
  Blackrazor: {
    type: "Weapon (greatsword), legendary (requires attunement by a creature of non-lawful alignment)",
    description: `
    <div>Hidden in the dungeon of White Plume Mountain, <span class="italic">Blackrazor</span> shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.</div>
    <div>You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the following additional properties.</div>
    <div><span class="bold">Devour Soul</span>. Whenever you use it to reduce a creature to 0 hit points, the sword slays the creature and devours its soul, unless it is a construct or an undead. A creature whose soul has been devoured by <span class="italic">Blackrazor</span> can be restored to life only by a <span class="italic">wish</span> spell.</div>
    <div>When it devours a soul, <span class="italic">Blackrazor</span> grants you temporary hit points equal to the slain creature's hit point maximum. These hit points fade after 24 hours. As long as these temporary hit points last and you keep <span class="italic">Blackrazor</span> in hand, you have advantage on attack rolls, saving throws, and ability checks.</div>
    <div>If you hit an undead with this weapon, you take 1d10 necrotic damage and the target regains 1d10 hit points. If this necrotic damage reduces you to 0 hit points, <span class="italic">Blackrazor</span> devours your soul.</div>
    <div><span class="bold">Soul Hunter</span>. While you hold the weapon, you are aware of the presence of Tiny or larger creatures within 60 feet of you that aren't constructs or undead. You also can't be charmed or frightened.</div>
    <div><span class="italic">Blackrazor</span> can cast the <span class="italic">haste</span> spell on you once per day. It decides when to cast the spell and maintains concentration on it so that you don't have to.</div>
    <div>The weapon can speak, read, and understand Common, and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, <span class="italic">Blackrazor</span> also understands every language you know.</div>
    <div><span class="bold">Personality</span>. <span class="italic">Blackrazor</span> speaks with an imperious tone, as though accustomed to being obeyed.</div>
    <div>The sword's purpose is to consume souls. It doesn't care whose soul it eats, including the wielder's. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. <span class="italic">Blackrazor</span> is meant to hurry that process along.</div>
    <div>Despite its nihilism, <span class="italic">Blackrazor</span> feels a strange kinship to <span class="italic">Wave</span> and <span class="italic">Whelm</span>, two other weapons locked away under White Plume Mountain. It wants the three weapons to be united again and wielded together in combat, even though it violently disagrees with <span class="italic">Whelm</span> and finds <span class="italic">Wave</span> tedious.</div>
    <div><span class="italic">Blackrazor</span>'s hunger for souls must be regularly fed. If the sword goes three days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.</div>
    `,
  },
  Moonblade: {
    type: "Weapon (longsword), legendary (requires attunement by an elf or half-elf of neutral good alignment",
    description: `
    <div>Of all the magic items created by the elves, one of the most prized and jealously guarded is a <span class="italic">moonblade</span>. In ancient times, nearly all elven novle houses claimed one such blade. Over the centuries, some blades have faded from the world, their magic lost as family lines have become extinct. Other blades have vanished with their bearers during great quests. Thus, only a few of these weapons remain.</div>
    <div>A <span class="italic">moonblade</span> passes down from parent to child. The sword chooses its bearer and remains bonded to that person for life. If the bearer dies, another heir can claim the blade. If no worthy heir exists, the sword lies dormant. It functions like a normal longsword until a worthy soul finds it and lays claim to its power.</div>
    <div>A <span class="italic">moonblade</span> serves only one master at a time. The attunement process requires a special ritual in the throne room of an elven regent or in a temple dedicated to the elven gods.</div>
    <div>A <span class="italic">moonblade</span> won't serve anyone it regards as craven, erratic, corrupt, or at odds with preserving and protecting elvenkind. If the balde rejects you, you make ability checks, attack rolls, and saving throws with disadvantage for 24 hours. If the blade accepts you, you become attuned to it and a new rune appears on the blade. You remain attuned to the weapon until you die or the weapon is destroyed.</div>
    <div>A <span class="italic">moonblade</span> has one rune on its balde for each master it has served (typically 1d6 + 1). The first rune always grants a +1 bonus to attack and damage rolls made with this magic weapon. Each rune beyond the first grants the <span class="italic">moonblade</span> an additional property. The DM chooses each property or determines it randomly on the Moon Blade Properties table.</div>
    <div>
    <label for="moonblade-table">Moonblade Properties</label>
    <table id="moonblade-table">
    <tr><thd100></th><th>Property</th></tr>
    <tr><td>01-40</td><td>Increase the bonus to attack and damage rolls by 1, to a maximum of +3. Reroll if the <span class="italic">moonblade</span> already has a +3 bonus.</td></tr>
    <tr><td>41-80</td><td>The <span class="italic">moonblade</span> gains a randomly determined minor property (see "Special Features" earlier in this chapter).</td></tr>
    <tr><td>81-82</td><td>The <span class="italic">moonblade</span> gains the finesse property.</td></tr>
    <tr><td>83-84</td><td><span class="italic">moonblade</span> gains the thrown property (range 20/60 feet).</td></tr>
    <tr><td>85-86</td><td>The <span class="italic">moonblade</span> functions as a <span class="italic">defender</span>.</td></tr>
    <tr><td>87-90</td><td>The <span class="italic">moonblade</span> scores a critical hit on a roll of 19 or 20.</td></tr>
    <tr><td>91-92</td><td>When you hit with an attack using the <span class="italic">moonblade</span>, the attack deals an extra 1d6 slashing damage.</td></tr>
    <tr><td>93-94</td><td>When you hit a creature of a specific type (such as dragon, fiend, or undead) with the <span class="italic">moonblade</span>, the target takes an extra 1d6 damage of one of these types: acid, cold, fire, lightning, or thunder.</td></tr>
    <tr><td>95-96</td><td>You can use a bonus action to cause the <span class="italic">moonblade</span> to flash brightly. Each creature that can see you and is within 30 feet of you must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until you take a short rest while attuned to the weapon.</td></tr>
    <tr><td>97-98</td><td>The <span class="italic">moonblade</span> functions as a <span class="italic">ring of spell storing</span>.</td></tr>
    <tr><td>99</td><td>You can use an action to call forth an elfshadow, provided that you don't already have one serving you. The elfshadow appears in an unoccupied space within 120 feet of you. It uses the statistics for a <span class="bold">shadow</span> from the <span class="italic">Monster Manual</span>, except it is neutral, immune to effects that turn undead, and doesn't create new shadows. You control this creature, deciding how it acts and moves. It remains until it drops to 0 hit points or you dismiss it as an action.</td></tr>
    <tr><td>00</td><td>The <span class="italic">moonblade</span> functions as a <span class="italic">vorpal sword</span>.</td></tr>
    </table>
    </div>
    <div><span class="bold">Sentience</span>. A <span class="italic">moonblade</span> is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 10, and a Charisma of 12. It has hearing and darkvision out to a range of 120 feet.</div>
    <div>The weapon communicates by transmitting emotions, sending a tingling sensation through the wielder's hand when it wants to communicate something it has sensed. It can communicate more explicitly, through visions or dereams, when the wielder is either in a trance or asleep.</div>
    <div><span class="bold">Personality</span>. Every <span class="italic">moonblade</span> seeks the advancement of elvenkind and elven ideals. Courage, loyalty, beauty, music, and life are all part of this purpose.</div>
    <div>The weapon is bonded to the family line it is meant to serve. Once it has bonded with an owner who shares its ideals, its loyalty is absolute.</div>
    <div>If a <span class="italic">moonblade</span> has a flaw, it is overconfidence. Once it has decided on an owner, it belives that only that person should wield it, even if the owner falls short of elven ideals.</div>
    `,
  },
  Wave: {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  Whelm: {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Axe of the Dwarvish Lords": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Book of Exalted Deeds": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Book of Vile Darkness": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Eye and Hand of Vecna": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Orb of Dragonkind": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Sword of Kas": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
  "Wand of Orcus": {
    type: "TYPE",
    description: `DESCRIPTION`,
  },
};

// ARCANE SPELLS DATA
const arcaneSpells = {
  cantrip: [
    "Acid Splash",
    "Blade Ward",
    "Booming Blade",
    "Chill Touch",
    "Control Flames",
    "Create Bonfire",
    "Dancing Lights",
    "Druidcraft",
    "Eldritch Blast",
    "Encode Thoughts",
    "Fire Bolt",
    "Friends",
    "Frostbite",
    "Green-Flame Blade",
    "Guidance",
    "Gust",
    "Hand of Radiance",
    "Infestation",
    "Light",
    "Lightning Lure",
    "Mage Hand",
    "Magic Stone",
    "Mending",
    "Message",
    "Mind Sliver",
    "Minor Illusion",
    "Mold Earth",
    "Poison Spray",
    "Prestidigitation",
    "Primal Savagery",
    "Produce Flame",
    "Ray of Frost",
    "Resistance",
    "Sacred Flame",
    "Sapping Sting",
    "Shape Water",
    "Shillelagh",
    "Shocking Grasp",
    "Spare the Dying",
    "Sword Burst",
    "Thaumaturgy",
    "Thorn Whip",
    "Thunderclap",
    "Toll The Dead",
    "True Strike",
    "Vicious Mockery",
    "Virtue",
    "Word Of Radiance",
  ],
  1: [
    "Absorb Elements",
    "Acid Stream",
    "Alarm",
    "Animal Friendship",
    "Arcane Weapon",
    "Armor of Agathys",
    "Arms of Hadar",
    "Bane",
    "Beast Bond",
    "Bless",
    "Burning Hands",
    "Catapult",
    "Cause Fear",
    "Ceremony",
    "Chaos Bolt",
    "Charm Person",
    "Chromatic Orb",
    "Color Spray",
    "Command",
    "Compelled Duel",
    "Comprehend Languages",
    "Create or Destroy Water",
    "Cure Wounds",
    "Detect Good and Evil",
    "Detect Magic",
    "Detect Poison and Disease",
    "Disguise Self",
    "Dissonant Whispers",
    "Distort Value",
    "Divine Favor",
    "Earth Tremor",
    "Ensnaring Strike",
    "Entangle",
    "Expeditious Retreat",
    "Faerie Fire",
    "False Life",
    "Feather Fall",
    "Find Familiar",
    "Fog Cloud",
    "Frost Fingers",
    "Gift of Alacrity",
    "Goodberry",
    "Grease",
    "Guiding Bolt",
    "Guiding Hand",
    "Hail of Thorns",
    "Healing Elixir",
    "Healing Word",
    "Hellish Rebuke",
    "Heroism",
    "Hex",
    "Hunter's Mark",
    "Ice Knife",
    "Identify",
    "Illusory Script",
    "Inflict Wounds",
    "Jump",
    "Longstrider",
    "Mage Armor",
    "Magic Missile",
    "Magnify Gravity",
    "Protection from Evil And Good",
    "Purify Food and Drink",
    "Ray of Sickness",
    "Sanctuary",
    "Searing Smite",
    "Shield",
    "Shield of Faith",
    "Silent Image",
    "Silvery Barbs",
    "Sleep",
    "Snare",
    "Speak with Animals",
    "Tasha's Hideous Laughter",
    "Tenser's Floating Disk",
    "Thunderous Smite",
    "Thunderwave",
    "Unseen Servant",
    "Witch Bolt",
    "Zephyr Strike",
  ],
  2: [
    "Aganazzar's Scorcher",
    "Aid",
    "Air Bubble",
    "Alter Self",
    "Animal Messenger",
    "Arcane Lock",
    "Augury",
    "Barkskin",
    "Beast Sense",
    "Blindness/Deafness",
    "Blur",
    "Borrowed Knowledge",
    "Branding Smite",
    "Calm Emotions",
    "Cloud of Daggers",
    "Continual Flame",
    "Cordon of Arrows",
    "Crown of Madness",
    "Darkness",
    "Darkvision",
    "Detect Thoughts",
    "Dragon's Breath",
    "Dust Devil",
    "Earthbind",
    "Enhance Ability",
    "Enlarge/Reduce",
    "Enthrall",
    "Find Steed",
    "Find Traps",
    "Flame Blade",
    "Flaming Sphere",
    "Flock of Familiars",
    "Fortune's Favor",
    "Gentle Repose",
    "Gift of Gab",
    "Gust of Wind",
    "Healing Spirit",
    "Heat Metal",
    "Hold Person",
    "Immovable Object",
    "Invisibility",
    "Kinetic Jaunt",
    "Knock",
    "Lesser Restoration",
    "Levitate",
    "Locate Animals or Plants",
    "Locate Object",
    "Magic Mouth",
    "Magic Weapon",
    "Maximillian's Earthen Grasp",
    "Melf's Acid Arrow",
    "Mind Spike",
    "Mirror Image",
    "Misty Step",
    "Moonbeam",
    "Nystul's Magic Aura",
    "Pass Without Trace",
    "Phantasmal Force",
    "Prayer of Healing",
    "Protection from Poison",
    "Pyrotechnics",
    "Ray of Enfeeblement",
    "Rime's Binding Ice",
    "Rope Trick",
    "Scorching Ray",
    "See Invisibility",
    "Shadow Blade",
    "Shatter",
    "Silence",
    "Skywrite",
    "Snilloc's Snowball Swarm",
    "Spider Climb",
    "Spike Growth",
    "Spiritual Weapon",
    "Spray of Cards",
    "Suggestion",
    "Summon Beast",
    "Tasha's Mind Whip",
    "Vortex Warp",
    "Warding Bond",
    "Warding Wind",
    "Warp Sense",
    "Web",
    "Wither and Bloom",
    "Wristpocket",
    "Zone of Truth",
  ],
  3: [
    "Animate Dead",
    "Antagonize",
    "Aura of Vitality",
    "Beacon of Hope",
    "Bestow Curse",
    "Blinding Smite",
    "Blink",
    "Call Lightning",
    "Clairvoyance",
    "Conjure Animals",
    "Conjure Barrage",
    "Counterspell",
    "Create Food and Water",
    "Crusader's Mantle",
    "Daylight",
    "Dispel Magic",
    "Elemental Weapon",
    "Erupting Earth",
    "Fast Friends",
    "Fear",
    "Feign Death",
    "Fireball",
    "Flame Arrows",
    "Fly",
    "Gaseous Form",
    "Glyph of Warding",
    "Haste",
    "Hunger of Hadar",
    "Hypnotic Pattern",
    "Incite Greed",
    "Intellect Fortress",
    "Leomund's Tiny Hut",
    "Life Transference",
    "Lightning Arrow",
    "Lightning Bolt",
    "Magic Circle",
    "Major Image",
    "Mass Healing Word",
    "Meld into Stone",
    "Nondetection",
    "Phantom Steed",
    "Plant Growth",
    "Protection from Energy",
    "Pulse Wave",
    "Remove Curse",
    "Revivify",
    "Sending",
    "Sleet Storm",
    "Slow",
    "Speak with Dead",
    "Speak with Plants",
    "Spirit Guardians",
    "Spirit Shroud",
    "Stinking Cloud",
    "Summon Fey",
    "Summon Lesser Demons",
    "Summon Shadowspawn",
    "Summon Undead",
    "Thunder Step",
    "Tidal Wave",
    "Tiny Servant",
    "Tongues",
    "Vampiric Touch",
    "Wall of Sand",
    "Wall of Water",
    "Water Breathing",
    "Water Walk",
    "Wind Wall",
  ],
  4: [
    "Arcane Eye",
    "Aura of Life",
    "Aura of Purity",
    "Banishment",
    "Blight",
    "Charm Monster",
    "Compulsion",
    "Confusion",
    "Conjure Minor Elementals",
    "Conjure Woodland Beings",
    "Control Water",
    "Death Ward",
    "Dimension Door",
    "Divination",
    "Dominate Beast",
    "Elemental Bane",
    "Evard's Black Tentacles",
    "Fabricate",
    "Find Greater Steed",
    "Fire Shield",
    "Freedom of Movement",
    "Gate Seal",
    "Giant Insect",
    "Grasping Vine",
    "Gravity Sinkhole",
    "Greater Invisibility",
    "Guardian of Faith",
    "Guardian of Nature",
    "Hallucinatory Terrain",
    "Ice Storm",
    "Leomund's Secret Chest",
    "Locate Creature",
    "Mordenkainen's Faithful Hound",
    "Mordenkainen's Private Sanctum",
    "Otiluke's Resilient Sphere",
    "Phantasmal Killer",
    "Polymorph",
    "Sickening Radiance",
    "Staggering Smite",
    "Stone Shape",
    "Stoneskin",
    "Storm Sphere",
    "Summon Greater Demon",
    "Virtiolic Sphere",
    "Wall of Fire",
    "Watery Sphere",
  ],
  5: [
    "Animate Objects",
    "Antilife Shell",
    "Awaken",
    "Banishing Smite",
    "Bigby's Hand",
    "Circle of Power",
    "Cloudkill",
    "Commune",
    "Commune with Nature",
    "Cone of Cold",
    "Conjure Elemental",
    "Conjure Volley",
    "Contact Other Plane",
    "Contagion",
    "Control Winds",
    "Creation",
    "Danse Macabre",
    "Dawn",
    "Destructive",
    "Dispel Evil and Good",
    "Dominate Person",
    "Dream",
    "Enervation",
    "Far Step",
    "Flame Strike",
    "Geas",
    "Greater Restoration",
    "Hallow",
    "Hold Monster",
    "Holy Weapon",
    "Immolation",
    "Infernal Calling",
    "Insect Plague",
    "Legend Lore",
    "Maelstrom",
    "Mass Cure Wounds",
    "Mislead",
    "Modify Memory",
    "Negative Energy Flood",
    "Passwall",
    "Planar Binding",
    "Raise Dead",
    "Rary's Telepathic Bond",
    "Reincarnate",
    "Scrying",
    "Seeming",
    "Steel Wind Strike",
    "Swift Quiver",
    "Synaptic Static",
    "Telekinesis",
    "Teleportation Circle",
    "Tree Stride",
    "Wall of Force",
    "Wall of Light",
    "Wall of Stone",
    "Wrath of Nature",
  ],
  6: [
    "Arcane Gate",
    "Blade Barrier",
    "Bones of the Earth",
    "Chain Lightning",
    "Circle of Death",
    "Conjure Fey",
    "Contingency",
    "Create Homunculus",
    "Create Undead",
    "Disintegrate",
    "Druid Grove",
    "Eyebite",
    "Find the Path",
    "Flesh to Stone",
    "Forbiddance",
    "Globe of Invulnerability",
    "Gravity Fissure",
    "Guards and Wards",
    "Harm",
    "Heal",
    "Heroe's Feast",
    "Investiture of Flame",
    "Investiture of Ice",
    "Investiture of Stone",
    "Investiture of Wind",
    "Magic Jar",
    "Mass Suggestion",
    "Mental Prison",
    "Move Earth",
    "Otiluke's Freezing Sphere",
    "Otto's Irresistable Dance",
    "Planar Ally",
    "Primordial Ward",
    "Programmed Illusion",
    "Scatter",
    "Soul Cage",
    "Summon Fiend",
    "Sunbeam",
    "Transport via Plants",
    "True Seeing",
    "Wall of Ice",
    "Wall of Thorns",
    "Wind Walk",
    "Word of Recall",
  ],
  7: [
    "Conjure Celestial",
    "Crown of Stars",
    "Delayed Blast Fireball",
    "Divine Word",
    "Etherealness",
    "Finger of Death",
    "Fire Storm",
    "Forcecage",
    "Mirage Arcane",
    "Mordenkainen's Magnificent Mansion",
    "Mordenkainen's Sword",
    "Plane Shift",
    "Power Word: Pain",
    "Prismatic Spray",
    "Project Image",
    "Regenerate",
    "Resurrection",
    "Reverse Gravity",
    "Sequester",
    "Simulacrum",
    "Symbol",
    "Teleport",
    "Temple of the Gods",
    "Tether Essence",
    "Whirlwind",
  ],
  8: [
    "Abi-Dalzim's Horrod Wilting",
    "Animal Shapes",
    "Antimagic Field",
    "Antipathy/Sympathy",
    "Clone",
    "Control Weather",
    "Dark Star",
    "Demiplane",
    "Dominate Monster",
    "Earthquake",
    "Feeblemind",
    "Glibness",
    "Holy Aura",
    "Illusory Dragon",
    "Incendiary Cloud",
    "Maddening Darkness",
    "Maze",
    "Mighty Fortress",
    "Mind Blank",
    "Power Word: Stun",
    "Reality Break",
    "Sunburst",
    "Telepathy",
    "Tsunami",
  ],
  9: [
    "Astral Projection",
    "Blade of Disaster",
    "Foresight",
    "Gate",
    "Imprisonment",
    "Invulnerability",
    "Mass Heal",
    "Mass Polymorph",
    "Meteor Swarm",
    "Power Word: Heal",
    "Power Word: Kill",
    "Prismatic Wall",
    "Psychic Scream",
    "Ravenous Void",
    "Shapechange",
    "Storm of Vengeance",
    "Time Ravage",
    "Time Stop",
    "True Polymorph",
    "True Resurrection",
    "Weird",
    "Wish",
  ],
};
