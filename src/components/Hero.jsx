const Hero = ({ setShowForm }) => {
    return (
        <section
            id="home"
            className="bg-laksiri-welcome text-white py-12 sm:py-16"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Logo as a foreground image */}
                <img
                    src="/src/assets/icon.jpg"
                    alt="Laksiri Tours Kandy Logo"
                    className="mx-auto mb-6 w-40 sm:w-48 md:w-56 h-auto"
                />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    With us to The Best Places
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-8">
                    For fast, safe, and affordable transportation in Kandy
                </p>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-laksiri-purple text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-laksiri-purple-hover transition-colors font-semibold"
                >
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default Hero;