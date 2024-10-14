import { Home, LogOut, Settings, User, X } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface SidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated')
        navigate('/login')
    }
    return (
        <div
            className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transition duration-300 ease-in-out transform md:relative md:translate-x-0`}
        >
            <div className="flex items-center justify-between p-4 border-b">
                <span className="text-xl font-semibold">Destion Innovation</span>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 rounded-md md:hidden hover:bg-gray-100"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <Home className="w-5 h-5 mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <User className="w-5 h-5 mr-3" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center p-2 rounded-md hover:bg-gray-100">
                            <Settings className="w-5 h-5 mr-3" />
                            Settings
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full p-2 rounded-md hover:bg-gray-100 text-left"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Sidebar