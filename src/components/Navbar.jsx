import { useState } from 'react';
import { FaCode, FaFileMedical, FaBars, FaXmark } from 'react-icons/fa6';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-[100] bg-brandDark backdrop-blur-md border-b border-white/5 transition-all duration-300"
      
    >
      <div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          {/* Icono de código de React Icons */}
          <FaCode className="text-brand-light text-lg" />
          <div className="flex items-baseline">
            <span className="font-semibold text-white tracking-tight">Hawasly</span>
            <span className="ml-1 text-brand-light/60 font-medium">Code</span>
          </div>
        </div>

        {/* Menú de Escritorio (Desktop) */}
        <div className="hidden md:flex space-x-6 text-[13px] font-medium text-brand-light/70">
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#lenguajes" className="hover:text-white transition-colors">Lenguajes</a>
          <a href="#footer" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* Acciones de la derecha (CV + Avatar + Menú móvil) */}
        <div className="flex items-center space-x-4">
          
          {/* Botón Descargar CV */}
          <a
            href="docs/hawaslycv.pdf"
            download="CV_Johan_Mendez_Hawasly.pdf"
            className="p-2.5 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
            aria-label="Descargar CV"
          >
            {/* Icono del archivo/CV de React Icons */}
            <FaFileMedical className="text-brand-light/70 hover:text-brand-light text-lg transition-colors" />
          </a>

          {/* Botón de Menú Móvil (Hamburguesa / X) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 hover:bg-white/10 rounded-lg text-brand-light flex items-center justify-center transition-colors"
            aria-label="Alternar menú"
          >
            {/* Alternamos dinámicamente entre el componente FaXmark y FaBars */}
            {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móviles */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-brand-dark border-b border-white/5 px-4 py-6 space-y-4 transition-all`}
      >
        <a
          href="#blog"
          onClick={() => setIsOpen(false)}
          className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-brand-light transition-colors"
        >
          Blog
        </a>
        <a
          href="#proyectos"
          onClick={() => setIsOpen(false)}
          className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-brand-light transition-colors"
        >
          Proyectos
        </a>
        <a
          href="#lenguajes"
          onClick={() => setIsOpen(false)}
          className="block text-lg font-medium border-b border-white/5 pb-2 text-white hover:text-brand-light transition-colors"
        >
          Lenguajes
        </a>
        <a
          href="#footer"
          onClick={() => setIsOpen(false)}
          className="block text-lg font-medium pb-2 text-white hover:text-brand-light transition-colors"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default Navbar;