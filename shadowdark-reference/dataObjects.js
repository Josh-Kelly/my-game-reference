const WEAPONS = [
  {
    id: "bastard sword",
    name: "Bastard sword",
    cost: "10 gp",
    dmg: "1d8/1d10",
    hd: "1d8",
    type: "M",
    range: "C",
    properties: "V, 2 slots",
  },
  { id: "club", name: "Club", dmg: "1d4", cost: "5 cp", type: "M", range: "C", properties: "-" },
  { id: "crossbow", name: "Crossbow", dmg: "1d6", cost: "8 gp", type: "R", range: "F", properties: "2H, L" },
  { id: "dagger", name: "Dagger", dmg: "1d4", cost: "1 gp", type: "M/R", range: "C/N", properties: "F, Th" },
  { id: "greataxe", name: "Greataxe", dmg: "1d8/1d12", cost: "10 gp", type: "M", range: "C", properties: "V, 2 slots" },
  { id: "greatsword", name: "Greatsword", dmg: "1d12", cost: "12 gp", type: "M", range: "C", properties: "2H, 2 slots" },
  { id: "javelin", name: "Javelin", dmg: "1d4", cost: "5 sp", type: "M/R", range: "C/F", properties: "Th" },
  { id: "longbow", name: "Longbow", dmg: "1d8", cost: "8 gp", type: "R", range: "F", properties: "2H" },
  { id: "longsword", name: "Longsword", dmg: "1d8", cost: "9 gp", type: "M", range: "C", properties: "-" },
  { id: "mace", name: "Mace", dmg: "1d6", cost: "5 gp", type: "M", range: "C", properties: "-" },
  { id: "shortbow", name: "Shortbow", dmg: "1d4", cost: "6 gp", type: "R", range: "F", properties: "2H" },
  { id: "shortsword", name: "Shortsword", dmg: "1d6", cost: "7 gp", type: "M", range: "C", properties: "-" },
  { id: "spear", name: "Spear", dmg: "1d6", cost: "5 sp", type: "M/R", range: "C/N", properties: "Th" },
  { id: "staff", name: "Staff", dmg: "1d4", cost: "5 sp", type: "M", range: "C", properties: "2H" },
  { id: "warhammer", name: "Warhammer", dmg: "1d10", type: "M", range: "C", properties: "2H" },
];

const ARMOR = [
  { id: "leather armor", name: "Leather armor", cost: "10 gp", slots: "1", ac: "11 + DEX mod", properties: "-" },
  {
    id: "chainmail",
    name: "Leather armor",
    cost: "60 gp",
    slots: "1",
    ac: "11 + DEX mod",
    properties: "Disadvantage on stealth, swim",
  },
  {
    id: "plate mail",
    name: "Leather armor",
    cost: "130 gp",
    slots: "1",
    ac: "11 + DEX mod",
    properties: "No swim, disadvantage on stealth",
  },
  { id: "shield", name: "Leather armor", cost: "10 gp", slots: "1", ac: "11 + DEX mod", properties: "Occupies one hand" },
  {
    id: "mithral (metal armor only)",
    name: "Mithral (metal armor only)",
    cost: "x4",
    slots: "-1",
    ac: "-",
    properties: "No penalty stealth, swim",
  },
];

const STANDARDARRAYS = [
  { id: "fighter1", str: "15", dex: "13", con: "14", int: "10", wis: "9", cha: "8" },
  { id: "fighter2", str: "16", dex: "12", con: "13", int: "9", wis: "10", cha: "7" },
  { id: "fighter3", str: "14", dex: "11", con: "15", int: "8", wis: "9", cha: "12" },
  { id: "thief1", str: "9", dex: "15", con: "12", int: "13", wis: "10", cha: "11" },
  { id: "thief2", str: "11", dex: "16", con: "10", int: "12", wis: "8", cha: "13" },
  { id: "thief3", str: "10", dex: "14", con: "13", int: "11", wis: "9", cha: "12" },
  { id: "priest1", str: "12", dex: "10", con: "13", int: "9", wis: "15", cha: "14" },
  { id: "priest2", str: "13", dex: "9", con: "12", int: "10", wis: "14", cha: "15" },
  { id: "priest3", str: "11", dex: "11", con: "12", int: "9", wis: "16", cha: "13" },
  { id: "wizard1", str: "8", dex: "13", con: "10", int: "15", wis: "12", cha: "9" },
  { id: "wizard2", str: "9", dex: "11", con: "8", int: "16", wis: "14", cha: "10" },
  { id: "wizard3", str: "10", dex: "12", con: "9", int: "14", wis: "13", cha: "11" },
];

