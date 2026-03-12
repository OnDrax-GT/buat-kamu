// --- KONFIGURASI HALAMAN ---
// Kamu bisa menambah halaman baru di sini dengan format:
// { title: "Judul", text: "Isi Teks", emojis: ["🍎", "🍌", "🍇"] },
const pages = [
    {
        title: "Selamat Datang!",
        text: "Ini adalah halaman pertama. Kamu bisa menulis apa saja di sini. Emoji di background akan menyesuaikan dengan halaman ini.",
        emojis: ["🎉", "👋", "✨", "🚀"]
    },
    {
        title: "Halaman Kedua",
        text: "Klik tombol 'Lanjut' di bawah. Sekarang backgroundnya berubah menjadi emoji buah-buahan.",
        emojis: ["🍎", "🍌", "🍇", "🍉", "🍓"]
    },
    {
        title: "Halaman Ketiga",
        text: "Ini halaman terakhir. Kamu bisa mengganti emoji ini menjadi apa saja yang kamu mau di dalam file script.js.",
        emojis: ["🐱", "🐶", "🐸", "🦄", "🐯"]
    }
];

let currentPageIndex = 0;
const emojiContainer = document.getElementById('emoji-container');
const titleElement = document.getElementById('page-title');
const textElement = document.getElementById('page-text');
const nextBtn = document.getElementById('next-btn');

// Fungsi untuk membuat emoji jatuh
function createEmojis(emojiList) {
    // Hapus emoji lama jika ada
    emojiContainer.innerHTML = '';

    // Buat 30 emoji baru untuk background
    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        
        // Pilih emoji secara acak dari list yang kamu tentukan
        const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        span.innerText = randomEmoji;

        // Styling dasar emoji
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + 'vw'; // Posisi horizontal acak
        span.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Ukuran acak
        span.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`; // Durasi jatuh acak
        span.style.animationDelay = Math.random() * 5 + 's'; // Waktu mulai acak

        emojiContainer.appendChild(span);
    }
}

// Fungsi untuk ganti halaman
function nextPage() {
    // Pindah ke halaman berikutnya
    currentPageIndex++;

    // Cek jika sudah sampai halaman terakhir
    if (currentPageIndex >= pages.length) {
        currentPageIndex = 0; // Kembali ke awal (looping)
        // Atau bisa diganti alert("Selesai!") jika ingin berhenti
    }

    // Update konten teks
    const currentData = pages[currentPageIndex];
    titleElement.innerText = currentData.title;
    textElement.innerText = currentData.text;

    // Update background emoji
    createEmojis(currentData.emojis);
}

// Jalankan fungsi saat website pertama kali dibuka
createEmojis(pages[0].emojis);