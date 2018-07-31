function Letter(letter) {
    this.realLetter = letter;
    this.guessed = false;
}

Letter.prototype.displayLetter = function() {
    if (this.guessed === false) {
        return "_";
    }
    else {
        return this.realLetter;
    }
}

Letter.prototype.updateGuessed = function(guess) {
    if (this.realLetter === guess) {
        this.guessed = true;
    }
}

// var h = new Letter("h");
// var b = new Letter("b");

// var guess = "h";
// h.updateGuessed(guess);
// console.log(h.displayLetter());

// b.updateGuessed(guess);
// console.log(b.displayLetter());

module.exports = Letter;