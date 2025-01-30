let totalMoney = 0;
let backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.3;

// 🔹 Fix lỗi nhạc không phát trên mobile
document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => console.log("Autoplay blocked:", error));
    }
});

// 🔹 Tạo bao lì xì rơi xuống
function createEnvelope() {
    let envelope = document.createElement('div');
    envelope.classList.add('envelope');

    // Random vị trí ngang
    const x = Math.random() * (window.innerWidth-150);
    envelope.style.left = `${x}px`;

    // Random tốc độ rơi
    const duration = 5 + Math.random() * 5;
    envelope.style.animationDuration = `${duration}s`;

    // Khi click vào bao lì xì
    envelope.addEventListener('click', (e) => {
        let amount = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
        let amountRandom = amount[Math.floor(Math.random() * amount.length)];
        totalMoney += amountRandom;
        document.querySelector('.total-lucky-money').innerText = `Tiền Lì Xì: ${totalMoney.toLocaleString('vn-VN')} VND`;

        // Hiệu ứng pháo hoa & số tiền lì xì
        createFirework(e.clientX, e.clientY);
        createFloatingText(`+${amountRandom.toLocaleString('vn-VN')} VND`, e.clientX, e.clientY);

        // Âm thanh hiệu ứng
        playFireworkSound();
        envelope.remove();
    });

    document.body.appendChild(envelope);

    // 🔹 Tự xóa lì xì khi rơi quá khỏi màn hình
    setTimeout(() => {
        envelope.remove();
    }, duration * 1000);
}

// 🔹 Tạo hiệu ứng pháo hoa
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// 🔹 Phát âm thanh pháo hoa
function playFireworkSound() {
    const fireworkSound = document.getElementById('firework-sound');
    fireworkSound.currentTime = 0;
    fireworkSound.play();
}

// 🔹 Hiển thị số tiền lì xì
function createFloatingText(text, x, y) {
    let floatingText = document.createElement('div');
    floatingText.classList.add('floating-text');
    floatingText.innerText = text;

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y - 20}px`;

    document.body.appendChild(floatingText);

    setTimeout(() => {
        floatingText.remove();
    }, 2000);
}

// 🔹 Tạo lì xì rơi liên tục
setInterval(createEnvelope, 1500);
