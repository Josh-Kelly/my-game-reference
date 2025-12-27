// Parses and rolls dice expressions like "3d6", "2d10+5", or "3d6 x 10"
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

  // Display options
  if (!showBreakdown || num === 1) return `${total}`;

  const modText = mod ? (mod > 0 ? ` +${mod}` : ` ${mod}`) : "";
  const multText = mult > 1 ? ` ×${mult}` : "";
  return `${total} [${rolls.join(", ")}${modText}${multText}]`;
}
