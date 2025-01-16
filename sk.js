const backgrounds = [
    'images/сделай_изображение_ресурс_паков(1).png',
    'images/сделай_изображение_ресурс_паков(2).png',
    'images/сделай_изображение_ресурс_паков(3).png'
];

let current = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[current]})`;
    current = (current + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000); // Смена каждые 5 секунд
