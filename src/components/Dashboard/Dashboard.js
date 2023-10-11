import React from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white p-4">
                <ul>
                    <li><button className="block px-4 py-2 hover:bg-gray-200">Menu Item 1</button></li>
                    <li><button className="block px-4 py-2 hover:bg-gray-200">Menu Item 2</button></li>
                    <li><button className="block px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10">
                {/* The content related to the active menu item will be shown here */}
            </div>
        </div>
    );
}

export default Dashboard;
