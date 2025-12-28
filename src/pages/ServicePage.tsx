import { ChevronDown, Download, Eye, Filter, Plus, Search, Trash2 } from 'lucide-react';

const ServicePage = () => {
    // Mock Data matching the image exactly
    const services = [
        { id: 1, name: 'Manga/ Anime Art', organizer: 'Coach Arman & 4 others', pricing: 'From $12', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 2, name: 'Scorer', organizer: 'Coach Arman & 4 others', pricing: 'From $8', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=2' },
        { id: 3, name: 'Basketball', organizer: 'Coach Arman', pricing: 'From $8', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=3' },
        { id: 4, name: 'Cricket', organizer: 'Coach Arman', pricing: 'From $7', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=4' },
        { id: 5, name: 'Manga/ Anime Art', organizer: 'Coach Arman & 4 others', pricing: 'From $12', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 6, name: 'Robotics & AI', organizer: 'Coach Dr. Manisha', pricing: 'From $18', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=6' },
        { id: 7, name: 'Coding & Gaming', organizer: 'Coach Prince', pricing: 'From $8', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 8, name: 'PIRATE\'S COVE BAR', organizer: 'Coach Prince', pricing: 'From $1', type: 'Food', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 9, name: 'Space & gears', organizer: 'Coach Prince', pricing: 'From $8', type: 'Resource', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 10, name: 'Pick Up', organizer: 'Pick by Arman & 4 others', pricing: 'From $3/Day', type: 'Transport', avatar: 'https://i.pravatar.cc/150?u=12' },
    ];

    return (
        <div className="">
            {/* Top Toolbar */}
            <div className="bg-white p-4 md:p-6 rounded-t-xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-0">

                {/* Left Controls */}
                <div className="flex flex-col sm:flex-row gap-2 flex-1">
                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by activity name"
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-[#999999] placeholder:font-light"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                        <button className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white min-w-[160px] hover:bg-gray-50 transition-colors hover:border-gray-300 font-light">
                            <span>All category</span>
                            <ChevronDown className="w-4 h-4 ml-2 " />
                        </button>
                    </div>

                    {/* Filters Label */}
                    <button className="flex items-center px-2 py-2 text-[13px] font-bold text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center px-4 h-[36px] bg-[#5D06E9] text-white text-[15px] font-semibold rounded-sm hover:bg-[#5000c2] transition-colors shadow-sm">
                        <Download className="w-4 h-4 mr-2" strokeWidth={3} />
                        EXPORT
                    </button>
                    <button className="flex items-center px-4 h-[36px] bg-[#5D06E9] text-white text-[15px] font-semibold rounded-sm hover:bg-[#5000c2] transition-colors shadow-sm">
                        <Plus className="w-4 h-4 mr-2" strokeWidth={3} />
                        ADD
                    </button>
                    {/* Rows per page */}
                    <div className="relative">
                        <button className="flex items-center px-4 h-[36px] border border-gray-200 rounded-sm text-sm font-light text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-medium">10</span>
                            <ChevronDown className="w-4 h-4 ml-2 " />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-b-xl border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#F5F5F5]/60 border-b border-gray-100">
                            <tr className="h-[50px]">
                                <th className="px-4 md:px-6 py-3 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap min-w-[180px]">Name</th>
                                <th className="px-4 md:px-6 py-3 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap min-w-[260px]">Organizer</th>
                                <th className="px-4 md:px-6 py-3 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap min-w-[140px]">Pricing</th>
                                <th className="px-4 md:px-6 py-3 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap min-w-[120px]">Type</th>
                                <th className="px-4 md:px-6 py-3 text-[13px] font-medium uppercase tracking-wider text-right whitespace-nowrap min-w-[100px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {services.map((service, index) => (
                                <tr key={service.id} className={`hover:bg-gray-50/80 transition-colors group h-[50px] ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]/30'}`}>
                                    <td className="px-4 md:px-6 py-2 font-light text-[#555555] whitespace-nowrap">{service.name}</td>

                                    {/* Organizer Column with Stacked Avatar */}
                                    <td className="px-4 md:px-6 py-2">
                                        <div className="flex items-center">
                                            <div className="flex items-center mr-3 shrink-0">
                                                {/* First Avatar */}
                                                <img src={service.avatar} alt="" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover relative z-10" />

                                                {/* Conditional Logic for extra members */}
                                                {service.organizer.includes('&') && (
                                                    <>
                                                        {/* Second Avatar (Mock) */}
                                                        <img src={service.avatar} alt="" className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover relative z-20 -ml-3" />

                                                        {/* Counter */}
                                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-[#E5E5E5] flex items-center justify-center text-[11px] font-semibold text-[#111111] relative z-30 -ml-3">
                                                            3+
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <span className="text-[#555555] text-[15px] font-light whitespace-nowrap">{service.organizer}</span>
                                        </div>
                                    </td>

                                    <td className="px-4 md:px-6 py-2 text-gray-500 text-[15px] font-light whitespace-nowrap">{service.pricing}<span className='text-[12px]'>/Hour</span> </td>
                                    <td className="px-4 md:px-6 py-2 text-gray-500 text-[15px] font-light whitespace-nowrap">{service.type}</td>

                                    {/* Actions */}
                                    <td className="px-4 md:px-6 py-2 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2 text-gray-400 opacity-100 transition-opacity">
                                            <button className="hover:bg-gray-100 p-2 rounded-full text-[#555555] transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="hover:bg-red-50 p-2 rounded-full text-[#555555] transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-4 md:px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#555]">
                    <span>Showing <strong>1-10</strong> out of <strong>17</strong> items found</span>

                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#5D06E9] text-white font-medium shadow-sm transition-transform active:scale-95">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium transition-colors">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-sm border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors">
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
