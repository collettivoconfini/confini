//here we need to add a constant for the background which we declared in the css which is "cornice.gif" which later shall also have an animation

document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("logo");
  const festivalTitle = document.getElementById("festival-title");
  const lineup = document.getElementById("lineup");
  const carlo = document.getElementById("carlo");
  const corasan = document.getElementById("corasan");
  const death = document.getElementById("death");
  const vera = document.getElementById("vera");
  const magaze = document.getElementById("magaze");
  const jason = document.getElementById("jason");
  const rododentro = document.getElementById("rododentro");
  const guests = document.getElementById("guests");
  const disclaimer = document.getElementsByClassName("disclaimer-container");

// ANIMAZIONE DEL TITOLO
const title = document.querySelector("#festival-title");
// Start with a white color
title.style.color = "white";


// Set up the animation interval for title
setInterval(function() {
  // Apply a random color to each character
  const characters = title.textContent.split("");
  const coloredCharacters = characters.map(char => {
    const randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    const startX = Math.random() * 10 - 5;
    const startY = Math.random() * 10 - 5;
    const endX = Math.random() * 10 - 5;
    const endY = Math.random() * 10 - 5;
    return `<span style="color: ${randomColor}; transform: translate(${startX}px, ${startY}px) skew(10deg); animation: move 1s ease-in-out forwards; animation-delay: ${Math.random()}s;">${char}</span>`;
  });
  title.innerHTML = coloredCharacters.join("");
}, 1000); // Change the interval to your desired value (e.g., 1000ms for 1 second)

// Set up the animation timeout to reset the title
setTimeout(function() {
  title.style.color = "white";
  title.style.transform = "none";
}, 5000);

// Add a shadow to the title
title.style.textShadow = "1px 1px 1px rgba(0,0,0,0.5)";


// ANIMAZIONE DELLA scaletta
const scaletta = document.getElementById("lineup");
const texts = ['questa è tipo l\'idea di scaletta', 'questa è abbastanza la prima serata'];
let lineupIndex = 0;

setInterval(function() {
  scaletta.textContent = texts[lineupIndex];
  lineupIndex = (lineupIndex + 1) % texts.length;
}, 2400);

// ANIMAZIONE di carlo
const marlo = document.getElementById("carlo");
const carloTexts = [
  '<a href="https://carlomartinellis.github.io/magiche.html">CARLO MARTINELLI</a> (post-punk/boxe con il pubblico)',
  '<a href="https://carlomartinellis.github.io/magiche.html">MARLO CARTINELLI</a> (post-punk/boxe con il pubblico)'
];
let carloIndex = 0;

setInterval(function() {
  marlo.innerHTML = carloTexts[carloIndex];
  carloIndex = (carloIndex + 1) % carloTexts.length;
}, 100);

})

// ANIMAZIONE di CORASAN
const corasao = document.getElementById("corasan");
const corasanTexts = [
  '<span><a href="https://open.spotify.com/artist/5WlSn0lTNFNFkTggDOyRs7">CORASAN</a> (emo/metal/noise)</span>',
  '<span><a href="https://open.spotify.com/artist/5WlSn0lTNFNFkTggDOyRs7">CORASAN</a> (60\'s, pop/brioche)</span>'
];
let corasaoIndex = 0;

setInterval(function() {
  corasao.innerHTML = corasanTexts[corasaoIndex];
  corasaoIndex = (corasaoIndex + 1) % corasanTexts.length;
}, 1000);


// ANIMAZIONE di death
const death = document.getElementById("death");
//a javascript that makes everything disapear and reappear in a pulsating way
setInterval(function() {
  death.classList.toggle("fade-out");
}, 2000);



// ANIMAZIONE di magaze
const magaze = document.getElementById("magaze");

// Define the target text and its styles
const suonanoForteText = "SUONANO FORTE";
const suonanoForteSize = "1em";
const suonanoForteColor = "red";
const magazeText = '<a href="https://magaze.bandcamp.com/track/estate">MAGAZE</a> (post-punk/rock/cantautorato)';

// Create a CSS animation for the "SUONANO FORTE" transition
const suonanoForteAnimationStyle = `
  @keyframes suonanoForteTransition {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale(1.1);
      color: ${suonanoForteColor};
    }
    100% {
      opacity: 1;
    }
  }
`;

// Create a CSS animation for the "MAGAZE" transition
const magazeAnimationStyle = `
  @keyframes magazeTransition {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Apply the animation styles
const styleElement = document.createElement("style");
styleElement.innerHTML = suonanoForteAnimationStyle + magazeAnimationStyle;
document.head.appendChild(styleElement);

// Start the "SUONANO FORTE" animation
magaze.innerHTML = suonanoForteText;
magaze.style.animation = "suonanoForteTransition 2s forwards";

// After the "SUONANO FORTE" animation ends, switch to the "MAGAZE" text with the link
setTimeout(function() {
  magaze.innerHTML = magazeText;
  magaze.style.animation = "none";
  magaze.style.fontSize = "";
  magaze.style.color = "";
}, 4000); // Change the timeout to match the "SUONANO FORTE" animation duration (2s) plus some extra time

// Apply the target size and color to "SUONANO FORTE" during the animation
magaze.style.fontSize = suonanoForteSize;
magaze.style.color = suonanoForteColor;







// ANIMAZIONE di mARCELLO
const marcello = document.getElementById("jason");
const MARCELLOTexts = [
  '<a href="https://rosnama-tammat.web.app/">JASON LA MECCA (MISTO MAME)</a>',
  '<a href="https://rosnama-tammat.web.app/">JASON LA MECCA (RISTO MARE)</a>'
];
let marcelloIndex = 0;

setInterval(function() {
  marcello.innerHTML = MARCELLOTexts[marcelloIndex];
  marcelloIndex = (marcelloIndex + 1) % MARCELLOTexts.length;
}, 1000);





//rodo ANIMAZIONE (IL RESTO STA NEL CSS)
const rododentro = document.getElementById("rododentro");

// Define the target colors
const startColor = "white";
const endColor = "black";

// Split the initial text into individual characters
const characters = rododentro.textContent.split("");

// Create a wrapper element to contain the animated characters
const wrapperElement = document.createElement("span");

// Apply the animation to each character
characters.forEach((char, index) => {
  const charElement = document.createElement("span");
  charElement.textContent = char;
  charElement.classList.add("animate");
  charElement.style.animationDelay = `${index * 100}ms`;
  wrapperElement.appendChild(charElement);
});

// Apply the wrapper element to the rododentro element
rododentro.innerHTML = "";
rododentro.appendChild(wrapperElement);

//animazione VERA
const vera = document.getElementById("vera");
vera.style.animation = "rainbow 5s infinite";

//animazione guests
const guests = document.getElementById("guests");
//this should have next to the phrase "+guests" appear from nothing and then disappear slowly the phrase ""


function typeWriter(element, text, interval, callback) {
  let index = 0;

  function type() {
    if (index < text.length) {
      if (text.substr(index, 4) === '<br>') {
        element.innerHTML += '<br>';
        index += 4;
      } else {
        element.innerHTML += text.charAt(index);
        index++;
      }
      setTimeout(type, interval);
    } else {
      setTimeout(() => {
        element.innerHTML = '';
        index = 0;
        type();
      }, 2000);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.disclaimer-container p');
  const text = container.innerHTML;
  container.innerHTML = ''; // Clear the original text
  typeWriter(container, text, 100);
});
//here
