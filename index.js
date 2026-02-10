
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successScreen = document.getElementById('successScreen');

const noTexts = [
    "¿Estás segura?",
    "¿Muy segura?",
    "¿De verdad?",
    "Ok",
    "Anda a cagar",
    "Listo",
    "Chau"
];

let fontSize = 1.2; 
let clickCount = -1;

noBtn.addEventListener('click', () => {
    clickCount++;
    
    fontSize += 0.5; 
    yesBtn.style.fontSize = `${fontSize}rem`;
    
    const currentPadding = 15 + (clickCount * 5); 
    yesBtn.style.padding = `${currentPadding}px ${currentPadding * 2}px`;

    const textIndex = Math.min(clickCount, noTexts.length - 1);
    noBtn.innerText = noTexts[textIndex];
});

yesBtn.addEventListener('click', () => {
    successScreen.style.display = 'flex';
});
