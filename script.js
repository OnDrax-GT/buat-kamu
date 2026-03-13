// 🔥 UBAH EMOJI INI SESUAI KEINGINAN KAMU 🔥
const RAIN_EMOJI = '🌧️'; // Ganti dengan emoji apa saja!

// Data halaman (edit sesuai cerita kamu)
const pages = [
    {
        title: "🌧️ Malam Hujan",
        text: "Hujan turun perlahan di malam yang dingin. Suara tetesannya seperti lagu pengantar tidur."
    },
    {
        title: "💭 Kenangan",
        text: "Di balik jendela berkabut, kenangan lama mulai bermunculan satu per satu."
    },
    {
        title: "🌙 Bulan Tersembunyi",
        text: "Bulan bersembunyi di balik awan tebal, seolah ikut merasakan kesedihan ini."
    },
    {
        title: "🌈 Pelangi Muncul",
        text: "Hujan berhenti. Pelangi muncul di ufuk timur. Waktunya untuk melangkah maju."
    }
];

let currentPage = 0;

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    createRain();
    showPage(currentPage);
    setInterval(createRain, 200); // Emoji jatuh setiap 200ms
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

// Buat efek hujan emoji (PAKAI EMOJI YANG KAMU SET)
function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    const emoji = document.createElement('div');
    emoji.className = 'rain-emoji';
    emoji.textContent = RAIN_EMOJI; // EMOJI DARI VARIABLE DI ATAS!
    
    // Posisi & animasi random
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    emoji.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
    
    rainContainer.appendChild(emoji);
    
    // Hapus setelah animasi
    setTimeout(() => {
        emoji.remove();
    }, 7000);
}