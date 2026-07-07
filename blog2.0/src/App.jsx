import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-900">
      <h1 className="text-4xl font-bold text-sky-400">
        ¡Tailwind configurado con éxito! 🚀
      </h1>
    </div>
    </>
  )
}

export default App
