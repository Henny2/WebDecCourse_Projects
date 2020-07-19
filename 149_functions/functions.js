function isEven(number){
    console.log(number%2)
    if(number%2 == 0){
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }
}

// result = isEven(5)

function factorial(number){
    console.log()
    if(number == 0){
        return 1
    }
    let result = 1
    for(i=1; i<=number; i++){
        result*=i
    }
    console.log(number)
    console.log(result)
    return result
}

//console.log(factorial(0))


function kebabToSnake(input_string){
    new_string = input_string.replace("-", "_")
    return new_string
}

console.log(kebabToSnake("hello-world"))