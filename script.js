// --------LOADER --------- //

const preloaderElement = document.querySelector('.preloader');

function hidePreloader() {
  preloaderElement.classList.add('hide-preloader');
}

setTimeout(hidePreloader, 1500);

// -------- AUTO-TYPE --------- //

const dynamicText = document.querySelector("h1 span");
const words = ["Intégrateur", "Monjoch"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex]; // Récupération du mot actuel

  if (!isDeleting) { // Si nous ne sommes pas en train de supprimer
    dynamicText.textContent = currentWord.substring(0, charIndex); // Afficher une partie du mot jusqu'à l'index du caractère actuel
    charIndex++;

    if (charIndex > currentWord.length) { // Si nous avons atteint la fin du mot, passer à la suppression
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Pause après avoir affiché le mot complet
      return;
    }
  } else {
    dynamicText.textContent = currentWord.substring(0, charIndex); // En mode suppression, afficher une partie du mot jusqu'à l'index du caractère actuel
    charIndex--;

    if (charIndex < 0) { // Si nous avons supprimé tout le mot, passer au mot suivant
      isDeleting = false;
      wordIndex++;
      if (wordIndex === words.length) { // Si nous avons atteint la fin de la liste de mots, revenir au début
        wordIndex = 0;
      }
    }    
  }

  setTimeout(typeEffect, isDeleting ? 50 : 80);
};

typeEffect();


//------------fonction pour afficher la navbar au scroll -----------//

const header = document.querySelector('.header_main');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.links a');

window.addEventListener('scroll', function() {
  // Obtenir la position de défilement de la page
  const scrollPosition = window.scrollY;

  // Si la position de défilement est supérieure ou égale à 100 pixels
  if (scrollPosition >= 100) {
    header.classList.add('visible');
    navbar.style.display="block";

  } else {
    header.classList.remove('visible');
    navbar.style.display="none";
  }
});

//--------------fonction pour que les liens de la navbar prennent la class active au clic et au scroll

function selectedLink() {
  const scrollPosition = window.scrollY; // Obtenir la position de défilement actuelle de la fenêtre

  
  const navbarHeight = navbar.offsetHeight + 100;
  const links = document.querySelectorAll('.links a');

  links.forEach((link) => {
    // Obtenir l'élément de section associé au lien en utilisant son attribut "href"
    const section = document.querySelector(link.getAttribute('href'));

    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    
    const sectionBottom = sectionTop + section.offsetHeight;

    link.classList.toggle("active", scrollPosition >= sectionTop && scrollPosition < sectionBottom);
  });
}

window.addEventListener('scroll', () => {
  selectedLink();
});

//--------------fonction pour que l'input tel prennent les propriétes CSS sans le required

const inputTel = document.querySelector('input[type="tel"]');
const labelTel = document.querySelector('.label[for="phone"]');
const underLine = document.querySelector('.under_line')

inputTel.addEventListener('input', () => {
  if (inputTel.value.trim() !== '') {
    labelTel.classList.add('filled');
    underLine.classList.add('filled');
  } else {
    labelTel.classList.remove('filled');
    underLine.classList.remove('filled');
  }
});



//---------------------------MODAL

// Sélectionnez tous les éléments avec la classe "project-link" sur la page entière
const projectLinks = document.querySelectorAll(".project-link");

// Associez un gestionnaire d'événement à chaque lien de projet
projectLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const modal = document.getElementById(`modal${index + 1}`);
    modal.style.display = "block";
  });
});

// Sélectionnez tous les éléments avec la classe "close" sur la page entière
const closeButtons = document.querySelectorAll(".close");

// Associez un gestionnaire d'événement pour fermer les modales
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    modal.style.display = "none";
  });
});







const contactForm = document.getElementById('contactForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeButton = confirmationModal.querySelector('.close');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const objetInput = document.getElementById('objet');
  const messageInput = document.getElementById('message');

  if (
    nameInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    objetInput.value.trim() !== '' &&
    messageInput.value.trim() !== ''
  ) {
    
    confirmationModal.style.display = 'block';

    closeButton.addEventListener('click', () => {
      confirmationModal.style.display = 'none';
    });
  }
});






