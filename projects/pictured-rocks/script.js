document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('nav ul');
    const button = document.querySelector('nav button');
    if (button && navToggle) {
        button.addEventListener('click', () => navToggle.classList.toggle('visible'));
    }
});
