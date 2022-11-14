// This is a workspace for testing programs before moving them into a folder.

// Adapted from H046/01 Computing Principles
// June 2016 Question 7

// A DIY store has an offer: ‘Spend £20 or more on 
// decorating products and get 10% off all gardening
// products.’
// When items are scanned in at the checkout they 
// are stored in a 2-dimensional array called
// purchases, which stores the item name, category and price.
// A receipt with the appropriate discounts deducted is then produced.

// Write a function, using the array purchases, to:
// • determine which items are given a discount
// • calculate the total price to pay
// • prints an itemised receipt to the console
// [need to read the exam question for the format of the receipt]

var prompt = require("prompt-sync")();

var purchases = [
    ["Matt Pink Paint", "Decorating", 6.99],
    ["Floral Wallpaper", "Decorating", 7.99],
    ["Magnolia Gloss Paint", "Decorating", 5.49],
    ["Weed Killer", "Gardening", 2.99],
    ["Picture Frame", "Decorating", 8.99],
    ["Plug Socket", "Electrics", 6.99],
    ["Doorbell", "Electrics", 15.99],
    ["Matt White Paint", "Decorating", 4.99],
    ["Tiles", "Decorating", 19.99],
    ["Grass Seed", "Gardening", 1.99],
    ["Lawn Mower", "Gardening", 129.99]
  ]
  
  function processReceipt(purchases) {
    var decoratingCosts = 0, gardeningCosts = 0, otherCosts = 0
    for(let i in purchases){
        console.log(purchases[i][0] + " > £" + purchases[i][2])
        if(purchases[i][1] == "Decorating"){
            decoratingCosts += purchases[i][2]
        }else if(purchases[i][1] == "gardeningCosts"){
            gardeningCosts += purchases[i][2]
        }else{
            otherCosts += purchases[i][2]
        }
    }
    if(decoratingCosts > 20){
        console.log("10% discount applied to gardening items")
        gardeningCosts = gardeningCosts * 0.9
    }
    return("TOTAL: £" + (decoratingCosts + gardeningCosts + otherCosts).toFixed(2))
  }

  console.log(processReceipt(purchases))