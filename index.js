var Word = require("./Word");
var inquirer = require("inquirer");
var randomWords = require("random-words");

var currentWord;
setWord();

function setWord() {
    var word = randomWords();
    currentWord = new Word(word);
    currentWord.displayWord();
    // console.log(word);
}

count = 10;

function game() {
    console.log(count);
    inquirer.prompt([
        {
            message: "Please guess a letter.",
            name: "guess"
        }
    ]).then(function(response, error) {
        currentWord.updateGuessed(response.guess);
        if ((currentWord.isFinished() === false) && (count > 1)) {
            count--;
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
                    count = 10;
                    setWord();
                    game();
                }
            })
        }
    })
}
game();