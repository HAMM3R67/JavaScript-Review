var threeItems = [1, 2, 3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function (){
  return threeItems.length
}

last(); //Should be 3

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];

  var removeOdd = function(){
    for(var i = 0; i < evenArray.length; i++){
      if(evenArray[i] % 2 !== 0){
        evenArray.splice(i, 1);
        i--;  //This will take a step back to double check and not skip when there are two odd numbers together
      }
    }
  }

removeOdd(); //calls the removeOdd function

evenArray //only even numbers should remain

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
  var getRandomArbitrary = function () {
    return Math.floor(Math.random() * (30 - 0) + 0);
  };
  var randomArray = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];

    var findRandom = function(){
      var randNum = getRandomArbitrary(); //setting the random number function to a variable
      console.log(randNum);  //this just shows me what the number is so I can make sure my check is working
      for(var i = 0; i < randomArray.length; i++){
      if(randNum === randomArray[i]){   //if the number we get matches one of the array properties
        alert(true);                    //alert true
        return;
      }
    }
    alert (false);                      //if it doesn't match alert false
  }
  
  findRandom();

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
  var first = [1, 2, 3, 4, 5];
  var second;
  
  var second = first.slice();  //The slice() method returns a shallow copy of a portion of an array into a new array object. In this case though, I don't set any parameters so it slices the whole array from first.
  second.push(6, 7);
  
  first
  second

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  //write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
  var sentence = "Dev Mountain is the best"

var longest = function(str){
  var splitStr = str.split(' ');   //this line takes a whatever string is put into the function and splits it into an Array
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

  var capitalize = function(str) {
    strVal = '';
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        strVal += str[i].substring(0, 1).toUpperCase() + str[i].substring(1, str[i].length) + ' '
    }
    return strVal
}

  /* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



  var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}