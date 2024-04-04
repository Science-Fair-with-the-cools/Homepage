
// Language files
const translations = {
  en: {
    title: "EcoTraQ (Carbon footprint calculator)",
    about: "About",
    credits: "Designed completely in HTML, CSS, and JS. All results are to be taken as near estimates based on Canadian/Ontario, average, and national/provincial data.",
    credits1: "Created by:  Cameron Lemoine and Hasan Ahmed",
    credits2: " With help from: Will Reavie and Aaron Chung",
    topbtn: "Back to Top",
    github: "GitHub Repository",
    pbpage: "ProjectBoard Page",
    langbutton_en: "English",
    langbutton_fr: "French",
    subtitle: "A Carbon Footprint Calculator",
    subdesc: "What is EcoTraQ",
    subdesc1: "What is SiteTraQ",
    projectsubdesc: "People live their everyday lives oblivious that every decision they make alters their impact on ourenvironment. EcoTraQ is a carbon footprint calculator that helps people understand and reduce their environmental impact, it is a tool for tracking personal emissions and website carbon footprints. Users input their lifestyle choices or website links to see how much carbon they release. By comparing user’s results withthe average emissions released per capita, we can better understand how to live a more efficient lifestyle. Our project aims to raise awareness for individuals to take action towards a more sustainable future.",
    projectsubdesc1: "Every single website on the internet has a carbon footprint. Physical hosting servers use electricity that use non-renewable energy sources to keep our internet alive as we know it. Want to know what a website's annual carbon footprint is? Find out by navigating to the SiteTraQ tab",
  },
  fr: {
    title: "EcoTraQ (Calculatrice d'Impact du Carbone)",
    about: "Crédits",
    credits: "Conçu entièrement en HTML, CSS et JS. Tous les résultats doivent être considérés comme des estimations approximatives basées sur les données canadiennes/ontariennes, moyennes et nationales/provinciales.",
    credits1: "Créé par: Cameron Lemoine et Hasan Ahmed",
    credits2: "Avec l'aide de: Will Reavie et Aaron Chung",
    topbtn: "En Haut",
    github: "Page de GitHub",
    pbpage: "Page de ProjectBoard",
    subtitle: "Calculatrice d'Impact du Carbone",
    langbutton_en: "Anglais",
    langbutton_fr: "Français",
    subdesc: "C'est quoi EcoTraQ",
    subdesc1: "C'est quoi SiteTraQ",
    projectsubdesc: "Les gens vivent leur vie quotidienne sans se rendre compte que chaque décision qu'ils prennent modifie leur impact sur l'environnement. EcoTraQ est un calculateur d'empreinte carbone qui aide les gens à comprendre et à réduire leur impact sur l'environnement. C'est un outil qui permet de suivre les émissions personnelles et l'empreinte carbone des sites web. Les utilisateurs saisissent leurs choix de mode de vie ou les liens de leur site web pour connaître la quantité de carbone qu'ils émettent. En comparant les résultats des utilisateurs avec les émissions moyennes par habitant, nous pouvons mieux comprendre comment adopter un mode de vie plus efficace. Notre projet vise à sensibiliser les individus à agir en faveur d'un avenir plus durable.",
    projectsubdesc1: "Chaque site web sur l'internet a une empreinte carbone. Les serveurs d'hébergement physique consomment de l'électricité qui utilise des sources d'énergie non renouvelables pour maintenir en vie l'internet tel que nous le connaissons. Vous voulez savoir quelle est l'empreinte carbone annuelle d'un site web ? Pour le savoir, rendez-vous sur la page SiteTraQ.",
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
  document.getElementById('projectsubdesc1').textContent = translations[lang].projectsubdesc1;
  document.getElementById('projectsubdesc').textContent = translations[lang].projectsubdesc;
  document.getElementById('subdesc').textContent = translations[lang].subdesc;
  document.getElementById('subdesc1').textContent = translations[lang].subdesc1;
  document.getElementById('langbutton_en').textContent = translations[lang].langbutton_en;
  document.getElementById('langbutton_fr').textContent = translations[lang].langbutton_fr;
  document.getElementById('credits').textContent = translations[lang].credits;
  document.getElementById('subtitle').textContent = translations[lang].subtitle;
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
