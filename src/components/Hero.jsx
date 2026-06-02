import React from 'react';
import DashboardMockup from './DashboardMockup';

export default function Hero({ onOrderClick }) {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="fade-in-up">
                        Автоматизация<br />
                        бизнеса и Telegram-боты<br />
                        <span className="text-gradient">под ключ</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up" style={{ transitionDelay: '0.1s' }}>
                        Пишем софт, который продает и работает за вас 24/7. Интеграция касс, автовыдача, скрипты для маркетплейсов.
                    </p>
                    <div className="hero-cta fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={(e) => {
                                // If they click on order project, we can trigger the AI chatbot to open and start the spec flow if we want!
                                // For now, let it scroll normally to contact, but we can also trigger onOrderClick.
                            }}
                        >
                            ЗАКАЗАТЬ ПРОЕКТ <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a href="#portfolio" className="btn btn-secondary">
                            НАШИ КЕЙСЫ
                        </a>
                    </div>
                    <div className="hero-stats fade-in-up" style={{ transitionDelay: '0.3s' }}>
                        <div className="stat-item">
                            <h3>Telegram-боты</h3>
                            <p>Магазины и автоподдержка</p>
                        </div>
                        <div className="stat-item">
                            <h3>Веб-парсинг</h3>
                            <p>Парсеры и мониторинг</p>
                        </div>
                        <div className="stat-item">
                            <h3>Разработка софта</h3>
                            <p>E-commerce системы</p>
                        </div>
                    </div>
                </div>

                <div className="hero-visual scale-in" style={{ transitionDelay: '0.35s' }}>
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
}
