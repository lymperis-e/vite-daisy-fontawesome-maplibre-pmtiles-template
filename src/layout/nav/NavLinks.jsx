import React from 'react'
import NavLinkElement from './NavLinkElement'
import { faCompass, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { RegularUserLinks, PrivilegedUserLinks } from './AuthenticatedLinks'

function NavLinks () {
  return (
        <>
            <NavLinkElement to="/dashboard" data-tip="Σύγκριση τιμών " >
                            <FontAwesomeIcon icon={faMoneyCheckDollar}/>
                            <div className='hidden md:inline'>
                                &nbsp; Σύγκριση Τιμών
                            </div>
                        </NavLinkElement>

            <NavLinkElement data-tip="Χάρτης" to="/map">
                <FontAwesomeIcon icon={faCompass} />
                <div className='hidden md:inline'>
                    &nbsp;Χάρτης
                </div>
            </NavLinkElement>

            <RegularUserLinks />
            <PrivilegedUserLinks />

           </>
  )
}

export default NavLinks
