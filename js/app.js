/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
var allSections = document.querySelectorAll("section");
var allClassesNavigation = document.getElementsByClassName("menu__link");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let nav = document.getElementById("navbar__list");
for (let i = 0; i < allSections.length; i++) {
  let sectionNode = document.createElement("li");
  sectionNode.innerHTML = "<a href='#" + allSections[i].id.toLowerCase() + "' id='nav_" + allSections[i].id.toLowerCase() + "' class='menu__link'>" + allSections[i].getAttribute("data-nav") + "</a>";
  nav.appendChild(sectionNode);
}
// Add class 'active' to section when near top of viewport
for (let i = 0; i < allSections.length; i++) {
  const element = allSections[i];
  document.addEventListener("scroll", (event) => {
    event.preventDefault();
    var nav_section = document.querySelector("#" + element.id + "");
    scrollWindowToSection(allClassesNavigation, nav_section);
    // when click button scroll to top
    scrollTop();
  });
}

function scrollWindowToSection(elem, nav_elem) {
  let allActive = document.querySelectorAll(".your-active-class");
  if (allActive.length > 0) {
    allActive[0].className = allActive[0].className.replace("menu__link your-active-class", "menu__link");
  }

  const y = nav_elem.getBoundingClientRect().top;
  if (y >= 0 && y < 250) {
    nav_elem.classList.add("your-active-class");
    for (let i = 0; i < elem.length; i++) {
      const item = elem[i];
      if (item.innerText == nav_elem.getAttribute("data-nav")) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  } else {
    nav_elem.classList.remove("your-active-class");
  }
}
// Scroll to anchor ID using scrollTO event
for (let i = 0; i < allClassesNavigation.length; i++) {
  const element = allClassesNavigation[i];
  element.addEventListener("click", (event) => {
    event.preventDefault();
    var link = document.querySelector(element.hash);
    var nav_section = document.querySelector("#" + element.id + "");
    scrollToSection(link, nav_section);
  });
}

//Scroll to the clicked section
function scrollToSection(elem, nav_elem) {
  let allActive = document.querySelectorAll(".active");
  if (allActive.length > 0) {
    allActive[0].classList.remove("active");
  } else {
    nav_elem.classList.add("active");
  }

  elem.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Top button to scroll to top of page
let topButton = document.getElementById("topBtn");

// When the user scrolls down from the top of the document, show the button
function scrollTop() {
  const scrollTop = document.documentElement.getBoundingClientRect().top;
  if (scrollTop < -20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
