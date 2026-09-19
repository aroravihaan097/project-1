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





// List of 12 Vibe Pop-ups matching Vihaan's personality
const vibePopups = [
    { text: "🚨 Warning: Too much football talent detected!", position: "bottom" },
    { text: "🎮 Hold on, let me finish this Valorant match...", position: "top" },
    { text: "⚽ Bro is definitely flexing those 11 trophies.", position: "left" },
    { text: "💪 Pumping iron in the gym or debugging code? Same energy.", position: "right" },
    { text: "⚡ Powered by caffeine, BITS Pilani stress, and pure CSS.", position: "bottom" },
    { text: "🏆 Warning: Unbeaten in FIFA (source: trust me bro).", position: "top" },
    { text: "☕ Java code compiling? Or just a pre-workout kicking in?", position: "left" },
    { text: "🐧 Linux terminal open means serious business.", position: "right" },
    { text: "👑 Leadership material: Captain on the pitch, leader in the group project.", position: "bottom" },
    { text: "🧠 Analytical problem solving = figuring out why the code broke at 3 AM.", position: "top" },
    { text: "🔥 Maxfort Rohini alumni in the building!", position: "left" },
    { text: "💤 SST & BITS dual degree grind never stops.", position: "right" }
];

// Function to trigger a random directional pop-up
function showDirectionalToast() {
    // Pick a random popup object from the array
    const popupObj = vibePopups[Math.floor(Math.random() * vibePopups.length)];
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${popupObj.position}`;
    toast.innerHTML = popupObj.text;
    document.body.appendChild(toast);
    
    // Trigger smooth slide-in
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4500);
}

// Schedule them at different intervals while browsing
setTimeout(showDirectionalToast, 3000);   // 3s
setTimeout(showDirectionalToast, 10000);  // 10s
setTimeout(showDirectionalToast, 18000);  // 18s
setTimeout(showDirectionalToast, 27000);  // 27s
setTimeout(showDirectionalToast, 36000);  // 36s
