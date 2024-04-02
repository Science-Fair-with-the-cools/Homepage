
// Language files
const translations = {
  en: {
    title: "EcoTraQ (Carbon footprint calculator)",
    about: "About",
    credits: "",
    credits1: "Created by:  Cameron Lemoine and Hasan Ahmed",
    credits2: " With help from: Will Reavie and Aaron Chung",
    topbtn: "Back to Top",
    github: "GitHub Repository",
    pbpage: "ProjectBoard Page",
 ,   langbutton-en: "English",
    langbutton-fr: "French",
    subtitle: "A Carbon Footprint Calculator",
    subdesc: "",
    subdesc1: "",
    projectsubdesc: "",
    projectsubdesc1: "",
  },
  fr: {
    title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
    about: "Crédits",
    credits1: "Créé par: Cameron Lemoine et Hasan Ahmed",
    credits2: "Avec l'aide de: Will Reavie et Aaron Chung",
    topbtn: "En Haut",
    github: "Page de GitHub",
    pbpage: "Page de ProjectBoard",
    subtitle: "A Carbon Footprint Calculator",
      subdesc: "",
      subdesc1: "",
      projectsubdesc: "",
      projectsubdesc1: "",
  }
};

// Function to switch language
function switchLanguage(lang) {
  document.getElementById('title').textContent = translations[lang].title;

  document.getElementById('about').textContent = translations[lang].about;
  document.getElementById('credits2').textContent = translations[lang].credits2;
  document.getElementById('credits1').textContent = translations[lang].credits1;
  document.getElementById('topbtn').textContent = translations[lang].topbtn;
  document.getElementById('github').textContent = translations[lang].github;
  document.getElementById('pbpage').textContent = translations[lang].pbpage;
}


// Detect user's language
const userLanguage = navigator.language.split('-')[0];
switchLanguage(userLanguage);

// Get button
const topBtn = document.getElementById("topbtn");

// Scroll to top
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
