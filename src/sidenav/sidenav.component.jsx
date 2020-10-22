import React from 'react';
import {ReactComponent as Homeicon} from '../icons/SVG/home.svg';
import {ReactComponent as Checkicon} from '../icons/SVG/check_circle_outline.svg';
import {ReactComponent as Fileicon} from '../icons/SVG/file.svg';
import {ReactComponent as Usericon} from '../icons/SVG/users.svg';
import {ReactComponent as Pieicon} from '../icons/SVG/pie-chart.svg';
import {ReactComponent as Helpicon} from '../icons/SVG/help-circle.svg';
import {ReactComponent as Settingsicon} from '../icons/SVG/settings.svg';


import './sidenav.scss';

const SideNav = () => {
    return (
            <aside className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item side-nav__item--active">
                        <a href="#" className="side-nav__link">
                            <Homeicon className = "side-nav__icon"/>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <Checkicon className="side-nav__icon"/>
                            <span>My Tasks</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                        <Fileicon className="side-nav__icon"/>
                
                            <span>My Projects</span>
                        </a>
                    </li>
                    <li class="side-nav__item">
                        <a href="#" class="side-nav__link">
                        <Usericon className="side-nav__icon"/>
                
                            <span>People</span>
                        </a>
                    </li>
                    <li class="side-nav__item">
                        <a href="#" class="side-nav__link">
                        <Pieicon className="side-nav__icon"/>
                
                            <span>Statistics</span>
                        </a>
                    </li>

                    <hr/>

                    <li class="side-nav__item">
                        <a href="#" class="side-nav__link">
                        <Helpicon className="side-nav__icon"/>
                
                            <span>Help</span>
                        </a>
                    </li>
                    <li class="side-nav__item">
                        <a href="#" class="side-nav__link">
                        <Settingsicon className="side-nav__icon"/>
                
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </aside>
     
    );
}

export default SideNav;