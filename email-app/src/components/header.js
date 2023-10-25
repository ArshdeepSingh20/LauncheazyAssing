import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const words = ['Email Template', 'Email Sequences', 'Marketing Recipes'];

function Header() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="header">
            <div className='head-container'>
                <div className="d-flex justify-content-start head1">
                    MARKETPLACE
                </div>

                <div className="d-flex justify-content-start head2 animation-container">
                    <p className={`slide-up ${currentWordIndex === 0 ? 'visible' : 'hidden'}`}>
                        {words[0]}
                    </p>
                    <p className={`slide-up ${currentWordIndex === 1 ? 'visible' : 'hidden'}`}>
                        {words[1]}
                    </p>
                    <p className={`slide-up ${currentWordIndex === 2 ? 'visible' : 'hidden'}`}>
                        {words[2]}
                    </p>
                </div>

                <div className="d-flex justify-content-start head3">
                    by the community, for the community.
                </div>

                <div className="d-flex justify-content-start head4">
                    100s of free templates to help you craft the perfect marketing journey.
                </div>

            </div>
        </div>
    );
}

export default Header;
