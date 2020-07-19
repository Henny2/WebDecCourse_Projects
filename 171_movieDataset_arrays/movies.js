movies = [{
    "name": "Frozen 1",
    "watched": true,
    "rating": 5,
},
{
    "name": "The Incredibles",
    "watched": false,
    "rating": 3.4,
},
{
    "name": "WW2 Documentary",
    "watched": false,
    "rating": 3,
},
{
    "name": "Pets 2",
    "watched": true,
    "rating": 4.5,
}];

movies.forEach(movie => {
    if(movie.watched){
        print_string = "You watched \"" + movie.name+ "\" -" + movie.rating.toString() + " stars"
    }
    else{
        print_string = "You haven't watched \"" + movie.name+ "\" - " + movie.rating.toString()
    }
    
    //console.log("You watched "+movie.name)
    // console.log(movie.watched)
    // console.log(movie.rating)
    console.log(print_string)
    
});