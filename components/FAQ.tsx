import React, { useState } from 'react';
import { FaqItem } from '../types';

interface AccordionItemProps extends FaqItem {
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-stream-green' : 'text-white group-hover:text-gray-200'}`}>
          {question}
        </span>
        <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-stream-green' : 'text-gray-500 group-hover:text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed pr-4">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: "What is the core concept of STREAM?",
      answer: "STREAM is founded on the principle of continuous flow—continuous movement, value, and wealth. We bridge the gap between people, creativity, and opportunity, converting everyday digital engagement into tangible financial returns through a structured ecosystem."
    },
    {
      question: "Is Stream Africa a legitimate entity?",
      answer: "Absolutely. STREAM AFRICA is a fully registered and certified entity with the Corporate Affairs Commission (CAC) of Nigeria. We adhere to strict legal and operational standards to ensure transparency and trust."
    },
    {
      question: "What are the primary income channels?",
      answer: "Users generate income through diverse channels including Audio Collab ($1.5), Video Collab ($2.7), Snap Collab ($1.1), File Downloads ($1), Livestream participation, TikTok content creation (TCN), and by retailing products or services via the Stream Bazaar."
    },
    {
      question: "What is the onboarding requirement?",
      answer: "To access the full Stream Africa ecosystem and activate earning capabilities, a one-time onboarding fee of ₦12,000 is required. This grants lifetime access to all platform features."
    },
    {
      question: "Is the platform accessible globally?",
      answer: "Yes, STREAM AFRICA operates without borders. The platform is designed for a global audience, allowing users from any location to participate and earn without restriction."
    },
    {
      question: "How does the User Trigger feature work?",
      answer: "User Trigger is an accelerated growth feature allowing existing Streamers to activate new user accounts using their accumulated platform earnings. This eliminates the need for external payment methods for referrals, facilitating smoother onboarding."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-stream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Common inquiries about the platform and operations.</p>
        </div>
        <div className="bg-white/5 rounded-2xl px-6 md:px-8 border border-white/5 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              {...faq} 
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};