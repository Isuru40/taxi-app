const FAQ = () => {
    return (
        <section id="faq" className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">How do I book a ride?</h3>
                    <p className="text-gray-800">Click the "Book a Ride" button, fill out the form, and submit. We’ll get back to you via email.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">What payment methods do you accept?</h3>
                    <p className="text-gray-800">We accept cash and online payments. Details will be provided upon booking confirmation.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Can I cancel my booking?</h3>
                    <p className="text-gray-800">Yes, cancellations can be made 24 hours in advance. Contact us via WhatsApp or email.</p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;