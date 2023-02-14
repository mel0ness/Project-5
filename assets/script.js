const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Generation des clics _____________________________

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", () => {
  dotsChangesLeft();
});

arrowRight.addEventListener("click", () => {
  dotsChangesRight();
});

// Generation de slides ___________________________

function genererDots(slides) {
  for (let i in slides) {
    const dotsSlide = document.createElement("span");
    dotsSlide.classList.add("dot");
    dotsSlide.id = parseInt(i) + 1;
    const dots = document.querySelector(".dots");
    dots.appendChild(dotsSlide);
  }
}

genererDots(slides);

const dotsSlideSelectedStart = document.getElementById("1");
dotsSlideSelectedStart.classList.add("dot_selected");

// Création d'un array ________________________________________

const dotsSlideSelectedAll = document.querySelectorAll(".dot");
const dotsSlideSelected = Array.from(dotsSlideSelectedAll);

// Fonctions des clics ____________________________________________

function dotsChangesRight() {
  for (let j = 0; j < dotsSlideSelected.length; j++) {
    if (dotsSlideSelected[j].classList.contains("dot_selected")) {
      dotsSlideSelected[j + 1].classList.add("dot_selected");
      dotsSlideSelected[j].classList.remove("dot_selected");
      break;
    } else if (dotsSlideSelected[3].classList.contains("dot_selected")) {
      dotsSlideSelected[3].classList.remove("dot_selected");
      dotsSlideSelected[0].classList.add("dot_selected");
      break;
    }
  }
}

function dotsChangesLeft() {
  for (let j = 0; j < dotsSlideSelected.length; j++) {
    if (dotsSlideSelected[0].classList.contains("dot_selected")) {
      dotsSlideSelected[0].classList.remove("dot_selected");
      dotsSlideSelected[3].classList.add("dot_selected");
      break;
    } else if (dotsSlideSelected[j].classList.contains("dot_selected")) {
      dotsSlideSelected[j - 1].classList.add("dot_selected");
      dotsSlideSelected[j].classList.remove("dot_selected");
      break;
    }
  }
}
