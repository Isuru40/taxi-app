const Hero = ({ setShowForm }) => {
    return (
        <section
            id="home"
            className="bg-laksiri-welcome text-white py-12 sm:py-16"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <img
                    src="/icon.jpg"
                    alt="Laksiri Tours Kandy Logo"
                    className="mx-auto mb-6 w-40 sm:w-48 md:w-56 h-auto"
                />

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Travel With Us to the Best Places in Kandy
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl mb-8">
                    For fast, safe, and affordable transportation in Kandy
                </p>

                {/* CTA */}
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-laksiri-purple text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-laksiri-purple-hover transition-colors font-semibold"
                >
                    Book Now
                </button>

                {/* ⭐ Trust signals */}
                <div className="mt-4 flex justify-center items-center space-x-4 text-sm sm:text-base">
                    <span>★★★★★ Rated on</span>

                    <a
                        href="https://www.tripadvisor.co.uk/Attraction_Review-g304138-d33100775-Reviews-Laksiri_Tours_Kandy-Kandy_Kandy_District_Central_Province.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-200 transition-colors"
                    >
                        TripAdvisor
                    </a>

                    <span>&</span>

                    <span className="font-medium">Google</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
