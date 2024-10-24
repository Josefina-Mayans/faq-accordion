import React from 'react';
import FAQList from './FAQList';

function App() {
    return (
        <>
            <div className="box-border bg-white my-32 mx-8 min-h-80 p-5 rounded-lg shadow-sm md:mx-96">
                <div className='flex mb-5 space-x-4 h-9 pl-3'>
                    <img className="h-7 flex self-center" src="../assets/images/icon-star.svg" alt="" />
                    <h1 className='text-3xl font-bold text-dark-purple'>FAQs</h1>
                </div>
                <FAQList />
            </div>
            <footer className="text-dark-purple text-center">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>
                <br />
                Coded by <a href="https://github.com/Josefina-Mayans"> Josefina Mayans ✨</a>
            </footer>
        </>
    );
}

export default App;