let text = [
  " БУХГАЛТЕРИЯ В ТАШКЕНТЕ",
  " БУХГАЛТЕРИЯ В ТАШКЕНТЕ",
  " БУХГАЛТЕРИЯ В ТАШКЕНТЕ",
];
let i = 0;
let speed = 100;
let speedLast = 1000;

let typingTextIndex = 0;

function type() {
  document.getElementById("hero").innerHTML += text[typingTextIndex].charAt(i);
  i++;
  setTimeout(
    () => {
      if (i >= text[typingTextIndex].length) {
        erease();
      } else {
        type();
      }
    },
    i == text[typingTextIndex].length ? speedLast : speed
  );
}
type();

function erease() {
  document.getElementById("hero").innerHTML = document
    .getElementById("hero")
    .innerHTML.substr(0, document.getElementById("hero").innerHTML.length - 1);
  i--;
  setTimeout(() => {
    if (i <= 0) {
      if (typingTextIndex >= text.length - 1) {
        typingTextIndex = 0;
      } else {
        typingTextIndex++;
      }
      type();
    } else {
      erease();
    }
  }, speed);
}

// CODS FOR WHY__US
const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
  let addAnimation = false;
  // Elements that contain the "FLASH" class, add a listener to remove
  // animation-class when the animation ends
  if (element.classList[1] == "FLASH") {
    element.addEventListener("animationend", (e) => {
      element.classList.remove(ANIMATEDCLASSNAME);
    });
    addAnimation = true;
  }

  // If The span element for this element does not exist in the array, add it.
  if (!ELEMENTS_SPAN[index])
    ELEMENTS_SPAN[index] = element.querySelector("span");

  element.addEventListener("mouseover", (e) => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

    // Add an animation-class to animate via CSS.
    if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
  });

  element.addEventListener("mouseout", (e) => {
    ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
    ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
  });
});

AOS.init();

// CODS FOR MORE DIV TEXT
function More1() {
  document.getElementById("more1").classList.toggle("showdiv");
}

// CODS FOR SCROLL
var myVar = setInterval(myscroll, 100);
function myscroll() {
  let y = window.scrollY;
  if (y > 0) {
    document.getElementById("shadow__scroll").style.boxShadow =
      "1px 1px 1px rgba(0, 0, 0, 0.1)";
  }
  if (y === 0) {
    document.getElementById("shadow__scroll").style.boxShadow =
      "0px 0px 0px white";
  }
}
