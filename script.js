const RAIN_EMOJI = '🌧️'; // Emoji Background

// Data halaman
const pages = [
    {
        title: "judul",
        text: "text"
    },
    {
        title: "judul",
        text: "text"
    },
    {
        title: "judul",
        text: "text"
    },
    {
        title: "judul",
        text: "text"
    }
];

let currentPage = 0;
let rainEmojis = [];
const MAX_EMOJIS = 50; // Maksimal 50 emoji di layar
let animationId;

// Object Pool untuk emoji (ANTI LAG!)
function createEmojiPool() {
    const container = document.getElementById('rainContainer');
    for (let i = 0; i < MAX_EMOJIS; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'rain-emoji';
        emoji.textContent = RAIN_EMOJI;
        emoji.style.opacity = '0';
        emoji.style.display = 'none';
        container.appendChild(emoji);
        rainEmojis.push(emoji);
    }
}

// Update semua emoji (requestAnimationFrame - SUPER SMOOTH)
function updateRain(currentTime) {
    rainEmojis.forEach((emoji, index) => {
        if (emoji.style.display === 'block') {
            const rect = emoji.getBoundingClientRect();
            
            // Reset jika sudah jatuh
            if (rect.bottom > window.innerHeight) {
                resetEmoji(emoji, index);
            }
        } else if (Math.random() < 0.1) { // Spawn chance
            spawnEmoji(emoji, index);
        }
    });
    
    animationId = requestAnimationFrame(updateRain);
}

// Spawn emoji baru
function spawnEmoji(emoji, index) {
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 2 + 3) + 's';
    emoji.style.fontSize = (Math.random() * 0.8 + 1.2) + 'rem';
    emoji.style.opacity = '0.6 + ' + (Math.random() * 0.3);
    emoji.style.display = 'block';
    
    // Mulai animasi dari atas
    emoji.style.transform = 'translateY(-100vh)';
    emoji.style.opacity = '0';
    
    // Animasi manual (lebih smooth)
    let progress = 0;
    const duration = parseFloat(emoji.style.animationDuration) * 1000;
    const startTime = performance.now();
    
    function animateFall(currentTime) {
        progress = (currentTime - startTime) / duration;
        if (progress < 1) {
            emoji.style.transform = `translateY(${progress * 100}vh) rotate(360deg)`;
            emoji.style.opacity = Math.max(0, 0.7 - progress * 0.7);
            requestAnimationFrame(animateFall);
        } else {
            resetEmoji(emoji, index);
        }
    }
    requestAnimationFrame(animateFall);
}

// Reset emoji untuk reuse
function resetEmoji(emoji, index) {
    emoji.style.display = 'none';
    emoji.style.transform = '';
    emoji.style.opacity = '0';
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    createEmojiPool();
    showPage(currentPage);
    animationId = requestAnimationFrame(updateRain);
});

// Fungsi navigasi (sama)
function nextPage() {
    if (currentPage < pages.length - 2) {
        currentPage++;
        showPage(currentPage);
    } else if (currentPage === pages.length - 2) {
        currentPage++;
        showFinalPage();
    }
}

function showPage(pageIndex) {
    const page = pages[pageIndex];
    document.getElementById('pageTitle').textContent = page.title;
    document.getElementById('pageText').textContent = page.text;
    document.getElementById('nextBtn').classList.remove('hidden');
    document.querySelector('.textbox').classList.remove('fullscreen');
}

function showFinalPage() {
    const finalPage = pages[pages.length - 1];
    document.getElementById('pageTitle').textContent = finalPage.title;
    document.getElementById('pageText').textContent = '';
    document.getElementById('nextBtn').classList.add('hidden');
    document.querySelector('.textbox').classList.add('fullscreen');
}

// Cleanup saat page unload
window.addEventListener('beforeunload', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});