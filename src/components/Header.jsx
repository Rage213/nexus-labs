import React, { useState } from 'react';

export default function Header({ activeSection }) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileOpen(false);
    };

    const navItems = [
        { label: 'СТЭК', id: 'about' },
        { label: 'УСЛУГИ', id: 'services' },
        { label: 'КЕЙСЫ', id: 'portfolio' },
    ];

    return (
        <header className={activeSection ? 'scrolled' : ''}>
            <div className="nav-container">
                <a href="#" className="logo" onClick={closeMobileMenu}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="NEXUS LABS" className="logo-img" />
                    <span className="logo-text">NEXUS_LABS</span>
                </a>
                <nav>
                    <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn btn-nav" onClick={closeMobileMenu}>
                                ОБСУДИТЬ ТЗ
                            </a>
                        </li>
                    </ul>
                    <div
                        className={`menu-toggle ${isMobileOpen ? 'open' : ''}`}
                        id="mobile-menu"
                        onClick={toggleMobileMenu}
                    >
                        <span
                            className="bar"
                            style={isMobileOpen ? { transform: 'rotate(-45deg) translate(-5px, 6px)' } : {}}
                        ></span>
                        <span
                            className="bar"
                            style={isMobileOpen ? { opacity: 0 } : {}}
                        ></span>
                        <span
                            className="bar"
                            style={isMobileOpen ? { transform: 'rotate(45deg) translate(-5px, -6px)' } : {}}
                        ></span>
                    </div>
                </nav>
            </div>
        </header>
    );
}
