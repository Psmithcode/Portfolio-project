let homeButton = document.getElementById("homeButton");
let projectsButton = document.getElementById("projectsButton");
let resumeButton = document.getElementById("resumeButton");
let aboutButton = document.getElementById("aboutButton");
let contactButton = document.getElementById("contactButton");

let aboutContainer = document.getElementById("aboutContainer");

const setActive = (element) => {
  removeActive();
  element.firstChild.classList.toggle("hide");
  element.classList.toggle("active");
  console.log([element]);
};

const removeActive = () => {
  let links = document.querySelectorAll("#headerLinks a");
  links.forEach((element) => {
    let hideEl = element.firstChild.classList.contains("hide");
    let activeEl = element.classList.contains("active");
    if (activeEl) {
      element.classList.remove("active");
    }
    if (hideEl) {
      element.firstChild.classList.remove("hide");
    }
    console.log("hideEL", hideEl);
  });
};

const setDisplay = (element) => {
  // let hideEl = element.firstChild.classList.contains("hide");
  // let activeEl = element.classList.contains("active");
  while (aboutButton.classList.contains("active")) {
    aboutContainer.style.opacity = "1";
  }
};
