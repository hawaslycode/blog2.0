import { FaWhatsapp, FaLocationDot, FaGraduationCap, FaTerminal } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="max-w-5xl mx-auto py-12 border-t border-white/5" id="blog">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            {/* Badge de Perfil */}
            <div className="inline-block px-3 py-1 bg-accentOrange/10 border border-accentOrange/20 rounded-full">
              <span className="text-accentWarm text-xs font-mono font-bold uppercase tracking-wider">
                {t.about.badge}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              {t.about.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t.about.p1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">100%</span>
                <span className="text-gray-500 text-xs uppercase tracking-tighter">
                  {t.about.stat1}
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Medellín</span>
                <span className="text-gray-500 text-xs uppercase tracking-tighter">
                  {t.about.stat2}
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Contacto (Opacidades Originales bg-brandLight/50) */}
          <div className="md:col-span-5">
            <div className="bg-brandLight/50 border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h4 className="text-white font-semibold mb-6">
                  {t.about.contactTitle}
                </h4>
                
                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-accentWarm/30 transition-all">
                  <FaWhatsapp className="text-accentWarm text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      {t.about.phone}
                    </p>
                    <p className="text-white font-medium text-sm">3507109969</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-accentWarm/30 transition-all">
                  <FaLocationDot className="text-accentWarm text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      {t.about.location}
                    </p>
                    <p className="text-white font-medium text-sm">Medellín, Colombia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-accentWarm/30 transition-all">
                  <FaGraduationCap className="text-accentWarm text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      {t.about.focus}
                    </p>
                    <p className="text-white font-medium text-sm">Spring Boot</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accentOrange/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Stack (Opacidades Originales bg-brandLight/50) */}
      <section id="lenguajes" className="max-w-5xl mx-auto py-12 border-t border-white/5">
        <div className="flex items-center space-x-3 mb-10">
          <FaTerminal className="text-accentWarm" />
          <h3 className="text-xl font-semibold text-white uppercase tracking-wider">
            {t.about.stackTitle}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cat: 'Lenguaje', name: 'JavaScript', desc: t.about.tech1 },
            { cat: 'Backend', name: 'Java & Spring Boot', desc: t.about.tech2 },
            { cat: 'Maquetación', name: 'Tailwind CSS', desc: t.about.tech3 },
            { cat: 'Estructura', name: 'HTML5 & CSS3', desc: t.about.tech4 },
          ].map((tech, i) => (
            <div key={i} className="p-4 bg-brandLight/50 border border-white/5 rounded-xl hover:border-accentWarm/40 transition-all group">
              <span className="text-xs text-gray-500 font-mono mb-2 block">{tech.cat}</span>
              <h4 className="text-white font-medium group-hover:text-accentWarm">{tech.name}</h4>
              <p className="text-[11px] text-gray-400 mt-1">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;