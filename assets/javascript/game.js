

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k' ,'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint;            // Word getHint
  var word;              // Selected word
  var guess;             // guess
  var guesses = [ ];      // Stored guesses
  var lives;             // Lives
  var counter;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showcategory = document.getElementById("scategory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
   
       } //for

  }  //buttons

  
  // Select category
  var selectCat = function () {


if (chosenCategory === categories[0]) {
     categoryName.innerHTML = "The Chosen Category is Flowers";
    } else if (chosenCategory === categories[1])  {
     categoryName.innerHTML = "The Chosen Category Is Trees";
   } else if (chosenCategory === categories[2])  {
     categoryName.innerHTML = "The Chosen Category Is Grasses";
    }
console.log(selectCat)
console.log(chosenCategory)
}  //select cat function

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);

      wordHolder.appendChild(correct);
      correct.appendChild(guess);
      console.log(guess);
      console.log(guesses)

    }
  }
  

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives left, choose wisely grasshopper!";
    if (lives < 1) {
      var won = false;
      showLives.innerHTML = "You Lose! Game Over!! If you want to try again push the Play Again below";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        var won = true;
        showLives.innerHTML = "Congratulations! You Win!"    

      } //if
    }
     //for
  }  //comments = function ()

  

  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
          console.log(guess)
        } 
        console.log(guess)
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }  //check function
 
    
// Play

  play = function () {
    categories = [
        ["rose", "poppy", "peony", "dahlia", "marigold"],
        ["birch", "myrtle", "spruce", "oak", "maple"],
        ["miscanthus", "morning-light", "maiden", "pampas", "switchgrass"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");

    console.log(word);

    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();


  }  // play function

  play()
  
  //Hint

    hint.onclick = function() {

      hints = [
        ["Valentines's day gift", "Flanders", "Sarah Bernhardt", "Dinner Plate", "Old-fashioned"],
        ["River", "Lilac of the South", "Colorado", "Live", "Crimson Queen"],
        ["Can run rampant", "Glows in the sun", "Many varieties", "Very Tall", "Could be used as a whip"]
    ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue:-" +  hints[categoryIndex][hintIndex];
  };  //hint function

   // Reset to play again

    document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";


    play();

  }  // document.getElementById('reset').onclick = function()
}  // window.onload = function
