import React from 'react';
import FAQList from './FAQList';

function App() {
    return (
        <>
            <div className="faq-container">
                <div>
                    <img src="../assets/images/icon-star.svg" alt="" />
                    <h1>FAQs</h1>
                </div>

                <FAQList />


            </div>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/Josefina-Mayans">✨ Josefina Mayans ✨</a>.
            </footer>
        </>
    );
}

export default App;