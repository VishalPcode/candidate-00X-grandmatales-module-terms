import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import faq from '../data/faq.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-bg text-primary font-body px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-center mb-10 font-bold lowercase">
        frequently asked questions
      </h1>
      <div className="max-w-3xl mx-auto grid gap-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white border border-gold rounded-lg shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-semibold text-primary text-lg sm:text-xl font-heading"
              >
                {item.question}
                <IoIosArrowDown
                  className={`text-gold text-2xl transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`px-4 sm:px-6 pb-4 text-sm sm:text-base text-primary transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
