// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav-link');

// Получаем все секции страницы
const sections = document.querySelectorAll('.section');

// Добавляем обработчик кликов по ссылкам
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылок

        // Получаем ID нужного раздела
        const targetId = link.getAttribute('href').substring(1);

        // Переключаем активный раздел
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});