const MODIFIERS = [
  { minscore: "1", maxscore: "3", mod: "-4" },
  { minscore: "4", maxscore: "5", mod: "-3" },
  { minscore: "6", maxscore: "7", mod: "-2" },
  { minscore: "8", maxscore: "9", mod: "-1" },
  { minscore: "10", maxscore: "11", mod: "0" },
  { minscore: "12", maxscore: "13", mod: "1" },
  { minscore: "14", maxscore: "15", mod: "2" },
  { minscore: "16", maxscore: "17", mod: "3" },
  { minscore: "18", maxscore: "20", mod: "4" },
];

const CLASSFEATS = [];

const CLASSES = [
  {
    id: "fighter",
    name: "Fighter",
    hd: "1d8",
    description:
      "Blood-soaked gladiators in dented armor, acrobatic duelists with darting swords, or far-eyed elven archers who carve their legends with steel and grit.",
    gear: ["Chain or leather", "Melee weapon", "Shield or 2nd weapon"],
    feat1: "Hauler. Add your Con modifier, if positive, to your gear slots",
    feat2:
      "Weapon Mastery. Choose one type of weapon, such as longsword. Yo ugain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).",
    feat3:
      "Grit. Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kick open a stuck door (Strength) or slipping free of rusty chains (Dexterity).",
    weapon_prof: "All",
    armor_prof: "All armor and shields",
  },
  {
    id: "priest",
    name: "Priest",
    hd: "1d6",
    description:
      "Crusading templars, prophetic shamans, or mad-eyed zealots who wield the power of their gods to cleanse the unholy.",
    gear: ["Mace", "Holy symbol", "Light armor"],
    feat1: "Languages. You know either Celestial, Diabolic, or Primordial.",
    feat2: "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells.",
    feat3:
      "Deity. Choose a god to serve who matches your alignment (see Deities, pg. 28). You have a holy symbol for your god (it takes up no gear slots).",
    feat4:
      "Spellcasting. You can cast priest spells you know. You know two tier 1 spells of your choice from the priest spell list on pg. 51. Each time you gain a level, you choose new priest spells to learn according to the Priest Spells Known table.",
    weapon_prof: "Club, crossbow, dagger, mace, longsword, staff, warhammer",
    armor_prof: "All armor and shields",
  },
  {
    id: "thief",
    name: "Thief",
    hd: "1d4",
    description:
      "Rooftop assassins, grinning con artists, or cloaked cat burglars who can pluck a gem from the claws of a sleeping demon and sell it for twice its worth.",
    gear: ["Shortsword", "Thieves tools", "Leather armor"],
    feat1:
      "Backstab. If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).",
    feat2:
      "Thievery. You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots). You are trained in the following tasks and have advantage on any associated checks: climbing, sneaking and hiding, applying disguises, finding and disabling traps, delicate tasks such as picking pockets and opening locks.",
    feat3: "",
    weapon_prof: "Club, crossbow, dagger, shortbow, shortsword",
    armor_prof: "Leather armor, mithral chainmail",
  },
  {
    id: "wizard",
    name: "Wizard",
    description:
      "Rune-tattooed adepts, bespectacled magi, and flame-conjuring witches who dare to manipulate the fell forces of magic.",
    hd: "1d4",
    gear: ["Quarterstaff", "Spellbook", "Components pouch"],
    feat1: "Languages. You know two additional common languages and two rare languages (see pg. 32).",
    feat2:
      "Learning Spells. You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. Whether you succeed or fail, you expend the spell scroll. Spells you learn in this way don't count toward your known spells.",
    feat3:
      "Spellcasting. You can cast wizard spells you know. You know three tier 1 spells of your choice from the wizard spell list (see pg. 52). Each time yo ugain a level, you choose new wizard spells to learn according to the Wizard Spells Known table. For casting wizard spells, see Spellcasting on pg. 44.",
    weapon_prof: "Dagger, staff",
    armor_prof: "None",
  },
];

