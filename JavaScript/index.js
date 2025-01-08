const tabs = document.querySelectorAll('.tab-container');
const buttons = document.querySelectorAll('.button-tab');
const themeButton = document.getElementById('btnChangeTheme');
const body = document.body;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabs.forEach(tab => tab.style.display = 'none');
        tabs[index].style.display = 'block';
                buttons.forEach(btn => btn.classList.remove('active-tab'));
        button.classList.add('active-tab');
    });
});

let isDarkTheme = false;
themeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

if (tabs.length > 0) {
    tabs.forEach(tab => tab.style.display = 'none');
    tabs[0].style.display = 'block';
    buttons[0].classList.add('active-tab');
}
