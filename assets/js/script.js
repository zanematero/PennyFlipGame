// TODO: Declare any global variables we need
let numberHeads = 0;
let numberTails = 0;
let percentHeads = 0;
let percentTails = 0;
let result = 0;
let totalFlips = 0;
let image = document.querySelector("img");
let message = document.querySelector("#result");
let flipButton = document.querySelector("#flip");
let headsArea = document.querySelector("#heads");
let headsPercentArea = document.querySelector("#heads-percent");
let tailsArea = document.querySelector("#tails");
let tailsPercentArea = document.querySelector("#tails-percent");
let clearButton = document.querySelector("#clear");
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click", function(e) {
        totalFlips ++
        // TODO: Determine flip outcome
        let result = Math.round(Math.random() * 100);
        console.log(result);
        // TODO: Update image and status message in the DOM
        if (result > 50) {
            numberHeads ++
            console.log("numberHeads: " + numberHeads)
            image.src ="/Users/zanematero/PennyFlipGame/assets/images/penny-tails.jpg";
            message.textContent = "You flipped tails!";
        } else if ( result <= 50) {
            numberTails ++
            console.log("numberTails: " + numberTails)
            image.src ="/Users/zanematero/PennyFlipGame/assets/images/penny-heads.jpg";
            message.textContent = "You flipped heads!";
        }

        percentHeads = (numberHeads/totalFlips) * 100
        console.log("percentHeads: ", percentHeads)
        percentTails = (numberTails/totalFlips) * 100
        console.log("percentTails: ", percentTails)

        headsArea.textContent = `${numberHeads}`
        tailsArea.textContent = `${numberTails}`
        headsPercentArea.textContent = `${percentHeads}%`
        tailsPercentArea.textContent = `${percentTails}%`
    })

    clearButton.addEventListener("click", function(e){
        image.src ="/Users/zanematero/PennyFlipGame/assets/images/penny-heads.jpg";
        message.textContent = "Let's Get Rolling!"
        numberHeads = 0;
        numberTails = 0;
        percentHeads = 0;
        percentTails = 0;
        totalFlips = 0;
    })
    })
        //let heads 0-49
        //let tails 51-99

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)