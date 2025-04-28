const CTA = ({ setShowForm }) => {
    return (
        <section className="py-16 px-4 text-center bg-laksiri-purple text-white">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="mb-8">Experience the convenience of booking a ride with LaksiriToursKandy.</p>
            <button
                onClick={() => {
                    setShowForm(true);
                }}
                className="bg-white text-laksiri-purple px-6 py-3 rounded hover:bg-gray-100"
            >
                Book a Ride Now
            </button>
        </section>
    );
};

export default CTA;