const RACES = [
  {
    id: "dwarf",
    name: "Dwarf",
    language: "Common and Dwarvish",
    feature: "Stout. Start with +2 HP. Roll hit points per level with advantage.",
  },
  {
    id: "elf",
    name: "Elf",
    language: "Common, Elvish, and Sylvan",
    feature: "Farsight. You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks.",
  },
  {
    id: "goblin",
    name: "Goblin",
    language: "Common and Goblin",
    feature: "Keen Senses. You can't be surprised.",
  },
  {
    id: "half-orc",
    name: "Half-orc",
    language: "Common and Orcish",
    feature: "Mighty. You have a +1 bonus to attack and damage rolls with melee weapons.",
  },
  {
    id: "halfling",
    name: "Halfling",
    language: "Common",
    feature: "Stealthy. Once per day, you can become invisible for 3 rounds.",
  },
  {
    id: "human",
    name: "Human",
    language: "Common language and one additional common language (pg. 32)",
    feature: "Ambitious. You gain one additional talent roll at 1st level.",
  },
];

const BACKGROUNDS = [
  { id: "urchin", name: "Urchin", description: "You gew up in the merciless treets of a large city." },
  { id: "wanted", name: "Wanted", description: "There's a price on your head, but you have allies." },
  { id: "cult_initiate", name: "Cult Initiate", description: "You know blasphemous secrets and rituals." },
  { id: "thieves_guild", name: "Thieves' Guild", description: "You have connections, contacts, and debts." },
  { id: "banished", name: "Banished", description: "Your people cast you out for supposed crimes." },
  { id: "orphaned", name: "Orphaned", description: "An unusual guardian rescued and raised you." },
  { id: "wizards_apprentice", name: "Wizard's Apprentice", description: "You have a knack and eye for magic." },
  { id: "jeweler", name: "Jeweler", description: "You can easily appraise value and authenticity." },
  { id: "herbalist", name: "Herbalist", description: "You know plants, medicines, and poisons." },
  { id: "barbarian", name: "Barbarian", description: "You left the horde, but it never quite left you." },
  { id: "mercenary", name: "Mercenary", description: "You fought friend and foe alike for your coin." },
  { id: "sailor", name: "Sailor", description: "Pirate, privateer, or merchant - the seas are yours." },
  { id: "acolyte", name: "Acolyte", description: "You're well trained in religious rites and doctrines." },
  { id: "soldier", name: "Soldier", description: "You served as a fighter in an organized army." },
  { id: "ranger", name: "Ranger", description: "The woods and wilds are your true home." },
  { id: "scout", name: "Scout", description: "You survived on stealth, observation, and speed." },
  { id: "minstrel", name: "Minstrel", description: "You've traveled far with your charm and talent." },
  { id: "scholar", name: "Scholar", description: "You know much about ancient history and lore." },
  { id: "noble", name: "Noble", description: "A famous name has opened many doors for you." },
  { id: "chirurgeon", name: "Chirurgeon", description: "You know anatomy, surgery, and first aid." },
];

const ALIGNMENTS = [
  {
    id: "chaotic",
    name: "Chaotic",
    description: `Chaotic characters align themselves with destruction, ambition, and wickedness. Chaotic characters adopt a "survival of the fittest" mentality.`,
  },
  {
    id: "lawful",
    name: "Lawful",
    description: `Lawful characters align themselves with fairness, order, and virtue. Lawful characters operate from a "good of the whole" mentality.`,
  },
  {
    id: "neutral",
    name: "Neutral",
    description: `Neutral characters find balance between Law and Chaos. They align with the cycle of growth and decline, adopting a "nature must take its course" mentality.`,
  },
];
