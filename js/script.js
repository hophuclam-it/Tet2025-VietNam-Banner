let totalMoney = 0;
        let backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.3;

        // created envelope
        function createEnvelope() {
            let envelope = document.createElement('div');
            envelope.classList.add('envelope');

            //random
            const x = Math.random() * window.innerWidth;
            envelope.style.left = `${x}px`;

            const duration = 5 + Math.random() * 5;
            const delay = Math.random() * 4;
            envelope.style.animationDuration = `${duration}s`;

            envelope.addEventListener('click', (e) => {
                let amount = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
                let amountRandom = amount[Math.floor(Math.random() * amount.length)];
                totalMoney += amountRandom;
                document.querySelector('.total-lucky-money').innerText = `Tiền Lì Xì: ${totalMoney.toLocaleString('vn-VN')} VND`;

                //create Firework
                createFirework(e.clientX, e.clientY);

                //createFloatingText
                createFloatingText(`+${amountRandom.toLocaleString('vn-VN')} VND`, e.clientX, e.clientY);

                playFireworkSound();
                envelope.remove();
            });


            document.body.appendChild(envelope);
            // document.getElementsByClassName('container').appendChild(envelope);

            envelope.addEventListener("animationend", () => {
                envelope.remove();
            });


        }

        function createFirework(x, y) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;

            document.body.appendChild(firework);

            // setTimeout(() => {
            //     firework.remove();
            // }, 3000);
        };

        function playFireworkSound() {
            const fireworkSound = document.getElementById('firework-sound');
            fireworkSound.currentTime = 0;
            fireworkSound.play();
        }

        function createFloatingText(text, x, y) {
            let floatingText = document.createElement('div');
            floatingText.classList.add('floating-text');
            floatingText.innerText = text;

            floatingText.style.left = `${x}px`;
            floatingText.style.top = `${y}px`;

            document.body.appendChild(floatingText);




        setTimeout(() => {
            floatingText.remove();
        }, 2000);

        }
        setInterval(createEnvelope, 1000);