var threeItems = [1, 2, 3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last() {
  return threeItems.length[];
}

last(); // 3

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];

  function evenFinder(){
  for (var i = 0; i < evenArray.length; i++) {
      if(evenArray[i] % 2 !== 0){
        evenArray.splice(i, 1)
        i--
      }        
    }
  }
  
  evenArray

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
  var getRandomArbitrary = function () {
    return Math.floor(Math.random() * (30 - 0) + 0);
  };
  var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

  var randomFinder = function(){  
    var random = getRandomArbitrary();
    console.log(random);
    for(var i = 0; i < randomArray.length; i++){
      if(random === randomArray[i]){
        alert(true);
        return;
      }
    }
    alert(false);
  }

randomFinder();
  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
  var first = [1, 2, 3, 4, 5];
  var second;

  var second = first.slice();
  second.push(6, 7);
  

  alert(first) //[1,2,3,4,5];
  alert(second) //[1,2,3,4,5,6,7];



  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
  var sentence = "Dev Mountain is the best"

var longest = function(str){
  var splitStr = str.split(' ');   //this line takes a whatever string is put into the function and splits it into 
  var longestWord = '';            //this is a variable starting point to compare each index (word) that we just created
  for(var i = 0; i < splitStr.length; i++){   //this loops through the index we created at the beginning of the function
    if(splitStr[i].length > longestWord.length){   //this if statement looks at each index within the index (ie Dev is and index but it is also 'D', 'E', 'V') we are seeing if it is greater than longestWord (on the first loop it is '' blank)
      longestWord = splitStr[i];  //if the above statement is true, this line reassigns longestWord to that index string, then the loop begins again.
    }
  }
  return longestWord;
}

longest(sentence);


  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //write a function called capitalize that takes in the myPoem variable and capitalizes every word 
  var myPoem = 'What is a jQuery but a misunderstood object?'
  //What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

myPoem = myPoem.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
alert(myPoem);

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}