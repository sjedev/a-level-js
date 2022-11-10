var prompt = require("prompt-sync")();

var toppings = ["cheese","tomato","mushrooms","chicken"]
var finish = false
var suggestion = ""

do{
    if(toppings.indexOf(suggestion = prompt("Enter a topping: ").toLowerCase()) == -1){
        toppings.push(suggestion)
    }
    else{
        console.log("Already in the list!")
    }
    console.log(toppings)
    if(prompt("Would you like to enter another? True/False: ").toLowerCase() == "false"){
        var finish = true
    }
}while(finish === false);