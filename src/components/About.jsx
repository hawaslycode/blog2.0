import { FaWhatsapp, FaLocationDot, FaGraduationCap, FaTerminal } from 'react-icons/fa6';

function About() {
  return (
    <>
      <section className="max-w-5xl mx-auto py-12 border-t border-white/5" id="blog">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-brandGreen/10 border border-brandGreen/20 rounded-full">
              <span className="text-brandGren text-xs font-mono font-bold uppercase tracking-wider">
                Perfil Profesional
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Hola, soy Johan David Méndez Hawasly
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Soy un desarrollador de software junior con sede en Medellín,
              enfocado en el ecosistema de Java y Spring Boot. Mi camino en la
              tecnología se define por la curiosidad y la búsqueda constante de
              la excelencia a través del Clean Code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Actualmente, combino mi formación académica con el desarrollo de
              proyectos reales. Me apasiona resolver problemas
              complejos y transformar ideas en interfaces modernas y funcionales
              utilizando Tailwind CSS y JavaScript.
            </p>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">100%</span>
                <span className="text-gray-500 text-xs uppercase tracking-tighter">
                  En aprendizaje
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl">Medellín</span>
                <span className="text-gray-500 text-xs uppercase tracking-tighter">
                  Ubicación
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Contacto usando brandLight y brandDark */}
          <div className="md:col-span-5">
            <div className="bg-brandLight/50 border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <h4 className="text-white font-semibold mb-6">
                  Información de Contacto
                </h4>
                
                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-brandGreen/30 transition-all">
                  <FaWhatsapp className="text-brandGreen text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-white font-medium text-sm">3507109969</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-brandGreen/30 transition-all">
                  <FaLocationDot className="text-brandGreen text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Ubicación
                    </p>
                    <p className="text-white font-medium text-sm">Medellín, Colombia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 bg-brandDark/50 rounded-2xl border border-white/5 group-hover:border-brandGreen/30 transition-all">
                  <FaGraduationCap className="text-brandGreen text-xl" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      Enfoque Actual
                    </p>
                    <p className="text-white font-medium text-sm">Spring Boot</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brandGreen/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Stack */}
      <section className="max-w-5xl mx-auto py-12 border-t border-white/5">
        <div className="flex items-center space-x-3 mb-10">
          <FaTerminal className="text-brandGreen" />
          <h3 className="text-xl font-semibold text-white uppercase tracking-wider">
            Stack Tecnológico
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { cat: 'Lenguaje', name: 'JavaScript', desc: 'Desarrollo Frontend Dinámico' },
            { cat: 'Backend', name: 'Java & Spring Boot', desc: 'APIs robustas y escalables' },
            { cat: 'Maquetación', name: 'Tailwind CSS', desc: 'Estilizado eficiente y responsivo' },
            { cat: 'Estructura', name: 'HTML5 & CSS3', desc: 'Semántica y accesibilidad web' },
          ].map((tech, i) => (
            <div key={i} className="p-4 bg-brandLight/50 border border-white/5 rounded-xl hover:border-brandGreen/50 transition-all group">
              <span className="text-xs rounded border-2 bg-gray-800 font-mono mb-2 block">{tech.cat}</span>
              <h4 className="text-white font-medium group-hover:text-brandGreen">{tech.name}</h4>
              <p className="text-[11px] text-gray-400 mt-1">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;