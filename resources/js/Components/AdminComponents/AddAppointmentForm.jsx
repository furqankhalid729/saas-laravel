import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

const AppointmentForm = ({agencyUsers}) => {
    const users = agencyUsers;
    const [formData, setFormData] = useState({
        user_id: '',
        appointment_date: '',
        appointment_time: '',
        notes: '',
        amount: 0
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(route('agency.appointment.store'), formData);

            if (response.data.status === 'success') {
                router.visit(route('agency.appointment.index'));
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error creating appointment:', error);
            alert('Failed to create appointment.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Select User */}
                <div>
                    <label className="block mb-1 font-medium">Select User</label>
                    <select
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    >
                        <option value="">Select a User</option>
                        {users.map(user => (
                            <option key={user.user.id} value={user.user.id}>
                                {user.user.name} ({user.user.email})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date */}
                <div>
                    <label className="block mb-1 font-medium">Appointment Date</label>
                    <input
                        type="date"
                        name="appointment_date"
                        value={formData.appointment_date}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Time */}
                <div>
                    <label className="block mb-1 font-medium">Appointment Time</label>
                    <input
                        type="time"
                        name="appointment_time"
                        value={formData.appointment_time}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Appointment Fee</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Notes */}
                <div>
                    <label className="block mb-1 font-medium">Notes</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Enter any notes about the appointment"
                        className="w-full border p-2 rounded"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    {loading ? 'Creating...' : 'Create Appointment'}
                </button>
            </form>
        </div>
    );
};

export default AppointmentForm;
