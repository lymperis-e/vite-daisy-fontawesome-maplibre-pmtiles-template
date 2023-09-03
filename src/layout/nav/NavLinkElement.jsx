import '../../css/components/action.css'
import { NavLink } from 'react-router-dom'

function NavLinkElement ({ children, ...rest }) {
  return (
        <>

        {/* Small Screens */}
        <NavLink className="flex md:hidden btn btn-ghost tooltip tooltip-top mx-auto before:w-[7rem] before:content-[attr(data-tip)]" {...rest}>
            {children}
        </NavLink>

        {/* Medium Screens */}
        <NavLink className="nav-link hidden md:block btn-link tooltip tooltip-bottom mr-4 ml-0 " {...rest}>
            {children}
        </NavLink>

        </>

  )
}

export default NavLinkElement
