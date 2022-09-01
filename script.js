const setActive = (element) => {
  removeActive();
  element.firstChild.classList.toggle("hide");
  element.classList.toggle("active");
  console.log([element]);
};

const removeActive = () => {
  let links = document.querySelectorAll("#headerLinks a");
  links.forEach((element) => {
    let activeEl = element.classList.contains("active");
    let hideEl = element.firstChild.classList.contains("hide");
    if (activeEl) {
      element.classList.remove("active");
    }
    if (hideEl) {
      element.firstChild.classList.remove("hide");
    }
    console.log("hideEL", hideEl);
  });
};
