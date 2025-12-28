import { ChevronDown, Download, Eye, Filter, Plus, Search, Trash2 } from 'lucide-react';

const ServicePage = () => {
    // Mock Data matching the image exactly
    const services = [
        { id: 1, name: 'Manga/ Anime Art', organizer: 'Coach Arman & 4 others', pricing: 'From $12/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 2, name: 'Scorer', organizer: 'Coach Arman & 4 others', pricing: 'From $8/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=2' },
        { id: 3, name: 'Basketball', organizer: 'Coach Arman', pricing: 'From $8/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=3' },
        { id: 4, name: 'Cricket', organizer: 'Coach Arman', pricing: 'From $7/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=4' },
        { id: 5, name: 'Manga/ Anime Art', organizer: 'Coach Arman & 4 others', pricing: 'From $12/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 6, name: 'Robotics & AI', organizer: 'Coach Dr. Manisha', pricing: 'From $18/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=6' },
        { id: 7, name: 'Coding & Gaming', organizer: 'Coach Prince', pricing: 'From $8/Hour', type: 'Activity', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 8, name: 'PIRATE\'S COVE BAR', organizer: 'Coach Prince', pricing: 'From $1', type: 'Food', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 9, name: 'Space & gears', organizer: 'Coach Prince', pricing: 'From $8/Hour', type: 'Resource', avatar: 'https://i.pravatar.cc/150?u=7' },
        { id: 10, name: 'Pick Up', organizer: 'Pick by Arman & 4 others', pricing: 'From $3/Day', type: 'Transport', avatar: 'https://i.pravatar.cc/150?u=12' },
    ];

    return (
        <div className="space-y-6 font-sans">
            {/* Top Toolbar */}
            <div className="bg-white p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* Left Controls */}
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    {/* Search */}
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by activity name"
                            className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder-gray-400"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative">
                        <button className="flex items-center justify-between px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white min-w-[160px] hover:bg-gray-50 transition-colors hover:border-gray-300">
                            <span>All category</span>
                            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                        </button>
                    </div>

                    {/* Filters Label */}
                    <button className="flex items-center px-2 py-2.5 text-xs font-bold text-gray-700 hover:text-gray-900 uppercase tracking-wide">
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center px-5 py-2.5 bg-[#6200EE] text-white text-sm font-semibold rounded-lg hover:bg-[#5000c2] transition-colors shadow-sm">
                        <Download className="w-4 h-4 mr-2" />
                        EXPORT
                    </button>
                    <button className="flex items-center px-5 py-2.5 bg-[#6200EE] text-white text-sm font-semibold rounded-lg hover:bg-[#5000c2] transition-colors shadow-sm">
                        <Plus className="w-4 h-4 mr-2" />
                        ADD
                    </button>
                    {/* Rows per page */}
                    <div className="relative">
                        <button className="flex items-center px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-medium">10</span>
                            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Organizer</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pricing</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {services.map((service) => (
                                <tr key={service.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-gray-800">{service.name}</td>

                                    {/* Organizer Column with Stacked Avatar */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="flex -space-x-3 mr-3 items-center">
                                                <img src={service.avatar} alt="" className="w-9 h-9 rounded-full border-[3px] border-white shadow-sm object-cover relative z-20" />
                                                {/* Conditional Logic for extra members to mock " & 4 others" visual */}
                                                {service.organizer.includes('&') && (
                                                    <div className="w-9 h-9 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 relative z-10 shadow-sm -ml-4">
                                                        3+
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-gray-600 text-sm">{service.organizer}</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">{service.pricing}</td>
                                    <td className="px-6 py-4 text-gray-500">{service.type}</td>

                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="hover:bg-gray-100 p-2 rounded-full text-gray-500 transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="hover:bg-red-50 p-2 rounded-full text-red-500 transition-colors">
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
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span className="text-gray-600">Showing <strong className="text-gray-900">1-10</strong> out of <strong className="text-gray-900">17</strong> items found</span>

                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#6200EE] text-white font-bold shadow-sm transition-transform active:scale-95">1</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium transition-colors">2</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium transition-colors">3</button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors">
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
