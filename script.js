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
};

const setDisplay = (element) => {
  if (homeButton.classList.contains("active")) {
    aboutContainer.style.visibility = "hidden";
    contactContainer.style.visibility = "hidden";
    resumeContainer.style.visibility = "hidden";
    projectsContainer.style.visibility = "hidden";
  } else if (aboutButton.classList.contains("active")) {
    aboutContainer.style.visibility = "visible";
    contactContainer.style.visibility = "hidden";
    resumeContainer.style.visibility = "hidden";
    projectsContainer.style.visibility = "hidden";
  } else if (contactButton.classList.contains("active")) {
    aboutContainer.style.visibility = "hidden";
    contactContainer.style.visibility = "visible";
    resumeContainer.style.visibility = "hidden";
    projectsContainer.style.visibility = "hidden";
  } else if (resumeButton.classList.contains("active")) {
    aboutContainer.style.visibility = "hidden";
    contactContainer.style.visibility = "hidden";
    resumeContainer.style.visibility = "visible";
    projectsContainer.style.visibility = "hidden";
  } else if (projectsButton.classList.contains("active")) {
    aboutContainer.style.visibility = "hidden";
    contactContainer.style.visibility = "hidden";
    resumeContainer.style.visibility = "hidden";
    projectsContainer.style.visibility = "visible";
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
