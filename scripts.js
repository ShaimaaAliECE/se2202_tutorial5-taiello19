let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeButton = document.createElement('button');
initializeButton.innerText = 'Click to Start!';
document.getElementById('game-over-lbl').appendChild(initializeButton);
initializeButton.addEventListener('click', (startEvent) =>{startEvent.target.hidden = true;})

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayerInd = document.querySelector('b');
let nxtPlayer = 'Next Player: ' + nextPlayer;
nextPlayerInd.innerText = nxtPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 0; i < 9; i++){
       var cell = 'c'+ (i+1);
       var cellButton = document.createElement('button');
       document.getElementById(cell).appendChild(cellButton);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let clickedBtn = event.target;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   clickedBtn.textContent = '[' + nextPlayer + ']'

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    clickedBtn.disabled = true;

    if (nextPlayer === 'X'){
        nextPlayer = 'O';
    }
    else {
        nextPlayer = 'X';
    }


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        lbl.innerText('Game Over');
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let cellButtonCheck = true;
    for (let i = 0; i < btns.length; i++){
        if(!btns[i].disabled){
            cellButtonCheck = false;
        }
    }
   return cellButtonCheck;
}
