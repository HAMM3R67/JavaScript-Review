//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).
var food = ['berries', 'antelope', 'grass', 'fish']

var Animal = function(species, name, legs, color, food){
  this.species = species,
  this.name = name,
  this.legs = legs,
  this.color = color,
  this.food = food
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender){
    return {
      name: name,
      age: age,
      height: height,
      gender: gender
    };
}
//Create a animal array and a person array.

  var animalArr = [];
  var personArr = [];


//Create two instances of Animal and push those into your animal array

  var bear = new Animal("bear", "kodiak", "four", "brown", food);
  var tiger = new Animal("tiger", "bengal", "four", "orange", food);
  animalArr.push(bear, tiger)


//Create two instances of person and push those into your person array.

  var trevor = person('Trevor', 28, '6 feet 6 inches', 'male');
  var brittney = person('Brittney', 29, '5 feet 8 inches', 'female');
  personArr.push(trevor, brittney);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function(){
    return this[Math.floor(Math.random() * this.length)]
  }


//At this point, if we wanted to add something to every istance of person could we? 

  //No, you would have to add something to each instance of person because it is not a Constructor Obect



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/