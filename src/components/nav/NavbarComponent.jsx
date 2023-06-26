import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "react-daisyui";
import Logo from "../Logo";
//import LogoImg from "../assets/logo_rect.png"
import NavLinks from "./NavLinks";

function NavbarComponent(args) {
    const dropdownRef = useRef(null);

    const handleNavLinkClick = () => {
        dropdownRef.current?.click();
    };

    return (
        <>


            {/* Medium screens: top navbar */}
            <div className="z-50 hidden md:flex w-full bg-primary text-white items-center justify-center gap-2 font-sans fixed top-[0] shadow shadow-lg ">
                <Navbar >
                    <Navbar.Start>

                        <Logo link='/'>
                            <img src={null} alt="" className="w-40 logo-img" />
                        </Logo>

                    </Navbar.Start>


                    <Navbar.Center className="hidden lg:flex ">

                    </Navbar.Center>

                    <Navbar.End className="hidden md:flex">
                        <NavLinks></NavLinks>
                    </Navbar.End>


                </Navbar>
            </div>



            {/* Small screens: bottom navbar */}
            <div className="z-50 flex md:hidden w-full component-preview items-center justify-center gap-2 font-sans fixed bottom-[0] bg-primary text-white border-t border-black">
                <Navbar >

                    <Navbar.Start>
                    </Navbar.Start>

                    <Navbar.Center className="flex flex-row w-full items-center">
                        <NavLinks></NavLinks>
                    </Navbar.Center>

                    <Navbar.End >
                    </Navbar.End>

                </Navbar>
            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;