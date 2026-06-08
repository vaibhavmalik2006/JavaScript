const blueBtn = document.getElementById('blue').parentElement;
const redBtn = document.getElementById('red').parentElement;
const whiteBtn = document.getElementById('white').parentElement;
const blackBtn = document.getElementById('black').parentElement;
const body = document.body;

const colorMap = {
    'blue': '#001f75',
    'red': '#750006',
    'white': '#f0f0f0',
    'black': '#030508'
};

blueBtn.addEventListener('click', () => body.style.backgroundColor = colorMap['blue']);
redBtn.addEventListener('click', () => body.style.backgroundColor = colorMap['red']);
whiteBtn.addEventListener('click', () => body.style.backgroundColor = colorMap['white']);
blackBtn.addEventListener('click', () => body.style.backgroundColor = colorMap['black']);