const getTarget = (target) => {
  return document.querySelector(target);
};

const addClickHandler = (target, handler) => {
  target.addEventListener("click", handler);
};

const featuresHandler = getTarget(".features-handler");
const companyHandler = getTarget(".company-handler");
const hamburgerHandler = getTarget(".navbar-hamburger");
const closeHandler = getTarget(".close");

function featuresDropdown() {
  document
    .querySelector(".features-dropdown")
    .classList.toggle("active-dropdown");
}
function companyDropdown() {
  document
    .querySelector(".company-dropdown")
    .classList.toggle("active-dropdown");
}
function navbarMobileHandler() {
  document.querySelector(".navbar-link").classList.add("active-navbar-link");
}
function navbarCloseHandler() {
  document.querySelector(".navbar-link").classList.remove("active-navbar-link");
}

addClickHandler(featuresHandler, featuresDropdown);
addClickHandler(companyHandler, companyDropdown);
addClickHandler(hamburgerHandler, navbarMobileHandler);
addClickHandler(closeHandler, navbarCloseHandler);
