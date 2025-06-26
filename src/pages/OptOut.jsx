import { useEffect, useState } from 'react';

export default function OptOut() {
  const [seconds, setSeconds] = useState(10);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main
      className="min-h-screen px-4 py-8 flex items-center justify-center"
      style={{
        backgroundColor: '#FAF9F7',
        color: '#4B2E39',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        className="w-full max-w-xl text-center rounded-lg shadow-md border"
        style={{
          backgroundColor: 'white',
          borderColor: '#D4AF37',
          padding: '1.5rem',
          paddingTop: '2rem',
          paddingBottom: '2rem'
        }}
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold lowercase"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          opt-out confirmation
        </h1>
        <p className="text-base sm:text-lg mb-6">
          You're about to opt out. Please confirm below.
        </p>

        <button
          disabled={!enabled}
          className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold transition rounded-lg"
          style={{
            backgroundColor: enabled ? '#D4AF37' : '#D1D5DB', // gold or gray
            color: enabled ? '#4B2E39' : '#6B7280',
            cursor: enabled ? 'pointer' : 'not-allowed',
            opacity: enabled ? '1' : '0.6'
          }}
        >
          {enabled ? 'Confirm Opt-Out' : `Please wait ${seconds}s`}
        </button>
      </div>
    </main>
  );
}
