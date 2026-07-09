import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto text-center py-20">
      <div id="hero-avatar" className="relative mb-12 flex justify-center">

        {/* Resplandor ambiental adaptado a la nueva paleta de acentos */}
        <div className="absolute inset-0 max-w-[280px] mx-auto bg-gradient-to-r from-accentOrange/20 to-accentWarm/20 blur-[50px] rounded-full animate-pulse"></div>

        <div className="relative group">
          {/* Bordes interactivos con degradado premium */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accentOrange to-accentWarm rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-brandDark rounded-full p-1 overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="Assets/perfil.jpg"
              alt="Johan David Méndez Hawasly"
              className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition duration-700 ease-out"
            />
            {/* Máscara interna interactiva restaurada */}
            <div className="absolute inset-0 bg-gradient-to-t from-accentOrange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Badge Flotante */}
          <div className="absolute bottom-2 right-4 bg-brandDark/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center space-x-2 shadow-xl animate-bounce">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentOrange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentOrange"></span>
            </span>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
              {t.hero.badge}
            </span>
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl font-bold mb-4 italic text-white">
        {t.hero.title}
      </h2>
      <p className="text-accentWarm italic text-lg font-medium">{t.hero.subtitle}</p>
    </section>
  );
}

export default Hero;