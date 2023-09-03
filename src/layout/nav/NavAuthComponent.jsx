import { useRef, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { Menu } from 'react-daisyui'
import NavbarElement from './NavbarElement'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSlash, faSignOut, faUser, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from '@/context/AuthContext'
import { SidebarItem } from '@/layout/sidebar/Sidebar'

function NavAuthComponent({ expanded }) {
    const { user } = useContext(AuthContext) || null
    const dropdownRef = useRef(null)

    const avatar = () => {
        return (
            user ?
                (
                    <>
                        {expanded ? <span>{user?.username} &nbsp;</span> : null}
                        <FontAwesomeIcon className="" icon={faUser} />
                    </>
                )
                : null
        )
    }

    const menuItems = () => {
        return (
            <>
                <li>
                    <NavLink to="/user-profile" className='text-left' >
                        <FontAwesomeIcon icon={faUser} />
                        Προφίλ
                    </NavLink>
                </li>
                {
                    user.is_superuser ? (
                        <li>
                            <NavLink to="https://charging-cost.getmap.gr/admin/" className='text-left' > {/* externalLink={true} */}
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                                Διαχείριση
                            </NavLink>
                        </li>
                    ) : null
                }

                <li>
                    <button onClick={logout}>
                        <FontAwesomeIcon icon={faSignOut} />
                        Έξοδος
                    </button>
                </li>
            </>
        )
    }

    const fullComponent = () => {
        if (user?.isAuthenticated) {
            return (
                <>
                    <div className=" w-full dropdown dropdown-top md:dropdown-right dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost w-full rounded-lg avatar ">
                            {avatar()}
                        </label>
                        <ul tabIndex={0} className="my-3 p-2 shadow menu menu-compact dropdown-content rounded-box bg-primary  w-72">
                            {menuItems()}
                        </ul>
                    </div>
                </>
            )
        }

        return (
            <Menu horizontal className="p-0 tooltip tooltip-right" data-tip="Σύνδεση">
                <NavbarElement to="login" className="btn btn-ghost btn-circle">
                    <FontAwesomeIcon icon={faUserSlash} />
                </NavbarElement>
            </Menu>
        )
    }

    return (
        <SidebarItem
            expanded={expanded}
            minimizedContent={fullComponent()}
            tooltip={null}>
            {fullComponent()}
        </SidebarItem>
    )
}

export default NavAuthComponent
