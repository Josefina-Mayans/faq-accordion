import React, { useState } from 'react';
import "../assets/images/icon-plus.svg";
import "../assets/images/icon-minus.svg";


export default function FAQItem({ question, answer, isFocused, onFocus, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        onToggle();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleOpen();
        }
    };

    return (
        <div
            className="flex-column space-y-4 p-3"
            tabIndex={0}
            onFocus={onFocus}
            onKeyDown={handleKeyDown}
            style={{
                cursor: 'pointer',
            }}>
            <div className={`flex ${isFocused ? 'text-hot-pink' : 'text-dark-purple'} hover:text-hot-pink justify-between`} onClick={toggleOpen} style={{ fontWeight: 'bold' }}>
                {question}
                <img className="" src={isOpen ? "../assets/images/icon-minus.svg" : "../assets/images/icon-plus.svg"} alt="icon" />
            </div>
            {isOpen && <p className="text-grayish-purple ">{answer}</p>}
        </div>
    );
} 