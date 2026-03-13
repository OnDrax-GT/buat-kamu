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

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    createRain();
    showPage(currentPage);
    setInterval(createRain, 150); // Emoji jatuh setiap 150ms
});

// Fungsi untuk halaman berikutnya
function nextPage() {
    if (currentPage < pages.length - 2) {
        currentPage++;
        showPage(currentPage);
    } else if (currentPage === pages.length - 2) {
        currentPage++;
        showFinalPage();
    }
}

// Tampilkan halaman biasa
function showPage(pageIndex) {
    const page = pages[pageIndex];
    document.getElementById('pageTitle').textContent = page.title;
    document.getElementById('pageText').textContent = page.text;
    document.getElementById('nextBtn').classList.remove('hidden');
    document.querySelector('.textbox').classList.remove('fullscreen');
}

// Tampilkan halaman akhir (full title)
function showFinalPage() {
    const finalPage = pages[pages.length - 1];
    document.getElementById('pageTitle').textContent = finalPage.title;
    document.getElementById('pageText').textContent = '';
    document.getElementById('nextBtn').classList.add('hidden');
    document.querySelector('.textbox').classList.add('fullscreen');
}

// Buat efek hujan emoji
function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    const emoji = document.createElement('div');
    emoji.className = 'rain-emoji';
    emoji.textContent = RAIN_EMOJI; // EMOJI DARI VARIABLE DI ATAS!
    
    
}