import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import OptOut from './pages/OptOut';
import Header from './components/Header';

function Home() {
  return (
    <main className="min-h-screen bg-bg text-primary font-body flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-3xl font-heading mb-4">Welcome to GrandmaTales</h2>
        <p className="text-lg">Explore our Terms, FAQ, and Opt-Out pages using the links above.</p>
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
