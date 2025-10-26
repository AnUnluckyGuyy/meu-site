const contacts = document.querySelectorAll('.contact[data-copy]');
const toast = document.getElementById('toast');
const toggle = document.querySelector('.theme-toggle');

contacts.forEach(c => {
    c.addEventListener('click', () => {
        navigator.clipboard.writeText(c.dataset.copy).then(() => {
            toast.classList.add('show');
            setTimeout(()=>toast.classList.remove('show'), 2000);
        });
    });
});

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
