const projects = [
    {
        icon: 'fa-solid fa-bolt',
        category: 'АВТОМАТИЗАЦИЯ / ИИ',
        title: 'ИИ-Ассистент поиска клиентов',
        label: 'Telegram Userbot · Gemini',
        text: 'Мониторит фриланс-чаты, фильтрует лиды по ключевым словам и помогает быстро начинать диалог с клиентом.',
        result: 'Быстрее находить заявки и отвечать без ручного просмотра десятков чатов.',
        tags: ['Telethon', 'Gemini', 'asyncio'],
        actions: [
            { href: 'https://t.me/knrcharge', icon: 'fa-solid fa-comment-dots', label: 'Заказать похожий', primary: true },
            { icon: 'fa-solid fa-lock', label: 'Код приватный' },
        ],
    },
    {
        icon: 'fa-brands fa-telegram',
        category: 'МАГАЗИНЫ',
        title: 'Бот-магазин в Telegram',
        label: 'Telegram Bot · aiogram 3.x',
        text: 'Каталог, корзина, оформление заказа, SQLite-база и сценарии для продавцов цифровых товаров или услуг.',
        result: 'Клиент покупает внутри Telegram, администратор получает заказ без ручной переписки.',
        tags: ['aiogram 3.x', 'aiosqlite', 'FSM'],
        actions: [
            { href: 'https://t.me/nexusllabsbot', icon: 'fa-solid fa-play', label: 'Запустить демо', primary: true },
            { href: 'https://github.com/Rage213/portfolio/tree/main/tg-shop-bot', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-credit-card',
        category: 'ПЛАТЕЖИ',
        title: 'Crypto Payment Bot',
        label: 'Telegram Bot · Payments',
        text: 'Магазин цифровых товаров с крипто-оплатой, проверкой invoice и автоматической выдачей после оплаты.',
        result: 'Продажи работают 24/7: бот сам проверяет оплату и отправляет доступ покупателю.',
        tags: ['CryptoBot API', 'aiohttp', 'SQLite'],
        actions: [
            { href: 'https://t.me/nexus_pay_demo_bot', icon: 'fa-solid fa-play', label: 'Запустить демо', primary: true },
            { href: 'https://github.com/Rage213/portfolio/tree/main/crypto-payment-bot', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-chart-line',
        category: 'МОНИТОРИНГ',
        title: 'Асинхронный парсер цен',
        label: 'Parser · aiohttp + asyncio',
        text: 'Отслеживает цены конкурентов, хранит историю изменений и отправляет уведомления в Telegram.',
        result: 'Помогает вовремя менять цены, видеть рынок и не проверять сайты вручную.',
        tags: ['aiohttp', 'asyncio', 'JSON'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/price-tracker-parser', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-shield-halved',
        category: 'СКРАПИНГ',
        title: 'Обход антибот-защиты',
        label: 'Scraper · Playwright',
        text: 'Браузерная автоматизация для сложных сайтов, где обычный HTTP-запрос не подходит.',
        result: 'Сбор данных можно вести стабильнее даже на динамических страницах.',
        tags: ['Playwright', 'aiohttp', 'BeautifulSoup'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/anti-bot-scraper', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-brain',
        category: 'ИИ / ЧАТ-БОТЫ',
        title: 'AI-ассистент с RAG',
        label: 'Telegram Bot · Knowledge base',
        text: 'Отвечает по документам и базе знаний: FAQ, инструкции, регламенты, материалы компании.',
        result: 'Снижает нагрузку на поддержку и помогает клиентам получать ответы быстрее.',
        tags: ['aiogram', 'Gemini API', 'Vector search'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/rag-ai-assistant', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-robot',
        category: 'CRM / АНАЛИТИКА',
        title: 'Бот CRM-аналитики',
        label: 'Telegram Bot · CRM',
        text: 'Учет клиентов, продаж, рассылки и графики динамики прямо в Telegram.',
        result: 'Владелец видит клиентов, продажи и активность без отдельной тяжелой CRM.',
        tags: ['SQLite', 'matplotlib', 'aiogram'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/crm-analytics-bot', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-calendar-days',
        category: 'АВТОМАТИЗАЦИЯ',
        title: 'Бот автопостинга',
        label: 'Telegram Bot · Scheduler',
        text: 'Публикации по расписанию, очередь задач, медиагруппы и контроль статусов отправки.',
        result: 'Канал можно вести регулярно без ручного выхода в Telegram каждый раз.',
        tags: ['APScheduler', 'SQLAlchemy', 'aiogram'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/auto-posting-bot', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
    {
        icon: 'fa-solid fa-user-shield',
        category: 'БЕЗОПАСНОСТЬ',
        title: 'Модератор чатов',
        label: 'Telegram Bot · Security',
        text: 'Капча для новых участников, антиспам, фильтры сообщений и автоматические предупреждения.',
        result: 'Чат остается чище, а администратор тратит меньше времени на ручную модерацию.',
        tags: ['regex filters', 'aiosqlite', 'FSM'],
        actions: [
            { href: 'https://github.com/Rage213/portfolio/tree/main/chat-moderation-bot', icon: 'fa-brands fa-github', label: 'Исходный код' },
        ],
    },
];

function ProjectAction({ action }) {
    if (!action.href) {
        return (
            <span className="project-action project-action-muted">
                <i className={action.icon}></i> {action.label}
            </span>
        );
    }

    return (
        <a
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={`project-action ${action.primary ? 'project-action-primary' : ''}`}
        >
            <i className={action.icon}></i> {action.label}
        </a>
    );
}

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <span className="sub-title">Production samples</span>
                    <h2>Кейсы, которые можно адаптировать</h2>
                    <p>Не просто учебные примеры: каждый проект показывает готовую бизнес-логику, которую можно быстро переделать под клиента.</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <article className="project-card fade-in-up" style={{ transitionDelay: `${0.05 + index * 0.04}s` }} key={project.title}>
                            <div className="project-image">
                                <div className="project-mockup">
                                    <i className={project.icon}></i>
                                    <span>{project.label}</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.text}</p>
                                <div className="project-result">
                                    <i className="fa-solid fa-arrow-trend-up"></i>
                                    <span>{project.result}</span>
                                </div>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.actions.map(action => (
                                        <ProjectAction action={action} key={action.label} />
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="portfolio-footer fade-in-up">
                    <a
                        href="https://github.com/Rage213/portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        <i className="fa-brands fa-github"></i>
                        Все проекты на GitHub
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <p>
                        11 проектов с исходным кодом ·{' '}
                        <a href="https://github.com/Rage213/portfolio" target="_blank" rel="noreferrer">
                            github.com/Rage213/portfolio
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
