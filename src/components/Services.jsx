import tripadvisorIcon from "../assets/tripadvisor.svg";


const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-laksiri-purple">Explore Our Premium Taxi Services</h2>
            <p className="text-center text-gray-800 mb-12">LaksiriToursKandy offers a range of taxi services designed to meet your transportation needs in Kandy.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Airport Drop & Pickup</h3>
                    <p className="text-gray-800">Timely and efficient service with flight schedule monitoring.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Day Tours</h3>
                    <p className="text-gray-800">Explore Kandy and its surroundings with our guided day tours.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Multi-Day Tours</h3>
                    <p className="text-gray-800">Plan a multi-day adventure with our reliable transportation.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Tuk-Tuk City Tours</h3>
                    <p className="text-gray-800">Experience Kandy’s charm with our fun tuk-tuk city tours.</p>
                </div>
            </div>
            <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-md">
                    <img
                        src={tripadvisorIcon}
                        alt="TripAdvisor"
                        className="w-8 h-8"
                    />
                    <div className="text-left">
                        <p className="text-yellow-500 text-sm">★★★★★</p>
                        <a
                            href="https://www.tripadvisor.co.uk/Attraction_Review-g304138-d33100775-Reviews-Laksiri_Tours_Kandy-Kandy_Kandy_District_Central_Province.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-laksiri-purple hover:underline"
                        >
                            Read verified traveler reviews on TripAdvisor →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
