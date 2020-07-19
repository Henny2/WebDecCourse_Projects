let numSquares = 6;
var colors = generateRandomColors(numSquares);

var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("ColorDisplay")
var messageDisplay = document.querySelector("#message")
let resetButton = document.querySelector("#reset")

// let easyButton = document.querySelector("#easyBtn")
// let hardButton = document.querySelector("#hardBtn")

let modeButtons = document.querySelectorAll(".mode")

for(let i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        this.textContent === "Easy" ? numSquares = 3: numSquares =6;
        reset()
    })
}

function reset(){
    messageDisplay.textContent=""
    colors = generateRandomColors(numSquares);
    // select a new picked color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i ++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
            squares[i].style.display = "block"
        }
        else{
            squares[i].style.display = "none"
        }
        
    }
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = "steelblue"
}

// easyButton.addEventListener("click", function(){
//     numSquares = 3;
//     easyButton.classList.add("selected")
//     mode = "easy"
//     hardButton.classList.remove("selected")
//     colors = generateRandomColors(numSquares)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor
//     for(let i = 0; i < squares.length; i ++){
//         if(i<3){
//             squares[i].style.backgroundColor = colors[i]
//         }
//         else {
//             squares[i].style.display = "none"
//         }
//     }
//     resetButton.textContent = "New Colors"
//     h1.style.backgroundColor = "steelblue"
// });
// hardButton.addEventListener("click", function(){
//     numSquares = 6
//     mode = "hard"
//     hardButton.classList.add("selected")
//     easyButton.classList.remove("selected")
//     colors = generateRandomColors(numSquares)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor
//     for(let i = 0; i <squares.length; i ++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display ="block"

//     }
//     resetButton.textContent = "New Colors"
//     h1.style.backgroundColor = "steelblue"
// });


resetButton.addEventListener("click", function(){
    // generate all new colors
    reset()
    
})


colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i ++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function(){
        clicked_Color = this.style.backgroundColor
        if(clicked_Color === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clicked_Color)
            h1.style.backgroundColor= clicked_Color
            resetButton.textContent = "Play again?"
        }
        else{
            // fading it out, same as background
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try again!"
        }
    })

};

function changeColors(color){
    // loop thorugh all sqaures
    // give them all the color
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    // pick random number between 0 and 1
    var randomNum = Math.floor(Math.random() * colors.length)
    return colors[randomNum]
}

function generateRandomColors(number){
    var colors_arr = []
    for(let i=0; i < number; i++){
        const col = randomColor()
        colors_arr.push(col)
    }
    return colors_arr
}

function randomColor(){
    var rgb = []
    var color_string = "rgb("
    for(i=0; i<3; i++){
        var value = Math.floor(Math.random()*256)
        rgb.push(value)
        color_string += value
        if(i<2){
            color_string += ", "
        }
        else{
            color_string+=")"
        }
    }
    return color_string
}
