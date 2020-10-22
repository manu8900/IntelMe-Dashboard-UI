import React from 'react';
 import SideNav from '../sidenav/sidenav.component';
import './homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <SideNav/>
            <main className="mainPage"></main>
        </div>
    );
}

export default Homepage;