var Letter = require("./letter.js")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Word = function(wordPlaceholder){
    // An array of new Letter objects representing the letters of the underlying word
    this.lettersInWord = [];
        

    // looping over the letters in the word to create the array of Letter objects 
    // this.lettersInWord = [Letter('c'), Letter('a'), Letter('t')]
    for (var i = 0; i < wordPlaceholder.length; i++) {
        // this identifies a letter in the word (at a specific index) and stores in the variable called character
        var character = wordPlaceholder.charAt(i);
    // console.log(character)
    // passing in (character) into the new Letter object constructor and asigns that object into the variable of "letter"
        var letter = new Letter(character);
        // pushing a new letter object into the lettersInWord array
        this.lettersInWord.push(letter);
    }

    // console.log(this.lettersInWord);

    // A function that returns a string representing the word.
    this.displayWord = function(){
        //This should call the function on each letter object (the first function defined in Letter.js) that 
        var wordToBeGuessed = "";
        for (var i = 0; i < this.lettersInWord.length; i++){
            // displays the character or an underscore and concatenates those together.
            // accessing the letter at index[i] in the array, and storing it as a variable called letterObject
            var letterObject = this.lettersInWord[i];
            // console.log(letterObject.display());
            wordToBeGuessed = wordToBeGuessed + letterObject.display() + " ";
        }

        return wordToBeGuessed;
    };
   
    // A function that takes a character as an argument
    this.letterChecker = function(guessedCharacter){

        for (var i = 0; i < this.lettersInWord.length; i++){
            var letterObject = this.lettersInWord[i];
            letterObject.checker(guessedCharacter);
        }
    
    //and calls the guess function on each letter object (the second function defined in Letter.js)
    }   
}

module.exports = Word;

var cat = new Word("cat");
console.log(cat.displayWord());
cat.letterChecker('a');
console.log(cat.displayWord());
// // var test2 = new Word("dog");
// console.log(test)
// test.checker("l")
// // console.log(test2)
// console.log(test.display())
