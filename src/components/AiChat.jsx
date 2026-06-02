import React, { useState, useEffect, useRef } from 'react';

const QA_DATABASE = [
    {
        keys: ['цена', 'стоимость', 'прайс', 'сколько', 'дорого', 'дешево', 'руб', 'доллар', 'бакс'],
        answer: 'Цены на разработку начинаются от **1 000 руб.** за простые парсеры и от **1 500 руб.** за функциональные Telegram-боты. Для точного расчета вы можете запустить интерактивный конструктор, нажав на кнопку **«🤖 Заказать бота»** или **«📊 Написать парсер»** ниже!'
    },
    {
        keys: ['срок', 'время', 'быстро', 'когда', 'дней', 'день', 'неделя'],
        answer: 'Обычно разработка простого скрипта занимает **2–4 дня**, а полноценного бот-магазина с автовыдачей и админкой — **5–10 дней**. Мы всегда прописываем дедлайны в ТЗ.'
    },
    {
        keys: ['стек', 'язык', 'технологии', 'python', 'питон', 'база', 'бд', 'sql', 'gemini'],
        answer: 'Наш основной стек — **Python** (фреймворк `Aiogram 3` для Telegram-ботов, библиотеки `Playwright/Selenium` для автоматизации веб-действий). Базы данных — PostgreSQL и SQLite. Интегрируем ИИ-модели Gemini и OpenAI.'
    },
    {
        keys: ['контакт', 'написать', 'связь', 'админ', 'владелец', 'telegram', 'телега', 'тг'],
        answer: 'Вы можете связаться с основателем студии напрямую в Telegram: **[@knrcharge](https://t.me/knrcharge)**. Отвечаем в течение 15 минут!'
    },
    {
        keys: ['привет', 'здравствуйте', 'ку', 'добрый', 'hello', 'hi'],
        answer: 'Привет! Я виртуальный ассистент Nexus Labs. Помогу составить техническое задание, узнать стоимость софта или отвечу на ваши вопросы. Попробуйте нажать кнопку-подсказку ниже!'
    }
];

// Chips definition
const IDLE_CHIPS = [
    { label: '🤖 Заказать бота', action: 'order-bot' },
    { label: '📊 Написать парсер', action: 'order-parser' },
    { label: '💰 Узнать цены', action: 'view-prices' },
    { label: '❓ Задать вопрос', action: 'ask-question' }
];

const BOT_TYPE_CHIPS = [
    { label: '🏪 Магазин цифровых товаров', val: 'Магазин автовыдачи' },
    { label: '📞 Бот техподдержки клиентов', val: 'Бот техподдержки' },
    { label: '📣 Бот-модератор чатов/каналов', val: 'Бот-модератор' },
    { label: '⚙️ Индивидуальный заказ', val: 'Индивидуальный бот' },
    { label: '❌ Отмена', action: 'cancel' }
];

const PARSER_TYPE_CHIPS = [
    { label: '🛍️ Сбор цен маркетплейсов', val: 'Сбор цен и товаров' },
    { label: '📈 Мониторинг лотов (FunPay/etc)', val: 'Мониторинг лотов' },
    { label: '👥 Сбор контактов/лидов (парсер)', val: 'Сбор контактов' },
    { label: '⚙️ Индивидуальный скрипт', val: 'Индивидуальный парсер' },
    { label: '❌ Отмена', action: 'cancel' }
];

const BOT_FEATURE_CHIPS = [
    { label: '💳 Оплаты (CryptoBot/LAVA)', val: 'Прием платежей' },
    { label: '📦 Автовыдача товаров', val: 'Автовыдача' },
    { label: '🗄️ База данных пользователей', val: 'База данных' },
    { label: '🖥️ Админ-панель / WebApp', val: 'Админ-панель' },
    { label: '✅ Все выбрал', action: 'features-done' },
    { label: '❌ Отмена', action: 'cancel' }
];

const PARSER_FEATURE_CHIPS = [
    { label: '🔄 Обход Cloudflare/DDoS', val: 'Обход защит' },
    { label: '📈 Выгрузка в Excel/Google Sheets', val: 'Экспорт Excel' },
    { label: '🔔 Уведомления в Telegram', val: 'Уведомления в ТГ' },
    { label: '⏱️ Работа по таймеру 24/7', val: 'Авто-таймер' },
    { label: '✅ Все выбрал', action: 'features-done' },
    { label: '❌ Отмена', action: 'cancel' }
];

const DEADLINE_CHIPS = [
    { label: '🔥 Срочно (1-3 дня)', val: 'Срочно (1-3 дня)' },
    { label: '⏳ Стандартно (до 7 дней)', val: 'Стандартно (до 7 дней)' },
    { label: '📅 Не к спеху', val: 'Не к спеху' },
    { label: '❌ Отмена', action: 'cancel' }
];

