import { useState } from 'react';
import BookingForm from './BookingForm';

const Header = ({ setShowForm }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-laksiri-purple bg-opacity-0 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <h2 className=" text-white text-xl sm:text-2xl font-bold truncate">
                    LaksiriToursKandy
                </h2>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation and Book Now Button */}
                <div
                    className={`${
                        isMenuOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-14 left-0 w-full md:w-auto bg-laksiri-purple md:bg-transparent p-4 md:p-0 z-40`}
                >
                    <nav className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <a href="#services" className="text-white hover:text-laksiri-headings transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-white hover:text-laksiri-headings transition-colors">
                            About Us
                        </a>
                        <a href="#faq" className="text-white hover:text-laksiri-headings transition-colors">
                            FAQ
                        </a>

                    </nav>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-white text-laksiri-purple px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold mt-4 md:mt-0"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;