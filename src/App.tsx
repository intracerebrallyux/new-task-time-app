// src/App.tsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // Keep this, even if empty, as Vite might use it

function App() {
  const [count, setCount] = useState(0)

  return (
    // Add Tailwind classes to the main div for background and text color
    <div className="min-h-screen bg-sky-100 text-slate-800 flex flex-col items-center justify-center">
      <div className="flex justify-center p-4"> {/* Added padding for logos */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-2 hover:drop-shadow-lg transition-all" alt="Vite logo" /> {/* Tailwind: h-24, p-2, hover effect */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-2 motion-safe:animate-spin-slow hover:drop-shadow-lg transition-all" alt="React logo" /> {/* Tailwind: h-24, p-2, custom animation (optional), hover */}
        </a>
      </div>
      {/* Add Tailwind classes for heading */}
      <h1 className="text-5xl font-extrabold text-sky-700 mb-8">Vite + React + Tailwind!</h1> {/* Tailwind: text size, font weight, color, margin */}
      <div className="p-8 border border-sky-300 rounded-lg bg-white shadow-md"> {/* Tailwind: padding, border, rounded, bg, shadow */}
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg" // Tailwind: bg, hover, text color, font, padding, rounded, transition, text size
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-6 text-slate-600"> {/* Tailwind: margin, text color */}
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-sm text-sky-600/75"> {/* Tailwind: margin, text size, color with opacity */}
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
