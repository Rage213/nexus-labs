// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    
    // Animate hamburger menu bars
    const bars = mobileMenu.querySelectorAll('.bar');
    if (mobileMenu.classList.contains('open')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('open');
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Cache DOM references for scroll handler (avoid repeated queries)
const _sections = Array.from(document.querySelectorAll('section'));
const _navItems = Array.from(document.querySelectorAll('.nav-link'));

// --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll('.fade-in-up, .scale-in, .reveal-left, .reveal-right');
    
    const observerOptions = {
        root: null,
        threshold: 0.05, // Trigger slightly earlier for a faster, smoother feel
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, observerOptions);
    
    animElements.forEach(element => {
        observer.observe(element);
    });
});

// --- SCROLL EFFECTS (PROGRESS BAR, BLUR HEADER, NAV ACTIVE) ---
const scrollBar = document.getElementById('scroll-bar');
const headerElement = document.querySelector('header');

// Single optimised scroll handler — passive:true lets browser scroll without waiting for JS
let _scrollRafPending = false;
window.addEventListener('scroll', () => {
    if (_scrollRafPending) return;
    _scrollRafPending = true;
    requestAnimationFrame(() => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;

        // 1. Scroll Progress Bar
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollBar) {
            scrollBar.style.width = (height > 0 ? (winScroll / height) * 100 : 0) + '%';
        }

        // 2. Header blur on scroll
        if (headerElement) {
            headerElement.classList.toggle('scrolled', winScroll > 30);
        }

        // 3. Active nav link
        let current = '';
        _sections.forEach(section => {
            if (winScroll >= section.offsetTop - section.clientHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        _navItems.forEach(item => {
            const href = item.getAttribute('href');
            item.classList.toggle('active', href && href.slice(1) === current);
        });

        _scrollRafPending = false;
    });
}, { passive: true });

// --- СИМУЛЯЦИЯ ЖИВЫХ ЛОГОВ ДАШБОРДА ---
const consoleTerminal = document.getElementById('console-terminal');
const logTemplates = [
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

function generateSimulatedLog() {
    if (!consoleTerminal) return;
    
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];
    const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
    
    let text = template
        .replace('{value}', getRandomInt(5, 50))
        .replace('{cpu}', getRandomInt(4, 18))
        .replace('{ram}', getRandomInt(38, 44))
        .replace('{session}', getRandomInt(10, 99))
        .replace('{order}', getRandomInt(12500, 19900));
        
    const newLine = document.createElement('div');
    newLine.className = 'console-line';
    newLine.innerHTML = `<span>[${time}]</span> ${text}`;
    
    consoleTerminal.appendChild(newLine);
    
    // Auto-scroll to bottom
    consoleTerminal.scrollTop = consoleTerminal.scrollHeight;
    
    // Maintain terminal logs length (keep 4 lines)
    if (consoleTerminal.children.length > 4) {
        consoleTerminal.removeChild(consoleTerminal.children[0]);
    }
}

// Start log generator
if (consoleTerminal) {
    setInterval(generateSimulatedLog, getRandomInt(2500, 4500));
}

// --- INTERACTIVE DASHBOARD TAB SWITCHING ---
const dashMenuItems = document.querySelectorAll('.dash-menu-item');
const dashTabContents = document.querySelectorAll('.dash-tab-content');

dashMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-tab');
        if (!targetTab) return;
        
        // Update active class on menu items
        dashMenuItems.forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
        
        // Switch tab contents visibility
        dashTabContents.forEach(tab => {
            if (tab.getAttribute('id') === `tab-${targetTab}`) {
                tab.classList.remove('hidden');
            } else {
                tab.classList.add('hidden');
            }
        });
    });
});

