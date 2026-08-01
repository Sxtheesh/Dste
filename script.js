const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let i = 0;

const slide = document.getElementById('slide');
const no = document.getElementById('no');
const yes = document.getElementById('yes');

// Change photo every 2.5 seconds
setInterval(() => {
    i = (i + 1) % imgs.length;
    slide.src = '/' + imgs[i];
}, 2500);

// Make NO button run away 😂
document.addEventListener('mousemove', e => {
    const r = no.getBoundingClientRect();

    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);

    if (Math.hypot(dx, dy) < 120) {
        no.style.position = 'fixed';
        no.style.left =
            Math.random() * (window.innerWidth - 120) + 'px';
        no.style.top =
            Math.random() * (window.innerHeight - 60) + 'px';
    }
});

// When she clicks YES ❤️
yes.onclick = () => {
    document.getElementById('celebrate').classList.remove('hidden');
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('h2').textContent = 'She Said YES! ❤️';

    // Heart animation
    for (let j = 0; j < 120; j++) {
        let h = document.createElement('div');

        h.textContent = '❤️';
        h.style.position = 'fixed';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = '-20px';
        h.style.fontSize = (20 + Math.random() * 20) + 'px';
        h.style.transition = '4s linear';

        document.body.appendChild(h);

        requestAnimationFrame(() => {
            h.style.top = '110vh';
        });

        setTimeout(() => h.remove(), 4000);
    }
};
