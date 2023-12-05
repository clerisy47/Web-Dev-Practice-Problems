class Game{
    constructor(){
        this.colors = ["red", "blue", "green", "yellow"]
        this.gamePattern = []
        this.userPattern = []
        this.level = 1
        this.gamePattern.push(this.colors[Math.floor(Math.random()*4)])
        this.body = document.querySelector('body')
        this.buttons = document.querySelectorAll(".btn")
        this.levelTitle = document.querySelector("#level-title")
        this.initializeGame()
        this.gameStarted = false
    }
    initializeGame(){
        this.body.addEventListener("keydown", ()=>{
            if (! this.gameStarted){
                this.levelTitle.textContent = 'Level 1'
                this.gameStarted= true
                this.startGame()
            }
        })
    }
    startGame(){
        this.buttons.forEach((button) => {
            button.addEventListener("click", ()=>{
                button.classList.add("pressed")
                let sound = new Audio("sounds/"+ button.id+".mp3")
                sound.play()
                setTimeout(()=>button.classList.remove("pressed")
                ,100)
                this.userPattern.push(button.id)
                this.level += 1
                this.levelTitle.textContent = "level " + this.level
            })
        })
    }
}

let game = new Game()





