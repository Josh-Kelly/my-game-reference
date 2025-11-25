const monsters = [
  {
    name: "Aboleth",
    cr: "10",
    size: "Large",
    alignment: "Lawful Evil",
    type: "Aberration",
    image: getMonsterImage("Aboleth"),
    themes: ["Aquatic", "Aberration", "Mind Control"],
    source: "MM, page 13",
  },
  {
    name: "Zombie",
    cr: "1/4",
    size: "Medium",
    alignment: "Neutral Evil",
    type: "Undead",
    image: getMonsterImage("Zombie"),
    themes: ["Undead", "Minion", "Horde"],
  },
  {
    name: "Beholder",
    cr: "13",
    size: "Large",
    alignment: "Lawful Evil",
    type: "Aberration",
    image: getMonsterImage("Beholder"),
    themes: ["Aberration", "Eye Rays", "Tyrant"],
  },
  {
    name: "Orc",
    cr: "1/2",
    size: "Medium",
    alignment: "Chaotic Evil",
    type: "Humanoid",
    image: getMonsterImage("Orc"),
    themes: ["Humanoid", "Savage", "Tribal"],
  },
  {
    name: "Goblin",
    cr: "1/4",
    size: "Small",
    alignment: "Neutral Evil",
    type: "Humanoid",
    image: getMonsterImage("Goblin"),
    themes: ["Humanoid", "Sneaky", "Cowardly"],
  },
  {
    name: "Dragon, Red",
    cr: "24",
    size: "Gargantuan",
    alignment: "Chaotic Evil",
    type: "Dragon",
    image: getMonsterImage("Dragon, Red"),
    themes: ["Dragon", "Fire", "Legendary"],
  },
  {
    name: "Dragon, Blue",
    cr: "16",
    size: "Gargantuan",
    alignment: "Lawful Evil",
    type: "Dragon",
    image: getMonsterImage("Dragon, Blue"),
    themes: ["Dragon", "Lightning", "Desert"],
  },
  {
    name: "Dragon, Green",
    cr: "15",
    size: "Gargantuan",
    alignment: "Lawful Evil",
    type: "Dragon",
    image: getMonsterImage("Dragon, Green"),
    themes: ["Dragon", "Poison", "Forest"],
  },
  {
    name: "Dragon, Black",
    cr: "14",
    size: "Gargantuan",
    alignment: "Chaotic Evil",
    type: "Dragon",
    image: getMonsterImage("Dragon, Black"),
    themes: ["Dragon", "Acid", "Swamp"],
  },
  {
    name: "Dragon, White",
    cr: "13",
    size: "Gargantuan",
    alignment: "Chaotic Evil",
    type: "Dragon",
    image: getMonsterImage("Dragon, White"),
    themes: ["Dragon", "Cold", "Arctic"],
  },
  {
    name: "Mind Flayer",
    cr: "7",
    size: "Medium",
    alignment: "Lawful Evil",
    type: "Aberration",
    image: getMonsterImage("Mind Flayer"),
    themes: ["Aberration", "Psionic", "Slave Master"],
  },
  {
    name: "Kobold",
    cr: "1/8",
    size: "Small",
    alignment: "Lawful Evil",
    type: "Humanoid",
    image: getMonsterImage("Kobold"),
    themes: ["Humanoid", "Trapmaker", "Cowardly"],
  },
  {
    name: "Gnoll",
    cr: "1",
    size: "Medium",
    alignment: "Chaotic Evil",
    type: "Humanoid",
    image: getMonsterImage("Gnoll"),
    themes: ["Humanoid", "Savage", "Hyena"],
  },
  {
    name: "Lich",
    cr: "21",
    size: "Medium",
    alignment: "Any Evil",
    type: "Undead",
    image: getMonsterImage("Lich"),
    themes: ["Undead", "Arcane", "Immortal"],
  },
  {
    name: "Skeleton",
    cr: "1/4",
    size: "Medium",
    alignment: "Lawful Evil",
    type: "Undead",
    image: getMonsterImage("Skeleton"),
    themes: ["Undead", "Bones", "Minion"],
  },
  {
    name: "Troll",
    cr: "5",
    size: "Large",
    alignment: "Chaotic Evil",
    type: "Giant",
    image: getMonsterImage("Troll"),
    themes: ["Giant", "Regeneration", "Savage"],
  },
  {
    name: "Ogre",
    cr: "2",
    size: "Large",
    alignment: "Chaotic Evil",
    type: "Giant",
    image: getMonsterImage("Ogre"),
    themes: ["Giant", "Brute", "Dumb"],
  },
  {
    name: "Giant, Hill",
    cr: "5",
    size: "Huge",
    alignment: "Neutral Evil",
    type: "Giant",
    image: getMonsterImage("Giant, Hill"),
    themes: ["Giant", "Brute", "Glutton"],
  },
  {
    name: "Giant, Frost",
    cr: "8",
    size: "Huge",
    alignment: "Lawful Evil",
    type: "Giant",
    image: getMonsterImage("Giant, Frost"),
    themes: ["Giant", "Cold", "Warrior"],
  },
  {
    name: "Giant, Fire",
    cr: "9",
    size: "Huge",
    alignment: "Lawful Evil",
    type: "Giant",
    image: getMonsterImage("Giant, Fire"),
    themes: ["Giant", "Lava", "Smith"],
  },
  {
    name: "Giant, Storm",
    cr: "13",
    size: "Huge",
    alignment: "Neutral Good",
    type: "Giant",
    image: getMonsterImage("Giant, Storm"),
    themes: ["Giant", "Lightning", "Regal"],
  },
  {
    name: "Mimic",
    cr: "2",
    size: "Medium",
    alignment: "Neutral",
    type: "Aberration",
    image: getMonsterImage("Mimic"),
    themes: ["Aberration", "Deceptive", "Trap"],
  },
  {
    name: "Gelatinous Cube",
    cr: "2",
    size: "Large",
    alignment: "Unaligned",
    type: "Ooze",
    image: getMonsterImage("Gelatinous Cube"),
    themes: ["Ooze", "Dungeon", "Engulf"],
  },
  {
    name: "Black Pudding",
    cr: "4",
    size: "Large",
    alignment: "Unaligned",
    type: "Ooze",
    image: getMonsterImage("Black Pudding"),
    themes: ["Ooze", "Corrosive", "Split"],
  },
  {
    name: "Otyugh",
    cr: "5",
    size: "Large",
    alignment: "Neutral Evil",
    type: "Aberration",
    image: getMonsterImage("Otyugh"),
    themes: ["Aberration", "Filth", "Tentacles"],
  },
  {
    name: "Displacer Beast",
    cr: "3",
    size: "Large",
    alignment: "Unaligned",
    type: "Fey",
    image: getMonsterImage("Displacer Beast"),
    themes: ["Fey", "Illusion", "Beast"],
  },
  {
    name: "Blink Dog",
    cr: "1/4",
    size: "Medium",
    alignment: "Lawful Good",
    type: "Fey",
    image: getMonsterImage("Blink Dog"),
    themes: ["Fey", "Teleport", "Loyal"],
  },
  {
    name: "Bulette",
    cr: "5",
    size: "Large",
    alignment: "Unaligned",
    type: "Monstrosity",
    image: getMonsterImage("Bulette"),
    themes: ["Monstrosity", "Burrowing", "Predator"],
  },
  {
    name: "Roc",
    cr: "11",
    size: "Gargantuan",
    alignment: "Unaligned",
    type: "Beast",
    image: getMonsterImage("Roc"),
    themes: ["Beast", "Flying", "Huge"],
  },
  {
    name: "Chimera",
    cr: "6",
    size: "Large",
    alignment: "Chaotic Evil",
    type: "Monstrosity",
    image: getMonsterImage("Chimera"),
    themes: ["Monstrosity", "Hybrid", "Fire Breath"],
  },
  {
    name: "Hydra",
    cr: "8",
    size: "Huge",
    alignment: "Unaligned",
    type: "Monstrosity",
    image: getMonsterImage("Hydra"),
    themes: ["Monstrosity", "Regeneration", "Multiheaded"],
  },
  {
    name: "Basilisk",
    cr: "3",
    size: "Medium",
    alignment: "Unaligned",
    type: "Monstrosity",
    image: getMonsterImage("Basilisk"),
    themes: ["Monstrosity", "Petrification", "Lizard"],
  },
  {
    name: "Medusa",
    cr: "6",
    size: "Medium",
    alignment: "Lawful Evil",
    type: "Monstrosity",
    image: getMonsterImage("Medusa"),
    themes: ["Monstrosity", "Petrification", "Snake"],
  },
];

