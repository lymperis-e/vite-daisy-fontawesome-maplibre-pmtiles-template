import NavAuthComponent from '@/layout/nav/NavAuthComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import {Logo} from '@/components/common/Logo'
import LogoImg from '@/assets/images/logo.png'

function SidebarToggle ({ toggleSidebar, isExpanded, ...rest }) {
  return (
      <button
        className="btn btn-circle btn-ghost shadow shadow-lg tooltip tooltip-right"
        data-tip={isExpanded ? 'Ελαχιστοποίηση Εργαλειοθήκης' : 'Άνοιγμα Εργαλειοθήκης'}
        onClick={toggleSidebar}
        {...rest}
      >
        <FontAwesomeIcon icon={isExpanded ? faBarsStaggered : faBars} />
      </button>
  )
}

function SidebarItem ({ minimizedContent, tooltip, expanded, children, ...rest }) {
  if (expanded) {
    return (
        <div className='circle'>
            {children}
        </div>
    )
  }

  return (
        <div className='cursor-pointer hover:opacity-90 tooltip tooltip-right' data-tip={tooltip} >
            {minimizedContent}
        </div>
  )
}

function SidebarLogo ({ expanded }) {
  const minimizedContent = () => {
    return (
            <Logo link='/'>
                <img src={LogoImg} alt="" className="w-10  inline" />
            </Logo>
    )
  }

  const expandedContent = () => {
    return (
            <Logo link='/'>
                <img src={LogoImg} alt="" className="w-10  inline" />
                <span>ReactApp</span>
            </Logo>
    )
  }

  return (
        <SidebarItem minimizedContent={minimizedContent()} tooltip={null} expanded={expanded}>
            {expandedContent()}
        </SidebarItem>
  )
}

function SidebarContent ({ expanded, children, ...rest }) {
  return (
        <>

            {children}
            <SidebarLogo expanded={expanded} />

            <div className='flex flex-col gap-4 h-full mt-1 pt-4 border-t border-base-300 '>
                Test
            </div>

            <NavAuthComponent expanded={expanded} />
        </>
  )
}

export { SidebarContent, SidebarToggle, SidebarItem }
