var Word = require("./Word");
var inquirer = require("inquirer");

var currentWord;
setWord();

function setWord() {
    var wordsList = ["hello", "goodbye", "bah", "humbug", "you", "lousy", "animal"];
    var word = wordsList[Math.floor(Math.random() * 7)];
    currentWord = new Word(word);
    currentWord.displayWord();
}


function game() {
    inquirer.prompt([
        {
            message: "Please guess a letter.",
            name: "guess"
        }
    ]).then(function(response, error) {
        currentWord.updateGuessed(response.guess);
        if (currentWord.isFinished() === false) {
            game();
        }
        else {
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain"
                }
            ]).then(function(response, error) {
                if (response.playAgain) {
                    setWord();
                    game();
                }
            })
        }
    })
}
game();