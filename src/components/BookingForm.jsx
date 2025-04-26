import { useState } from 'react';
import dayjs from 'dayjs';

const BookingForm = ({ setShowForm }) => {
    console.log('BookingForm.jsx - BookingForm is rendering');

    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: dayjs().format('HH:mm'),
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'time') {
            const timeParts = value.split(':');
            if (timeParts.length >= 2) {
                const hours = timeParts[0].padStart(2, '0');
                const minutes = timeParts[1].split(' ')[0].padStart(2, '0');
                formattedValue = `${hours}:${minutes}`;
            }
        }

        setFormData({ ...formData, [name]: formattedValue });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.service) newErrors.service = 'Please select a service';
        if (!formData.date) newErrors.date = 'Please select a date';
        if (!formData.time) {
            newErrors.time = 'Please select a time';
        } else {
            const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
            if (!timeRegex.test(formData.time)) {
                newErrors.time = 'Please enter a valid time (HH:mm)';
            }
        }
        return newErrors;
    };

    const handleBookingSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const { service, date, time } = formData;
        const subject = `New Booking Request - ${service}`;
        const body = `Service: ${service}\nDate: ${date}\nTime: ${time}`;
        window.location.href = `mailto:laksiriroshan109@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setShowForm(false);
        setFormData({ service: '', date: '', time: dayjs().format('HH:mm') });
    };

    return (
        <div className="fixed inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md sm:max-w-xl mx-4 sm:mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Book Your Ride</h3>
                    <button
                        onClick={() => setShowForm(false)}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Service</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all bg-white text-gray-800 ${
                                errors.service ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                            <option value="" disabled className="text-gray-500">Select a service</option>
                            <option value="Airport Drop & Pickup" className="text-gray-800">Airport Drop & Pickup</option>
                            <option value="Day Tours" className="text-gray-800">Day Tours</option>
                            <option value="Multi-Day Tours" className="text-gray-800">Multi-Day Tours</option>
                            <option value="Tuk-Tuk City Tours" className="text-gray-800">Tuk-Tuk City Tours</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-gray-800 ${
                                errors.date ? 'border-red-500' : 'border-gray-300'
                            }`}
                            min={dayjs().format('YYYY-MM-DD')}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            step="60"
                            min={formData.date === dayjs().format('YYYY-MM-DD') ? dayjs().format('HH:mm') : undefined}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-gray-800 ${
                                errors.time ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>
                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            onClick={() => setShowForm(false)}
                            className="px-4 sm:px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            Cancel
                        </button>
                        <button
                            onClick={handleBookingSubmit}
                            className="px-4 sm:px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;