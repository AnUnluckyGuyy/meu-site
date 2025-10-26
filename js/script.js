const contacts = document.querySelectorAll('.contact');

function getRandomColor() {
    const colors = ['#ffeb3b', '#ff9800', '#8bc34a', '#00bcd4', '#e91e63', '#9c27b0'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    contacts.forEach(contact => {
        contact.style.backgroundColor = getRandomColor();
    });
}, 2000);

contacts.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
        contact.style.transform = 'translateY(-5px)';
    });
    contact.addEventListener('mouseleave', () => {
        contact.style.transform = 'translateY(0)';
    });
});
