div = document.querySelector("div")
console.log(div)
console.log(document.querySelector("div").style.backgroundColor)

let isWhite = true
document.querySelector("button").addEventListener("click", function(){
    if(isWhite == true){
        document.querySelector("div").style.backgroundColor = "pink"
    }
    else{
        document.querySelector("div").style.backgroundColor = "white"
    }
    isWhite = !isWhite
})