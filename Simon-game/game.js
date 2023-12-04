let colors = ["red", "blue", "green", "yellow"]
let pattern = []
pattern.push(colors[Math.floor(Math.random()*4)])

let currentButton = document.querySelector("#"+ pattern[pattern.length-1])

currentButton.addEventListener("click", ()=> {
    currentButton.classList.add("pressed")
    let sound = new Audio("sounds/"+ pattern[pattern.length-1]+".mp3")
    sound.play()
    setTimeout(()=>currentButton.classList.remove("pressed")
    ,100)
})