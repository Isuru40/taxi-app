const LocationReviews = () => {
    return (
        <section id="location-reviews" className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-laksiri-purple">Our Location & Reviews</h2>
            <p className="text-center text-gray-800 mb-4">
                129/A, Thiththapajjala, Werellagama, Kandy
            </p>
            <p className="text-center text-laksiri-purple mb-12">
                <a
                    href="https://maps.app.goo.gl/9DpH4ywXGY1ZU7GR8?g_st=aw"
                    className="text-laksiri-purple hover:text-laksiri-purple-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Google Maps
                </a>
            </p>
            <h3 className="text-xl font-semibold text-center mb-4 text-laksiri-purple">Google Reviews</h3>
            <div className="max-w-4xl mx-auto">
                <div className="sk-ww-google-reviews" data-embed-id="25550937"></div>
            </div>
        </section>
    );
};

export default LocationReviews;