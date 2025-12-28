import { Calendar, ChevronDown } from 'lucide-react';
import { DashboardIcon, logo, MenuIcon, ServiceIcon, UserIcon } from '../assets';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar = ({ isOpen, onClose, isCollapsed, toggleCollapse }: SidebarProps) => {

    const handleMenuClick = () => {
        if (window.innerWidth < 768) {
            onClose();
        } else {
            toggleCollapse();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                    onClick={onClose}
                />
            )}

            <aside className={`
                fixed md:relative top-0 left-0 z-50 md:z-auto
                bg-white h-screen border-r border-gray-100 flex flex-col font-sans shrink-0
                transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                ${isCollapsed ? 'md:w-[80px]' : 'md:w-[220px] w-[220px]'}
            `}>
                {/* Left Box */}
                <div className={`flex items-center h-20 px-4 shrink-0 ${isCollapsed ? 'justify-center' : ''}`}>
                    {!isCollapsed && <img src={logo} alt="" className="transition-opacity duration-300" />}
                    <button
                        onClick={handleMenuClick}
                        className={`text-gray-400 hover:text-gray-600 transition-colors ${!isCollapsed ? 'ml-auto' : ''}`}
                    >
                        <MenuIcon size={24} />
                    </button>
                </div>
                <div className="flex-1 p-4 space-y-2 text-[#555555] text-[15px] overflow-y-auto overflow-x-hidden">
                    {/* Dashboard */}
                    <a href="#" className={`flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group ${isCollapsed ? 'justify-center' : ''}`}>
                        <DashboardIcon className="w-4.5 h-4.5 shrink-0" />
                        {!isCollapsed && <span className="ml-2 whitespace-nowrap">Dashboard</span>}
                    </a>

                    {/* Users */}
                    <a href="#" className={`flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group ${isCollapsed ? 'justify-center' : ''}`}>
                        <UserIcon color="#555555" className="w-4.5 h-4.5 shrink-0" />
                        {!isCollapsed && <span className="ml-2 whitespace-nowrap">Users</span>}
                    </a>

                    {/* Services & Programs Group */}
                    <div className="space-y-2">
                        {/* Parent Item */}
                        <a href="#" className={`flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                            <span className="flex items-center">
                                <ServiceIcon className="w-4.5 h-4.5 text-gray-400 shrink-0" />
                                {!isCollapsed && <span className="ml-2 whitespace-nowrap">Services & Pr..</span>}
                            </span>
                            {!isCollapsed && <ChevronDown size={20} color="#555555" />}
                        </a>
                        {/* Children */}
                        <div className={`space-y-2 ${isCollapsed ? 'hidden' : 'block'}`}>
                            {/* Service (Active) */}
                            <a href="#" className="flex items-center px-4 py-3 text-white bg-[#5D06E9] rounded-sm shadow-sm transition-all">
                                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-[#5D06E9]"></div>
                                </div>
                                <span className="whitespace-nowrap">Service</span>
                            </a>
                            {/* Program */}
                            <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                                <div className="w-4 h-4 rounded-full border border-gray-400 mr-3 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                </div>
                                <span className="whitespace-nowrap">Program</span>
                            </a>

                        </div>
                    </div>

                    {/* Schedule */}
                    <a href="#" className={`flex items-center px-4 py-3 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Calendar className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-gray-600" />
                        {!isCollapsed && <span className="ml-3 whitespace-nowrap">Schedule</span>}
                    </a>

                </div>
            </aside>
        </>
    );
};

export default Sidebar;
