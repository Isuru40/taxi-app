import { useState } from 'react';
import dayjs from 'dayjs';

const BookingForm = ({ setShowForm }) => {
    console.log('BookingForm.jsx - BookingForm is rendering');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+94', // Default to Sri Lanka
        phone: '',
        service: '',
        destination: '',
        date: '',
        time: dayjs().format('HH:mm'),
        passengers: '',
        pickup: '',
        drop: '',
        notes: '',
    });
    const [errors, setErrors] = useState({});

    const countryCodes = [
        { code: '+94', label: 'Sri Lanka (+94)' },
        { code: '+1', label: 'USA/Canada (+1)' },
        { code: '+44', label: 'UK (+44)' },
        { code: '+91', label: 'India (+91)' },
        { code: '+61', label: 'Australia (+61)' },
        { code: '+81', label: 'Japan (+81)' },
        { code: '+49', label: 'Germany (+49)' },
    ];

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

        if (name === 'passengers') {
            formattedValue = value.replace(/[^0-9]/g, ''); // Only allow numbers
            if (formattedValue && parseInt(formattedValue) > 200) {
                formattedValue = '200'; // Cap the value at 200
            }
        }

        if (name === 'phone') {
            formattedValue = value.replace(/[^0-9]/g, ''); // Only allow numbers
        }

        setFormData({ ...formData, [name]: formattedValue });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Please enter your name';
        else if (formData.name.length > 100) newErrors.name = 'Name cannot exceed 100 characters';

        if (!formData.email) newErrors.email = 'Please enter your email';
        else if (formData.email.length > 100) newErrors.email = 'Email cannot exceed 100 characters';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';

        if (!formData.phone) newErrors.phone = 'Please enter your phone number';
        else if (!/^\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 9 digits';

        if (!formData.service) newErrors.service = 'Please select a service';

        if (!formData.destination) newErrors.destination = 'Please enter your destination';
        else if (formData.destination.length > 150) newErrors.destination = 'Destination cannot exceed 150 characters';

        if (!formData.date) newErrors.date = 'Please select a date';

        if (!formData.time) {
            newErrors.time = 'Please select a time';
        } else {
            const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
            if (!timeRegex.test(formData.time)) {
                newErrors.time = 'Please enter a valid time (HH:mm)';
            }
        }

        if (!formData.passengers) newErrors.passengers = 'Please enter the number of passengers';
        else if (parseInt(formData.passengers) < 1) newErrors.passengers = 'Number of passengers must be at least 1';
        else if (parseInt(formData.passengers) > 200) newErrors.passengers = 'Number of passengers cannot exceed 200';

        if (!formData.pickup) newErrors.pickup = 'Please enter the pickup location';
        else if (formData.pickup.length > 100) newErrors.pickup = 'Pickup location cannot exceed 100 characters';

        if (formData.drop && formData.drop.length > 100) newErrors.drop = 'Drop-off location cannot exceed 100 characters';

        if (formData.notes && formData.notes.length > 150) newErrors.notes = 'Notes cannot exceed 150 characters';

        return newErrors;
    };

    const handleBookingSubmit = () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const { name, email, countryCode, phone, service, destination, date, time, passengers, pickup, drop, notes } = formData;
        const subject = `New Booking Request - ${service}`;
        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${countryCode}${phone}\nService: ${service}\nDestination: ${destination}\nDate: ${date}\nPickUp Time: ${time}\nPassengers: ${passengers}\nPickup: ${pickup}\nDrop-off: ${drop || 'Not specified'}\nNotes: ${notes || 'None'}`;
        window.location.href = `mailto:laksiriroshan109@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setShowForm(false);
        setFormData({
            name: '',
            email: '',
            countryCode: '+94',
            phone: '',
            service: '',
            destination: '',
            date: '',
            time: dayjs().format('HH:mm'),
            passengers: '',
            pickup: '',
            drop: '',
            notes: '',
        });
    };

    return (
        <div className="fixed inset-0 bg-laksiri-purple bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white p-6 sm rounded-xl shadow-2xl w-full max-w-md sm:max-w-xl mx-4 sm:mx-auto my-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-laksiri-purple">Book Your Ride</h3>
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
                    {/* Name */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            maxLength={100}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            maxLength={100}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Number with Country Code */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Phone/WhatsApp Number</label>
                        <div className="flex space-x-2">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                                className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                maxLength={9}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="123456789"
                            />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Service</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all bg-white text-gray-800 ${
                                errors.service ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                            <option value="" disabled className="text-gray-500">
                                Select a service
                            </option>
                            <option value="Airport Drop & Pickup" className="text-gray-800">
                                Airport Drop & Pickup
                            </option>
                            <option value="Day Tours" className="text-gray-800">
                                Day Tours
                            </option>
                            <option value="Multi-Day Tours" className="text-gray-800">
                                Multi-Day Tours
                            </option>
                            <option value="Tuk-Tuk City Tours" className="text-gray-800">
                                Tuk-Tuk City Tours
                            </option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>

                    {/* Destination */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Destination</label>
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            maxLength={150}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.destination ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.date ? 'border-red-500' : 'border-gray-300'
                            }`}
                            min={dayjs().format('YYYY-MM-DD')}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>

                    {/* PickUp Time */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">PickUp Time</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            step="60"
                            min={formData.date === dayjs().format('YYYY-MM-DD') ? dayjs().format('HH:mm') : undefined}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.time ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>

                    {/* Number of Passengers */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Number of Passengers</label>
                        <input
                            type="number"
                            name="passengers"
                            value={formData.passengers}
                            onChange={handleInputChange}
                            min="1"
                            max="200"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.passengers ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.passengers && <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>}
                    </div>

                    {/* Place of Pickup */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Place of Pickup</label>
                        <input
                            type="text"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleInputChange}
                            maxLength={100}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.pickup ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.pickup && <p className="text-red-500 text-sm mt-1">{errors.pickup}</p>}
                    </div>

                    {/* Place of Drop */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Place of Drop-off (Optional)</label>
                        <input
                            type="text"
                            name="drop"
                            value={formData.drop}
                            onChange={handleInputChange}
                            maxLength={100}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.drop ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.drop && <p className="text-red-500 text-sm mt-1">{errors.drop}</p>}
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Notes (Optional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            maxLength={150}
                            rows="3"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-laksiri-purple-hover focus:border-transparent transition-all text-gray-800 ${
                                errors.notes ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.notes && <p className="text-red-500 text-sm mt-1">{errors.notes}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4 mt-8 sticky bottom-0 bg-white pt-4 z-10">
                        <button
                            onClick={() => setShowForm(false)}
                            className="px-4 sm:px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
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
                            className="px-4 sm:px-6 py-2 bg-laksiri-purple text-white font-semibold rounded-lg hover:bg-laksiri-purple-hover transition-colors flex items-center gap-2"
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