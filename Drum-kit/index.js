function playSound(key){
    obj = {'w': "crash", "a": "snare", "s": "kick-bass", "d":"tom-1", "j": "tom-2", "k": "tom-3", l:"tom-4"}
    let sound = new Audio("sounds/"+ obj[key]+ ".mp3")
    sound.play()
}

function buttonAnimation(key){
    let button = document.querySelector('.'+ key)
    button.classList.add("pressed")
    setTimeout(()=>{
        button.classList.remove("pressed")
    }, 100)

}
let drums = document.querySelectorAll(".drum")
for(let i=0; i< drums.length; i++){
    drums[i].addEventListener("click" ,() =>{
        let key = drums[i].innerText
        playSound(key)
        buttonAnimation(key)

    })
}
document.addEventListener("keydown", (event) => {
    playSound(event.key)
    buttonAnimation(event.key)
})