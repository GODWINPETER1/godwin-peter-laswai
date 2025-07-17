import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      allRightsReserved: 'All rights reserved.',
      Phone: 'Phone',
      Hi: 'Hi',
      "I’m": "I’m",
      aboutParagraph:
        "I'm a passionate developer with a mission to create delightful and scalable web experiences. I specialize in building modern apps using <1>React</1>, <3>Node</3>, and <5>Python</5>."
    },
  },
  sw: {
    translation: {
      about: 'Kuhusu Mimi',
      skills: 'Ujuzi',
      projects: 'Miradi',
      contact: 'Mawasiliano',
      allRightsReserved: 'Haki zote zimehifadhiwa.',
      Phone: 'Simu',
      
      Hi: 'Habari',
      "I’m": "Mimi ni",
      aboutParagraph:
        "Mimi ni msanidi programu mwenye shauku kubwa na dhamira ya kuunda uzoefu wa wavuti wa kuvutia na unaokua kwa urahisi. Nimebobea katika kutengeneza programu za kisasa kwa kutumia <1>React</1>, <3>Node</3>, na <5>Python</5>."
    },
  },
  fr: {
    translation: {
      about: 'À propos de moi',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      allRightsReserved: 'Tous droits réservés.',
      Phone: 'Téléphone',
      Hi: 'Salut',
      "I’m": "Je suis",
      aboutParagraph:
        "Je suis un développeur passionné avec pour mission de créer des expériences web agréables et évolutives. Je suis spécialisé dans la création d'applications modernes en utilisant <1>React</1>, <3>Node</3>, et <5>Python</5>."
    },
  },
  sv: {
    translation: {
      about: 'Om mig',
      skills: 'Färdigheter',
      projects: 'Projekt',
      contact: 'Kontakt',
      allRightsReserved: 'Alla rättigheter förbehållna.',
      Phone: 'Telefon',
      Hi: 'Hej',
      "I’m": "Jag är",
      aboutParagraph:
        "Jag är en passionerad utvecklare med ett uppdrag att skapa trevliga och skalbara webbupplevelser. Jag är specialiserad på att bygga moderna appar med <1>React</1>, <3>Node</3> och <5>Python</5>."
    },
  },
  ar: {
    translation: {
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل بي',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      Phone: 'الهاتف',
      Hi: 'مرحباً',
      "I’m": "أنا",
      aboutParagraph:
        "أنا مطور شغوف لدي مهمة لإنشاء تجارب ويب ممتعة وقابلة للتطوير. أُتقن بناء التطبيقات الحديثة باستخدام <1>React</1>، <3>Node</3>، و<5>Python</5>."
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
