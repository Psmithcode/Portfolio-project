let homeButton = document.getElementById("homeButton");
let projectsButton = document.getElementById("projectsButton");
let resumeButton = document.getElementById("resumeButton");
let aboutButton = document.getElementById("aboutButton");
let contactButton = document.getElementById("contactButton");

let aboutContainer = document.getElementById("aboutContainer");
let contactContainer = document.getElementById("contactContainer");
let resumeContainer = document.getElementById("resumeContainer");
let projectsContainer = document.getElementById("projectsContainer");

const setActive = (element) => {
  removeActive();
  element.firstChild.classList.toggle("hide");
  element.classList.toggle("active");
  console.log([element]);
};

const setDisplay = (element) => {
  if (homeButton.classList.contains("active")) {
    aboutContainer.style.opacity = "0";
    contactContainer.style.opacity = "0";
    resumeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
  } else if (aboutButton.classList.contains("active")) {
    aboutContainer.style.opacity = "1";
    contactContainer.style.opacity = "0";
    resumeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
  } else if (contactButton.classList.contains("active")) {
    aboutContainer.style.opacity = "0";
    contactContainer.style.opacity = "1";
    resumeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "0";
  } else if (resumeButton.classList.contains("active")) {
    aboutContainer.style.opacity = "0";
    contactContainer.style.opacity = "0";
    resumeContainer.style.opacity = "1";
    projectsContainer.style.opacity = "0";
  } else if (projectsButton.classList.contains("active")) {
    aboutContainer.style.opacity = "0";
    contactContainer.style.opacity = "0";
    resumeContainer.style.opacity = "0";
    projectsContainer.style.opacity = "1";
  }
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
