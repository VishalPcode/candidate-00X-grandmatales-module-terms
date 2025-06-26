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
    <main className="min-h-screen bg-bg text-primary font-body px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gold text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4 font-bold lowercase">opt-out confirmation</h1>
        <p className="text-base sm:text-lg mb-6">You're about to opt out. Please confirm below.</p>
        <button
          disabled={!enabled}
          className={`w-full sm:w-auto px-6 py-3 text-base sm:text-lg rounded-lg font-semibold transition ${
            enabled
              ? 'bg-gold text-primary hover:opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {enabled ? 'Confirm Opt-Out' : `Please wait ${seconds}s`}
        </button>
      </div>
    </main>
  );
}
