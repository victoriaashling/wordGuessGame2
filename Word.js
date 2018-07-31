var Letter = require("./Letter");

function Word(word) {
    this.letters = Array.from(word);
    this.letterObjs = [];
    var self = this;

    this.letters.forEach(function(letter) {
        var newLetter = new Letter(letter);
        self.letterObjs.push(newLetter);
    })
}

Word.prototype.displayWord = function() {
    var wordy = [];
    this.letterObjs.forEach(function(letter) {
        wordy.push(letter.displayLetter());
    })
    console.log(wordy.join(" "));
}

Word.prototype.updateGuessed = function(guess) {
    this.letterObjs.forEach(function(letter) {
        letter.updateGuessed(guess);
    })
    this.displayWord();
}

// var hello = new Word("hello");

// hello.displayWord();
// var guess = "e";
// hello.updateGuessed(guess);

// guess = "l";
// hello.updateGuessed(guess);

// guess = "s";
// hello.updateGuessed(guess);

module.exports = Word;
