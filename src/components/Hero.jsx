const Hero = ({ setShowForm }) => {
    return (
        <section
            id="home"
            className="bg-blue-600 text-white py-12 sm:py-16 bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/src/assets/welcome.jpg')",
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Experience Swift and Reliable Rides
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-8">
                    For fast, safe, and affordable transportation in Kandy
                </p>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-yellow-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
                >
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default Hero;