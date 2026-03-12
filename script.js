// --- KONFIGURASI HALAMAN ---
// Setiap halaman hanya menggunakan SATU jenis emoji
const pages = [
    {
        title: "Selamat Datang!",
        text: "Ini adalah halaman pertama. Emoji akan jatuh seperti hujan sekarang.",
        emoji: "🎉"
    },
    {
        title: "Halaman Kedua",
        text: "Klik tombol 'Lanjut' di bawah. Sekarang backgroundnya berubah menjadi emoji buah-buahan.",
        emoji: "🍎"
    },
    {
        title: "Halaman Ketiga",
        text: "Ini halaman terakhir. Kamu bisa mengganti emoji ini menjadi apa saja yang kamu mau di dalam file script.js.",
        emoji: "🐱"
    }
];

let currentPageIndex = 0;
const emojiContainer = document.getElementById('emoji-container');

// Fungsi untuk membuat emoji jatuh seperti hujan
function createEmojis(emojiType) {
    console.log("Membuat emoji:", emojiType); // Debugging
    
    // Hapus emoji lama jika ada
    emojiContainer.innerHTML = '';

    // Buat 50 emoji baru untuk background
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        span.innerText = emojiType;

        // Styling dasar emoji
        span.style.position = 'absolute';
        span.style.left = Math.random() * 100 + 'vw';
        span.style.fontSize = (Math.random() * 30 + 20) + 'px';
        span.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        span.style.animationDelay = Math.random() * 5 + 's';

        emojiContainer.appendChild(span);
    }
}

// Fungsi untuk ganti halaman
function nextPage() {
    console.log("Tombol ditekan!"); // Debugging
    
    try {
        // Pindah ke halaman berikutnya
        currentPageIndex++;

        // Cek jika sudah sampai halaman terakhir
        if (currentPageIndex >= pages.length) {
            currentPageIndex = 0; // Kembali ke awal (looping)
        }

        // Update konten teks
        const currentData = pages[currentPageIndex];
        document.getElementById('page-title').innerText = currentData.title;
        document.getElementById('page-text').innerText = currentData.text;

        // Update background emoji (satu jenis emoji per halaman)
        createEmojis(currentData.emoji);
        
        console.log("Halaman berubah ke:", currentPageIndex);
    } catch (error) {
        console.error("Error terjadi:", error);
        alert("Terjadi error: " + error.message);
    }
}

// Jalankan fungsi saat website pertama kali dibuka
window.onload = function() {
    console.log("Website loaded!");
    createEmojis(pages[0].emoji);
};        span.style.fontSize = (Math.random() * 30 + 20) + 'px'; // Ukuran acak
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
    }

    // Update konten teks
    const currentData = pages[currentPageIndex];
    document.getElementById('page-title').innerText = currentData.title;
    document.getElementById('page-text').innerText = currentData.text;

    // Update background emoji (satu jenis emoji per halaman)
    createEmojis(currentData.emoji);
}

// Jalankan fungsi saat website pertama kali dibuka
createEmojis(pages[0].emoji);        // Pilih emoji secara acak dari list yang kamu tentukan
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
