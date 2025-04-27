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
            <div className="max-w-4xl mx-auto w-full">
                <div className="sk-ww-google-reviews w-full" data-embed-id="25550937"></div>
            </div>

            {/* Custom CSS to fix mobile view */}
            <style jsx>{`
                /* Ensure the parent container is responsive */
                .sk-ww-google-reviews {
                    width: 100% !important;
                    overflow: hidden !important;
                }

                /* Override SociableKIT's review feed container */
                .sk-ww-google-reviews-feed {
                    width: 100% !important;
                    max-width: 100% !important;
                    display: flex;
                    flex-wrap: nowrap;
                    overflow-x: auto !important;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                }

                /* Style individual review cards */
                .sk-ww-google-reviews-review {
                    flex: 0 0 90% !important; /* Take up 90% of the viewport width on mobile */
                    max-width: 90% !important;
                    margin: 0 5% !important; /* Center the card with 5% margin on each side */
                    scroll-snap-align: center;
                }

                /* Adjust navigation arrows */
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-prev,
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-next {
                    top: 50% !important;
                    transform: translateY(-50%);
                }

                /* Ensure the "View on Google" link fits */
                .sk-ww-google-reviews-feed a[href*="google.com"] {
                    display: block !important;
                    width: 100% !important;
                    text-align: center !important;
                    margin-top: 1rem !important;
                }

                /* Media query for larger screens */
                @media (min-width: 768px) {
                    .sk-ww-google-reviews-review {
                        flex: 0 0 300px !important; /* Fixed width for larger screens */
                        max-width: 300px !important;
                        margin: 0 10px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default LocationReviews;