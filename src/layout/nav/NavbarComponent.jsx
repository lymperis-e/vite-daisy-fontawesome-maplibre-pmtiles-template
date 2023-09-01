import { Navbar } from 'react-daisyui'

import NavLinks from './NavLinks'
import NavAuthComponent from './NavAuthComponent'

function NavbarComponent ({ children }) {
  return (
        <>

            {/* Medium screens: top navbar */}
            <div className="z-40 hidden md:flex w-full bg-base-100 bg-opacity-0 hover:bg-opacity-100 hover:text-white hover:shadow-lg transition-all duration-700 items-center justify-center gap-2 font-sans fixed top-[0]  ">
                <Navbar >
                    <Navbar.Start>
                        {children}
                    </Navbar.Start>

                    <Navbar.Center className="hidden lg:flex ">
                    </Navbar.Center>

                    <Navbar.End className="hidden md:flex">
                    <NavLinks></NavLinks>
                    </Navbar.End>

                </Navbar>
            </div>

            {/* Small screens: bottom navbar */}
            <div className="z-50 flex md:hidden w-full items-center justify-center p-none font-sans fixed bottom-[0] bg-gray-800 text-white border-t border-black">
                <Navbar className="p-0 px-2  min-h-0">

                    <Navbar.Start>
                    </Navbar.Start>

                    <Navbar.Center className="flex flex-row w-full items-center m-0">
                        <NavLinks></NavLinks>
                        <NavAuthComponent expanded={false}/>
                    </Navbar.Center>

                    <Navbar.End >
                    </Navbar.End>

                </Navbar>
            </div>

        </>
  )
};

export default NavbarComponent
