// //==========Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }

let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
};

function displayFavoriteFoods(person) {
for (let key in person) {
  if (Array.isArray(person[key])) {
    console.log(`${key}: ${person[key].join(", ")}`);
  } else if (typeof person[key] === 'object') {
    console.log(`${key}:`);
    for (let shakePlace in person[key][0]) {
      console.log(`  ${shakePlace}: ${person[key][0][shakePlace]}`);
    }
  } else {
    console.log(`${key}: ${person[key]}`);
  }
}
}

// Example usage
displayFavoriteFoods(person3);



  //=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Use an arrow function to create the printInfo method
  Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age
  Person.prototype.addAge = (years) => {
    this.age += years;
  };
  
  // Create two people using the 'new' keyword
  let person1 = new Person("John", 25);
  let person2 = new Person("Jane", 30);
  
  // Print both of their infos
  person1.printInfo();
  person2.printInfo();
  
  // Increment one person's age by 3 years
  person1.addAge(3);
  
  // Print the updated info
  person1.printInfo();
  person2.printInfo();




//   / =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }
  
  // Example usage:
  checkStringLength("Hello World")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  
  checkStringLength("Hi")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
  

    // Code Wars#1
//     Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(code) {
  let value = 0;
  const result = [];

  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case 'i':
        value++;
        break;
      case 'd':
        value--;
        break;
      case 's':
        value *= value;
        break;
      case 'o':
        result.push(value);
        break;
      default:
        // Ignore invalid characters
        break;
    }
  }

  return result;
}

// Example
console.log(parse("iiisdoso"));  // Output: [ 8, 64 ]


// // Code Wars #2
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  // Initialize an array to store the ratios of available ingredients to required ingredients
  const ratios = [];

  // Iterate through each ingredient in the recipe
  for (const ingredient in recipe) {
    // If the ingredient is not available, return 0 cakes
    if (!available.hasOwnProperty(ingredient)) {
      return 0;
    }
    // Calculate the ratio and push it to the array
    ratios.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }

  // Return the minimum ratio, as that determines the maximum number of cakes Pete can bake
  return Math.min(...ratios);
}

// Examples
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// Output: 2

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
// Output: 0
