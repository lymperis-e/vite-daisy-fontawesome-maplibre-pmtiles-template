import {useState} from 'react'
import NavbarComponent from "@/layout/nav/NavbarComponent"
import {SidebarContent, SidebarToggle} from "@/layout/sidebar/Sidebar"
import LoaderTop from "@/components/common/LoaderTop"
import { Outlet } from "react-router-dom"

function PageLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Content Section */}

            <LoaderTop />
            
            {/* Navbar */}
            <NavbarComponent>
                <div className={`pl-1  ${sidebarOpen ? 'ml-60' : 'ml-16'} `}>
                    <SidebarToggle toggleSidebar={toggleSidebar} isExpanded={sidebarOpen} />
                </div>
            </NavbarComponent>

            {/* Sidebar */}
            <div className={`flex flex-col bg-gray-800 p-2 gap-3 text-white transition-all z-50 shadow-2xl flex-shrink-0 ${sidebarOpen ? 'w-60' : 'w-16'}`}
            >
                <SidebarContent expanded={sidebarOpen}>
                </SidebarContent>

            </div>

            {/* Main content */}
            <div className="w-full h-full overflow-y-auto">
                <Outlet />
            </div>

        </div>
    )
}

export {PageLayout}