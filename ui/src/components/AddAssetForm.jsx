import React, { useState } from 'react';

const AddAssetForm = () => {
    const [assetId, setAssetId] = useState('');
    const [assetName, setAssetName] = useState('');
    const [scheduledDate, setScheduledDate] = useState('');
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { assetId, assetName, scheduledDate, status, location });
        // You can add further logic to save data or perform API calls here
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="space-x-4">
                    <a href="/technician-dashboard" className="text-blue-600 hover:text-gray-900">Home</a>
                </div>
                <div className="space-x-4">
                    <a href="/home" className="text-blue-600 hover:text-gray-900">Logout</a>
                </div>
            </nav>

            {/* Form Content */}
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Asset Details</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="assetId" className="block text-sm font-medium text-gray-700">Asset ID</label>
                            <input
                                type="text"
                                id="assetId"
                                name="assetId"
                                value={assetId}
                                onChange={(e) => setAssetId(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="assetName" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="assetName"
                                name="assetName"
                                value={assetName}
                                onChange={(e) => setAssetName(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="scheduledDate" className="block text-sm font-medium text-gray-700">Scheduled Date</label>
                            <input
                                type="date"
                                id="scheduledDate"
                                name="scheduledDate"
                                value={scheduledDate}
                                onChange={(e) => setScheduledDate(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Repair">Repair</option>
                            </select>
                        </div>
                    </div>

                    
                    
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAssetForm;
