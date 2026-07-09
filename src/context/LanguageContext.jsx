import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' o 'en'

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const translations = {
    es: {
      nav: { blog: 'Sobre Mí', projects: 'Proyectos', languages: 'Lenguajes', contact: 'Contacto' },
      hero: { title: 'Bienvenido a mi espacio digital', subtitle: '"Clean code, better life"', badge: 'Open to work' },
      about: {
        badge: 'Perfil Profesional',
        title: 'Hola, soy Johan David Méndez Hawasly',
        p1: 'Soy un desarrollador de software junior con sede en Medellín, enfocado en el ecosistema de Java y Spring Boot. Mi camino en la tecnología se define por la curiosidad y la búsqueda constante de la excelencia a través del Clean Code.',
        p2: 'Actualmente, combino mi formación académica con el desarrollo de proyectos reales. Me apasiona resolver problemas complejos y transformar ideas en interfaces modernas y funcionales utilizando Tailwind CSS y JavaScript.',
        stat1: 'En aprendizaje',
        stat2: 'Ubicación',
        contactTitle: 'Información de Contacto',
        phone: 'Teléfono / WhatsApp',
        location: 'Ubicación',
        focus: 'Enfoque Actual',
        stackTitle: 'Stack Tecnológico',
        tech1: 'Desarrollo Frontend Dinámico',
        tech2: 'APIs robustas y escalables',
        tech3: 'Estilizado eficiente y responsivo',
        tech4: 'Semántica y accesibilidad web',
      },
      projects: {
        badge: 'Portafolio',
        title: 'Proyectos Destacados',
        desc: 'Exponiendo mis habilidades como desarrollador de software junior en constante estudio.',
        p1Title: 'MontoApp',
        p1Desc: 'Gestor de ventas avanzado diseñado para optimizar el control de ingresos y egresos comerciales.',
        p2Title: 'NewsLetter VIP',
        p2Desc: 'Sistema de suscripciones con niveles "Premium" y "Gratis", integrando lógica de filtrado dinámico.',
      },
      footer: {
        backToTop: 'Volver arriba',
        builtWith: 'Diseñado con React, Tailwind CSS y Clean Code.',
      }
    },
    en: {
      nav: { blog: 'About Me', projects: 'Projects', languages: 'Languages', contact: 'Contact' },
      hero: { title: 'Welcome to my digital space', subtitle: '"Clean code, better life"', badge: 'Open to work' },
      about: {
        badge: 'Professional Profile',
        title: "Hi, I'm Johan David Méndez Hawasly",
        p1: 'I am a junior software developer based in Medellín, focused on the Java and Spring Boot ecosystem. My path in technology is defined by curiosity and a constant pursuit of excellence through Clean Code.',
        p2: 'Currently, I combine my academic background with real-world project development. I am passionate about solving complex problems and transforming ideas into modern and functional interfaces using Tailwind CSS and JavaScript.',
        stat1: 'Learning Rate',
        stat2: 'Location',
        contactTitle: 'Contact Information',
        phone: 'Phone / WhatsApp',
        location: 'Location',
        focus: 'Current Focus',
        stackTitle: 'Tech Stack',
        tech1: 'Dynamic Frontend Development',
        tech2: 'Robust and scalable APIs',
        tech3: 'Efficient and responsive styling',
        tech4: 'Web semantics and accessibility',
      },
      projects: {
        badge: 'Portfolio',
        title: 'Featured Projects',
        desc: 'Showcasing my skills as a junior software developer in constant growth.',
        p1Title: 'MontoApp',
        p1Desc: 'Advanced sales manager designed to optimize commercial income and expense tracking.',
        p2Title: 'NewsLetter VIP',
        p2Desc: 'Subscription system with "Premium" and "Free" tiers, integrating dynamic filtering logic.',
      },
      footer: {
        backToTop: 'Back to top',
        builtWith: 'Designed with React, Tailwind CSS, and Clean Code.',
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);