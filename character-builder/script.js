// Global character object
const characterObject = {
  name: "",
  class: null,
  background: null,
  spells: [],
};

const featuresList = document.getElementById("features-list");

function updateFeaturesDisplay() {
  featuresList.innerHTML = ""; // clear existing

  let anyFeature = false;

  // Class feature
  if (characterObject.class && classesData[characterObject.class]) {
    anyFeature = true;
    const cls = classesData[characterObject.class];
    const classFeature = document.createElement("div");
    classFeature.innerHTML = `<strong>Class: ${cls.name}</strong><p>${
      cls.spellcasting ? "Has spellcasting feature." : "No spellcasting feature."
    }</p>`;
    featuresList.appendChild(classFeature);
  }

  // Background feature
  if (characterObject.background && backgroundsData[characterObject.background]) {
    anyFeature = true;
    const bg = backgroundsData[characterObject.background];
    const bgFeature = document.createElement("div");
    bgFeature.innerHTML = `<strong>Background: ${bg.name}</strong><p>${bg.description || "No description."}</p>`;
    featuresList.appendChild(bgFeature);
  }

  // Spells features
  if (characterObject.spells.length > 0) {
    anyFeature = true;

    const spellsHeader = document.createElement("h3");
    spellsHeader.textContent = "Chosen Spells";
    featuresList.appendChild(spellsHeader);

    characterObject.spells.forEach((spellKey) => {
      const spell = spellsData[spellKey];
      if (!spell) return;

      const spellDiv = document.createElement("div");
      spellDiv.style.marginBottom = "1rem";

      spellDiv.innerHTML = `
    <strong>${spell.name}</strong> (Level ${spell.level} ${spell.school})<br>
    <em><strong>Casting Time:</strong></em> ${spell.castingTime}<br>
    <em><strong>Range:</strong></em> ${spell.range}<br>
    <em><strong>Components:</strong></em> ${spell.components}<br>
    <em><strong>Duration:</strong></em> ${spell.duration}<br>
    <div style="margin-top: 0.5rem;">${spell.description1 || ""}</div>
    <div style="margin-top: 0.5rem;">${spell.description2 || ""}</div>
  `;

      featuresList.appendChild(spellDiv);
    });
  }

  if (!anyFeature) {
    featuresList.innerHTML = "<p>No features selected.</p>";
  }
}

// DOM elements
const nameInput = document.getElementById("char-name");
const classSelect = document.getElementById("class-select");
const backgroundSelect = document.getElementById("background-select");
const spellcastingSection = document.getElementById("spellcasting-section");
const spellSelectAvailable = document.getElementById("spell-select-available");
const spellSelectChosen = document.getElementById("spell-select-chosen");
const addSpellBtn = document.getElementById("add-spell-btn");
const removeSpellBtn = document.getElementById("remove-spell-btn");

// Populate classes dropdown
function populateClasses() {
  for (const [key, cls] of Object.entries(classesData)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = cls.name;
    classSelect.appendChild(option);
  }
}

// Populate backgrounds dropdown
function populateBackgrounds() {
  for (const [key, bg] of Object.entries(backgroundsData)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = bg.name;
    backgroundSelect.appendChild(option);
  }
}

// Populate spells multiselect (available spells)
function populateAvailableSpells() {
  // Clear current options
  spellSelectAvailable.innerHTML = "";
  for (const [key, spell] of Object.entries(spellsData)) {
    // Only show spells not already chosen
    if (!characterObject.spells.includes(key)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = spell.name;
      spellSelectAvailable.appendChild(option);
    }
  }
}

// Show or hide spellcasting section based on class feature
function updateSpellcastingVisibility() {
  if (characterObject.class && classesData[characterObject.class].spellcasting) {
    spellcastingSection.classList.remove("hidden");
    populateAvailableSpells();
    populateChosenSpells();
  } else {
    spellcastingSection.classList.add("hidden");
    characterObject.spells = [];
    spellSelectChosen.innerHTML = "";
  }
}

// Populate chosen spells select
function populateChosenSpells() {
  spellSelectChosen.innerHTML = "";
  for (const spellKey of characterObject.spells) {
    const spell = spellsData[spellKey];
    if (!spell) continue;
    const option = document.createElement("option");
    option.value = spellKey;
    option.textContent = spell.name;
    spellSelectChosen.appendChild(option);
  }
}

// Event handlers
nameInput.addEventListener("input", (e) => {
  characterObject.name = e.target.value;
  updateFeaturesDisplay();
});

classSelect.addEventListener("change", (e) => {
  const selectedClass = e.target.value;
  characterObject.class = selectedClass || null;
  updateSpellcastingVisibility();
  updateFeaturesDisplay();
});

backgroundSelect.addEventListener("change", (e) => {
  const selectedBg = e.target.value;
  characterObject.background = selectedBg || null;
  updateFeaturesDisplay();
});

// Add spells from available to chosen
addSpellBtn.addEventListener("click", () => {
  const selectedOptions = Array.from(spellSelectAvailable.selectedOptions);
  for (const opt of selectedOptions) {
    if (!characterObject.spells.includes(opt.value)) {
      characterObject.spells.push(opt.value);
    }
  }
  populateAvailableSpells();
  populateChosenSpells();
  updateFeaturesDisplay();
});

// Remove spells from chosen
removeSpellBtn.addEventListener("click", () => {
  const selectedOptions = Array.from(spellSelectChosen.selectedOptions);
  for (const opt of selectedOptions) {
    const idx = characterObject.spells.indexOf(opt.value);
    if (idx > -1) characterObject.spells.splice(idx, 1);
  }
  populateAvailableSpells();
  populateChosenSpells();
  updateFeaturesDisplay();
});

// Initialize form
function init() {
  populateClasses();
  populateBackgrounds();
  updateSpellcastingVisibility();
  updateFeaturesDisplay();
}

const spellHoverPopup = document.getElementById("spell-hover-popup");

spellSelectAvailable.addEventListener("mousemove", (e) => {
  const select = e.currentTarget;
  const rect = select.getBoundingClientRect();
  const y = e.clientY - rect.top;

  const optionHeight = select.clientHeight / select.size;
  const index = Math.floor(y / optionHeight);
  const options = Array.from(select.options);

  if (index >= 0 && index < options.length) {
    const option = options[index];
    const spell = spellsData[option.value];
    if (spell) {
      spellHoverPopup.innerHTML = `
        <strong>${spell.name}</strong> (Level ${spell.level} ${spell.school})<br>
        <em><strong>Casting Time:</strong></em> ${spell.castingTime}<br>
        <em><strong>Range:</strong></em> ${spell.range}<br>
        <em><strong>Components:</strong></em> ${spell.components}<br>
        <em><strong>Duration:</strong></em> ${spell.duration}<br><br>
        <div>${spell.description1 || ""}</div>
        <div style="margin-top: 0.5rem;">${spell.description2 || ""}</div>
      `;
      spellHoverPopup.classList.remove("hidden");
      spellHoverPopup.style.top = `${index * optionHeight}px`;
    } else {
      spellHoverPopup.classList.add("hidden");
    }
  } else {
    spellHoverPopup.classList.add("hidden");
  }
});

spellSelectAvailable.addEventListener("mouseleave", () => {
  spellHoverPopup.classList.add("hidden");
});

// Hide popup when mouse leaves the select
spellSelectAvailable.addEventListener("mouseleave", () => {
  spellHoverPopup.classList.add("hidden");
});

init();
