let max= 6
let min = 1

let randomNumber1 = Math.floor(Math.random()*max) + min
let randomNumber2 = Math.floor(Math.random()*max) + min

console.log(randomNumber1)
console.log(randomNumber2)
dice_obj = {1:"images/dice1.png", 2:"images/dice2.png", 3:"images/dice3.png", 4:"images/dice4.png", 5:"images/dice5.png", 6:"images/dice6.png"}
let image_1 = document.querySelector('.img1')
let image_2 = document.querySelector('.img2')
let text = document.querySelector(".container h1")
image_1.setAttribute("src",dice_obj[randomNumber1])
image_2.setAttribute("src",dice_obj[randomNumber2])

if (randomNumber1> randomNumber2){
    text.innerHTML = "🚩 Player 1 wins !"
}
else if(randomNumber1< randomNumber2){
    text.innerHTML = "Player 2 wins ! 🚩"
}

else{
    text.innerHTML= "Its a draw!"
}