import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-form-block fade-in-up" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Обсудить проект</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                        Напишите в Telegram, чтобы детально разобрать ваше техническое задание, рассчитать точную стоимость и запустить автоматизацию в работу.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <a
                            href="https://t.me/knrcharge"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', borderRadius: '6px' }}
                        >
                            <i className="fa-brands fa-telegram" style={{ fontSize: '1.3rem' }}></i> НАПИСАТЬ В TELEGRAM
                        </a>
                        <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                            <i className="fa-solid fa-bolt"></i> Среднее время ответа: 15 минут
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
