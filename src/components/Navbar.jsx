import { useState } from 'react';
import { FaCode, FaFileMedical, FaBars, FaXmark, FaGlobe } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-[100] bg-brandDark backdrop-blur-md border-b border-white/5 transition-all duration-300"
    >
      <div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <FaCode className="text-accentWarm text-lg" />
          <div className="flex items-baseline">
            <span className="font-semibold text-white tracking-tight">Hawasly</span>
            <span className="ml-1 text-accentWarm/80 font-medium">Code</span>
          </div>
        </div>

        {/* Menú de Escritorio (Desktop) */}
        <div className="hidden md:flex space-x-6 text-[13px] font-medium text-brandLight/70">
          <a href="#blog" className="hover:text-accentWarm transition-colors">{t.nav.blog}</a>
          <a href="#proyectos" className="hover:text-accentWarm transition-colors">{t.nav.projects}</a>
          <a href="#lenguajes" className="hover:text-accentWarm transition-colors">{t.nav.languages}</a>
          <a href="#footer" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>

        {/* Acciones de la derecha (CV + Selector de Idioma Moderno) */}
        <div className="flex items-center space-x-3">
          
          {/* Botón Descargar CV */}
          <a
            href="docs/hawaslycv.pdf"
            download="CV_Johan_Mendez_Hawasly.pdf"
            className="p-2.5 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-center border border-transparent hover:border-white/5 text-brandLight/70 hover:text-accentWarm"
            aria-label="Descargar CV"
          >
            <FaFileMedical className="text-lg transition-colors" />
          </a>

          {/* BOTÓN DE IDIOMA INTERACTIVO INTERNACIONAL */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-accentOrange/10 border border-white/5 hover:border-accentOrange/30 text-gray-300 hover:text-white transition-all duration-300 shadow-lg group"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {/* Icono del Mundo con rotación elegante */}
            <FaGlobe className="text-sm text-accentWarm group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Texto del idioma actual / cambio */}
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              {language}
            </span>

            {/* Pequeña viñeta estética que cambia de color al activarse */}
            <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${language === 'en' ? 'bg-accentOrange' : 'bg-accentWarm'}`} />
          </button>

          {/* Botón de Menú Móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 hover:bg-white/10 rounded-lg text-brandLight flex items-center justify-center transition-colors"
            aria-label="Alternar menú"
          >
            {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móviles */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-brandDark border-b border-white/5 px-4 py-6 space-y-4 transition-all`}
      >
        <a href="#blog" onClick={() => setIsOpen(false)} className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-accentWarm transition-colors">{t.nav.blog}</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)} className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-accentWarm transition-colors">{t.nav.projects}</a>
        <a href="#lenguajes" onClick={() => setIsOpen(false)} className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-accentWarm transition-colors">{t.nav.languages}</a>
        <a href="#footer" onClick={() => setIsOpen(false)} className="block text-lg font-medium pb-2 text-white hover:text-accentWarm transition-colors">{t.nav.contact}</a>
      </div>
    </nav>
  );
}

export default Navbar;