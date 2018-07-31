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


module.exports = Letter;