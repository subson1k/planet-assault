

let backGround = document.getElementById('mainDiv');
let but = document.getElementById('but');
let nowLoading = document.querySelector('h3');
let player1 = document.querySelector('h2');
let loadSound = document.getElementById('player');



function loading(){

    backGround.style.animation = 'load 3s linear infinite';
    but.style.display = 'none';
    player1.style.display = 'none';
    loadSound.play();
}

function ready(){

    backGround.style.animation = 'none';
    but.style.display = 'block';
    nowLoading.style.display = 'none';
    player1.style.display = 'block';
}

loading();


setTimeout(ready , 6500);