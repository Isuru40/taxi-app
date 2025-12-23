import tripadvisorIcon from "../assets/tripadvisor.svg";

const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-gray-100 text-center">
            <div className="flex justify-center space-x-4 mb-4">
                <a
                    href="https://www.facebook.com/share/18zFHpgwBB/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        alt="Facebook"
                        className="w-6 h-6 hover:opacity-75 transition-opacity"
                    />
                </a>

                <a
                    href="https://www.instagram.com/laksiriroshanariyawansha?igsh=MXZrYzl2MzZ6YzNvMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        alt="Instagram"
                        className="w-6 h-6 hover:opacity-75 transition-opacity"
                    />
                </a>

                <a
                    href="https://wa.me/+94757268109"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                        alt="WhatsApp"
                        className="w-6 h-6 hover:opacity-75 transition-opacity"
                    />
                </a>

                {/* ✅ TripAdvisor */}
                <a
                    href="https://www.tripadvisor.co.uk/Attraction_Review-g304138-d33100775-Reviews-Laksiri_Tours_Kandy-Kandy_Kandy_District_Central_Province.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={tripadvisorIcon}
                        alt="TripAdvisor"
                        className="w-6 h-6 hover:opacity-75 transition-opacity"
                    />
                </a>
            </div>

            <p className="text-gray-800 mb-2">
                Email:{" "}
                <a
                    href="mailto:laksiritourskandy@gmail.com"
                    className="text-laksiri-purple hover:text-laksiri-purple-hover"
                >
                    laksiritourskandy@gmail.com
                </a>
            </p>

            <p className="text-gray-800 mb-2">
                Phone:{" "}
                <a
                    href="https://wa.me/+94757268109"
                    className="text-laksiri-purple hover:text-laksiri-purple-hover"
                >
                    +94 75 726 8109
                </a>
            </p>

            <p className="text-gray-800 mb-2">
                Government Registration Number:{" "}
                <span className="text-laksiri-purple">CP/HP/3210</span>
            </p>

            <p className="text-gray-800">
                © 2025 LaksiriToursKandy. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
