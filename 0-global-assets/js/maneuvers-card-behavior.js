// Assuming fightingStyles is already defined in fighting-styles.js

const allManeuvers = [...attackManeuvers, ...reactionManeuvers, ...skillAndMovementManeuvers].sort((a, b) =>
  a.title.localeCompare(b.title)
);

const allManeuversContainer = document.getElementById("all-maneuvers");

allManeuvers.forEach((maneuver) => {
  const card = document.createElement("div");
  card.className = "ability-card shaded";

  // Title
  const title = document.createElement("h4");
  title.textContent = maneuver.title;
  card.appendChild(title);

  // Prerequisite
  if (maneuver.prerequisite) {
    const prereq = document.createElement("p");
    prereq.textContent = `Prerequisite: ${maneuver.prerequisite}`;
    card.appendChild(prereq);
  }

  // Descriptions (description1, description2, etc.)
  let i = 1;
  while (maneuver[`description${i}`]) {
    const p = document.createElement("p");

    // Convert bullet points into a <ul>
    if (maneuver[`description${i}`].trim().startsWith("•")) {
      const ul = document.createElement("ul");
      maneuver[`description${i}`].split("\n").forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line.replace(/^•\s*/, "");
        ul.appendChild(li);
      });
      p.appendChild(ul);
    } else {
      p.textContent = maneuver[`description${i}`];
    }

    card.appendChild(p);
    i++;
  }

  allManeuversContainer.appendChild(card);
});

function renderManeuverCards(maneuvers, containerId) {
  const container = document.getElementById(containerId);

  maneuvers.forEach((maneuver) => {
    const card = document.createElement("div");
    card.className = "ability-card shaded";

    const title = document.createElement("h4");
    title.textContent = maneuver.title;
    card.appendChild(title);

    if (maneuver.prerequisite) {
      const prereq = document.createElement("p");
      prereq.textContent = `Prerequisite: ${maneuver.prerequisite}`;
      card.appendChild(prereq);
    }

    let i = 1;
    while (maneuver[`description${i}`]) {
      const p = document.createElement("p");

      if (maneuver[`description${i}`].trim().startsWith("•")) {
        const ul = document.createElement("ul");
        maneuver[`description${i}`].split("\n").forEach((line) => {
          const li = document.createElement("li");
          li.textContent = line.replace(/^•\s*/, "");
          ul.appendChild(li);
        });
        p.appendChild(ul);
      } else {
        p.textContent = maneuver[`description${i}`];
      }

      card.appendChild(p);
      i++;
    }

    container.appendChild(card);
  });
}

// Map data → container IDs
const maneuverSets = [
  { data: attackManeuvers, id: "attack-maneuvers" },
  { data: reactionManeuvers, id: "reaction-maneuvers" },
  { data: skillAndMovementManeuvers, id: "skill-and-movement-maneuvers" },
];

// Render all three
maneuverSets.forEach(({ data, id }) => {
  renderManeuverCards(data, id);
});
