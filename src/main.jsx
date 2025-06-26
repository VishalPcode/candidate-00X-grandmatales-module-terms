import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import OptOut from './pages/OptOut';
import Header from './components/Header';

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundColor: '#FAF9F7',
        color: '#4B2E39',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        className="text-center max-w-xl rounded-lg shadow-md border animate-fade-in"
        style={{
          backgroundColor: 'white',
          borderColor: '#D4AF37',
          padding: '2.5rem',
        }}
      >
        <h1
          className="text-3xl sm:text-4xl font-bold mb-4 lowercase"
          style={{
            fontFamily: '"DM Serif Display", serif',
            color: '#4B2E39',
          }}
        >
          welcome to grandmatales
        </h1>
        <p
          className="text-lg sm:text-xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Explore our <strong>Terms</strong>, <strong>FAQ</strong>, and <strong>Opt-Out</strong> pages using the links above.
        </p>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/opt-out" element={<OptOut />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
