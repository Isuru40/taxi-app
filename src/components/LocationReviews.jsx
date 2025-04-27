import { useEffect, useState } from 'react';

const LocationReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Function to extract reviews from the SociableKIT widget
        const extractReviews = () => {
            const widgetDiv = document.querySelector('.sk-ww-google-reviews');
            if (!widgetDiv) return;

            // Find review elements (adjust selector based on SociableKIT's rendered HTML)
            const reviewElements = widgetDiv.querySelectorAll('.sk-google-review-card');
            if (reviewElements.length === 0) return;

            const extractedReviews = Array.from(reviewElements).map((reviewElement) => {
                // Adjust selectors based on SociableKIT's actual DOM structure
                const reviewerName = reviewElement.querySelector('.sk-reviewer-name')?.textContent || 'Anonymous';
                const ratingElement = reviewElement.querySelector('.sk-rating')?.textContent || 'No rating';
                const reviewText = reviewElement.querySelector('.sk-review-text')?.textContent || 'No review text';
                const createdTime = reviewElement.querySelector('.sk-created-time')?.textContent || 'Unknown date';

                return {
                    reviewerName,
                    rating: ratingElement,
                    reviewText,
                    createdTime,
                };
            });

            setReviews(extractedReviews);
        };

        // Poll for the widget to render (SociableKIT script might take time to load)
        const interval = setInterval(() => {
            const widgetDiv = document.querySelector('.sk-ww-google-reviews');
            if (widgetDiv && widgetDiv.children.length > 0) {
                extractReviews();
                clearInterval(interval); // Stop polling once reviews are extracted
            }
        }, 500); // Check every 500ms

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

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
                {/* Hidden widget div to let SociableKIT render reviews */}
                <div className="sk-ww-google-reviews hidden" data-embed-id="25550937"></div>

                {/* Custom rendering of reviews */}
                {reviews.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded shadow-md">
                                <p className="text-gray-800 italic">"{review.reviewText}"</p>
                                <p className="text-gray-600 mt-2">— {review.reviewerName}</p>
                                <p className="text-gray-500 text-sm">{review.rating}</p>
                                <p className="text-gray-500 text-sm">{review.createdTime}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">
                        Loading reviews... If reviews do not load, please check your internet connection.
                    </p>
                )}
            </div>
        </section>
    );
};

export default LocationReviews;