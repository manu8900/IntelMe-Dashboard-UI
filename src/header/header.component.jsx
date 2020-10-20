import React from 'react';
import { ReactComponent as Logo } from '../logo/crown.svg';
import { ReactComponent as SearchIcon } from '../icons/SVG/search.svg';
import { ReactComponent as NotifIcon } from '../icons/SVG/bell-o.svg';
import { ReactComponent as MsgIcon } from '../icons/SVG/message-square.svg';
import { ReactComponent as StarIcon } from '../icons/SVG/star-empty.svg';

import UserImage from '../images/user-5.jpg';
import './header.scss';



const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Logo className="logo__img"/>
                <span className="logo__title">IntelMe</span>
            </div>
            <form action="#" className="search">
                <button className="search__button">
                   <SearchIcon className="search__icon"/>
                </button>
                <input type="text" className="search__input" placeholder="Search for anything..."/>     
            </form>
            <nav class="user-nav">
                <div className="user-nav__icon-box">
                    <NotifIcon className="user-nav__icon"/>
                    <span className="user-nav__notification">2</span>
                </div>
                <div className="user-nav__icon-box">
                    <MsgIcon  className="user-nav__icon"/>
                    <span className="user-nav__notification">48</span>
                </div>
                <div className="user-nav__icon-box">
                   <StarIcon  className="user-nav__icon"/>        
                </div>
                <div className="user-nav__user">
                    <img src={UserImage} alt="User" class="user-nav__user-photo"/>
                </div>
            </nav>
            
        </header>
    )
}

export default Header;