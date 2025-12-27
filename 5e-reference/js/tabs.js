const buttons = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
      if (content.id === target) content.classList.add("active");
    });
  });
});
