import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import faq from '../data/faq.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main
      className="min-h-screen px-4 py-8"
      style={{
        backgroundColor: '#FAF9F7', // Background
        color: '#4B2E39',           // Primary text
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <h1
        className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 font-bold lowercase"
        style={{ fontFamily: '"DM Serif Display", serif' }}
      >
        frequently asked questions
      </h1>

      <div className="max-w-3xl mx-auto grid gap-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-lg shadow-md transition-all duration-300"
              style={{
                backgroundColor: 'white',
                border: '1px solid #D4AF37' // Gold border
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left font-semibold text-lg sm:text-xl"
                style={{ color: '#4B2E39', fontFamily: '"DM Serif Display", serif' }}
              >
                {item.question}
                <IoIosArrowDown
                  className={`text-2xl transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#D4AF37' }}
                />
              </button>

              <div
                className={`px-4 sm:px-6 pb-4 text-sm sm:text-base transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ color: '#4B2E39', fontFamily: 'Inter, sans-serif' }}
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
