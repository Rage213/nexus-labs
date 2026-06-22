
export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-form-block contact-cta fade-in-up">
                    <span className="sub-title">Start request</span>
                    <h2>Обсудить проект</h2>
                    <p>
                        Напишите в Telegram: разберем задачу, соберем понятное ТЗ, оценим сроки и выберем самый быстрый путь к запуску.
                    </p>
                    <div className="contact-actions">
                        <a
                            href="https://t.me/knrcharge"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            <i className="fa-brands fa-telegram"></i> Написать в Telegram
                        </a>
                        <div className="response-time">
                            <i className="fa-solid fa-bolt"></i> Среднее время ответа: 15 минут
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
