function printReverse(arr){
    console.log(arr)
    for(i=0; i< arr.length; i++){
        console.log(arr[arr.length-i-1])
    }
}
printReverse([2,5,6,3,7,9])


function isUniform(arr){
    first = arr[0]
    for(i=1; i<arr.length; i++){
        if(arr[i] != first){
            console.log("false")
            return false
        }
    }
    console.log("true")
}

isUniform([6,6,6,6,5])

function sumArray(arr){
    sum = 0 
    arr.forEach(number => {
        sum += number
    });
    console.log(sum)
}
sumArray([6,6,6,6,5])