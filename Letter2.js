function Letter(word) {
    this.letters = Array.from(word);
    // console.log(this.letters);
    this.lettersObj = [];
    self = this;
    
    this.letters.forEach(function(letter) {
        var lettersObjSetter = {
            realLetter: letter,
            guessed: false
        };
        self.lettersObj.push(lettersObjSetter);
    })

    // console.log(this.lettersObj);
}

Letter.prototype.displayWord = function() {
    var currentDisplay = [];
    this.lettersObj.forEach(function(letterObj) {
        if (letterObj.guessed === false) {
            currentDisplay.push("_");
        }
        else {
            currentDisplay.push(letterObj.realLetter);
        }
    })
    var displayStr = currentDisplay.join(" ");
    console.log(displayStr);
}

Letter.prototype.determineGuessed = function(guessedLetter) {
    this.lettersObj.forEach(function(letterObj) {
        if (letterObj.realLetter == guessedLetter) {
            letterObj.guessed = true;
            console.log(letterObj);
        }
    })
}

var hello = new Letter("hello");
hello.displayWord();

var guessedLetter = "e";
hello.determineGuessed(guessedLetter);
hello.displayWord();

guessedLetter = "s";
hello.determineGuessed(guessedLetter);
hello.displayWord();

guessedLetter = "l";
hello.determineGuessed(guessedLetter);
hello.displayWord();
// var antidis = new Letter("antidisestablishmentarianism");




module.exports = Letter2;