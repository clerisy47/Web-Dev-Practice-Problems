let buttons = ["red", "blue", "green", "yellow"];
let userPattern = []
let gamePattern = []
let level = 1
let gameRunning = false
let levelTitle = document.querySelector("#level-title")

function nextSequence(){
    userPattern = []
    document.querySelector("#level-title").textContent = "level "+ level
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
    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] !== gamePattern[i]) {
            levelTitle.textContent = "Game Over"
            gameRunning = false
            level = 1
            gamePattern = []
            userPattern = []
            return
        }
    }

    if (userPattern.length === gamePattern.length) {
        userPattern = []
        level += 1
        setTimeout(() => {
            nextSequence()
        }, 1000)
    }
}


document.querySelector('body').addEventListener("keydown", () => {
    if (!gameRunning) {
        levelTitle.textContent = 'level'+level
        gameRunning = true
        nextSequence()
    }
});

for (const button of document.querySelectorAll(".btn")) {
        button.addEventListener("click", () => {
        playAnimation(button)
        userPattern.push(button.id)
        levelTitle.textContent = "level " + level
        checkColor()
    })
}
