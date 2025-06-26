import faq from '../data/faq.json';

export default function FAQ() {
  return (
    <main className="min-h-screen bg-bg text-primary font-body px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-center mb-10 font-bold lowercase">
        frequently asked questions
      </h1>
      <div className="max-w-3xl mx-auto grid gap-6">
        {faq.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 bg-white border border-gold rounded-lg shadow-sm animate-fade-in"
          >
            <h2 className="text-lg sm:text-xl font-heading mb-2">{item.question}</h2>
            <p className="text-sm sm:text-base">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
