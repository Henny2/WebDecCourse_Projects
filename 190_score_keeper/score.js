let p1_button = document.getElementById("p1")
let p2_button = document.getElementById("p2")
let reset_button = document.getElementById("reset")

let p1_display = document.querySelector("#p1_display")
let p2_display = document.querySelector("#p2_display")

let p1_score = 0;
let p2_score = 0;

let p = document.getElementsByTagName("p")[0]

let gameOver = false; 
var winningScore = 5;

let input_field = document.querySelector("input");

// console.log(document.querySelector("input"))

p1_button.addEventListener("click", function(){
    console.log(winningScore+"p1")
    if(!gameOver){
        
        if(p1_score>= winningScore){
           
            gameOver = true
            //console.log("Game OVER!")
            p1_display.classList.add("winner");
            return
        }
        p1_score ++;
        
        p1_display.textContent = p1_score
        if(p1_score>= winningScore){
           
            gameOver = true
            //console.log("Game OVER!")
            p1_display.classList.add("winner");
            return
        }
    }
})

p2_button.addEventListener("click", function(){
    if(!gameOver){
        
        if(p2_score>=winningScore){
            
            gameOver=true;
            p2_display.classList.add("winner");
            return 
        }
        p2_score ++;
        p2_display.textContent = p2_score
        if(p2_score>=winningScore){
            
            gameOver=true;
            p2_display.classList.add("winner");
            return 
        }
    }

    
})

reset_button.addEventListener("click", function(){
    gameOver = false;
    p1_score= 0;
    p2_score = 0;
    p2_display.textContent = p2_score
    p1_display.textContent = p1_score
    p1_display.classList.remove("winner");
    p2_display.classList.remove("winner");

})


input_field.addEventListener("input", function(){
    winningScore = Number(input_field.value)
    console.log("winning" +winningScore)
    gameOver = false;
    p.textContent = "Playing to: "+ winningScore
    })

