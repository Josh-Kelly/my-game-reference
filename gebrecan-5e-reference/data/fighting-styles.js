const fightingStyles = [
  {
    title: "Archery",
    prerequisite: "None",
    description1: "You gain a +2 bonus to attack rolls you make with ranged weapons.",
  },
  {
    title: "Athlete",
    prerequisite: "Strength or Dexterity at 15+, the other at 13+",
    description1:
      "• Increase your Strength or Dexterity score by 1, to a maximum of 20.\n• When you are prone, standing up uses only 5 feet of your movement.\n• Climbing doesn't cost you extra movement.\n• You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.",
  },
  {
    title: "Blind Fighting",
    prerequisite: "Wisdom 15+",
    description1:
      "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness.",
    description2:
      "Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
  },
  {
    title: "Charger",
    prerequisite: "Strength 15 or higher",
    description1:
      "• When you use your action to Dash, you can make one melee weapon attack or shove a creature.\n• If you move at least 10 feet in a straight line immediately before making the attack/shove, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed).",
  },
  {
    title: "Close Quarters Shooter",
    prerequisite: "None",
    description1:
      "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
  },
  {
    title: "Crossbow Expert",
    prerequisite: "Vreiman",
    description1:
      "• You ignore the loading quality of crossbows with which you are proficient.\n• Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.\n• When you use the Attack action and attack with a one handed weapon, you can also attack with a light or hand crossbow you are holding.",
  },
  {
    title: "Defense",
    prerequisite: "None",
    description1: "While you are wearing armor, you gain a +1 bonus to AC.",
  },
  {
    title: "Defensive Duelist",
    prerequisite: "Dexterity 15 or higher",
    description1:
      "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.",
  },
  {
    title: "Dual Wielder",
    prerequisite: "None",
    description1:
      "• You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.\n• You can use two-weapon fighting even when the one handed melee weapons you are wielding aren't light.\n• You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
  },
  {
    title: "Dueling",
    prerequisite: "None",
    description1:
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
  },
  {
    title: "Grappler",
    prerequisite: "Strength 13 or higher",
    description1:
      "• You have advantage on attack rolls against a creature you are grappling.\n• You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.",
  },
  {
    title: "Great Weapon Fighting",
    prerequisite: "None",
    description1:
      "You gain +2 to damage rolls while wielding a melee weapon in two hands. The weapon must have the two-handed or versatile property for you to gain this benefit.",
  },
  {
    title: "Great Weapon Master",
    prerequisite: "None",
    description1:
      "• On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one additional melee weapon attack.\n• Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
  },
  {
    title: "Heavy Armor Master",
    prerequisite: "Proficiency with heavy armor",
    description1:
      "• Increase your Strength score by 1, to a maximum of 20.\n• While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical attacks is reduced by 3.",
  },
  {
    title: "Interception",
    prerequisite: "None",
    description1:
      "When a creature you can see moves at least 10 ft., you can use your reaction to move up to half your movement speed without provoking attacks of opportunity and make a melee attack against the creature.",
    description2:
      "If your attack hits and the creature is your size or smaller, the creature’s movement drops to 0 halfway through its intended movement. You cannot use this ability if half your movement speed would not get you to the creature before or at its halfway point.",
  },
  {
    title: "Mariner",
    prerequisite: "None",
    description1:
      "As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to armor class.",
  },
  {
    title: "Medium Armor Master",
    prerequisite: "Proficiency with medium armor",
    description1:
      "• Wearing medium armor doesn't impose disadvantage on your Dexterity (Stealth) checks.\n• When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher.",
  },
  {
    title: "Mounted Combatant",
    prerequisite: "None",
    description1: "While you are mounted and aren't incapacitated, you gain the following benefits:",
    description2:
      "• You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.\n• You can force an attack targeted at your mount to target you instead.\n• If your mount is subjected to an effect that allows it to make Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
  },
  {
    title: "Polearm Master",
    prerequisite: "None",
    description1:
      "When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can also make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a d4, and it deals bludgeoning damage.",
    description2:
      "While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter the reach you have with that weapon.",
  },
  {
    title: "Protection",
    prerequisite: "None",
    description1:
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
  },
  {
    title: "Sentinel",
    prerequisite: "None",
    description1:
      "• When you hit a creature your size or smaller with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.\n• When a creature makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.",
  },
  {
    title: "Shield Master",
    prerequisite: "None",
    description1: "You gain the following benefits while you are wielding a shield:",
    description2:
      "• If you take the Attack action on your turn, you can also try to shove a creature within 5 feet of you with your shield.\n• If you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.\n• If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect.",
  },
  {
    title: "Superior Technique",
    prerequisite: "None",
    description1:
      "You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
    description2:
      "You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or Long Rest.",
  },
  {
    title: "Thrown Weapon Fighting",
    prerequisite: "None",
    description1: "You can draw a weapon that has the thrown property as part of the attack you make with the weapon.",
    description2: "In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
  },
  {
    title: "Tunnel Fighter",
    prerequisite: "None",
    description1:
      "As part of a Dodge action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
  },
  {
    title: "Two-Weapon Fighting",
    prerequisite: "None",
    description1: "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
  },
  {
    title: "Unarmed Fighting",
    prerequisite: "None",
    description1:
      "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.",
    description2: "At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.",
  },
  {
    title: "Weapon Master",
    prerequisite: "None",
    description1:
      "• Increase your Strength or Dexterity score by 1, to a maximum of 20.\n• You gain proficiency with four weapons of your choice. Each one must be a simple or a martial weapon.",
  },
];
