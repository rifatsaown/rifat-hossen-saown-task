import { Calendar, LayoutDashboard, Users, Zap } from 'lucide-react';
import { logo, MenuIcon } from '../assets';

const Sidebar = () => {
    return (
        <aside className="w-[220px] bg-white min-h-screen border-r border-gray-100 flex flex-col font-sans shrink-0">
            {/* Left Box */}
            <div className="flex items-center h-20 border-r border-gray-100 px-4">
                <img src={logo} alt="" />
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MenuIcon size={24} />
                </button>
            </div>
            <div className="flex-1 px-3 py-6 space-y-1">

                {/* Dashboard */}
                <a href="#" className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors rounded-lg group">
                    <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    <span className="text-sm font-medium">Dashboard</span>
                </a>

                {/* Users */}
                <a href="#" className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors rounded-lg group">
                    <Users className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    <span className="text-sm font-medium">Users</span>
                </a>

                {/* Services & Programs Group */}
                <div className="pt-2">
                    <div className="relative">
                        {/* Parent Item */}
                        <a href="#" className="flex items-center px-3 py-2.5 text-gray-900 bg-gray-50 rounded-t-lg transition-colors">
                            <Zap className="w-5 h-5 mr-3 text-gray-400" />
                            <span className="text-sm font-medium flex-1">Services & Pr..</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </a>

                        {/* Children */}
                        <div className="bg-gray-50 pb-2 rounded-b-lg space-y-1 px-2">
                            {/* Service (Active) */}
                            <a href="#" className="flex items-center px-3 py-2 text-white bg-[#6200EE] rounded-md shadow-sm transition-all mx-1">
                                <div className="w-3 h-3 rounded-full border-[3px] border-white/30 bg-white mr-3"></div>
                                <span className="text-sm font-medium">Service</span>
                            </a>

                            {/* Program */}
                            <a href="#" className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors mx-1">
                                <div className="w-3 h-3 rounded-full border-2 border-gray-300 mr-3"></div>
                                <span className="text-sm font-medium">Program</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Schedule */}
                <a href="#" className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 transition-colors rounded-lg group mt-1">
                    <Calendar className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" />
                    <span className="text-sm font-medium">Schedule</span>
                </a>

            </div>
        </aside>
    );
};

export default Sidebar;
