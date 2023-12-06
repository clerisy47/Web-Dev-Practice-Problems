let buttons = ["red", "blue", "green", "yellow"];
let userPattern = []
let gamePattern = []
let level = 0
let gameRunning = false
let levelTitle = document.querySelector("#level-title")

function nextSequence(){
    userPattern = []
    level++
    document.querySelector("#level-title").textContent = "Level "+ level
    let randomNumber = Math.floor(Math.random()*4)
    let randomColor = buttons[randomNumber]
    playAnimation(document.querySelector('#'+ randomColor))
    gamePattern.push(randomColor)
}

function playAnimation(button) {
    button.classList.add("pressed")
    let sound = new Audio("sounds/" + button.id + ".mp3")
    sound.play()
    setTimeout(() => button.classList.remove("pressed"), 100)
}

function checkColor() {
    if (userPattern.length != gamePattern.length){
        nextSequence()
    }
    else if (JSON.stringify(userPattern) === JSON.stringify(gamePattern)) {
        userPattern = []
        level += 1
        setTimeout(()=>{
            nextSequence()
        },1000)
    } else {
        levelTitle.textContent = "Game Over"
        gameRunning = false
        level = 1
        userPattern = []

    }
}

document.querySelector('body').addEventListener("keydown", () => {
    if (!gameRunning) {
        levelTitle.textContent = 'Level 1'
        gameRunning = true
        nextSequence()
    }
});

for (const button of document.querySelectorAll(".btn")) {
        button.addEventListener("click", () => {
        playAnimation(button);
        userPattern.push(button.id);
        levelTitle.textContent = "level " + level;
        checkColor();
    });
}
