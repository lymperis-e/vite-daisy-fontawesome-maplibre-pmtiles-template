import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import NavLinkElement from './NavLinkElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '@/context/AuthContext'

function PrivilegedUserLinks () {
  return (
        <>
        </>
  )
}

function RegularUserLinks () {
  return (
        <>
        </>
  )
}

export { RegularUserLinks, PrivilegedUserLinks }
