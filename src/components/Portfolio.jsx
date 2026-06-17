import React from 'react';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Реализованные кейсы</h2>
                    <p>Telegram-боты и инструменты автоматизации, разработанные для решения реальных бизнес-задач.</p>
                </div>
                <div className="portfolio-grid">
                    {/* Project 1 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.1s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-brands fa-telegram" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · aiogram 3.x</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">МАГАЗИНЫ</span>
                            <h3>Бот-магазин в Telegram</h3>
                            <p>Полноценный интернет-магазин внутри Telegram: корзина, каталог товаров, асинхронная БД SQLite и встроенные платежи.</p>
                            <div className="project-tags">
                                <span>aiogram 3.x</span>
                                <span>aiosqlite</span>
                                <span>FSM Context</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://t.me/nexusllabsbot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        textDecoration: 'none',
                                        color: '#fff',
                                        background: 'var(--accent-blue)',
                                        borderRadius: '4px',
                                        fontWeight: '500',
                                        transition: 'opacity 0.2s'
                                    }}
                                >
                                    <i className="fa-solid fa-play"></i> Запустить демо
                                </a>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/tg-shop-bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.15s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-credit-card" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · Payments</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">ПЛАТЕЖИ</span>
                            <h3>Crypto Payment Bot</h3>
                            <p>Магазин цифровых товаров в Telegram с автоматическим приёмом платежей в криптовалюте через CryptoBot API и моментальной выдачей.</p>
                            <div className="project-tags">
                                <span>aiogram 3.x</span>
                                <span>CryptoBot API</span>
                                <span>aiohttp</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://t.me/nexus_pay_demo_bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        textDecoration: 'none',
                                        color: '#fff',
                                        background: 'var(--accent-blue)',
                                        borderRadius: '4px',
                                        fontWeight: '500',
                                        transition: 'opacity 0.2s'
                                    }}
                                >
                                    <i className="fa-solid fa-play"></i> Запустить демо
                                </a>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/crypto-payment-bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-chart-line" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Парсер · aiohttp + asyncio</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">МОНИТОРИНГ</span>
                            <h3>Асинхронный парсер цен</h3>
                            <p>Высокопроизводительный скрапер для отслеживания цен конкурентов. Telegram-уведомления при изменении цены.</p>
                            <div className="project-tags">
                                <span>aiohttp</span>
                                <span>asyncio</span>
                                <span>Web Scraping</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/price-tracker-parser"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 4 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.25s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Скрапер · Playwright</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">СКРАПИНГ</span>
                            <h3>Обход антибот-защиты</h3>
                            <p>Продвинутый скрапер веб-ресурсов с обходом Cloudflare, CAPTCHA и полной имитацией поведения реального пользователя.</p>
                            <div className="project-tags">
                                <span>playwright</span>
                                <span>aiohttp</span>
                                <span>BeautifulSoup</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/anti-bot-scraper"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.3s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-brain" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · OpenAI RAG</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">ИИ / ЧАТ-БОТЫ</span>
                            <h3>AI-ассистент с RAG</h3>
                            <p>Умный Telegram-бот с интеграцией OpenAI API, векторной базой знаний (Chroma/Pinecone) и контекстным поиском по документам.</p>
                            <div className="project-tags">
                                <span>aiogram</span>
                                <span>OpenAI API</span>
                                <span>Vector Store</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/rag-ai-assistant"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.35s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-robot" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · CRM + Analytics</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">CRM / АНАЛИТИКА</span>
                            <h3>Бот CRM-аналитики</h3>
                            <p>Telegram-бот для управления продажами: учёт клиентов, отчёты по сделкам и графики динамики прямо в чате.</p>
                            <div className="project-tags">
                                <span>aiogram</span>
                                <span>SQLite</span>
                                <span>matplotlib</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/crm-analytics-bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 7 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.4s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-calendar-days" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · Scheduler</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">АВТОМАТИЗАЦИЯ</span>
                            <h3>Бот автопостинга</h3>
                            <p>Планировщик публикаций в Telegram-каналы по расписанию. Поддержка медиагрупп, очередей задач и работы по расписанию.</p>
                            <div className="project-tags">
                                <span>aiogram 3.x</span>
                                <span>APScheduler</span>
                                <span>SQLAlchemy</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/auto-posting-bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 8 */}
                    <div className="project-card fade-in-up" style={{ transitionDelay: '0.45s' }}>
                        <div className="project-image">
                            <div className="project-mockup">
                                <i className="fa-solid fa-user-shield" style={{ color: 'var(--accent-blue)', fontSize: '2rem' }}></i>
                                <span>Telegram Bot · Security</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">БЕЗОПАСНОСТЬ</span>
                            <h3>Модератор чатов</h3>
                            <p>Бот модерации чатов с капчей для новых участников, защитой от спама и фильтрацией сообщений по регулярным выражениям.</p>
                            <div className="project-tags">
                                <span>aiogram 3.x</span>
                                <span>aiosqlite</span>
                                <span>regex filters</span>
                            </div>
                            <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <a
                                    href="https://github.com/Rage213/portfolio/tree/main/chat-moderation-bot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-secondary"
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.5rem 1rem',
                                        flex: 1,
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'rgba(255, 255, 255, 0.02)',
                                        textDecoration: 'none',
                                        color: 'var(--text-primary)',
                                        borderRadius: '4px',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i> Исходный код
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* View All Projects CTA */}
                <div className="fade-in-up" style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="https://github.com/Rage213/portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', padding: '0.85rem 2rem' }}
                    >
                        <i className="fa-brands fa-github"></i>
                        Все проекты на GitHub
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                    </a>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        11 проектов с исходным кодом ·{' '}
                        <a
                            href="https://github.com/Rage213/portfolio"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
                        >
                            github.com/Rage213/portfolio
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
