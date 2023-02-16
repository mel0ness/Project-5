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
// Differencier Clics boutons gauche ou droit? \o/

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", () => {
  dotsChangesLeft();
});

arrowRight.addEventListener("click", () => {
  dotsChangesRight();
});

// Generation de slides/dots ___________________________

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

// /\ Peut-on utiliser la NodeList du "querySelectorAll" en array brut ou doit-on passer par un Array.from()?
//

// Gestion et fonction image ____________________________________________

const img = document.querySelector(".banner-img");
img.src = `./assets/images/slideshow/${slides[0].image}`;

function image(j) {
  img.src = `./assets/images/slideshow/${slides[j].image}`;
}

//   /\ Galère à cause du QuerySelectorAll et getElementByClassName________________ (Nodelist ou [] ...)
//

// Gestion et fonction du texte __________________________________________
// Création de l'élement p avant de lancer la fonction!

const bannerP = document
  .getElementById("banner")
  .appendChild(document.createElement("p"));
bannerP.innerHTML = `${slides[0].tagLine}`;

function P(j) {
  bannerP.innerHTML = `${slides[j].tagLine}`;
}

// Fonctions des clics ____________________________________________

function dotsChangesRight() {
  for (let j = 0; j < dotsSlideSelected.length; j++) {
    if (
      j < dotsSlideSelected.length - 1 &&
      dotsSlideSelected[j].classList.contains("dot_selected")
    ) {
      dotsSlideSelected[j + 1].classList.add("dot_selected");
      dotsSlideSelected[j].classList.remove("dot_selected");
      image(j + 1);
      P(j + 1);
      break;
    } else if (dotsSlideSelected[j].classList.contains("dot_selected")) {
      dotsSlideSelected[dotsSlideSelected.length - 1].classList.remove(
        "dot_selected"
      );
      dotsSlideSelected[0].classList.add("dot_selected");
      image(0);
      P(0);
      break;
    }
  }
}

function dotsChangesLeft() {
  for (let j = 0; j < dotsSlideSelected.length; j++) {
    if (dotsSlideSelected[0].classList.contains("dot_selected")) {
      dotsSlideSelected[0].classList.remove("dot_selected");
      dotsSlideSelected[dotsSlideSelected.length - 1].classList.add(
        "dot_selected"
      );
      image(dotsSlideSelected.length - 1);
      P(dotsSlideSelected.length - 1);
      break;
    } else if (dotsSlideSelected[j].classList.contains("dot_selected")) {
      dotsSlideSelected[j - 1].classList.add("dot_selected");
      dotsSlideSelected[j].classList.remove("dot_selected");
      image(j - 1);
      P(j - 1);
      break;
    }
  }
}
