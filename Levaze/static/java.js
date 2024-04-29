window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleInput = document.getElementById("themeToggleCheckbox");
  const body = document.body;

  // Function to toggle theme based on checkbox state
  const toggleTheme = () => {
    if (themeToggleInput.checked) {
      // Dark theme
      body.classList.add("dark-theme");
      // Save theme preference to localStorage
      localStorage.setItem("theme", "dark");
    } else {
      // Light theme
      body.classList.remove("dark-theme");
      // Remove theme preference from localStorage
      localStorage.removeItem("theme");
    }
  };

  // Check for theme preference in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    // Set checkbox state and apply dark theme
    themeToggleInput.checked = true;
    body.classList.add("dark-theme");
  }

  // Add event listener to theme toggle input
  themeToggleInput.addEventListener("change", toggleTheme);
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
  const cardWrapper = document.querySelector(".card-wrapper");
const widthToScroll = cardWrapper.children[0].offsetWidth;
const arrowPrev = document.querySelector(".arrow.prev");
const arrowNext = document.querySelector(".arrow.next");
const cardBounding = cardWrapper.getBoundingClientRect();
const cardImageAndLink = cardWrapper.querySelectorAll("img,a");
let currScroll = 0;
let initPos = 0;
let clicked = false;

console.log(widthToScroll);

cardImageAndLink.forEach((item) => {
  item.setAttribute("draggable", false);
});

arrowPrev.onclick = function () {
  cardWrapper.scrollLeft -= widthToScroll;
};
arrowNext.onclick = function () {
  cardWrapper.scrollLeft += widthToScroll;
};

cardWrapper.onmousedown = function (e) {
  cardWrapper.classList.add("grab");
  initPos = e.clientX - cardBounding.left;
  currScroll = cardWrapper.scrollLeft;
  clicked = true;
};

cardWrapper.onmousemove = function (e) {
  if (clicked) {
    const xPos = e.clientX - cardBounding.left;
    cardWrapper.scrollLeft = currScroll + -(xPos - initPos);
  }
};

cardWrapper.onmouseup = mouseUpandLeave;
cardWrapper.onmouseleave = mouseUpandLeave;

function mouseUpandLeave() {
  cardWrapper.classList.remove("grab");
  clicked = false;

}
});
