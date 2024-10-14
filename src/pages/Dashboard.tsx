import { useSearchParams } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import { useState } from 'react';

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);  
    const [searchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'users';

    const renderTabContent = () => {
        switch (currentTab) {
            case 'users':
                return (
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                            {/* Your users icon */}
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">8,282</h4>
                            <div className="text-gray-500">New Users</div>
                        </div>
                    </div>
                );
            case 'orders':
                return (
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                            {/* Your orders icon */}
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">200,521</h4>
                            <div className="text-gray-500">Total Orders</div>
                        </div>
                    </div>
                );
            case 'products':
                return (
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                        <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                            {/* Your products icon */}
                        </div>
                        <div className="mx-5">
                            <h4 className="text-2xl font-semibold text-gray-700">215,542</h4>
                            <div className="text-gray-500">Available Products</div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-1 rounded-md md:hidden hover:bg-gray-100"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <div className="flex items-center">
                            
                            <img
                                className="w-8 h-8 rounded-full"
                                src="/placeholder.jpg"
                                alt="User avatar"
                            />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <Tabs />
                        <div className="mt-4">
                            {renderTabContent()}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