monsters.sort((a, b) => a.name.localeCompare(b.name));

const gallery = document.getElementById("monster-gallery");
const details = document.getElementById("monster-details");
const selectedList = document.getElementById("selected-list");

let galleryMonsters = [...monsters];
let selectedMonsters = [];

// REUSABLE CARD CREATOR
function createMonsterCard(monster, inSidebar) {
  const card = document.createElement("div");
  card.classList.add("monster-card");

  const img = document.createElement("img");
  img.src = monster.image;
  img.alt = monster.name;
  img.title = monster.name;

  const name = document.createElement("div");
  name.classList.add("monster-name");
  name.textContent = monster.name;

  card.appendChild(img);
  card.appendChild(name);

  if (inSidebar) {
    // Sidebar: click shows details
    card.addEventListener("click", () => showDetails(monster));

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't trigger details
      moveToGallery(monster);
    });
    card.appendChild(removeBtn);
  } else {
    // Gallery: click image shows details
    img.addEventListener("click", () => showDetails(monster));

    // "+" button to add to sidebar
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.textContent = "+";
    addBtn.addEventListener("click", () => moveToSidebar(monster));
    card.appendChild(addBtn);
  }

  return card;
}

// RENDER GALLERY
function renderGallery() {
  gallery.innerHTML = "";
  galleryMonsters.sort((a, b) => a.name.localeCompare(b.name));
  galleryMonsters.forEach((monster) => {
    const card = createMonsterCard(monster, false);
    gallery.appendChild(card);
  });
}

