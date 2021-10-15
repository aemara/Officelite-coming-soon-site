const dropdownMenu = document.querySelector('.dropdown-menu');
const selectionMenu = document.querySelector('.selection-menu');

const selectionMenuStyles = window.getComputedStyle(selectionMenu);


dropdownMenu.addEventListener("click", (event) => {
  if (selectionMenuStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)") {
    selectionMenu.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    if (!selectionMenu.contains(event.target))
      {
          selectionMenu.style.clipPath = "circle(0% at 100% 0%";
      }
  }
})

document.addEventListener("mousedown", (event) => {
    console.log(selectionMenu.contains(event.target));
  if (
    selectionMenuStyles.getPropertyValue("clip-path") ===
    "circle(100% at 50% 50%)"
  ) {
    if (!selectionMenu.contains(event.target))
      {
          selectionMenu.style.clipPath = "circle(0% at 100% 0%"
      }
  }
})

const basicChoice = document.querySelector(".basic-choice");
const proChoice = document.querySelector('.pro-choice');
const ultimateChoice = document.querySelector(".ultimate-choice");

basicChoice.addEventListener("click", () => {
    document.querySelector(
      ".selected-choice p"
    ).innerHTML = `Basic Pack<span class="price">Free</span>`;

    document.querySelector(".basic-choice .check-icon").style.visibility =
      "visible";
  document.querySelector(".pro-choice .check-icon").style.visibility =
    "hidden";
  document.querySelector(".ultimate-choice .check-icon").style.visibility =
    "hidden";
});

proChoice.addEventListener('click', () => {
    document.querySelector(
      ".selected-choice p"
    ).innerHTML = `Pro Pack<span class="price">$9.99</span>`;
    document.querySelector(".pro-choice .check-icon").style.visibility = 'visible';
    document.querySelector(".basic-choice .check-icon").style.visibility =
      "hidden";
    document.querySelector(".ultimate-choice .check-icon").style.visibility =
      "hidden";
})

ultimateChoice.addEventListener("click", () => {
    document.querySelector(
      ".selected-choice p"
    ).innerHTML = `Ultimate Pack<span class="price">$19.99</span>`;
  document.querySelector(".pro-choice .check-icon").style.visibility =
    "hidden";
  document.querySelector(".basic-choice .check-icon").style.visibility =
    "hidden";
  document.querySelector(".ultimate-choice .check-icon").style.visibility =
    "visible";
});
