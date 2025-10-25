const copyLinks = document.querySelectorAll('.copyable');
const toast = document.getElementById('toast');

copyLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const textToCopy = this.dataset.copy;
        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        });
    });
});
