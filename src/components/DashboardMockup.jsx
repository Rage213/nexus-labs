import React, { useState, useEffect, useRef } from 'react';

const LOG_TEMPLATES = [
    "Aiogram: запуск Telegram-магазина прошел успешно",
    "FunPay: автоподнятие {value} лотов выполнено",
    "Digiseller: выдано {value} лицензий покупателям",
    "CryptoBot: получен платеж {value}00 руб.",
    "LAVA: статус транзакции #{order} — SUCCESS",
    "Parser: спарсено {value} карточек конкурентов",
    "System: сессия модератора #{session} активна",
    "Cloudflare: DDoS-защита работает в штатном режиме",
    "AAIO: выплата #{order} успешно проведена",
    "System: CPU - {cpu}%, RAM - {ram}%"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function DashboardMockup() {
    const [activeTab, setActiveTab] = useState('analytics');
    const [logs, setLogs] = useState([
        { time: '12:10:45', text: 'Aiogram: запуск Telegram-магазина прошел успешно' },
        { time: '12:11:02', text: 'FunPay: обнаружена смена цен у конкурента' },
        { time: '12:11:15', text: 'CryptoBot: получен платеж 1,500 руб.' },
        { time: '12:11:20', text: 'Digiseller: выдан лицензионный ключ покупателю' }
    ]);
    const consoleEndRef = useRef(null);

    // Simulated log generator
    useEffect(() => {
        const generateLog = () => {
            const now = new Date();
            const timeStr = now.toTimeString().split(' ')[0];
            const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];

            const text = template
                .replace('{value}', getRandomInt(5, 50))
                .replace('{cpu}', getRandomInt(4, 18))
                .replace('{ram}', getRandomInt(38, 44))
                .replace('{session}', getRandomInt(10, 99))
                .replace('{order}', getRandomInt(12500, 19900));

            setLogs(prev => {
                const nextLogs = [...prev, { time: timeStr, text }];
                return nextLogs.slice(-4); // Keep last 4 logs
            });
        };

        const intervalTime = getRandomInt(2500, 4500);
        const intervalId = setInterval(generateLog, intervalTime);

        return () => clearInterval(intervalId);
    }, []);

    // Auto-scroll console terminal to bottom when logs update
    useEffect(() => {
        if (consoleEndRef.current) {
            consoleEndRef.current.scrollTop = consoleEndRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="dashboard-mockup">
            {/* Sidebar */}
            <div className="dash-sidebar">
                <div className="dash-logo-icon">
                    <i className="fa-solid fa-terminal"></i>
                </div>
                <div
                    className={`dash-menu-item ${activeTab === 'analytics' ? 'active' : ''}`}
                    onClick={() => setActiveTab('analytics')}
                >
                    <i className="fa-solid fa-chart-simple"></i>
                </div>
                <div
                    className={`dash-menu-item ${activeTab === 'servers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('servers')}
                >
                    <i className="fa-solid fa-server"></i>
                </div>
                <div
                    className={`dash-menu-item ${activeTab === 'ai' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ai')}
                >
                    <i className="fa-solid fa-robot"></i>
                </div>
                <div
                    className={`dash-menu-item ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                >
                    <i className="fa-solid fa-sliders"></i>
                </div>
            </div>

            {/* Workspace Tab Contents */}
            <div className="dash-workspace">
                {activeTab === 'analytics' && (
                    <div className="dash-tab-content" id="tab-analytics">
                        <div className="dash-header">
                            <span className="dash-title">MONITOR // NEXUS_LABS</span>
                            <div className="dash-status">
                                <span className="dash-status-dot"></span> RUNNING
                            </div>
                        </div>
                        <div className="dash-grid">
                            <div className="dash-widget">
                                <div className="dash-widget-label">Обработано оплат</div>
                                <div className="dash-widget-value text-cyan">
                                    <i className="fa-solid fa-wallet"></i> 2,481
                                </div>
                            </div>
                            <div className="dash-widget">
                                <div className="dash-widget-label">Активные боты</div>
                                <div className="dash-widget-value text-violet">
                                    <i className="fa-solid fa-robot"></i> 14 / 15
                                </div>
                            </div>
                        </div>
                        {/* Live logs terminal */}
                        <div className="dash-console" ref={consoleEndRef}>
                            {logs.map((log, index) => (
                                <div key={index} className="console-line">
                                    <span>[{log.time}]</span> {log.text}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'servers' && (
                    <div className="dash-tab-content" id="tab-servers">
                        <div className="dash-header">
                            <span className="dash-title">SERVICES // INFRASTRUCTURE</span>
                            <div className="dash-status">
                                <span className="dash-status-dot"></span> SECURE
                            </div>
                        </div>
                        <div className="dash-server-list">
                            <div className="server-item">
                                <div className="server-name">
                                    <i className="fa-solid fa-message"></i> aiogram_bot.service
                                </div>
                                <div className="server-status-badge status-online">ONLINE</div>
                            </div>
                            <div className="server-item">
                                <div className="server-name">
                                    <i className="fa-solid fa-magnifying-glass"></i> funpay_monitor.service
                                </div>
                                <div className="server-status-badge status-online">ONLINE</div>
                            </div>
                            <div className="server-item">
                                <div className="server-name">
                                    <i className="fa-solid fa-sync"></i> digiseller_sync.service
                                </div>
                                <div className="server-status-badge status-idle">IDLE</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'ai' && (
                    <div className="dash-tab-content" id="tab-ai">
                        <div className="dash-header">
                            <span className="dash-title">AI ENGINE // GOOGLE</span>
                            <div className="dash-status">
                                <span className="dash-status-dot"></span> READY
                            </div>
                        </div>
                        <div className="dash-server-list">
                            <div className="server-item">
                                <div className="server-name">
                                    <i className="fa-solid fa-brain"></i> Gemini 3.5 Pro
                                </div>
                                <div className="server-status-badge status-online">ACTIVE</div>
                            </div>
                            <div className="server-item">
                                <div className="server-name">
                                    <i className="fa-solid fa-network-wired"></i> Telegram Bot API Gateway
                                </div>
                                <div className="server-status-badge status-online">OPERATIONAL</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="dash-tab-content" id="tab-settings">
                        <div className="dash-header">
                            <span className="dash-title">CONFIGURATION // SETTINGS</span>
                            <div className="dash-status">
                                <span className="dash-status-dot"></span> LOCKED
                            </div>
                        </div>
                        <div className="dash-server-list">
                            <div className="server-item">
                                <div className="server-name">Автоподнятие лотов</div>
                                <div className="server-status-badge status-online">ENABLED</div>
                            </div>
                            <div className="server-item">
                                <div className="server-name">ИИ-Автоответчик саппорта</div>
                                <div className="server-status-badge status-online">ENABLED</div>
                            </div>
                            <div className="server-item">
                                <div className="server-name">Прием платежей LAVA</div>
                                <div className="server-status-badge status-online">ACTIVE</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
