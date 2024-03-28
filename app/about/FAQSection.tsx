import React from 'react';
import AboutItem from './AboutItem';

interface FAQSectionProps {
    faqs: { title?: string; question: string; answer: string }[]; 
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
        <div className="accordion-group container mx-auto" data-accordion="default-accordion">
            {faqs.map((faq, index) => (
                <AboutItem
                    key={index}
                    title={faq.title || ''} 
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
};

export default FAQSection;
