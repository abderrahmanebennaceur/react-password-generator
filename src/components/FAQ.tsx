import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is a password generator?",
      answer: "A password generator is a tool that creates strong, random passwords to enhance security."
    },
    {
      question: "How do I customize the password length?",
      answer: "You can choose your desired password length using the slider provided on the interface."
    },
    {
      question: "Can I include special characters in my password?",
      answer: "Yes, you can include uppercase letters, numbers, and symbols as per your preferences."
    },
    {
      question: "Is my generated password safe?",
      answer: "Yes, the generated passwords are random and complex, making them difficult to guess."
    },
    {
      question: "How does the password strength indicator work?",
      answer: "The strength indicator provides visual feedback based on the complexity of your password."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 p-6 bg-soft-white">
      <h2 className="text-3xl font-semibold mb-6 text-deep-blue uppercase text-center">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-deep-blue rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 bg-sleek-gray focus:outline-none"
            >
              <span className="text-lg font-medium text-deep-blue">{faq.question}</span>
              <span className="text-xl">
              {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-soft-white">
                <p className="text-deep-blue">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;