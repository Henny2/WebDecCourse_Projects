
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    user_input = prompt("what do you wanna do?")
todos = []
while(user_input!="quit"){
    if(user_input==="list"){
        alert(todos)
    }
    else if(user_input ==="new"){
        new_todo = prompt("What do you wanna add?")
        todos.push(new_todo)
    }
    user_input = prompt("what do you wanna do?")
}
alert("you quit the app")
  }, 500);



