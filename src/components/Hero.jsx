import { FaCircle } from 'react-icons/fa6';

function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center py-20">
      <div id="hero-avatar" className="relative mb-12 flex justify-center">
        {/* Glow Effect usando brandGreen */}
        <div className="absolute inset-0 max-w-[280px] mx-auto bg-gradient-to-r from-brandGreen/40 to-emerald-500/40 blur-[50px] rounded-full animate-pulse"></div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brandGreen to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-brandDark rounded-full p-1 overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="img/profile.png"
              alt="Johan David Méndez Hawasly"
              className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandGreen/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Badge flotante */}
          <div className="absolute bottom-2 right-4 bg-brandDark/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center space-x-2 shadow-xl animate-bounce">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandGreen opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brandGreen"></span>
            </span>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
              Open to work
            </span>
          </div>
        </div>
      </div>
      
      <h2 className="text-4xl font-bold mb-4 italic text-white">
        Bienvenido a mi espacio digital
      </h2>
      <p className="text-gray-400 italic text-lg">"Clean code, better life"</p>
    </section>
  );
}

export default Hero;