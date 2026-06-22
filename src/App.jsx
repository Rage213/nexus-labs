import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChat from './components/AiChat';

export default function App() {
    const [activeSection, setActiveSection] = useState('');

    // 1. Setup global scroll handlers (for active nav links)
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            
            // Find current active section
            const sections = Array.from(document.querySelectorAll('section'));
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (winScroll >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id') || '';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. Setup intersection observer for scroll-reveal animations
    useEffect(() => {
        const animElements = document.querySelectorAll('.fade-in-up, .scale-in, .reveal-left, .reveal-right');
        const observerOptions = {
            root: null,
            threshold: 0.05,
            rootMargin: '0px 0px -40px 0px'
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animElements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Layout Components */}
            <Header activeSection={activeSection} />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />

            {/* AI Assistant chat component */}
            <AiChat />
        </>
    );
}
