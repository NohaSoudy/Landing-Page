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
var allSectionsNode = document.querySelectorAll("section");
var allSectionArray = [...allSectionsNode];
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
for (let i = 0; i < allSectionArray.length; i++) {
  let sectionNode = document.createElement("li");
  sectionNode.innerHTML =
    "<a href='#" + allSectionArray[i].id.toLowerCase() + "' id='nav_" + allSectionArray[i].id.toLowerCase() + "' class='menu__link'>" + allSectionArray[i].getAttribute("data-nav") + "</a>";
  nav.appendChild(sectionNode);
}
// Add class 'active' to section when near top of viewport
addActiveClassScrollEvent();

function addActiveClassScrollEvent() {
  for (let i = 0; i < allSectionArray.length; i++) {
    const element = allSectionArray[i];
    document.addEventListener("scroll", (event) => {
      event.preventDefault();
      var nav_section = document.querySelector("#" + element.id + "");
      scrollWindowToSection(allClassesNavigation, nav_section);
      // when click button scroll to top
      scrollTop();
    });
  }
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
addActiveClassClickEvent();

function addActiveClassClickEvent() {
  for (let i = 0; i < allClassesNavigation.length; i++) {
    const element = allClassesNavigation[i];
    element.addEventListener("click", (event) => {
      event.preventDefault();
      var link = document.querySelector(element.hash);
      var nav_section = document.querySelector("#" + element.id + "");
      scrollToSection(link, nav_section);
    });
  }
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

//Add New Section
function addNewSection() {
  let nav = document.getElementById("navbar__list");
  let sectionNode = document.createElement("li");
  const childIncrement = nav.childElementCount + 1;
  sectionNode.innerHTML = "<a href='#section" + childIncrement + "' id='nav_section" + childIncrement + "' class='menu__link'>Section " + childIncrement + "</a>";
  nav.appendChild(sectionNode);
  addNewSectionStructure();
}
function addNewSectionStructure() {
  let sectionStructure = document.querySelector("main");
  let sectionElement = document.createElement("section");
  sectionElement.setAttribute("id", `section${allSectionArray.length + 1}`);
  sectionElement.setAttribute("data-nav", `Section ${allSectionArray.length + 1}`);

  let divElement = document.createElement("div");
  divElement.classList.add("landing__container");

  let headerElement = document.createElement("h2");
  headerElement.innerHTML = `Section ${allSectionArray.length + 1}`;
  divElement.appendChild(headerElement);

  const sectionFirstContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec
  eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut
  pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et
  elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.
`;
  const sectionSecondContent = ` Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum
  fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
  let paragraphFirstElement = document.createElement("p");
  paragraphFirstElement.innerHTML = sectionFirstContent;

  let paragraphSecondElement = document.createElement("p");
  paragraphSecondElement.innerHTML = sectionSecondContent;
  divElement.appendChild(paragraphFirstElement);
  divElement.appendChild(paragraphSecondElement);
  sectionElement.appendChild(divElement);
  sectionStructure.appendChild(sectionElement);
  allSectionArray.push(sectionElement);
  addActiveClassScrollEvent();
  addActiveClassClickEvent();
}
