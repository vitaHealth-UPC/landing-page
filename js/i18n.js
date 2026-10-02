const translations = {
  en_US: {
    "nav.about": "What is Tata",
    "nav.how": "How it works",
    "nav.plans": "Plans",
    "nav.testimonials": "Testimonials",
    "nav.faq": "Frequently asked questions",
    "actions.login": "Log in",
    "actions.start": "Get started",
    "actions.startNow": "Get started now",
    "actions.how": "See how it works",
    "actions.learn": "Learn more",

    "hero.eyebrow": "PEACE OF MIND FOR THE WHOLE FAMILY",
    "hero.title.line1": "Care for your",
    "hero.title.line2": "medications",
    "hero.title.line3": "without complications",
    "hero.description": "Tata helps you remember your medications, confirm them simply and keep your family informed. More peace of mind and well-being every day.",
    "hero.trust.easy": "Easy to use",
    "hero.trust.card": "No credit card",
    "hero.trust.cancel": "Cancel anytime",
    "hero.card.time": "Today, 9:00 a.m.",
    "hero.card.medication": "Take Amlodipine\n1 tablet (5 mg)",
    "hero.card.confirm": "✓ Confirm",
    "hero.done.title": "Done!",
    "hero.done.text": "Medication confirmed\n9:02 a.m.",
    "hero.family.title": "Your family can see it ↑",
    "hero.family.confirmed": "Confirmed ✓",
    "hero.handwritten": "Small actions,\ngreat peace of mind",

    "about.title": "More peace of mind for you and your family",
    "about.reminders.title": "Reminders",
    "about.reminders.text": "Clear schedules and medication notices.",
    "about.family.title": "Family support",
    "about.family.text": "Follow-up and alerts for caregivers and relatives.",
    "about.insights.title": "Insights",
    "about.insights.text": "Patterns and recommendations from adherence history.",
    "how.title": "How Tata works",
    "how.step1.title": "Set up your medications",
    "how.step2.title": "Receive reminders",
    "how.step3.title": "Keep your family informed",
    "plans.title": "Choose how to get started",
    "plans.essential.title": "Essential",
    "plans.essential.text": "Reminders, agenda and accessible confirmation.",
    "plans.family.title": "Family",
    "plans.family.text": "Follow-up, alerts and insights for caregivers.",
    "testimonials.title": "Care that feels closer",
    "testimonials.quote": "“Now I can know whether my mom took her medication without calling her every little while.”",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Who is Tata for?",
    "faq.a1": "For older adults and the relatives or caregivers who support them."
  },

  es_419: {
    "nav.about": "Qué es Tata",
    "nav.how": "Cómo funciona",
    "nav.plans": "Planes",
    "nav.testimonials": "Testimonios",
    "nav.faq": "Preguntas frecuentes",
    "actions.login": "Iniciar sesión",
    "actions.start": "Comenzar",
    "actions.startNow": "Comenzar ahora",
    "actions.how": "Conocer cómo funciona",
    "actions.learn": "Conocer más",

    "hero.eyebrow": "TRANQUILIDAD PARA TODA LA FAMILIA",
    "hero.title.line1": "Cuidar los",
    "hero.title.line2": "medicamentos",
    "hero.title.line3": "sin complicarte",
    "hero.description": "Tata te ayuda a recordar tus medicamentos, confirmarlos de forma simple y mantener a tu familia siempre informada. Más tranquilidad, más bienestar, todos los días.",
    "hero.trust.easy": "Fácil de usar",
    "hero.trust.card": "Sin tarjeta de crédito",
    "hero.trust.cancel": "Cancela cuando quieras",
    "hero.card.time": "Hoy, 9:00 a. m.",
    "hero.card.medication": "Tomar Amlodipino\n1 tableta (5 mg)",
    "hero.card.confirm": "✓ Confirmar",
    "hero.done.title": "¡Listo!",
    "hero.done.text": "Medicamento confirmado\n9:02 a. m.",
    "hero.family.title": "Tu familia lo ve ↑",
    "hero.family.confirmed": "Confirmado ✓",
    "hero.handwritten": "Pequeñas acciones,\ngran tranquilidad",

    "about.title": "Más tranquilidad para ti y tu familia",
    "about.reminders.title": "Recordatorios",
    "about.reminders.text": "Horarios claros y avisos de medicación.",
    "about.family.title": "Acompañamiento familiar",
    "about.family.text": "Seguimiento y alertas para familiares y cuidadores.",
    "about.insights.title": "Insights",
    "about.insights.text": "Patrones y recomendaciones a partir del historial de adherencia.",
    "how.title": "Cómo funciona Tata",
    "how.step1.title": "Configura tus medicamentos",
    "how.step2.title": "Recibe recordatorios",
    "how.step3.title": "Mantén informada a tu familia",
    "plans.title": "Elige cómo empezar",
    "plans.essential.title": "Esencial",
    "plans.essential.text": "Recordatorios, agenda y confirmación accesible.",
    "plans.family.title": "Familiar",
    "plans.family.text": "Seguimiento, alertas e insights para cuidadores.",
    "testimonials.title": "Un cuidado que se siente más cerca",
    "testimonials.quote": "“Ahora puedo saber si mi mamá tomó su medicamento sin llamarla a cada rato.”",
    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿Para quién es Tata?",
    "faq.a1": "Para adultos mayores y los familiares o cuidadores que los acompañan."
  }
};

const DEFAULT_LOCALE = "en_US";
const STORAGE_KEY = "tata-locale";

function applyLocale(locale) {
  const dictionary = translations[locale] ?? translations[DEFAULT_LOCALE];

  document.documentElement.lang = locale === "es_419" ? "es-419" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!dictionary[key]) return;

    const value = dictionary[key];

    if (key === "hero.card.medication" || key === "hero.done.text" || key === "hero.handwritten") {
      element.innerHTML = value.replace(/\n/g, "<br>");
      return;
    }

    element.textContent = value;
  });

  const toggle = document.querySelector("[data-language-toggle]");
  const code = toggle?.querySelector(".language-code");

  if (code) {
    code.textContent = locale === "en_US" ? "ES" : "EN";
  }

  if (toggle) {
    toggle.setAttribute(
      "aria-label",
      locale === "en_US" ? "Cambiar idioma a español" : "Change language to English"
    );
  }

  localStorage.setItem(STORAGE_KEY, locale);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLocale = localStorage.getItem(STORAGE_KEY);
  applyLocale(savedLocale && translations[savedLocale] ? savedLocale : DEFAULT_LOCALE);

  document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
    const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE;
    applyLocale(current === "en_US" ? "es_419" : "en_US");
  });
});
