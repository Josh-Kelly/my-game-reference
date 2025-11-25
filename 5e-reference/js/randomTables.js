// =======================
// SPELL SCROLL ROLL SCRIPT
// =======================

// === Utility Functions ===

// Get a random element from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Dice Roller (supports XdY±Z ×M)
function rollDice(notation, showBreakdown = true) {
  const match = notation.trim().match(/^(\d*)d(\d+)([+-]\d+)?(?:\s*[x×]\s*(\d+))?$/i);
  if (!match) return "Invalid";

  const num = parseInt(match[1] || "1");
  const sides = parseInt(match[2]);
  const mod = parseInt(match[3] || "0");
  const mult = parseInt(match[4] || "1");

  let total = 0;
  const rolls = [];

  for (let i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    total += roll;
  }

  total += mod;
  total *= mult;

  if (!showBreakdown || num === 1) return total;
  const modText = mod ? (mod > 0 ? ` +${mod}` : ` ${mod}`) : "";
  const multText = mult > 1 ? ` ×${mult}` : "";
  return `${total} [${rolls.join(", ")}${modText}${multText}]`;
}

// Parse range like "01–50"
function parseRange(rangeText) {
  const match = rangeText.match(/(\d+)[–-](\d+)/);
  if (match) return [parseInt(match[1]), parseInt(match[2])];
  const single = rangeText.match(/^(\d+)$/);
  return single ? [parseInt(single[1]), parseInt(single[1])] : [0, 0];
}

// Highlight table rows
function highlightRow(row, table) {
  table.querySelectorAll("tr").forEach((r) => r.classList.remove("highlight"));
  row.classList.add("highlight");
  row.scrollIntoView({ behavior: "smooth", block: "center" });
}

// =======================
// MAIN SYSTEM INITIALIZER
// =======================

