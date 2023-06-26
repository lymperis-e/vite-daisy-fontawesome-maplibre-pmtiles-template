import React from 'react'
import { NavLink } from 'react-router-dom';
import ThemeToggle from "../ThemeToggle";

import NavLinkElement from './NavLinkElement';
import { faClock, faCompass, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavLinks() {
    return (
        <>

            <NavLinkElement data-tip="Αρχική" to="/">
                <FontAwesomeIcon icon={faHome} />
                <div className='hidden md:inline'>
                </div>
            </NavLinkElement>

            <NavLinkElement data-tip="Χάρτης" to="/map">
                <FontAwesomeIcon icon={faCompass} />
                <div className='hidden md:inline'>
                    &nbsp;Χάρτης
                </div>
            </NavLinkElement>

            <ThemeToggle light='black' dark='black' /> {/* coffe/luxury */}</>
    )
}

export default NavLinks


