import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="px-4 py-3 shadow-sm border-b"
      style={{
        backgroundColor: '#FAF9F7',   // Background color
        borderColor: '#D4AF37'        // Gold border
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        {/* Logo / Wordmark */}
        <Link to="/" className="text-center sm:text-left">
          <h1
            className="text-3xl sm:text-4xl font-bold lowercase"
            style={{
              color: '#4B2E39',                     // Primary deep plum
              fontFamily: '"DM Serif Display", serif'
            }}
          >
            grandmatales
          </h1>
        </Link>

        {/* Navigation */}
        <nav
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium"
          style={{
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <Link to="/terms" style={{ color: '#4B2E39' }} className="hover:text-[#D4AF37] transition">
            Terms
          </Link>
          <Link to="/faq" style={{ color: '#4B2E39' }} className="hover:text-[#D4AF37] transition">
            FAQ
          </Link>
          <Link to="/opt-out" style={{ color: '#4B2E39' }} className="hover:text-[#D4AF37] transition">
            Opt-Out
          </Link>
        </nav>
      </div>
    </header>
  );
}
