import { Calendar, ChevronDown } from 'lucide-react';
import { DashboardIcon, logo, MenuIcon, ServiceIcon, UserIcon } from '../assets';

const Sidebar = () => {
    return (
        <aside className="w-[220px] bg-white min-h-screen border-r border-gray-100 flex flex-col font-sans shrink-0">
            {/* Left Box */}
            <div className="flex items-center h-20 px-4">
                <img src={logo} alt="" />
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MenuIcon size={24} />
                </button>
            </div>
            <div className="flex-1 p-4 space-y-2 text-[#555555] text-[15px]">
                {/* Dashboard */}
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group">
                    <DashboardIcon className="w-4.5 h-4.5 mr-2" />
                    <span>Dashboard</span>
                </a>

                {/* Users */}
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group">
                    <UserIcon color="#555555" className="w-4.5 h-4.5 mr-2" />
                    <span>Users</span>
                </a>

                {/* Services & Programs Group */}
                <div className="space-y-2">
                    {/* Parent Item */}
                    <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-sm group justify-between">
                        <span className="flex items-center">
                            <ServiceIcon className="w-4.5 h-4.5 mr-2 text-gray-400" />
                            <span>Services & Pr..</span>
                        </span>
                        <ChevronDown size={20} color="#555555" />
                    </a>
                    {/* Children */}
                    <div className="space-y-2">
                        {/* Service (Active) */}
                        <a href="#" className="flex items-center px-4 py-3 text-white bg-[#5D06E9] rounded-md shadow-sm transition-all">
                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center mr-3">
                                <div className="w-2 h-2 rounded-full bg-[#5D06E9]"></div>
                            </div>
                            <span>Service</span>
                        </a>
                        {/* Program */}
                        <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                            <div className="w-4 h-4 rounded-full border border-gray-400 mr-3 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                            </div>
                            <span>Program</span>
                        </a>

                    </div>
                </div>

                {/* Schedule */}
                <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors">
                    <Calendar className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    <span>Schedule</span>
                </a>

            </div>
        </aside>
    );
};

export default Sidebar;
