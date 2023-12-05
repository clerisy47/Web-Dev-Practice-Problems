class Game{
    constructor(){
        this.colors = ["red", "blue", "green", "yellow"]
        this.gamePattern = []
        this.userPattern = []
        this.level = 1
        this.body = document.querySelector('body')
        this.buttons = document.querySelectorAll(".btn")
        this.levelTitle = document.querySelector("#level-title")
        this.initializeGame()
        this.gameRunning = false
    }
    randomColorGenerator(){
        let color = this.colors[Math.floor(Math.random()*4)]
        this.gamePattern.push(color)
        this.colorAnimation(document.querySelector("#"+color))
    }
    colorAnimation(button){
        button.classList.add("pressed")
        let sound = new Audio("sounds/"+ button.id+".mp3")
        sound.play()
        setTimeout(()=>button.classList.remove("pressed")
        ,100)
    }
    initializeGame(){
        this.body.addEventListener("keydown", ()=>{
            if (! this.gameRunning){
                this.levelTitle.textContent = 'Level 1'
                this.gameRunning= true
                this.nextSequence()
            }
        })
    }
    nextSequence(){
            this.randomColorGenerator()
            this.buttons.forEach((button) => {
                button.addEventListener("click", ()=>{
                    this.colorAnimation(button)
                    this.userPattern.push(button.id)
                    this.level += 1
                    this.levelTitle.textContent = "level " + this.level
                })
            this.checkColor()
        })}
    checkColor(){
        if (this.userPattern= this.gamePattern){
            alert("Good, its matched")
            this.userPattern = []
            this.nextSequence()
        }
        else{
            alert("Bad, it didn't matched")
        }
    }
    }
let game = new Game()





