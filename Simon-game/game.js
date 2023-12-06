const colors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let level = 1;
const body = document.querySelector('body');
const buttons = document.querySelectorAll(".btn");
const levelTitle = document.querySelector("#level-title");
let gameRunning = false;


function initializeGame() {
    body.addEventListener("keydown", () => {
        if (!gameRunning) {
            levelTitle.textContent = 'Level 1';
            gameRunning = true;
            randomColorGenerator();
        }
    });
}

function randomColorGenerator() {
    let color = colors[Math.floor(Math.random() * 4)];
    gamePattern.push(color);
    colorAnimation(document.querySelector("#" + color));
}

function colorAnimation(button) {
    button.classList.add("pressed");
    let sound = new Audio("sounds/" + button.id + ".mp3");
    sound.play();
    setTimeout(() => button.classList.remove("pressed"), 100);
}

function eventListener() {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            colorAnimation(button);
            userPattern.push(button.id);
            levelTitle.textContent = "level " + level;
            checkColor();
        });
    }
}

function checkColor() {
    if (userPattern.length != gamePattern.length){
        eventListener()
    }
    else if (JSON.stringify(userPattern) === JSON.stringify(gamePattern)) {
        userPattern = [];
        level += 1;
        randomColorGenerator();
    } else {
        levelTitle.textContent = "Game Over"
        gameRunning = false;
        level = 1;
        userPattern = [];
    }
}


initializeGame();
