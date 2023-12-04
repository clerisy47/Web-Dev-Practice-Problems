function playSound(key){
    switch (key){
        case 'w':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break
        case 'a':
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break
        case 's':
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break
        case 'd':
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break
        case 'j':
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break
        case 'k':
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break
        case 'l':
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break
    }
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