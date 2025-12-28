import { Bell, ChevronDown, Moon } from 'lucide-react';
import { GlobeIcon } from '../assets';

const Header = () => {
    return (
        <header className="bg-white flex items-center justify-between h-20">
            {/* Right Box */}
            <div className="flex items-center flex-1 px-6 h-full border-b border-gray-100">
                {/* Header Title */}
                <div className="flex items-center flex-1">
                    <h1 className="text-[20px] font-medium text-gray-800">Service</h1>
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-5">
                    {/* Icon Actions */}
                    <div className="flex items-center gap-4">
                        <button >
                            <GlobeIcon size={24} />
                        </button>
                        <button>
                            <Moon size={24} />
                        </button>
                        <button className="relative">
                            <Bell size={24} />
                            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                3
                            </span>
                        </button>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 pl-2 cursor-pointer">
                        <div className="h-9 w-9 bg-[#DDDDDD] rounded-full flex items-center justify-center text-[13px] font-bold text-black">
                            FA
                        </div>
                        <div className="hidden md:block text-left">
                            <div className="text-[15px] font-medium text-gray-800 leading-tight">Fahmid Ah...</div>
                            <div className="text-[13px] text-[#999999] font-medium leading-tight">Admin</div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-300" />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
