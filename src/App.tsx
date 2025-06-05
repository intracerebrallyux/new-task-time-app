// src/App.tsx
import { Calculator } from 'lucide-react'; // Test an icon too
import './App.css'; // This file is usually empty or for App-specific non-Tailwind styles

function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <Calculator className="w-16 h-16 text-sky-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Fresh Tailwind Test!
        </h1>
        <p className="text-slate-600">
          If you see this styled, the basic setup is working.
        </p>
        <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-md transition-colors">
          Styled Button
        </button>
      </div>
    </div>
  );
}

export default App;
