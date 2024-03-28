"use client"
import React, { useState } from 'react';

interface AccordionItemProps {
  title?: string; 
  question: string;
  answer: string;
}

const AboutItem: React.FC<AccordionItemProps> = ({ title, question, answer }) => {
  const [isFAQVisible, setIsFAQVisible] = useState(false);

  const toggleFAQ = () => {
    setIsFAQVisible(!isFAQVisible);
  };

  return (
    <div>
      {title && ( 
        <>
          <h3 className="font-extrabold text-2xl">{title}</h3>
          <div className="w-40 h-1 bg-blue mb-2"></div>
        </>
      )}
      <div className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50 active" onClick={toggleFAQ}>
        <button className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600" aria-controls="basic-collapse-one-with-arrow">
          <h5>{question}</h5>
          <svg className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-${isFAQVisible ? "180" : "0"}`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        <div id="basic-collapse-one-with-arrow" className={`accordion-content w-full px-0 overflow-hidden ${isFAQVisible ? "" : "hidden"}`} aria-labelledby="basic-heading-one-with-arrow" style={{ maxHeight: "250px" }}>
          <p className="text-base text-gray-900 leading-6">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;

