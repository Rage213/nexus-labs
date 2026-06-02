import React from 'react';

export default function About() {
    return (
        <>
            {/* Infrastructure / Stack Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <h2>Инфраструктура и стек</h2>
                        <p>Используем современные технологии для разработки производительного софта.</p>
                    </div>
                    <div className="stack-grid">
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.1s' }}>
                            <h3><i className="fa-solid fa-cubes"></i> Автоматизация</h3>
                            <div className="stack-tags">
                                <span>Request Queues</span>
                                <span>Task Scheduler</span>
                                <span>Playwright API</span>
                                <span>Selenium Automation</span>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.2s' }}>
                            <h3><i className="fa-solid fa-server"></i> Хостинг и CI/CD</h3>
                            <div className="stack-tags">
                                <span>GitHub Pages</span>
                                <span>GitHub Actions</span>
                                <span>Cloudflare CDN</span>
                                <span>Railway App</span>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.3s' }}>
                            <h3><i className="fa-solid fa-brain"></i> ИИ API и Модели</h3>
                            <div className="stack-tags">
                                <span>Google Gemini 3.5</span>
                                <span>Gemini 3.1 Pro</span>
                                <span>Google AI Studio</span>
                                <span>ProxyAPI Gateway</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="about-section">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <h2>Почему выбирают нас</h2>
                        <p>Создаем надежные решения с фокусом на результат и стабильность.</p>
                    </div>
                    <div className="stack-grid">
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.1s' }}>
                            <h3><i className="fa-solid fa-circle-check"></i> Без воды</h3>
                            <div className="stack-tags">
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', textTransform: 'none' }}>
                                    Строгое соблюдение ТЗ и сроков без лишней бюрократии.
                                </p>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.2s' }}>
                            <h3><i className="fa-solid fa-rocket"></i> Быстрый деплой</h3>
                            <div className="stack-tags">
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', textTransform: 'none' }}>
                                    Помогаем с выбором хостинга и установкой софта на сервер под ключ.
                                </p>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.3s' }}>
                            <h3><i className="fa-solid fa-code-compare"></i> Чистый код</h3>
                            <div className="stack-tags">
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontFamily: 'var(--font-body)', textTransform: 'none' }}>
                                    Масштабируемая архитектура, готовая к развитию и обновлению.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
