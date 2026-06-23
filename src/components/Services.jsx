
export default function Services() {
    const services = [
        {
            icon: 'fa-brands fa-telegram',
            title: 'Telegram-бот для бизнеса',
            price: 'от $150',
            text: 'Заявки, меню, уведомления, админка и база клиентов для услуг, студий, школ и локального бизнеса.',
            features: [
                ['Заявки и уведомления', 'Клиент оставляет заявку, администратор сразу получает ее в Telegram.'],
                ['Меню и сценарии', 'Кнопки, формы, FAQ, маршрутизация по услугам и быстрые ответы.'],
                ['База клиентов', 'Хранение контактов, статусов, истории обращений и выгрузка данных.'],
            ],
        },
        {
            icon: 'fa-solid fa-cart-shopping',
            title: 'Telegram-магазин',
            price: 'от $300',
            text: 'Каталог, корзина, заказы, оплата и админ-панель для цифровых товаров, курсов, доступов и услуг.',
            features: [
                ['Каталог и корзина', 'Категории, карточки товаров, количество, итоговая сумма и оформление заказа.'],
                ['Оплата и автовыдача', 'CryptoBot, LAVA, AAIO или ручная проверка с уведомлением администратора.'],
                ['Админ-панель', 'Добавление товаров, управление заказами, уведомления и базовая статистика.'],
            ],
        },
        {
            icon: 'fa-solid fa-chart-line',
            title: 'Парсер / мониторинг цен',
            price: 'от $250',
            text: 'Сбор данных, отслеживание конкурентов, история изменений и Telegram-уведомления по нужным условиям.',
            features: [
                ['Сбор данных', 'Товары, цены, объявления, статусы, таблицы и другие открытые данные.'],
                ['Уведомления', 'Сообщение в Telegram при изменении цены, наличии, рейтинга или статуса.'],
                ['Отчеты', 'История изменений, JSON/CSV/Google Sheets и регулярные сводки.'],
            ],
        },
        {
            icon: 'fa-solid fa-brain',
            title: 'AI-бот по базе знаний',
            price: 'от $500',
            text: 'Ассистент, который отвечает по документам, FAQ, инструкциям и внутренней базе компании.',
            features: [
                ['Ответы по документам', 'Бот ищет релевантные фрагменты и отвечает по контексту, а не случайно.'],
                ['Поддержка клиентов', 'FAQ, регламенты, инструкции, шаблоны ответов и маршрутизация вопросов.'],
                ['Интеграции', 'Google Docs, Notion, PDF, CRM, таблицы и деплой на VPS.'],
            ],
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <span className="sub-title">Service modules</span>
                    <h2>Что можно заказать</h2>
                    <p>Готовые направления, которые быстро превращаются в рабочий бот, парсер или внутренний инструмент.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card fade-in-up" style={{ transitionDelay: `${0.1 + index * 0.08}s` }} key={service.title}>
                            <div className="service-card-head">
                                <div className="service-icon"><i className={service.icon}></i></div>
                                <span className="service-price">{service.price}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                            <ul className="service-features">
                                {service.features.map(([title, description]) => (
                                    <li key={title}>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <div>
                                            <span className="feature-title">{title}</span>
                                            <p className="feature-desc">{description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
