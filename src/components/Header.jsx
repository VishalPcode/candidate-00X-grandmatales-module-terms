import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-bg border-b border-gold px-4 py-3">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <Link to="/" className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold lowercase text-primary">grandmatales</h1>
        </Link>
        <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <Link to="/terms" className="text-primary font-medium hover:underline">Terms</Link>
          <Link to="/faq" className="text-primary font-medium hover:underline">FAQ</Link>
          <Link to="/opt-out" className="text-primary font-medium hover:underline">Opt-Out</Link>
        </nav>
      </div>
    </header>
  );
}
