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
                        Автоматизация,<br />
                        которая работает<br />
                        <span className="text-gradient">после оплаты</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up" style={{ transitionDelay: '0.1s' }}>
                        Собираем Telegram-магазины, парсеры, платежные сценарии и служебные боты в один управляемый контур: заявки, оплаты, выдача и отчеты без ручной рутины.
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
                            <h3>aiogram 3</h3>
                            <p>Боты, магазины, FSM</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Мониторинг и автовыдача</p>
                        </div>
                        <div className="stat-item">
                            <h3>Deploy</h3>
                            <p>Render, VPS, Docker</p>
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
