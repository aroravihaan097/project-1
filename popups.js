// Funny pop-up triggers
setTimeout(() => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '🚨 Warning: Too much football talent detected! 🚨';
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 4000);
}, 3000);

setTimeout(() => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '🎮 Hold on, let me finish this Valorant match...';
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.classList.remove('show'), 4000);
}, 15000);
