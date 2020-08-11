var scores=[90,98,89,100,100,86,94]
var scores2=[40,65,77,82,80,54,73,63,95,49]

function average(scores){
    let sum = 0
    for(i=0; i<scores.length; i++){
        sum += scores[i]
    }
    ave = sum/scores.length
    av_rounded = Math.round(ave)
    console.log(av_rounded)
}
average(scores)
average(scores2)