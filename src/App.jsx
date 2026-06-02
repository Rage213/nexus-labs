import React, { useState, useEffect } from 'react';
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
    const [scrollWidth, setScrollWidth] = useState('0%');

    // 1. Setup global scroll handlers (for progress bar and active nav links)
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            
            // Calculate scroll progress bar width
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = height > 0 ? (winScroll / height) * 100 : 0;
            setScrollWidth(progress + '%');

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

    // 3. Website copy protection and devtools blocking
    useEffect(() => {
        const preventDefault = e => e.preventDefault();
        
        document.addEventListener('contextmenu', preventDefault);
        document.addEventListener('selectstart', preventDefault);
        document.addEventListener('copy', preventDefault);

        const handleKeyDown = e => {
            // F12 (123)
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            // Ctrl+Shift+I (73), Ctrl+Shift+J (74), Ctrl+Shift+C (67)
            if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
                e.preventDefault();
                return false;
            }
            // Ctrl+U (85) (View Source)
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            // Ctrl+S (83) (Save Page)
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', preventDefault);
            document.removeEventListener('selectstart', preventDefault);
            document.removeEventListener('copy', preventDefault);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-container">
                <div className="scroll-progress-bar" id="scroll-bar" style={{ width: scrollWidth }}></div>
            </div>

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
