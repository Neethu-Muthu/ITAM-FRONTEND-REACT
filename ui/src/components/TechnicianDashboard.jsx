import React from 'react';

const TechnicianDashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="space-x-4">
                    <a href="/home" className="text-blue-600 hover:text-gray-900">Home</a>
                </div>
                <div className="space-x-4">
                    <a href="/home" className="text-blue-600 hover:text-gray-900">Logout</a>
                </div>
            </nav>

            {/* Header */}
            <header className="bg-white shadow-lg p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">Technician Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <img src="/src/images/download.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <span className="text-gray-900">John Doe</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-6">

                {/* Asset Details Form Button */}
                <div className="mb-4">
                    <a href="/add-asset" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Add Asset Details
                    </a>
                </div>

                {/* Placeholder for Form Data */}
                <section className="bg-gray-100 shadow-md rounded-lg p-4 mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Asset Details</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2">Asset ID</th>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Scheduled Date</th>
                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                    {/* <th className="border border-gray-300 px-4 py-2">Location</th> */}
                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            {/* Display Asset Details Here */}
                            
                        </table>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default TechnicianDashboard;
