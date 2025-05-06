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
            <div className="w-full max-w-full mx-auto px-2 sm:max-w-4xl">
                <div className="relative w-full max-w-[800px] mx-auto">
                    <div className="review-container w-[800px] h-[400px] overflow-x-auto overflow-y-auto mx-auto">
                        <div className="sk-ww-google-reviews w-full" data-embed-id="25550937"></div>
                    </div>
                </div>
            </div>

            {/* Custom CSS to fix mobile view and add scrollbars */}
            <style jsx>{`
                /* Ensure the parent container takes full width on mobile */
                .max-w-full {
                    max-width: 100% !important;
                    width: 100% !important;
                }

                /* Fixed-size container with scrollbars */
                .review-container {
                    width: 800px !important;
                    height: 400px !important;
                    overflow-x: auto !important;
                    overflow-y: auto !important;
                    box-sizing: border-box !important;
                    position: relative !important;
                }

                /* Ensure SociableKIT widget fits within the container */
                .sk-ww-google-reviews {
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: hidden !important;
                    box-sizing: border-box !important;
                }

                /* Target the review feed container */
                .sk-ww-google-reviews-feed {
                    width: 100% !important;
                    max-width: 100% !important;
                    display: flex !important;
                    flex-wrap: nowrap !important;
                    overflow-x: auto !important;
                    scroll-snap-type: x mandatory !important;
                    -webkit-overflow-scrolling: touch !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }

                /* Style individual review cards */
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-review {
                    flex: 0 0 85% !important;
                    max-width: 85% !important;
                    min-width: 0 !important;
                    margin: 0 2.5% !important;
                    scroll-snap-align: center !important;
                    box-sizing: border-box !important;
                }

                /* Ensure inner elements of the review card don't overflow */
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-review > div,
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-review > span {
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow-wrap: break-word !important;
                }

                /* Adjust navigation arrows */
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-prev,
                .sk-ww-google-reviews-feed .sk-ww-google-reviews-next {
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    width: 30px !important;
                    height: 30px !important;
                    z-index: 10 !important;
                }

                /* Position the "View on Google" link */
                .sk-ww-google-reviews-feed a[href*="google.com"] {
                    display: block !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    text-align: center !important;
                    margin-top: 1rem !important;
                    font-size: 0.9rem !important;
                }

                /* Ensure scrollbars are visible and styled */
                .review-container::-webkit-scrollbar {
                    width: 10px !important;
                    height: 10px !important;
                }
                .review-container::-webkit-scrollbar-thumb {
                    background: #888 !important;
                    border-radius: 5px !important;
                }
                .review-container::-webkit-scrollbar-track {
                    background: #f1f1f1 !important;
                }

                /* Specific adjustments for mobile screens */
                @media (max-width: 640px) {
                    .review-container {
                        width: 100% !important;
                        height: 300px !important; /* Reduced height for mobile */
                    }
                    .sk-ww-google-reviews-feed .sk-ww-google-reviews-review {
                        flex: 0 0 90% !important;
                        max-width: 90% !important;
                        margin: 0 5% !important;
                    }
                    .sk-ww-google-reviews-feed .sk-ww-google-reviews-prev {
                        left: 0 !important;
                    }
                    .sk-ww-google-reviews-feed .sk-ww-google-reviews-next {
                        right: 0 !important;
                    }
                }

                /* Adjustments for larger screens */
                @media (min-width: 641px) {
                    .sk-ww-google-reviews-feed .sk-ww-google-reviews-review {
                        flex: 0 0 300px !important;
                        max-width: 300px !important;
                        margin: 0 10px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default LocationReviews;