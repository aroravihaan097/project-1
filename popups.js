const vibePopups = [
    { text: "🚨 Warning: Too much football talent detected!", position: "bottom" },
    { text: "🎮 Hold on, let me finish this Valorant match...", position: "top" },
    { text: "⚽ Bro is definitely flexing those 11 trophies.", position: "left" },
    { text: "💪 Pumping iron in the gym or debugging code? Same energy.", position: "right" },
    { text: "⚡ Powered by caffeine, BITS Pilani stress, and pure CSS.", position: "bottom" },
    { text: "🏆 Warning: Unbeaten in FIFA (source: trust me bro).", position: "top" },
    { text: "☕ Java code compiling? Or just a pre-workout kicking in?", position: "left" },
    { text: "🐧 Linux terminal open means serious business.", position: "right" }
];

function showDirectionalToast() {
    const popupObj = vibePopups[Math.floor(Math.random() * vibePopups.length)];
    const toast = document.createElement('div');
    toast.className = `toast toast-${popupObj.position}`;
    toast.innerHTML = popupObj.text;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 4500);
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(showDirectionalToast, 4000);   
    setTimeout(showDirectionalToast, 15000);  
    setTimeout(showDirectionalToast, 30000);  
});

// SECRET EASTER EGG (SYDNEY SWEENEY MODE)
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
}// Schedule them at smooth intervals while browsing
setTimeout(showDirectionalToast, 3000);   // After 3s
setTimeout(showDirectionalToast, 11000);  // After 11s
setTimeout(showDirectionalToast, 20000);  // After 20s
setTimeout(showDirectionalToast, 30000);  // After 30s
setTimeout(showDirectionalToast, 42000);  // After 42s
