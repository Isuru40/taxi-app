const LocationReviews = () => {
    return (
        <section id="location-reviews" className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Location & Reviews</h2>
            <p className="text-center text-gray-800 mb-4">
                129/3A, Thiththapajjala, Werellagama, Kandy
            </p>
            <p className="text-center text-blue-600 mb-12">
                <a href="https://maps.app.goo.gl/9DpH4ywXGY1ZU7GR8?g_st=aw" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
            </p>
            <h3 className="text-xl font-semibold text-center mb-4 text-blue-600">Google Reviews</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded shadow-md">
                    <p className="text-gray-800 italic">"Amazing service! The driver was on time for our airport pickup." — John D.</p>
                </div>
                <div className="bg-white p-6 rounded shadow-md">
                    <p className="text-gray-800 italic">"The tuk-tuk city tour was so much fun! Highly recommend." — Sarah M.</p>
                </div>
            </div>
        </section>
    );
};

export default LocationReviews;