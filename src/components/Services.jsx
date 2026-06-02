import React from 'react';

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Наши Услуги</h2>
                    <p>Решения для продавцов цифровых товаров, арбитражников и авторов Telegram-каналов.</p>
                </div>
                <div className="services-grid">
                    {/* Service 1 */}
                    <div className="service-card fade-in-up" style={{ transitionDelay: '0.1s' }}>
                        <div className="service-icon"><i className="fa-brands fa-telegram"></i></div>
                        <h3>Telegram-магазины</h3>
                        <p>Полноценные шопы на Aiogram 3. Каталог, корзина, профиль, интеграция CryptoBot/LAVA, автовыдача.</p>
                        <ul className="service-features">
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Каталог и корзина</span>
                                    <p className="feature-desc">Удобный интерфейс выбора товаров с поддержкой категорий, скидок и промокодов.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Прием платежей</span>
                                    <p className="feature-desc">Автоматическая интеграция платежных шлюзов CryptoBot, LAVA, AAIO и других систем.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Автовыдача товаров</span>
                                    <p className="feature-desc">Мгновенная доставка файлов, ключей или доступов покупателю в чат сразу после оплаты.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Service 2 */}
                    <div className="service-card fade-in-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="service-icon"><i className="fa-solid fa-sliders"></i></div>
                        <h3>Скрипты для маркетплейсов</h3>
                        <p>Автоподнятие лотов, парсеры цен конкурентов, чекеры для FunPay и Digiseller.</p>
                        <ul className="service-features">
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Автоподнятие лотов</span>
                                    <p className="feature-desc">Автоматическое регулярное поднятие ваших лотов на биржах для удержания верхних позиций.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Парсеры цен</span>
                                    <p className="feature-desc">Отслеживание изменения цен конкурентов и автоматическая подстройка вашего ценника.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Чекеры аккаунтов</span>
                                    <p className="feature-desc">Автоматизированная валидация баз данных, проверка балансов и статусов аккаунтов.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Service 3 */}
                    <div className="service-card fade-in-up" style={{ transitionDelay: '0.3s' }}>
                        <div className="service-icon"><i className="fa-solid fa-code"></i></div>
                        <h3>Утилиты и парсеры</h3>
                        <p>Сбор данных, боты-модераторы, автоматизация рутинных процессов.</p>
                        <ul className="service-features">
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Сбор баз данных</span>
                                    <p className="feature-desc">Быстрый скрапинг информации с закрытых или открытых веб-ресурсов в удобном Excel/JSON формате.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Боты-модераторы</span>
                                    <p className="feature-desc">Полная автоматизация управления чатами: фильтрация спама, авто-приветствия, выдача прав.</p>
                                </div>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                                <div>
                                    <span className="feature-title">Оптимизация рутины</span>
                                    <p className="feature-desc">Замена повторяющихся ручных действий на компьютере быстрыми скриптами.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
