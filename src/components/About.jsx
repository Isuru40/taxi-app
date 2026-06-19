const About = () => {
    return (
        <section id="about" className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-laksiri-purple">About Us</h2>
            <p className="text-center text-gray-800 mb-12 max-w-2xl mx-auto">
                LaksiriToursKandy offers unparalleled taxi services in Kandy with a focus on safety, reliability, and customer satisfaction. Our professional drivers ensure a smooth journey, whether it’s an airport transfer, day tour, or tuk-tuk city adventure.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gray-100 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Reliable Urban Transportation</h3>
                    <p className="text-gray-800">We ensure you reach your destination quickly and safely.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Exceptional Customer Service</h3>
                    <p className="text-gray-800">Our drivers are dedicated to your comfort and satisfaction.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-laksiri-card">Convenient Booking Options</h3>
                    <p className="text-gray-800">Book your ride easily via WhatsApp or email.</p>
                </div>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
                <div className="flex flex-col items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-laksiri-purple">Ionic Video</h3>
                    <p className="text-gray-800 max-w-2xl">
                        Watch our featured video and visit the YouTube channel for more travel content from Laksiri Tours Kandy.
                    </p>
                    <a
                        href="https://www.youtube.com/@laksiritourskandy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-laksiri-purple px-6 py-3 font-semibold text-white transition hover:bg-laksiri-purple-hover"
                    >
                        Visit YouTube Channel
                    </a>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-xl bg-black aspect-video">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/iuZn3tGaF2Q"
                        title="Laksiri Tours Kandy Ionic Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
