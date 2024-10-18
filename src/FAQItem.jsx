import React, { useState } from 'react';
import "../assets/images/icon-plus.svg";
import "../assets/images/icon-minus.svg";


export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {  
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex-column space-y-4 p-4">
            <div className="flex text-dark-purple" onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {question}
                <img className="pr-1" src={isOpen ? "../assets/images/icon-minus.svg" : "../assets/images/icon-plus.svg"} alt="icon"/>
            </div>
            {isOpen && <p className="text-grayish-purple">{answer}</p>}
        </div>
    );
} 