import React, { useState } from 'react';
import FAQItem from './FAQItem';


const faqs = [
    {
        question: "What is Frontend Mentor, and how will it help me?",
        answer: " Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        question: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
];

export default function FAQList() {
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    /**
     * Handles keyboard navigation for the FAQ list.
     *
     * @param {Object} event - The keyboard event object.
     * @param {string} event.key - The key that was pressed.
     * @param {Function} setFocusedIndex - Function to update the focused index.
     * @param {number} faqs.length - The length of the FAQ list.
     */
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) => (prevIndex + 1) % faqs.length);
        } else if (event.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) => (prevIndex - 1 + faqs.length) % faqs.length);
        }
    };


    return (
        <div className='divide-y divide-solid ' onKeyDown={handleKeyDown}>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer}
                    isFocused={focusedIndex === index}
                    onFocus={() => handleFocus(index)}
                    onToggle={() => { }} />
            ))}
        </div>
    );
}