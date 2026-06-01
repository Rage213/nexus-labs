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

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') && item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// --- INTERSECTION OBSERVER FOR FADE-IN-UP SCROLL ANIMATIONS ---
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const observerOptions = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it is fully in view
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// --- СИМУЛЯЦИЯ ЖИВЫХ ЛОГОВ ДАШБОРДА ---
const consoleTerminal = document.getElementById('console-terminal');
const logTemplates = [
    "Aiogram: запуск Telegram-магазина прошел успешно",
    "FunPay: автоподнятие {value} лотов выполнено",
    "Digiseller: выдано {value} лицензий покупателям",
    "CryptoBot: получен платеж {value} USDT",
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

// --- CYBER BOT ASSISTANT INTERACTIVE LOGIC ---
const cyberBot = document.getElementById('cyber-bot');
const botBubble = document.getElementById('bot-bubble');
const botTrigger = document.getElementById('bot-trigger');

const botPhrases = [
    "Купи, сделаем всё по красоте! 🤖",
    "Твой бизнес сам себя не автоматизирует! 🚀",
    "Напишем софт, который пашет за тебя 24/7! 💻",
    "Давай обсудим ТЗ, сделаем всё по красоте! 🛠️",
    "Хватит кликать руками, заказывай ботов! 🌌",
    "Интегрируем CryptoBot, LAVA, автовыдачу! 💳",
    "Чекеры, парсеры, модераторы — сделаем всё в лучшем виде! 🔥"
];

let isBotActive = false;

function triggerCyberBot(customText = null) {
    if (isBotActive || !cyberBot) return;
    
    isBotActive = true;
    
    // Choose random side: left, right, top, bottom
    const sides = ['left', 'right', 'top', 'bottom'];
    const chosenSide = sides[Math.floor(Math.random() * sides.length)];
    
    // Reset classes
    cyberBot.className = 'cyber-bot-container';
    cyberBot.classList.add(`bot-side-${chosenSide}`);
    
    // Set phrase
    const phrase = customText || botPhrases[Math.floor(Math.random() * botPhrases.length)];
    if (botBubble) {
        botBubble.textContent = phrase;
    }
    
    // Trigger CSS Reflow
    cyberBot.offsetHeight;
    
    // Slide in
    cyberBot.classList.add('active');
    
    // Slide out after 4 seconds
    setTimeout(() => {
        cyberBot.classList.remove('active');
        
        // Lock reset after animation ends (500ms)
        setTimeout(() => {
            isBotActive = false;
        }, 500);
    }, 4000);
}

// Trigger bot when clicking or hovering the trigger icon
if (botTrigger) {
    botTrigger.addEventListener('mouseenter', () => triggerCyberBot());
    botTrigger.addEventListener('click', () => triggerCyberBot());
}

// Hover trigger on CTA buttons and cards to nudge the user
document.querySelectorAll('.btn-primary, .service-card, .project-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        // 40% chance to pop up the bot on hover to keep it playful but not annoying
        if (Math.random() < 0.4) {
            setTimeout(() => {
                triggerCyberBot();
            }, 300);
        }
    });
});

// Periodic popup easter egg (every 40 seconds)
setInterval(() => {
    if (Math.random() < 0.3) {
        triggerCyberBot();
    }
}, 40000);

