// Roll a d100
function rollD100() {
  return Math.floor(Math.random() * 100) + 1;
}

// Get table result based on roll
function getTableResult(tableId, roll) {
  const table = document.getElementById(tableId);
  for (let row of table.tBodies[0].rows) {
    const [min, max] = row.cells[0].textContent.replace("–", "-").split("-").map(Number);
    if (roll >= min && roll <= max) {
      return row.cells[1].textContent;
    }
  }
  return null;
}

// Roll from arcaneSpells JSON
function rollArcaneSpell(level) {
  const spells = arcaneSpells[level];
  if (!spells) return "No spells for this level";
  const index = Math.floor(Math.random() * spells.length);
  return spells[index];
}

document.querySelectorAll("#magic-item-table-a .roll-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const roll = rollD100();
    const result = getTableResult("magic-item-table-a", roll);

    // Ensure result span exists
    let resultSpan = btn.nextElementSibling;
    if (!resultSpan || !resultSpan.classList.contains("roll-result")) {
      resultSpan = document.createElement("span");
      resultSpan.classList.add("roll-result");
      btn.insertAdjacentElement("afterend", resultSpan);
    }

    let displayText = `Roll: ${roll} → ${result}`;

    // Check if result triggers arcaneSpells
    const spellMatch = result.match(/Spell scroll \((.*?)\)/i);
    if (spellMatch) {
      const level = spellMatch[1].toLowerCase(); // "cantrip", "1st level", etc.
      const normalizedLevel = level.includes("level") ? level.split(" ")[0] : level;
      const spell = rollArcaneSpell(normalizedLevel);
      displayText += ` → Spell: ${spell}`;
    }

    resultSpan.textContent = displayText;
  });
});

const arcaneSpells = {
  cantrip: ["Acid Splash", "Blade Ward", "Chill Touch"],
  1: ["Alarm", "Burning Hands", "Charm Person", "Magic Missile"],
  2: ["Arcane Lock", "Blindness/Deafness", "Invisibility"],
  // ...fill in other levels as needed
};
