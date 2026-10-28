(function () {
  "use strict";

  var translations = {
    fr: {
      "nav.legal": "Mentions légales",
      "nav.contact": "Contact",
      "carousel.s1.title": "Hébergement de services infonuagiques",
      "carousel.s1.text": "Nous gérons les déploiements et l'hébergement de vos services infonuagiques.",
      "carousel.s2.title": "Collocation de serveurs",
      "carousel.s2.text": "Nous installons et maintenons vos serveurs dans nos infrastructures.",
      "carousel.cta": "Commencer",
      "carousel.prev": "Précédent",
      "carousel.next": "Suivant",
      "about.title": "Vision globale",
      "about.subtitle": "Gardez constamment un œil sur vos infrastructures!",
      "about.monitoring.title": "Monitoring",
      "about.monitoring.text": "Surveillance continue de vos infrastructures pour détecter les problèmes avant vos clients.",
      "about.logging.title": "Logging",
      "about.logging.text": "Centralisation des journaux pour retracer facilement l'origine d'un incident.",
      "about.alerting.title": "Alerting",
      "about.alerting.text": "Notifications instantanées dès qu'un service a besoin de votre attention.",
      "skills.title": "Nos compétences",
      "skills.networking": "Réseautique",
      "facts.title": "Chiffres",
      "facts.subtitle": "Quelques chiffres sur nos activités",
      "facts.clients": "Clients",
      "facts.projects": "Projets",
      "facts.hardworkers": "Travailleurs acharnés",
      "contact.title": "Nous contacter",
      "contact.subtitle": "N'hésitez pas à nous contacter pour toute question!",
      "contact.email.label": "Courriel",
      "legal.title": "Mentions légales",
      "legal.subtitle": "Avis important",
      "legal.p1": "<strong>Juste Réseau</strong> est un site personnel à vocation humoristique, créé pour le plaisir. Il n'est ni affilié, ni associé, ni représentatif d'une véritable entreprise. Les informations présentées sur cette page (statistiques, « clients », « projets », compétences, etc.) sont fictives et n'ont qu'une valeur de divertissement.",
      "legal.p2": "L'exploration, l'indexation et la reproduction du contenu de ce site par des robots d'intelligence artificielle, notamment pour l'entraînement de modèles, ne sont pas autorisées. Voir le fichier <a href=\"/robots.txt\">robots.txt</a> pour les règles applicables aux robots et moteurs de recherche.",
      "footer.copyright": "&copy; Copyright <strong>JusteReseau</strong>. Tous droits réservés.",
      "footer.credits": "Conçu par <a href=\"https://bootstrapmade.com/\">BootstrapMade</a> - Propulsé par <a href=\"https://lanets.ca/\">Lan ETS</a>"
    },
    en: {
      "nav.legal": "Legal notice",
      "nav.contact": "Contact",
      "carousel.s1.title": "Cloud service hosting",
      "carousel.s1.text": "We manage the deployment and hosting of your cloud services.",
      "carousel.s2.title": "Server colocation",
      "carousel.s2.text": "We install and maintain your servers in our infrastructure.",
      "carousel.cta": "Get Started",
      "carousel.prev": "Previous",
      "carousel.next": "Next",
      "about.title": "Global vision",
      "about.subtitle": "Keep a constant eye on your infrastructure!",
      "about.monitoring.title": "Monitoring",
      "about.monitoring.text": "Continuous monitoring of your infrastructure to catch issues before your customers do.",
      "about.logging.title": "Logging",
      "about.logging.text": "Centralized logs to easily trace the origin of an incident.",
      "about.alerting.title": "Alerting",
      "about.alerting.text": "Instant notifications as soon as a service needs your attention.",
      "skills.title": "Our skills",
      "skills.networking": "Networking",
      "facts.title": "Figures",
      "facts.subtitle": "A few figures about our activities",
      "facts.clients": "Clients",
      "facts.projects": "Projects",
      "facts.hardworkers": "Hard Workers",
      "contact.title": "Contact us",
      "contact.subtitle": "Feel free to contact us with any question!",
      "contact.email.label": "Email",
      "legal.title": "Legal notice",
      "legal.subtitle": "Important notice",
      "legal.p1": "<strong>Juste Réseau</strong> is a personal, humorous project made just for fun. It is not affiliated with, associated with, or representative of any real company. The information shown on this page (statistics, “clients”, “projects”, skills, etc.) is fictional and for entertainment purposes only.",
      "legal.p2": "Crawling, indexing, and reproducing this site's content by artificial intelligence bots, including for model training, is not authorized. See the <a href=\"/robots.txt\">robots.txt</a> file for the rules that apply to bots and search engines.",
      "footer.copyright": "&copy; Copyright <strong>JusteReseau</strong>. All rights reserved.",
      "footer.credits": "Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a> - Powered by <a href=\"https://lanets.ca/\">Lan ETS</a>"
    }
  };

  var STORAGE_KEY = "jr-lang";

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore (private browsing / storage disabled)
    }
  }

  function detectLang() {
    var stored = getStoredLang();
    if (stored === "fr" || stored === "en") {
      return stored;
    }
    var nav = (navigator.language || navigator.userLanguage || "fr").toLowerCase();
    if (nav.indexOf("en") === 0) {
      return "en";
    }
    return "fr";
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.fr;

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (dict[key]) {
        textNodes[i].textContent = dict[key];
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var htmlKey = htmlNodes[j].getAttribute("data-i18n-html");
      if (dict[htmlKey]) {
        htmlNodes[j].innerHTML = dict[htmlKey];
      }
    }

    document.documentElement.setAttribute("lang", lang);

    var langLinks = document.querySelectorAll(".lang-link");
    for (var k = 0; k < langLinks.length; k++) {
      if (langLinks[k].getAttribute("data-lang") === lang) {
        langLinks[k].classList.add("active");
      } else {
        langLinks[k].classList.remove("active");
      }
    }
  }

  function setLang(lang) {
    storeLang(lang);
    applyLang(lang);
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    applyLang(detectLang());
  });

  document.addEventListener("click", function (e) {
    var target = e.target.closest ? e.target.closest(".lang-link") : null;
    if (target) {
      e.preventDefault();
      setLang(target.getAttribute("data-lang"));
    }
  });
})();
