import React from 'react'
import NavLinkElement from './NavLinkElement'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { RegularUserLinks } from './AuthenticatedLinks'

function NavLinks() {
    return (
        <>
            <NavLinkElement data-tip="Χάρτης" to="/map">
                <FontAwesomeIcon icon={faCompass} />
                <div className='hidden md:inline'>
                    &nbsp;Χάρτης
                </div>
            </NavLinkElement>

            <RegularUserLinks />
        </>
    )
}

export default NavLinks
