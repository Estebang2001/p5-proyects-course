// Variables

let pickedColor = document.getElementById("colorDisplay")

let rgbRandom = ""

let lastGame = 6

let cuadrados = document.querySelectorAll(".square")
let cuadradosOriginales = document.querySelectorAll(".square")

let cuerpo = document.querySelector("body")

pickedColor.style.color = "white"
let botonEasy = document.getElementById("easy")
let startIndex = cuadrados.length - 3 

let botonHard = document.getElementById("hard")
colors = [
    
]

// Funciones
hard.style.backgroundColor = "tomato"
let generateRandomColors = function (num) {
    colors = [

    ]
    for (let i = 0; i < num; i++) {
     r = Math.floor(Math.random()*(255))
     g = Math.floor(Math.random()*(255))
     b = Math.floor(Math.random()*(255))
     
     colors.push(`rgb(${r}, ${g}, ${b})`)
    }
}

generateRandomColors(6)


let getNum = function () {
    rgbRandom = Math.floor(Math.random()*(colors.length))
    rgbPicked = pickedColor.textContent = colors[rgbRandom]
}

getNum()

let addColors = function() {
    for (let i = 0; i < colors.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i]
    }
}

addColors()

// Funcionamiento si esta en Easy el juego



botonEasy.addEventListener("click", function(){
    colors = [

    ]

    generateRandomColors(3)
    getNum()
    addColors()
    
    let startIndex = cuadrados.length - 3;

    for (let i = startIndex; i < cuadrados.length; i++) {
    cuadrados[i].style.display = "none";
    h1.style.backgroundColor = "#232323"
    message.textContent = ""
    lastGame = 3
    easy.style.backgroundColor = "tomato"
    hard.style.backgroundColor = ""
}
    
})

// Funcionamiento si esta en hard el juego



botonHard.addEventListener("click", function(){

    generateRandomColors(6)
    getNum()
    addColors()
    for (let i = startIndex; i < cuadrados.length; i++) {
        cuadrados[i].style.display = "block";
    
    }
    h1.style.backgroundColor = "#232323"
    message.textContent = ""
    lastGame = 6
    hard.style.backgroundColor = "tomato"
    easy.style.backgroundColor = ""
})

// Funcionamiento del juego

cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', function() {
      if (cuadrado.style.backgroundColor == rgbPicked) {
        console.log('¡Correcto!');
        message.textContent = "¡Correcto!"
        h1.style.backgroundColor = rgbPicked
        changeColors()
      } else {
        cuadrado.style.backgroundColor = "#232323"
        message.textContent = "Intentalo nuevamente"
      }
    });
  });

  changeColors = function () {
    for (let i = 0; i < colors.length; i++) {
    cuadrados[i].style.backgroundColor = rgbPicked
}}

// Funcionamiento si se resetea el juego

let newGame = document.getElementById("reset")

newGame.addEventListener("click", function(){
    generateRandomColors(lastGame) 
    getNum()
    addColors()   
    h1.style.backgroundColor = "#232323"
    message.textContent = ""
})