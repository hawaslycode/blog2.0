import { FaGithub, FaArrowUpRightFromSquare, FaChartLine, FaEnvelopeOpenText } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="max-w-5xl mx-auto py-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-8 h-[2px] bg-accentOrange"></span>
            <span className="text-accentWarm font-mono text-xs uppercase tracking-widest">
              {t.projects.badge}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white">{t.projects.title}</h3>
        </div>
        <p className="text-gray-400 text-sm max-w-md italic">
          {t.projects.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Proyecto 1 */}
        <div className="group relative bg-brandLight/30 border border-white/10 rounded-3xl overflow-hidden hover:border-accentOrange/30 transition-all duration-500">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accentOrange/10 rounded-2xl">
                <FaChartLine className="text-2xl text-accentWarm" />
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/hawaslycode/comercioApp.git"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-accentOrange/20 rounded-full text-gray-400 hover:text-accentOrange transition-colors"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-accentOrange/20 rounded-full text-gray-400 hover:text-accentOrange transition-colors">
                  <FaArrowUpRightFromSquare className="text-sm" />
                </a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accentWarm transition-colors">{t.projects.p1Title}</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {t.projects.p1Desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Java', 'Tailwind'].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-[11px] rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="group relative bg-brandLight/30 border border-white/10 rounded-3xl overflow-hidden hover:border-accentOrange/30 transition-all duration-500">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-accentOrange/10 rounded-2xl">
                <FaEnvelopeOpenText className="text-2xl text-accentWarm" />
              </div>
              <div className="flex space-x-2">
                <a
                  href="https://github.com/hawaslycode/BewsLetterVIP.git"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-accentOrange/20 rounded-full text-gray-400 hover:text-accentOrange transition-colors"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-accentOrange/20 rounded-full text-gray-400 hover:text-accentOrange transition-colors">
                  <FaArrowUpRightFromSquare className="text-sm" />
                </a>
              </div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accentWarm transition-colors">{t.projects.p2Title}</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {t.projects.p2Desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'HTML/CSS', 'Filtros'].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-[11px] rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;