document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // TOOLTIP SYSTEM
  // =======================

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  document.body.appendChild(tooltip);

  let activeTooltipTarget = null;
  let tooltipLocked = false;

  function showTooltip(target, htmlContent) {
    tooltip.innerHTML = htmlContent;
    tooltip.style.display = "block";
    target.addEventListener("mousemove", updateTooltipPosition);
  }

  function updateTooltipPosition(e) {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  }

  function hideTooltip() {
    tooltip.style.display = "none";
    activeTooltipTarget = null;
    tooltipLocked = false;
    document.removeEventListener("click", checkClickOutside);
  }

  function checkClickOutside(e) {
    if (!tooltip.contains(e.target) && e.target !== activeTooltipTarget) {
      hideTooltip();
    }
  }

  // Hover to show tooltip
  document.addEventListener("mouseover", (e) => {
    if (tooltipLocked) return;

    const target = e.target;
    if (target.tagName === "TD" || target.tagName === "BUTTON" || target.classList.contains("roll-result")) {
      const name = target.textContent.trim();
      const itemKey = Object.keys(magicItems).find((key) => name.toLowerCase().includes(key.toLowerCase()));

      if (itemKey) {
        const item = magicItems[itemKey];
        const tooltipContent = `
          <div class="tooltip-item-name">${itemKey}</div>
          <div class="tooltip-item-type">${item.type}</div>
          <div class="tooltip-item-description">${item.description}</div>
        `;
        showTooltip(target, tooltipContent);
        activeTooltipTarget = target;
      }
    }
  });

  // Hide tooltip on mouseout
  document.addEventListener("mouseout", (e) => {
    if (!tooltipLocked && e.target === activeTooltipTarget) {
      hideTooltip();
    }
  });

  // Click to lock tooltip
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD" || target.tagName === "BUTTON" || target.classList.contains("roll-result")) {
      const name = target.textContent.trim();
      const itemKey = Object.keys(magicItems).find((key) => name.toLowerCase().includes(key.toLowerCase()));

      if (itemKey) {
        const item = magicItems[itemKey];
        const tooltipContent = `
          <div class="tooltip-item-name">${itemKey}</div>
          <div class="tooltip-item-type">${item.type}</div>
          <div class="tooltip-item-description">${item.description}</div>
        `;

        showTooltip(target, tooltipContent);
        activeTooltipTarget = target;
        tooltipLocked = true;

        document.addEventListener("click", checkClickOutside);
      }
    }
  });

  // =======================
  // ROLL BUTTONS (d100 + others)
  // =======================

  document.querySelectorAll(".roll-btn, .roll-btn-only-sum").forEach((btn) => {
    btn.addEventListener("click", () => {
      const notation = btn.innerText.trim();
      const showBreakdown = btn.classList.contains("roll-btn");
      const result = rollDice(notation, showBreakdown);

      // --- d100 headers ---
      if (btn.closest("th")) {
        const rollValue = typeof result === "number" ? result : parseInt(result);
        console.log(`Rolled d100: ${rollValue}`);

        let resultSpan = btn.nextElementSibling;
        if (!resultSpan || !resultSpan.classList.contains("roll-result")) {
          resultSpan = document.createElement("span");
          resultSpan.classList.add("roll-result");
          btn.insertAdjacentElement("afterend", resultSpan);
        }
        resultSpan.textContent = `→ ${rollValue}`;

        const table = btn.closest("table");
        const rows = table.querySelectorAll("tbody tr");

        for (const row of rows) {
          const [min, max] = parseRange(row.cells[0].textContent.trim());
          if (rollValue >= min && rollValue <= max) {
            highlightRow(row, table);

            const innerBtn = row.cells[1].querySelector("button.roll-btn");
            if (innerBtn) innerBtn.click();
            break;
          }
        }

        return;
      }

      // Non-d100 rolls
      let resultSpan = btn.nextElementSibling;
      if (!resultSpan || !resultSpan.classList.contains("roll-result")) {
        resultSpan = document.createElement("span");
        resultSpan.classList.add("roll-result");
        btn.insertAdjacentElement("afterend", resultSpan);
      }
      resultSpan.textContent = `→ ${result}`;
    });
  });

  // =======================
  // SPELL SCROLL TABLES
  // =======================

  const scrollButtons = document.querySelectorAll("#magic-item-tables button.roll-btn");

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.textContent.trim();
      if (!text.toLowerCase().includes("spell scroll")) return;

      const match = text.match(/\((.*?)\)/);
      if (!match) return;

      let levelText = match[1].toLowerCase().trim();
      let levelKey = "cantrip";

      if (/cantrip/.test(levelText)) levelKey = "cantrip";
      else if (/^1/.test(levelText)) levelKey = "1";
      else if (/^2/.test(levelText)) levelKey = "2";
      else if (/^3/.test(levelText)) levelKey = "3";
      else if (/^4/.test(levelText)) levelKey = "4";
      else if (/^5/.test(levelText)) levelKey = "5";
      else if (/^6/.test(levelText)) levelKey = "6";
      else if (/^7/.test(levelText)) levelKey = "7";
      else if (/^8/.test(levelText)) levelKey = "8";
      else if (/^9/.test(levelText)) levelKey = "9";

      const spells = arcaneSpells[levelKey];
      const result = spells ? getRandomItem(spells) : "Unknown spell level";

      let resultSpan = btn.nextElementSibling;
      if (!resultSpan || !resultSpan.classList.contains("roll-result")) {
        resultSpan = document.createElement("span");
        resultSpan.classList.add("roll-result");
        btn.insertAdjacentElement("afterend", resultSpan);
      }

      let suffix = "th";
      if (levelKey === "cantrip") suffix = "";
      else if (levelKey === "1") suffix = "st";
      else if (levelKey === "2") suffix = "nd";
      else if (levelKey === "3") suffix = "rd";

      resultSpan.textContent = `→ ${result} [${levelKey}${suffix}]`;
    });
  });

  // =======================
  // CLEAR ALL ROLLS
  // =======================

  document.querySelectorAll(".clear-rolls").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".magic-item-table, .treasure-table, .challenge-table");
      if (parent) {
        parent.querySelectorAll(".roll-result").forEach((r) => r.remove());
        parent.querySelectorAll(".highlight").forEach((r) => r.classList.remove("highlight"));
      }
    });
  });

  // =======================
  // OPTIONAL DROPDOWN
  // =======================

  const dropdown = document.getElementById("challenge-select");
  const tables = document.querySelectorAll(".challenge-table");

  if (dropdown) {
    dropdown.addEventListener("change", () => {
      const selected = dropdown.value;
      tables.forEach((table) => {
        table.style.display = table.dataset.challenge === selected ? "block" : "none";
      });
    });
  }
}); // END DOMContentLoaded
