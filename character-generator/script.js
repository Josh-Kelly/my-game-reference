// ===================== RACE DATA =====================
const races = {
  dragonborn: {
    baseScores: { str: 12, dex: 8, con: 12, int: 12, wis: 12, cha: 10 },
    pointsToDistribute: 4,
    hitDie: "d8",
    size: "Medium",
    speed: 30,
    senses: [],
    features: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
  },
  dwarf: {
    baseScores: { str: 14, dex: 8, con: 14, int: 10, wis: 12, cha: 10 },
    pointsToDistribute: 6,
    hitDie: "d8",
    size: "Medium",
    speed: 25,
    senses: ["Darkvision"],
    features: ["Dwarven Resilience", "Dwarven Combat Training"],
  },
  elf: {
    baseScores: { str: 8, dex: 14, con: 10, int: 10, wis: 12, cha: 10 },
    pointsToDistribute: 6,
    hitDie: "d8",
    size: "Medium",
    speed: 30,
    senses: ["Darkvision"],
    features: ["Fey Ancestry", "Trance"],
  },
  human: {
    baseScores: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 },
    pointsToDistribute: 26,
    hitDie: "d8",
    size: "Medium",
    speed: 30,
    senses: [],
    features: ["Versatility"],
  },
  qurad: {
    baseScores: { str: 16, dex: 12, con: 12, int: 10, wis: 14, cha: 8 },
    pointsToDistribute: 5,
    hitDie: "d8",
    size: "Medium",
    speed: 30,
    senses: ["Darkvision"],
    features: ["Mystic Insight"],
  },
  gnome: {
    baseScores: { str: 6, dex: 14, con: 10, int: 10, wis: 12, cha: 12 },
    pointsToDistribute: 6,
    hitDie: "d8",
    size: "Small",
    speed: 25,
    senses: ["Darkvision"],
    features: ["Gnome Cunning"],
  },
  halfling: {
    baseScores: { str: 8, dex: 14, con: 10, int: 10, wis: 12, cha: 10 },
    pointsToDistribute: 6,
    hitDie: "d8",
    size: "Small",
    speed: 25,
    senses: [],
    features: ["Lucky", "Brave", "Halfling Nimbleness"],
  },
};

// Dragonborn color bonuses
const dragonbornColors = {
  red: { str: +1, cha: +1, features: ["Fire Breath", "Resistance to Fire"] },
  blue: { dex: +1, cha: +1, features: ["Lightning Breath", "Resistance to Lightning"] },
  green: { wis: +1, cha: +1, features: ["Poison Breath", "Resistance to Poison"] },
  black: { con: +1, cha: +1, features: ["Acid Breath", "Resistance to Acid"] },
  white: { dex: +1, cha: +1, features: ["Cold Breath", "Resistance to Cold"] },
  gold: { str: +1, cha: +2, features: ["Fire Breath", "Resistance to Fire", "Noble Heritage"] },
  silver: { dex: +1, cha: +2, features: ["Cold Breath", "Resistance to Cold", "Ancient Lineage"] },
  bronze: { str: +1, cha: +1, features: ["Lightning Breath", "Resistance to Lightning", "Mariner's Legacy"] },
};

// ===================== BACKGROUND DATA =====================
const backgrounds = {
  civicAuthorities: { sub: ["The Watch", "Watch Operative", "Guard"] },
  formerHuscarl: { sub: ["Disgraced", "Owed a Favor"] },
  drakeshield: { sub: ["Drakehunter", "Wyrdhand"] },
  riteOfStars: { sub: ["Starseer", "Hidehunter", "Glimmersmith"] },
  staffAndTower: { sub: ["Dragonhead", "Spellsword", "Operative"] },
  orderOfTheWeal: { sub: [] },
  thirdLodgeNegotiator: { sub: [] },
  piker: { sub: [] },
  craftsman: { sub: ["Smith", "Leatherworker", "Carpenter", "Mason"] },
  criminal: { sub: [] },
  scribe: { sub: ["Chronicler", "Archivist", "Copyist"] },
};

// ===================== DOM ELEMENTS =====================
const raceSelect = document.getElementById("race");
const dragonbornOptionsDiv = document.getElementById("dragonborn-options");
const dragonbornColorSelect = document.getElementById("dragonborn-color");
const raceFeaturesDiv = document.getElementById("race-features");
const abilityScoresDiv = document.getElementById("ability-scores");

const backgroundSelect = document.getElementById("background");
const backgroundSuboptionsDiv = document.getElementById("background-suboptions");
const backgroundSubSelect = document.getElementById("background-sub");
const backgroundFeaturesDiv = document.getElementById("background-features");

const generateBtn = document.getElementById("generate");
const characterSummaryDiv = document.getElementById("character-summary");

// ===================== FUNCTIONS =====================
function updateRaceDisplay() {
  const raceKey = raceSelect.value;
  if (!raceKey) return;

  // Dragonborn color selection
  dragonbornOptionsDiv.classList.toggle("hidden", raceKey !== "dragonborn");

  displayAbilityScores(raceKey, dragonbornColorSelect.value);
  displayRaceFeatures(raceKey, dragonbornColorSelect.value);
}

