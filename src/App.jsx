import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import LocationReviews from './components/LocationReviews';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
    const [showForm, setShowForm] = useState(false);

    console.log('App.jsx - showForm state:', showForm); // Debug log

    return (
        <Router>
            <div className="font-sans">
                <Header setShowForm={setShowForm} />
                <main className="pt-20">
                    <Hero setShowForm={setShowForm} />
                    <Services />
                    <About />
                    <LocationReviews />
                    <FAQ />
                    <CTA setShowForm={setShowForm} />
                </main>
                <Footer />
                {showForm && <BookingForm setShowForm={setShowForm} />}
            </div>
        </Router>
    );
}

export default App;