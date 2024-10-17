import React, { useState } from 'react';
import "../assets/images/icon-plus.svg";
import "../assets/images/icon-minus.svg";


export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {  
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {question}
                <img className="icon" src={isOpen ? "../assets/images/icon-minus.svg" : "../assets/images/icon-plus.svg"} alt="icon"/>
            </div>
            {isOpen && <p className="faq-answer">{answer}</p>}
        </div>
    );
} 