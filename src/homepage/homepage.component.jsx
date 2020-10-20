import React from 'react';

import './homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <aside className="sidebar">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Dashboard</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <main className="mainPage"></main>
        </div>
    );
}

export default Homepage;