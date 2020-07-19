// complicated version with if else

// $("li").click(function(){
//     console.log($(this).css("color"))
//     // if it is gray, no line through and black
//     if ($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             "text-decoration": "none",
//             "color": "black"
//         })
//     }
//     else{
//         $(this).css({
//             "text-decoration": "line-through",
//             "color": "gray"
//         })
//     }
// })

// version with using a class
// $("li").click(function(){
//     $(this).toggleClass("completed")
// });

// $(".delete").click(function(event){
//     // could use parent() instead of the closest("li") to get the li too
//     $(this).closest('li').fadeOut(200,function(){
//         // to remove it after the fadeout
//         $(this).remove()
//     });
//     event.stopPropagation();
// })

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

$("ul").on("click", ".delete", function(event){
    // could use parent() instead of the closest("li") to get the li too
    $(this).closest('li').fadeOut(400,function(){
        // to remove it after the fadeout
        $(this).remove()
    });
    event.stopPropagation();
})






// addDeleteAndDoneEvent();

$("input[type=text]").keypress(function(event){
    if(event.charCode === 13){
        // alert("new ToDo:" + $(this).val())
        $("ul").append("<li><span class='delete'><i class='fas fa-trash'></i></span> "+ $(this).val() +"</li>")
        $(this).val("");
        // addDeleteAndDoneEvent();
        
    }
    
})



// $("input[type=text]").keypress(function(e){
//     console.log(e)
// console.log(e.charCode)
//    console.log("key pressed")})
// $("input[type=text]").val()

function addDeleteAndDoneEvent(){
    $("li").click(function(){
        $(this).toggleClass("completed")
    });
    
    $(".delete").click(function(event){
        // could use parent() instead of the closest("li") to get the li too
        $(this).closest('li').fadeOut(400,function(){
            // to remove it after the fadeout
            $(this).remove()
        });
        event.stopPropagation();
    })
}



$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle()
})