import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-brand-deep text-white">
      <Navbar />
      
      {/* El resto de tus secciones irán aquí abajo */}
      <main className="pt-20 px-4 max-w-screen-2xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-light">
          Inicio del blog
        </h1>
      </main>
    </div>
  );
}

export default App;