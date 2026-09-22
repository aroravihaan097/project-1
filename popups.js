// 1. Theme Toggle Logic (Grind vs Chill Mode)
const themeBtn = document.getElementById('theme-toggle');
if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        const body = document.body;
        if(body.getAttribute('data-theme') === 'grind') {
            body.setAttribute('data-theme', 'chill');
            themeBtn.innerHTML = '🌙 Chill Mode';
            themeBtn.style.color = '#00ffcc';
        } else {
            body.setAttribute('data-theme', 'grind');
            themeBtn.innerHTML = '⚡ Grind Mode';
            themeBtn.style.color = '#ff0055';
        }
    });
}

// 2. Secret Sydney Sweeney Easter Egg
let secretBuffer = '';
const secretCode = 'sydney';

window.addEventListener('keydown', (e) => {
    secretBuffer += e.key.toLowerCase();
    if (secretBuffer.length > 10) secretBuffer = secretBuffer.slice(-10);
    
    if (secretBuffer.includes(secretCode)) {
        activateSecretMode();
        secretBuffer = '';
    }
});

function activateSecretMode() {
    const toast = document.createElement('div');
    toast.className = 'toast toast-top show';
    toast.style.background = 'rgba(255, 20, 147, 0.9)';
    toast.style.borderColor = '#ff69b4';
    toast.style.boxShadow = '0 0 25px rgba(255, 105, 180, 0.8)';
    toast.innerHTML = "✨ Sydney Sweeney mode activated. You found the secret!";
    document.body.appendChild(toast);
    
    document.body.style.transition = 'box-shadow 1s ease-in-out';
    document.body.style.boxShadow = 'inset 0 0 150px rgba(255, 105, 180, 0.2)';
    
    setTimeout(() => {
        toast.classList.remove('show');
        document.body.style.boxShadow = 'none';
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}
