/*------------------------------------------------------------------ Editing Notes -------------------------------------------------------------------*/
// Adding new Data:The js file that contains the data arrays should now define them as properties of the global window object with "window[fightingStyles] = [...".

/*------------------------------------------------------------------Identify and Format the Page Title -------------------------------------------------------------------*/
// Get the page title
const title = document.title;

// Convert to kebab-case for container IDs
const kebabCase = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

// Convert to camelCase if needed for global array lookup
const camelCase = title.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

console.log("Page Title in kebab-case:", kebabCase);
console.log("Page Title in camelCase:", camelCase);

/*------------------------------------------------------------------Render Cards Dynamically -------------------------------------------------------------------*/

function renderCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`No container found with id: ${containerId}`);
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "ability-card shaded";

    // Title
    const titleEl = document.createElement("h4");
    titleEl.textContent = item.title;
    card.appendChild(titleEl);

    // Prerequisite
    if (item.prerequisite) {
      const prereq = document.createElement("p");
      prereq.textContent = `Prerequisite: ${item.prerequisite}`;
      card.appendChild(prereq);
    }

    // Descriptions (description1, description2, ...)
    let i = 1;
    while (item[`description${i}`]) {
      const p = document.createElement("p");

      // Convert bullet points starting with "•" into <ul>
      if (item[`description${i}`].trim().startsWith("•")) {
        const ul = document.createElement("ul");
        item[`description${i}`].split("\n").forEach((line) => {
          const li = document.createElement("li");
          li.textContent = line.replace(/^•\s*/, "");
          ul.appendChild(li);
        });
        p.appendChild(ul);
      } else {
        p.textContent = item[`description${i}`];
      }

      card.appendChild(p);
      i++;
    }

    container.appendChild(card);
  });
}

/*------------------------------------------------------------------Page-Specific Logic -------------------------------------------------------------------*/

if (kebabCase === "maneuvers") {
  // Merge and sort all maneuver sets
  const allManeuvers = [...attackManeuvers, ...reactionManeuvers, ...skillAndMovementManeuvers].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Render the full "all-maneuvers" container
  renderCards(allManeuvers, "all-maneuvers");

  // Render individual sets
  const maneuverSets = [
    { data: attackManeuvers, id: "attack-maneuvers" },
    { data: reactionManeuvers, id: "reaction-maneuvers" },
    { data: skillAndMovementManeuvers, id: "skill-and-movement-maneuvers" },
  ];

  maneuverSets.forEach(({ data, id }) => renderCards(data, id));
} else {
  // For other pages, use dynamic global array based on camelCase page title
  const selectedStyles = window[camelCase]; // or window[kebabCase] if your globals use kebab-case

  if (!selectedStyles) {
    console.warn(`No style array found for page title: ${camelCase}`);
  } else {
    const containerId = `${kebabCase}-cards-container`;
    renderCards(selectedStyles, containerId);
  }
}