// RENDER SIDEBAR
function renderSidebar() {
  selectedList.innerHTML = "";
  selectedMonsters.forEach((monster) => {
    const card = createMonsterCard(monster, true);
    selectedList.appendChild(card);
  });
}

// MOVE MONSTER TO SIDEBAR
function moveToSidebar(monster) {
  galleryMonsters = galleryMonsters.filter((m) => m.name !== monster.name);
  selectedMonsters.push(monster);
  renderGallery();
  renderSidebar();
  showDetails(monster);
}

// MOVE MONSTER BACK TO GALLERY
function moveToGallery(monster) {
  selectedMonsters = selectedMonsters.filter((m) => m.name !== monster.name);
  galleryMonsters.push(monster);
  renderGallery();
  renderSidebar();
}

// SHOW DETAILS PANEL
function showDetails(monster) {
  details.innerHTML = `
    <h2>${monster.name}</h2>
    <p><strong>CR:</strong> ${monster.cr}</p>
    <p><strong>Size:</strong> ${monster.size}</p>
    <p><strong>Alignment:</strong> ${monster.alignment}</p>
    <p><strong>Type:</strong> ${monster.type}</p>
    <h3>Themes:</h3>
    <div>${monster.themes.map((t) => `<span class="theme">${t}</span>`).join(" ")}</div>
    <img src="${monster.image}" alt="${monster.name}" style="max-height:200px; margin-top:10px;">
  `;
}

// ALLOW MULTIPLE IMAGE FILE EXTENSIONS
function getMonsterImage(name) {
  const extensions = ["png", "jpg", "jpeg"];
  for (let ext of extensions) {
    const path = `images/${name.replace(/,/g, "").replace(/ /g, "_").toLowerCase()}.${ext}`;
    // Check if the file exists (in a real project, this would require a server-side check)
    // For simplicity, just return the first valid-looking path
    return path;
  }
}

// INITIAL RENDER
renderGallery();
renderSidebar();