function displayAbilityScores(raceKey, colorKey = null) {
  const race = races[raceKey];
  const baseScores = { ...race.baseScores };
  let points = race.pointsToDistribute;

  // Apply Dragonborn color bonuses
  const bonusScores = {};
  if (raceKey === "dragonborn" && colorKey && dragonbornColors[colorKey]) {
    const bonus = dragonbornColors[colorKey];
    for (const key in bonus) {
      if (baseScores[key] !== undefined) baseScores[key] += bonus[key];
      bonusScores[key] = bonus[key]; // Track bonus separately
    }
  }

  // Build input fields
  let html = `<h3>Ability Scores (Points remaining: <span id="points-remaining">${points}</span>)</h3><ul>`;
  for (const [key, value] of Object.entries(baseScores)) {
    const bonusText = bonusScores[key] ? ` (+${bonusScores[key]} from color)` : "";
    html += `<li>${key.toUpperCase()}: 
      <input type="number" min="${race.baseScores[key]}" value="${value}" data-base="${
      race.baseScores[key]
    }" data-ability="${key}"> ${bonusText}</li>`;
  }
  html += "</ul><p>Distribute your points. You cannot exceed the available points.</p>";
  abilityScoresDiv.innerHTML = html;

  const inputs = abilityScoresDiv.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => updatePoints(inputs, race.pointsToDistribute));
  });
}

function updatePoints(inputs, totalPoints) {
  let usedPoints = 0;
  inputs.forEach((input) => {
    const base = parseInt(input.dataset.base);
    let val = parseInt(input.value);
    if (val < base) input.value = base;
    usedPoints += val - base;
  });

  const remaining = totalPoints - usedPoints;
  document.getElementById("points-remaining").textContent = remaining;

  // Prevent overspending
  if (remaining < 0) {
    inputs.forEach((input) => {
      const base = parseInt(input.dataset.base);
      let val = parseInt(input.value);
      if (val > base) input.value = base + Math.floor((totalPoints - (usedPoints - (val - base))) / inputs.length);
    });
    updatePoints(inputs, totalPoints);
  }
}

function displayRaceFeatures(raceKey, colorKey = null) {
  const race = races[raceKey];
  let features = [...race.features];
  if (raceKey === "dragonborn" && colorKey && dragonbornColors[colorKey]) {
    features = features.concat(dragonbornColors[colorKey].features);
  }

  let html = "<h3>Racial Features</h3><ul>";
  features.forEach((f) => (html += `<li>${f}</li>`));
  html += "</ul>";
  raceFeaturesDiv.innerHTML = html;
}

function updateBackgroundDisplay() {
  const bgKey = backgroundSelect.value;
  if (!bgKey) return;

  const subOptions = backgrounds[bgKey].sub;
  if (subOptions.length > 0) {
    backgroundSuboptionsDiv.classList.remove("hidden");
    backgroundSubSelect.innerHTML = subOptions.map((opt) => `<option value="${opt}">${opt}</option>`).join("");
  } else {
    backgroundSuboptionsDiv.classList.add("hidden");
    backgroundSubSelect.innerHTML = "";
  }

  displayBackgroundFeatures(bgKey, backgroundSubSelect.value);
}

function displayBackgroundFeatures(bgKey, subKey = null) {
  let features = [];
  if (subKey) features.push(subKey);
  else if (backgrounds[bgKey]) features.push(bgKey);

  let html = "<h3>Background Features</h3><ul>";
  features.forEach((f) => (html += `<li>${f}</li>`));
  html += "</ul>";
  backgroundFeaturesDiv.innerHTML = html;
}

function generateCharacterSummary() {
  const raceKey = raceSelect.value;
  const colorKey = dragonbornColorSelect.value;
  const bgKey = backgroundSelect.value;
  const subKey = backgroundSubSelect.value;

  if (!raceKey) {
    characterSummaryDiv.innerHTML = "<p>Please select a race.</p>";
    return;
  }

  // Gather ability scores from inputs
  const scores = {};
  const inputs = abilityScoresDiv.querySelectorAll("input");
  inputs.forEach((input) => {
    scores[input.dataset.ability] = parseInt(input.value);
  });

  const race = races[raceKey];
  let raceFeatureList = [...race.features];
  if (raceKey === "dragonborn" && colorKey && dragonbornColors[colorKey]) {
    raceFeatureList = raceFeatureList.concat(dragonbornColors[colorKey].features);
  }

  let html = `<h2>Character Summary</h2>
    <p><strong>Race:</strong> ${raceKey}${raceKey === "dragonborn" && colorKey ? " (" + colorKey + ")" : ""}</p>
    <p><strong>Ability Scores:</strong> ${JSON.stringify(scores)}</p>
    <p><strong>Racial Features:</strong> ${raceFeatureList.join(", ")}</p>
    <p><strong>Background:</strong> ${bgKey}${subKey ? " (" + subKey + ")" : ""}</p>`;

  characterSummaryDiv.innerHTML = html;
}

// ===================== EVENT LISTENERS =====================
raceSelect.addEventListener("change", updateRaceDisplay);
dragonbornColorSelect.addEventListener("change", updateRaceDisplay);
backgroundSelect.addEventListener("change", updateBackgroundDisplay);
backgroundSubSelect.addEventListener("change", () =>
  displayBackgroundFeatures(backgroundSelect.value, backgroundSubSelect.value)
);
generateBtn.addEventListener("click", generateCharacterSummary);