const SUMMARY_CHIPS = [
    { label: '🔄 Собрать новое ТЗ', action: 'restart' },
    { label: '❌ Закрыть чат', action: 'close' }
];

export default function AiChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentState, setCurrentState] = useState('idle');
    const [tzData, setTzData] = useState({
        type: '',
        subType: '',
        features: [],
        deadline: '',
        estimateMin: 0,
        estimateMax: 0
    });

    const [messages, setMessages] = useState([
        {
            id: 'init',
            sender: 'agent',
            text: 'Привет! Я ИИ-ассистент студии **Nexus Labs**. Помогу составить техническое задание (ТЗ) для вашего проекта, рассчитать стоимость разработки или ответить на интересующие вопросы. Чем могу помочь?',
            isHtml: false
        }
    ]);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Scroll to bottom helper
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Handle opening chat window
    const handleBubbleClick = () => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    // Helper to simulate agent typing delay and then append message
    const speak = (text, delay = 600, isHtml = false, callback = null) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                { id: Date.now().toString(), sender: 'agent', text, isHtml }
            ]);
            if (callback) callback();
        }, delay);
    };

    // Calculate budget estimation based on tzData
    const calculateEstimate = (updatedTz) => {
        let baseMin = 1000;
        let baseMax = 1500;

        if (updatedTz.type === 'Telegram-бот') {
            baseMin = 1500;
            baseMax = 2500;
            if (updatedTz.subType && updatedTz.subType.includes('Магазин')) {
                baseMin += 500;
                baseMax += 1000;
            }
        }

        updatedTz.features.forEach(() => {
            baseMin += 200;
            baseMax += 400;
        });

        if (updatedTz.deadline && updatedTz.deadline.includes('Срочно')) {
            baseMin += 300;
            baseMax += 500;
        }

        return { min: baseMin, max: baseMax };
    };

    const compileMarkdownTz = (data) => {
        const featuresText = data.features.length > 0 ? data.features.join(', ') : 'Не выбрано';
        return `📋 ТЕХНИЧЕСКОЕ ЗАДАНИЕ // NEXUS LABS\n` +
               `▪️ Тип проекта: ${data.type}\n` +
               `▪️ Направление: ${data.subType}\n` +
               `▪️ Функции: ${featuresText}\n` +
               `▪️ Срок сдачи: ${data.deadline}\n` +
               `▪️ Примерный бюджет: ${data.estimateMin} - ${data.estimateMax} руб.`;
    };

    const handleCopyTz = (data) => {
        const md = compileMarkdownTz(data);
        navigator.clipboard.writeText(md).then(() => {
            const btn = document.getElementById('btn-chat-copy');
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-check"></i> ТЗ СКОПИРОВАНО!`;
                setTimeout(() => {
                    btn.innerHTML = `<i class="fa-solid fa-copy"></i> СКОПИРОВАТЬ ТЗ`;
                }, 2000);
            }
        });
    };

    const handleSendTzToTelegram = (data) => {
        const md = compileMarkdownTz(data);
        const textForUrl = encodeURIComponent(`Привет! Я составил ТЗ на сайте:\n\n${md}`);
        window.open(`https://t.me/knrcharge?text=${textForUrl}`, '_blank');
    };

    // Interactive chips handler
    const handleChipAction = (chip) => {
        // Appending user message
        if (chip.action !== 'close') {
            setMessages(prev => [
                ...prev,
                { id: Date.now().toString(), sender: 'user', text: chip.label, isHtml: false }
            ]);
        }

        // Cancel flow
        if (chip.action === 'cancel') {
            setTzData({
                type: '',
                subType: '',
                features: [],
                deadline: '',
                estimateMin: 0,
                estimateMax: 0
            });
            setCurrentState('idle');
            speak('Составление ТЗ отменено. Чем еще могу помочь?');
            return;
        }

        // Restart flow
        if (chip.action === 'restart') {
            const newTz = {
                type: 'Telegram-бот',
                subType: '',
                features: [],
                deadline: '',
                estimateMin: 0,
                estimateMax: 0
            };
            setTzData(newTz);
            setCurrentState('tz-type-bot');
            speak('Давайте соберем ТЗ для вашего **Telegram-бота**. Выберите категорию бота:');
            return;
        }

        // Close flow
        if (chip.action === 'close') {
            setIsOpen(false);
            return;
        }

        // State Machine Flow
        if (currentState === 'idle') {
            if (chip.action === 'order-bot') {
                setTzData(prev => ({ ...prev, type: 'Telegram-бот' }));
                setCurrentState('tz-type-bot');
                speak('Давайте соберем ТЗ для вашего **Telegram-бота**. Выберите категорию бота:');
            } else if (chip.action === 'order-parser') {
                setTzData(prev => ({ ...prev, type: 'Веб-парсер' }));
                setCurrentState('tz-type-parser');
                speak('Давайте соберем ТЗ для вашего **парсер/скрипта**. Какая основная задача софта?');
            } else if (chip.action === 'view-prices') {
                speak(
                    'Наши цены:\n- Простые парсеры: от **1 000 руб.**\n- Скрипты автоматизации: от **1 200 руб.**\n- Telegram-боты: от **1 500 руб.**\n- Сложные e-commerce экосистемы под ключ: расчет индивидуально.\n\nКакая разработка вас интересует?'
                );
            } else if (chip.action === 'ask-question') {
                speak('Спрашивайте! Напишите свой вопрос в чат, и я сразу на него отвечу. Либо нажмите на одну из кнопок заказа выше.');
            }
        } else if (currentState === 'tz-type-bot') {
            setTzData(prev => ({ ...prev, subType: chip.val }));
            setCurrentState('tz-features-bot');
            speak('Отлично! Теперь выберите, какие **функции и интеграции** необходимы (выберите несколько и затем нажмите «✅ Все выбрал»):');
        } else if (currentState === 'tz-type-parser') {
            setTzData(prev => ({ ...prev, subType: chip.val }));
            setCurrentState('tz-features-parser');
            speak('Отлично! Какие **возможности** потребуются парсеру? (выберите несколько и затем нажмите «✅ Все выбрал»):');
        } else if (currentState === 'tz-features-bot' || currentState === 'tz-features-parser') {
            if (chip.action === 'features-done') {
                setCurrentState('tz-deadline');
                speak('И последнее — укажите желаемые **сроки** сдачи проекта:');
            } else {
                setTzData(prev => {
                    const exists = prev.features.includes(chip.val);
                    const features = exists
                        ? prev.features.filter(f => f !== chip.val)
                        : [...prev.features, chip.val];
                    return { ...prev, features };
                });
            }
        } else if (currentState === 'tz-deadline') {
            const finalDeadline = chip.val;
            const updatedTz = { ...tzData, deadline: finalDeadline };
            const estimates = calculateEstimate(updatedTz);
            updatedTz.estimateMin = estimates.min;
            updatedTz.estimateMax = estimates.max;
            
            setTzData(updatedTz);
            setCurrentState('tz-summary');

            // Render summary card as custom HTML
            const summaryHtml = `
                <div style="font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.5; background: rgba(5, 5, 8, 0.9); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; color: var(--text-primary); margin-bottom: 12px;">
                     <div style="color: var(--accent-violet); font-weight: 700; margin-bottom: 6px; border-bottom: 1px solid rgba(139,92,246,0.2); padding-bottom: 4px;">📋 ТЗ СФОРМИРОВАНО</div>
                     <div>• <strong>Тип:</strong> ${updatedTz.type} (${updatedTz.subType})</div>
                     <div>• <strong>Функции:</strong> ${updatedTz.features.length > 0 ? updatedTz.features.join(', ') : 'Базовые'}</div>
                     <div>• <strong>Срок:</strong> ${updatedTz.deadline}</div>
                     <div style="margin-top: 6px; border-top: 1px dashed var(--border-color); padding-top: 6px; color: var(--accent-cyan); font-weight: 700;">• Оценка: ~${updatedTz.estimateMin} - ${updatedTz.estimateMax} руб.</div>
                </div>
            `;
            
            speak(summaryHtml, 800, true, () => {
                // Render action buttons directly inside React messages flow
                setMessages(prev => [
                    ...prev,
                    {
                        id: 'cta-' + Date.now().toString(),
                        sender: 'agent',
                        isHtml: true,
                        text: 'action-buttons', // Placeholder for rendering inline custom buttons
                        data: updatedTz
                    }
                ]);
                speak('Готово! Вы можете скопировать сгенерированное ТЗ или сразу отправить его мне в Telegram для детального обсуждения. Жду вас в ЛС! 🚀', 600);
            });
        }
    };

    // Custom Q&A search and typing simulation
    const handleCustomInputSubmit = () => {
        const text = inputValue.trim();
        if (!text) return;

        setInputValue('');
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text, isHtml: false }]);

        if (currentState !== 'idle' && currentState !== 'tz-summary') {
            speak('Пожалуйста, используйте кнопки-подсказки выше для завершения опроса ТЗ или нажмите **«❌ Отмена»**.');
            return;
        }

        const cleanText = text.toLowerCase();
        let matchedAnswer = null;

        for (let qa of QA_DATABASE) {
            const matched = qa.keys.some(key => cleanText.includes(key));
            if (matched) {
                matchedAnswer = qa.answer;
                break;
            }
        }

        if (matchedAnswer) {
            speak(matchedAnswer);
        } else {
            speak('Интересный вопрос! Я пока учусь, поэтому могу не знать точного ответа. Напишите создателю студии напрямую в Telegram: **[@knrcharge](https://t.me/knrcharge)** — он ответит на любой технический вопрос.');
        }
    };

    // Get suggestion chips to render
    const getChips = () => {
        switch (currentState) {
            case 'idle':
                return IDLE_CHIPS;
            case 'tz-type-bot':
                return BOT_TYPE_CHIPS;
            case 'tz-type-parser':
                return PARSER_TYPE_CHIPS;
            case 'tz-features-bot':
                return BOT_FEATURE_CHIPS;
            case 'tz-features-parser':
                return PARSER_FEATURE_CHIPS;
            case 'tz-deadline':
                return DEADLINE_CHIPS;
            case 'tz-summary':
                return SUMMARY_CHIPS;
            default:
                return IDLE_CHIPS;
        }
    };

    // Format simple markdown helper
    const formatText = (text) => {
        // Simple markdown bold formatting **text** -> <strong>text</strong>
        // And inline markdown links [text](url) -> <a href="url" target="_blank">text</a>
        let formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noreferrer" class="text-cyan">$1</a>');
        return formatted;
    };

    return (
        <>
            {/* AI Chat Bubble */}
            <div id="ai-chat-bubble" className="ai-chat-bubble" onClick={handleBubbleClick}>
                <div className="ai-bubble-pulse"></div>
                <i className="fa-solid fa-robot"></i>
                <span className="ai-bubble-label">ИИ-Ассистент</span>
            </div>

            {/* AI Chat Window */}
            <div className={`ai-chat-window ${isOpen ? 'active' : ''}`}>
                {/* Header */}
                <div className="ai-chat-header">
                    <div className="ai-header-info">
                        <div className="ai-avatar-icon">🤖</div>
                        <div>
                            <div className="ai-agent-name">NEXUS AI</div>
                            <div className="ai-agent-status">
                                <span className="status-dot"></span> Online
                            </div>
                        </div>
                    </div>
                    <button id="ai-chat-close" className="ai-close-btn" onClick={() => setIsOpen(false)}>
                        &times;
                    </button>
                </div>

                {/* Messages Area */}
                <div className="ai-chat-messages" id="ai-messages" ref={messagesEndRef}>
                    {messages.map(msg => {
                        if (msg.text === 'action-buttons') {
                            return (
                                <div key={msg.id} className="ai-message agent" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                                    <div className="chat-cta-container">
                                        <button
                                            className="chat-btn chat-btn-primary"
                                            onClick={() => handleSendTzToTelegram(msg.data)}
                                        >
                                            <i className="fa-brands fa-telegram"></i> ОТПРАВИТЬ РАЗРАБОТЧИКУ
                                        </button>
                                        <button
                                            className="chat-btn chat-btn-secondary"
                                            id="btn-chat-copy"
                                            onClick={() => handleCopyTz(msg.data)}
                                        >
                                            <i className="fa-solid fa-copy"></i> СКОПИРОВАТЬ ТЗ
                                        </button>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={msg.id}
                                className={`ai-message ${msg.sender}`}
                                dangerouslySetInnerHTML={{ __html: msg.isHtml ? msg.text : formatText(msg.text) }}
                            />
                        );
                    })}

                    {isTyping && (
                        <div className="ai-message agent typing-indicator" id="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                </div>

                {/* Suggestion Chips */}
                <div className="ai-chat-suggestions" id="ai-suggestions">
                    {getChips().map((chip, idx) => {
                        const isSelected =
                            (currentState === 'tz-features-bot' || currentState === 'tz-features-parser') &&
                            tzData.features.includes(chip.val);

                        return (
                            <button
                                key={idx}
                                className="ai-chip"
                                style={
                                    isSelected
                                        ? {
                                              background: 'rgba(6, 182, 212, 0.15)',
                                              borderColor: 'rgba(6, 182, 212, 0.5)'
                                          }
                                        : {}
                                }
                                onClick={() => handleChipAction(chip)}
                            >
                                {isSelected ? `✓ ${chip.label}` : chip.label}
                            </button>
                        );
                    })}
                </div>

                {/* Input Footer */}
                <div className="ai-chat-footer">
                    <input
                        ref={inputRef}
                        type="text"
                        id="ai-input"
                        placeholder="Введите ваше сообщение..."
                        autoComplete="off"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyPress={e => {
                            if (e.key === 'Enter') handleCustomInputSubmit();
                        }}
                    />
                    <button id="ai-send-btn" className="ai-send-btn" onClick={handleCustomInputSubmit}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
