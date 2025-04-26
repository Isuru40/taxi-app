const Services = () => {
    return (
        <section id="services" className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Explore Our Premium Taxi Services</h2>
            <p className="text-center text-gray-800 mb-12">LaksiriToursKandy offers a range of taxi services designed to meet your transportation needs in Kandy.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Airport Drop & Pickup</h3>
                    <p className="text-gray-800">Timely and efficient service with flight schedule monitoring.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Day Tours</h3>
                    <p className="text-gray-800">Explore Kandy and its surroundings with our guided day tours.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Multi-Day Tours</h3>
                    <p className="text-gray-800">Plan a multi-day adventure with our reliable transportation.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Tuk-Tuk City Tours</h3>
                    <p className="text-gray-800">Experience Kandy’s charm with our fun tuk-tuk city tours.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;