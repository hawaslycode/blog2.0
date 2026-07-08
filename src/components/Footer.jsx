import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowUp, FaCode } from 'react-icons/fa6';

function Footer() {
  // Función nativa para hacer scroll suave hacia arriba al hacer clic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-brandDark border-t border-white/5 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Lado Izquierdo: Logo / Marca */}
          <div className="flex items-center space-x-2 group">
            <FaCode className="text-brandGreen text-xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-white font-mono font-bold tracking-wider">
              Hawasly<span className="text-brandGreen">Code</span>
            </span>
          </div>

          {/* Centro: Copyright & Nota */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Johan David Méndez Hawasly.
            </p>
            <p className="text-[11px] text-gray-500 mt-1 italic">
              Diseñado con React, Tailwind CSS y Clean Code.
            </p>
          </div>

          {/* Lado Derecho: Redes Sociales & Botón de Volver Arriba */}
          <div className="flex items-center space-x-6">
            {/* Redes Sociales */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/hawaslycode"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brandGreen transition-colors duration-300 text-lg"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brandGreen transition-colors duration-300 text-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/hawaslypc/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brandGreen transition-colors duration-300 text-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/573007440311"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-brandGreen transition-colors duration-300 text-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Separador vertical */}
            <div className="hidden md:block w-[1px] h-6 bg-white/10"></div>

            {/* Botón Volver Arriba */}
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white/5 hover:bg-brandGreen/20 text-gray-400 hover:text-brandGreen border border-white/5 hover:border-brandGreen/30 rounded-xl transition-all duration-300 shadow-lg group"
              title="Volver arriba"
            >
              <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;