// --- AI CHAT AGENT & ТЗ BUILDER LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.getElementById('ai-chat-bubble');
    const chatWindow = document.getElementById('ai-chat-window');
    const chatClose = document.getElementById('ai-chat-close');
    const chatMessages = document.getElementById('ai-messages');
    const chatSuggestions = document.getElementById('ai-suggestions');
    const chatInput = document.getElementById('ai-input');
    const chatSendBtn = document.getElementById('ai-send-btn');

    if (!chatBubble || !chatWindow) return;

    // Toggle Chat Window
    chatBubble.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
            scrollToBottom();
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // Chat States and Data
    let currentState = 'idle'; // 'idle', 'tz-type-bot', 'tz-type-parser', 'tz-features-bot', 'tz-features-parser', 'tz-deadline', 'tz-summary'
    let tzData = {
        type: '',
        subType: '',
        features: [],
        deadline: '',
        estimateMin: 0,
        estimateMax: 0
    };

    // Keyword database for general queries
    const qaDatabase = [
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

    // Main chips configs
    const idleChips = [
        { label: '🤖 Заказать бота', action: 'order-bot' },
        { label: '📊 Написать парсер', action: 'order-parser' },
        { label: '💰 Узнать цены', action: 'view-prices' },
        { label: '❓ Задать вопрос', action: 'ask-question' }
    ];

    const botTypeChips = [
        { label: '🏪 Магазин цифровых товаров', val: 'Магазин автовыдачи' },
        { label: '📞 Бот техподдержки клиентов', val: 'Бот техподдержки' },
        { label: '📣 Бот-модератор чатов/каналов', val: 'Бот-модератор' },
        { label: '⚙️ Индивидуальный заказ', val: 'Индивидуальный бот' },
        { label: '❌ Отмена', action: 'cancel' }
    ];

    const parserTypeChips = [
        { label: '🛍️ Сбор цен маркетплейсов', val: 'Сбор цен и товаров' },
        { label: '📈 Мониторинг лотов (FunPay/etc)', val: 'Мониторинг лотов' },
        { label: '👥 Сбор контактов/лидов (парсер)', val: 'Сбор контактов' },
        { label: '⚙️ Индивидуальный скрипт', val: 'Индивидуальный парсер' },
        { label: '❌ Отмена', action: 'cancel' }
    ];

    const botFeatureChips = [
        { label: '💳 Оплаты (CryptoBot/LAVA)', val: 'Прием платежей' },
        { label: '📦 Автовыдача товаров', val: 'Автовыдача' },
        { label: '🗄️ База данных пользователей', val: 'База данных' },
        { label: '🖥️ Админ-панель / WebApp', val: 'Админ-панель' },
        { label: '✅ Все выбрал', action: 'features-done' },
        { label: '❌ Отмена', action: 'cancel' }
    ];

    const parserFeatureChips = [
        { label: '🔄 Обход Cloudflare/DDoS', val: 'Обход защит' },
        { label: '📈 Выгрузка в Excel/Google Sheets', val: 'Экспорт Excel' },
        { label: '🔔 Уведомления в Telegram', val: 'Уведомления в ТГ' },
        { label: '⏱️ Работа по таймеру 24/7', val: 'Авто-таймер' },
        { label: '✅ Все выбрал', action: 'features-done' },
        { label: '❌ Отмена', action: 'cancel' }
    ];

    const deadlineChips = [
        { label: '🔥 Срочно (1-3 дня)', val: 'Срочно (1-3 дня)' },
        { label: '⏳ Стандартно (до 7 дней)', val: 'Стандартно (до 7 дней)' },
        { label: '📅 Не к спеху', val: 'Не к спеху' },
        { label: '❌ Отмена', action: 'cancel' }
    ];

    const summaryChips = [
        { label: '🔄 Собрать новое ТЗ', action: 'restart' },
        { label: '❌ Закрыть чат', action: 'close' }
    ];

    // Helper functions
    function scrollToBottom() {
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 50);
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'ai-message agent typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatMessages.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    function formatText(text) {
        // Simple markdown formatter (**text** -> <strong>text</strong>)
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    function appendMessage(sender, text, isHtml = false) {
        removeTypingIndicator();
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}`;
        
        if (isHtml) {
            messageDiv.innerHTML = text;
        } else {
            messageDiv.innerHTML = formatText(text);
        }
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function speak(text, delay = 600, callback = null) {
        showTypingIndicator();
        setTimeout(() => {
            appendMessage('agent', text);
            if (callback) callback();
        }, delay);
    }

    function setChips(chips) {
        chatSuggestions.innerHTML = '';
        chips.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'ai-chip';
            
            // Check if this chip is currently selected in features state
            if ((currentState === 'tz-features-bot' || currentState === 'tz-features-parser') && tzData.features.includes(c.val)) {
                btn.textContent = `✓ ${c.label}`;
                btn.style.background = 'rgba(6, 182, 212, 0.15)';
                btn.style.borderColor = 'rgba(6, 182, 212, 0.5)';
            } else {
                btn.textContent = c.label;
            }

            btn.addEventListener('click', () => handleChipAction(c));
            chatSuggestions.appendChild(btn);
        });
    }

    // Logic Handlers
    function handleChipAction(chip) {
        // Print user choice
        if (chip.action !== 'close') {
            appendMessage('user', chip.label);
        }

        // Handle cancellations
        if (chip.action === 'cancel') {
            resetTz();
            speak('Составление ТЗ отменено. Чем еще могу помочь?', 500, () => {
                currentState = 'idle';
                setChips(idleChips);
            });
            return;
        }

        // Handle restart
        if (chip.action === 'restart') {
            resetTz();
            startTzFlow('order-bot'); // restart as bot
            return;
        }

        // Handle close
        if (chip.action === 'close') {
            chatWindow.classList.remove('active');
            return;
        }

        // Flow State Machine
        if (currentState === 'idle') {
            if (chip.action === 'order-bot' || chip.action === 'order-parser') {
                startTzFlow(chip.action);
            } else if (chip.action === 'view-prices') {
                speak('Наши цены:\n- Простые парсеры: от **1 000 руб.**\n- Скрипты автоматизации: от **1 200 руб.**\n- Telegram-боты: от **1 500 руб.**\n- Сложные e-commerce экосистемы под ключ: расчет индивидуально.\n\nКакая разработка вас интересует?', 800, () => {
                    setChips(idleChips);
                });
            } else if (chip.action === 'ask-question') {
                speak('Спрашивайте! Напишите свой вопрос в чат, и я сразу на него отвечу. Либо нажмите на одну из кнопок заказа выше.', 600, () => {
                    setChips(idleChips);
                });
            }
        } else if (currentState === 'tz-type-bot') {
            tzData.subType = chip.val;
            currentState = 'tz-features-bot';
            speak('Отлично! Теперь выберите, какие **функции и интеграции** необходимы (выберите несколько и затем нажмите «✅ Все выбрал»):', 600, () => {
                setChips(botFeatureChips);
            });
        } else if (currentState === 'tz-type-parser') {
            tzData.subType = chip.val;
            currentState = 'tz-features-parser';
            speak('Отлично! Какие **возможности** потребуются парсеру? (выберите несколько и затем нажмите «✅ Все выбрал»):', 600, () => {
                setChips(parserFeatureChips);
            });
        } else if (currentState === 'tz-features-bot' || currentState === 'tz-features-parser') {
            if (chip.action === 'features-done') {
                currentState = 'tz-deadline';
                speak('И последнее — укажите желаемые **сроки** сдачи проекта:', 600, () => {
                    setChips(deadlineChips);
                });
            } else {
                // Toggle feature
                const idx = tzData.features.indexOf(chip.val);
                if (idx > -1) {
                    tzData.features.splice(idx, 1);
                } else {
                    tzData.features.push(chip.val);
                }
                // Refresh chips to show checkmarks
                const currentChips = (currentState === 'tz-features-bot') ? botFeatureChips : parserFeatureChips;
                setChips(currentChips);
            }
        } else if (currentState === 'tz-deadline') {
            tzData.deadline = chip.val;
            currentState = 'tz-summary';
            calculateEstimate();
            showSummary();
        }
    }

    function resetTz() {
        tzData = {
            type: '',
            subType: '',
            features: [],
            deadline: '',
            estimateMin: 0,
            estimateMax: 0
        };
    }

    function startTzFlow(type) {
        resetTz();
        if (type === 'order-bot') {
            tzData.type = 'Telegram-бот';
            currentState = 'tz-type-bot';
            speak('Давайте соберем ТЗ для вашего **Telegram-бота**. Выберите категорию бота:', 600, () => {
                setChips(botTypeChips);
            });
        } else {
            tzData.type = 'Веб-парсер';
            currentState = 'tz-type-parser';
            speak('Давайте соберем ТЗ для вашего **парсер/скрипта**. Какая основная задача софта?', 600, () => {
                setChips(parserTypeChips);
            });
        }
    }

    function calculateEstimate() {
        let baseMin = 1000;
        let baseMax = 1500;

        if (tzData.type === 'Telegram-бот') {
            baseMin = 1500;
            baseMax = 2500;
            if (tzData.subType && tzData.subType.includes('Магазин')) {
                baseMin += 500;
                baseMax += 1000;
            }
        }

        // Features add price
        tzData.features.forEach(() => {
            baseMin += 200;
            baseMax += 400;
        });

        // Deadline modifier
        if (tzData.deadline && tzData.deadline.includes('Срочно')) {
            baseMin += 300;
            baseMax += 500;
        }

        tzData.estimateMin = baseMin;
        tzData.estimateMax = baseMax;
    }

    function compileMarkdownTz() {
        const featuresText = tzData.features.length > 0 ? tzData.features.join(', ') : 'Не выбрано';
        return `📋 ТЕХНИЧЕСКОЕ ЗАДАНИЕ // NEXUS LABS\n` +
               `▪️ Тип проекта: ${tzData.type}\n` +
               `▪️ Направление: ${tzData.subType}\n` +
               `▪️ Функции: ${featuresText}\n` +
               `▪️ Срок сдачи: ${tzData.deadline}\n` +
               `▪️ Примерный бюджет: ${tzData.estimateMin} - ${tzData.estimateMax} руб.`;
    }

    function showSummary() {
        const md = compileMarkdownTz();
        
        // Print summarizing message
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            
            // Render structured summary
            const summaryHtml = `
                <div style="font-family: var(--font-mono); font-size: 0.78rem; line-height: 1.5; background: rgba(5, 5, 8, 0.9); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; color: var(--text-primary); margin-bottom: 12px;">
                     <div style="color: var(--accent-violet); font-weight: 700; margin-bottom: 6px; border-bottom: 1px solid rgba(139,92,246,0.2); padding-bottom: 4px;">📋 ТЗ СФОРМИРОВАНО</div>
                     <div>• <strong>Тип:</strong> ${tzData.type} (${tzData.subType})</div>
                     <div>• <strong>Функции:</strong> ${tzData.features.length > 0 ? tzData.features.join(', ') : 'Базовые'}</div>
                     <div>• <strong>Срок:</strong> ${tzData.deadline}</div>
                     <div style="margin-top: 6px; border-top: 1px dashed var(--border-color); padding-top: 6px; color: var(--accent-cyan); font-weight: 700;">• Оценка: ~${tzData.estimateMin} - ${tzData.estimateMax} руб.</div>
                </div>
                <div class="chat-cta-container">
                    <button class="chat-btn chat-btn-primary" id="btn-chat-tg"><i class="fa-brands fa-telegram"></i> ОТПРАВИТЬ РАЗРАБОТЧИКУ</button>
                    <button class="chat-btn chat-btn-secondary" id="btn-chat-copy"><i class="fa-solid fa-copy"></i> СКОПИРОВАТЬ ТЗ</button>
                </div>
            `;
            
            appendMessage('agent', summaryHtml, true);
            
            // Bind buttons inside summary bubble
            document.getElementById('btn-chat-copy').addEventListener('click', () => {
                navigator.clipboard.writeText(md).then(() => {
                    const btn = document.getElementById('btn-chat-copy');
                    btn.innerHTML = `<i class="fa-solid fa-check"></i> ТЗ СКОПИРОВАНО!`;
                    setTimeout(() => {
                        btn.innerHTML = `<i class="fa-solid fa-copy"></i> СКОПИРОВАТЬ ТЗ`;
                    }, 2000);
                });
            });

            document.getElementById('btn-chat-tg').addEventListener('click', () => {
                const textForUrl = encodeURIComponent(`Привет! Я составил ТЗ на сайте:\n\n${md}`);
                window.open(`https://t.me/knrcharge?text=${textForUrl}`, '_blank');
            });

            speak('Готово! Вы можете скопировать сгенерированное ТЗ или сразу отправить его мне в Telegram для детального обсуждения. Жду вас в ЛС! 🚀', 600, () => {
                setChips(summaryChips);
            });

        }, 800);
    }

    // Input Handling for Custom Queries
    function handleCustomInput() {
        const text = chatInput.value.trim();
        if (!text) return;

        chatInput.value = '';
        appendMessage('user', text);

        showTypingIndicator();
        setTimeout(() => {
            // Check if the user is in the middle of a form state
            if (currentState !== 'idle' && currentState !== 'tz-summary') {
                appendMessage('agent', 'Пожалуйста, используйте кнопки-подсказки выше для завершения опроса ТЗ или нажмите **«❌ Отмена»**.');
                return;
            }

            const cleanText = text.toLowerCase();
            let matchedAnswer = null;

            // Search in QA database
            for (let qa of qaDatabase) {
                const matched = qa.keys.some(key => cleanText.includes(key));
                if (matched) {
                    matchedAnswer = qa.answer;
                    break;
                }
            }

            if (matchedAnswer) {
                appendMessage('agent', matchedAnswer);
            } else {
                appendMessage('agent', 'Интересный вопрос! Я пока учусь, поэтому могу не знать точного ответа. Напишите создателю студии напрямую в Telegram: **[@knrcharge](https://t.me/knrcharge)** — он ответит на любой технический вопрос.');
            }
            scrollToBottom();
        }, 800);
    }

    chatSendBtn.addEventListener('click', handleCustomInput);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleCustomInput();
        }
    });

    // Initialize Suggestions
    setChips(idleChips);
});

