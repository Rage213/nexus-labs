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

// Form Submission Handler
const projectForm = document.getElementById('project-form');
const formSuccess = document.getElementById('form-success');

projectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const typeSelect = document.getElementById('project-type');
    const formData = {
        name: document.getElementById('name').value,
        tg: document.getElementById('contact-tg').value,
        type: typeSelect.options[typeSelect.selectedIndex].text,
        message: document.getElementById('message').value
    };

    // --- ИНТЕГРАЦИЯ С TELEGRAM БОТОМ ---
    // Вы можете раскомментировать этот код, чтобы заявки с сайта прилетали вам прямо в Telegram!
    // Для этого нужно создать бота через @BotFather, получить токен и узнать свой ID (через @userinfobot)
    
    const BOT_TOKEN = '8468319846:AAHLIxLs2bVesnAwMb-MxB7hxFJKsiw8ljE';
    const CHAT_ID = '1453136053';
    const text = `
🆕 *Новая заявка с сайта-визитки!*
👤 *Имя:* ${formData.name}
✈️ *Telegram:* ${formData.tg}
📂 *Тип проекта:* ${formData.type}
📝 *Описание:* ${formData.message}
    `;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'Markdown'
            })
        });
    } catch (error) {
        console.error('Ошибка отправки в Telegram:', error);
    }

    // Имитируем отправку
    console.log('Данные формы:', formData);
    
    // Скрываем форму и показываем сообщение об успехе
    projectForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
    
    // Сброс формы через 5 секунд (на случай если пользователь захочет отправить еще раз)
    setTimeout(() => {
        projectForm.reset();
        projectForm.classList.remove('hidden');
        formSuccess.classList.add('hidden');
    }, 8000);
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
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// --- СИМУЛЯЦИЯ ЖИВЫХ ЛОГОВ ДАШБОРДА (Tau Kuber Style) ---
const consoleTerminal = document.getElementById('console-terminal');
const logTemplates = [
    "System: запущено {value} параллельных потоков",
    "Parser: получены данные по {value} позициям",
    "AI Agent: сформирован ответ пользователю {user}",
    "Selectel VPS: CPU - {cpu}%, RAM - {ram}%",
    "Automation: сессия #{session} успешно перезапущена",
    "Processor: проведена успешная транзакция #{order}",
    "ProxyAPI: задержка LLM-шлюза — {ping} мс",
    "SatxCloud: резервная копия БД создана успешно"
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
        .replace('{value}', getRandomInt(10, 80))
        .replace('{user}', '@client_' + getRandomInt(100, 999))
        .replace('{cpu}', getRandomInt(5, 20))
        .replace('{ram}', getRandomInt(40, 46))
        .replace('{session}', getRandomInt(1, 32))
        .replace('{order}', getRandomInt(23000, 29000))
        .replace('{ping}', getRandomInt(90, 180));
        
    const newLine = document.createElement('div');
    newLine.className = 'console-line';
    newLine.innerHTML = `<span>[${time}]</span> ${text}`;
    
    consoleTerminal.appendChild(newLine);
    
    // Авто-прокрутка вниз
    consoleTerminal.scrollTop = consoleTerminal.scrollHeight;
    
    // Удаляем старые строчки, чтобы консоль не переполнялась (держим 4 штуки)
    if (consoleTerminal.children.length > 4) {
        consoleTerminal.removeChild(consoleTerminal.children[0]);
    }
}

// Запуск симулятора каждые 3-5 секунд
if (consoleTerminal) {
    setInterval(generateSimulatedLog, getRandomInt(2500, 5000));
}

