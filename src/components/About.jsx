
export default function About() {
    const processSteps = [
        ['01', 'Разбор задачи', 'Коротко фиксируем цель, сценарии, роли пользователей и что должно происходить после заявки или оплаты.'],
        ['02', 'Прототип в Telegram', 'Собираем рабочую логику: кнопки, формы, база, уведомления, админские команды и тестовые данные.'],
        ['03', 'Интеграции', 'Подключаем платежи, таблицы, CRM, AI API, парсеры, вебхуки или другие сервисы под задачу.'],
        ['04', 'Запуск на VPS', 'Деплоим, проверяем логи, добавляем автозапуск и передаем понятную инструкцию по управлению.'],
    ];

    return (
        <>
            <section className="process-section">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="sub-title">Delivery path</span>
                        <h2>Как запускаем проект</h2>
                        <p>Без длинной бюрократии: сначала рабочая логика, потом интеграции, тесты и стабильный запуск.</p>
                    </div>
                    <div className="process-grid">
                        {processSteps.map(([number, title, text], index) => (
                            <div className="process-step fade-in-up" style={{ transitionDelay: `${0.08 + index * 0.08}s` }} key={title}>
                                <span>{number}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure / Stack Section */}
            <section id="about" className="about-section">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="sub-title">Stack map</span>
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
                        <span className="sub-title">Delivery rules</span>
                        <h2>Почему выбирают нас</h2>
                        <p>Создаем надежные решения с фокусом на результат и стабильность.</p>
                    </div>
                    <div className="stack-grid">
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.1s' }}>
                            <h3><i className="fa-solid fa-circle-check"></i> Без воды</h3>
                            <div className="stack-tags">
                                <p className="stack-text">
                                    Строгое соблюдение ТЗ и сроков без лишней бюрократии.
                                </p>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.2s' }}>
                            <h3><i className="fa-solid fa-rocket"></i> Быстрый деплой</h3>
                            <div className="stack-tags">
                                <p className="stack-text">
                                    Помогаем с выбором хостинга и установкой софта на сервер под ключ.
                                </p>
                            </div>
                        </div>
                        <div className="stack-category fade-in-up" style={{ transitionDelay: '0.3s' }}>
                            <h3><i className="fa-solid fa-code-compare"></i> Чистый код</h3>
                            <div className="stack-tags">
                                <p className="stack-text">
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
