// Jika browser support local storage
if (typeof (Storage) !== "undefined") {
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Ketika tombol dark di klik
    document.querySelector('.dark-button').addEventListener('click', (e) => {
        localStorage.setItem('tema', 'dark');
        document.body.classList.add('dark-theme');
    });

    // Ketika tombol light di klik
    document.querySelector('.light-button').addEventListener('click', (e) => {
        localStorage.removeItem('tema');
        document.body.classList.remove('dark-theme');
    });
} else {
    console.log("Browser Anda Tidak Mendukung Local Storage");
}
