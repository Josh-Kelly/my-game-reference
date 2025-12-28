// Assuming fightingStyles is already defined in fighting-styles.js

const container = document.getElementById("fighting-style-cards-container");

fightingStyles.forEach((style) => {
  const card = document.createElement("div");
  card.className = "ability-card shaded";

  // Title
  const title = document.createElement("h4");
  title.textContent = style.title;
  card.appendChild(title);

  // Prerequisite
  if (style.prerequisite) {
    const prereq = document.createElement("p");
    prereq.textContent = `Prerequisite: ${style.prerequisite}`;
    card.appendChild(prereq);
  }

  // Descriptions (description1, description2, etc.)
  let i = 1;
  while (style[`description${i}`]) {
    const p = document.createElement("p");

    // Convert bullet points starting with "•" into a <ul>
    if (style[`description${i}`].trim().startsWith("•")) {
      const ul = document.createElement("ul");
      style[`description${i}`].split("\n").forEach((line) => {
        const li = document.createElement("li");
        li.textContent = line.replace(/^•\s*/, "");
        ul.appendChild(li);
      });
      p.appendChild(ul);
    } else {
      p.textContent = style[`description${i}`];
    }

    card.appendChild(p);
    i++;
  }

  container.appendChild(card);
});
