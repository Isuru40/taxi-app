const CTA = ({ setShowForm }) => {
    return (
        <section className="py-16 px-4 text-center bg-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="mb-8">Experience the convenience of booking a ride with LaksiriToursKandy.</p>
            <button
                onClick={() => {
                    console.log('CTA.jsx - Book a Ride clicked, setting showForm to true');
                    setShowForm(true);
                }}
                className="bg-yellow-400 text-white px-6 py-3 rounded hover:bg-yellow-500"
            >
                Book a Ride Now
            </button>
        </section>
    );
};

export default CTA;