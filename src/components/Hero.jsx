import DashboardMockup from './DashboardMockup';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-kicker fade-in-up">
                        <span>Python automation studio</span>
                        <span>Telegram commerce</span>
                    </div>
                    <h1 className="fade-in-up">
                        Telegram-боты<br />
                        для бизнеса<br />
                        <span className="text-gradient">и автоматизация</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up" style={{ transitionDelay: '0.1s' }}>
                        Собираем Telegram-магазины, парсеры, AI-ассистентов и CRM-ботов: от заявки и оплаты до уведомлений, отчетов и деплоя на VPS.
                    </p>
                    <div className="hero-cta fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <a href="#contact" className="btn btn-primary">
                            Обсудить задачу <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a href="#portfolio" className="btn btn-secondary">
                            Смотреть кейсы
                        </a>
                    </div>
                    <div className="hero-stats fade-in-up" style={{ transitionDelay: '0.3s' }}>
                        <div className="stat-item">
                            <h3>1 500 ₽ / $20</h3>
                            <p>Бот для заявок и меню</p>
                        </div>
                        <div className="stat-item">
                            <h3>3-7 дней</h3>
                            <p>MVP без лишней рутины</p>
                        </div>
                        <div className="stat-item">
                            <h3>VPS</h3>
                            <p>Запуск и поддержка 24/7</p>
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
