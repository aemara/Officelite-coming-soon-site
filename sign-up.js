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
  if (
    selectionMenuStyles.getPropertyValue("clip-path") ===
    "circle(100% at 50% 50%)") {
      selectionMenu.style.clipPath = "circle(0% at 100% 0%";
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


//VALIDATING NAME AND EMAIL 

const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

nameInput.addEventListener('blur', () => {
    if(nameInput.value === '') {
        nameInput.style.setProperty("--placeholder-color", "#F05B5B");
        nameInput.style.borderColor = "#F05B5B";
        nameInput.style.setProperty("--placeholder-opacity", "1");
        nameInput.classList.add('form-error');
    }
});

nameInput.addEventListener("focus", () => {
    nameInput.style.setProperty("--placeholder-color", "--grey");
    nameInput.style.borderColor = "var(--grey)";
    nameInput.style.setProperty("--placeholder-opacity", ".5");

    nameInput.classList.remove("form-error");
}
);

emailInput.addEventListener('change', () => {
    if (!emailInput.value.match(emailFormat)) {
      emailInput.style.setProperty("--placeholder-color", "#F05B5B");
      emailInput.style.borderColor = "#F05B5B";
      emailInput.style.setProperty("--placeholder-opacity", "1");
      emailInput.classList.add("form-error");
    } else {
        emailInput.style.setProperty("--placeholder-color", "--grey");
        emailInput.style.borderColor = "var(--grey)";
        emailInput.style.setProperty("--placeholder-opacity", ".5");
        emailInput.classList.remove("form-error");
    }
})