// Main tab behaviors
const buttons = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active", "sub-cards-container");
      if (content.id === target) content.classList.add("active", "sub-cards-container");
    });
  });
});

const subButtons = document.querySelectorAll(".sub-tabs button");
const subContents = document.querySelectorAll(".sub-tab-content");

subButtons.forEach((subButton) => {
  subButton.addEventListener("click", () => {
    const target = subButton.dataset.tab;

    subButtons.forEach((btn) => btn.classList.remove("active"));
    subButton.classList.add("active");

    subContents.forEach((content) => {
      content.classList.remove("active");
      if (content.id === target) content.classList.add("active");
    });
  });
});
