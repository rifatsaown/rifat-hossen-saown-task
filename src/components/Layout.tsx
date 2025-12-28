import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="flex h-screen overflow-hidden bg-white">
            {/* Sidebar with mobile props */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />

            <div className="flex-1 flex flex-col min-w-0 w-full relative">
                <Header toggleSidebar={toggleSidebar} />
                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-12 w-full">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
