/*for (i = 44; i < 67; i++) {
    console.log(i);
}
console.log("hello".length);
console.log("moog")
console.log(7)
console.log(7.7)
console.log(false)
console.log("hello".toUpperCase());
console.log("hello".toLowerCase());

console.log("  hello");
console.log("  hello".trim());

console.log(Math.random());
console.log(Math.random() * 10);

console.log (Math.floor(Math.random() * 10));


console.log("develop".slice(0, 2));
console.log("develop".search("e"));
console.log("develop".lastIndexOf("e", 1));
console.log("develop".substring(0, 7));
console.log("develop".substr(1, 1));
console.log("develop".replace("develop", "coding"));
console.log("develop".concat(" coding"));


console.log("All Around the World");
console.log("All Around the World".substr(7, 1).toUpperCase());
console.log("All Around the World".toUpperCase().charAt(7));




console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log("   |   |   ");
console.log("   |   |   ");



let name = "Aimee";
console.log(name);
name = "Liam"
console.log(name);


let age = 29;
console.log(age);
age += 3;
console.log(age);
age -= 3;
console.log(age);
age ++;
console.log(age);
age --;
console.log(age);
age *= 3
console.log(age);
age /= 3;
console.log(age);



let favouriteDrink = "coffee";
console.log (`My favourite drink is ${favouriteDrink}`);



let name = "Aimee";
let age = 29;
let favouriteColour = "Turquoise"

console.log (`My name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}`);

name = "Aimee";
age = 39;
favouriteColour = "Blue"

console.log (`My name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}`);



let space1 = 'x';
let space2 = 'o';
let space3 = '';
let space4 = 'x';
let space5 = 'x';
let space6 = '';
let space7 = 'o';
let space8 = '';
let space9 = ''

console.log("    |    |    |");
console.log(`  ${space1} | ${space2}  |    |`)
console.log("    |    |    |");



let name ="Dan"

if (name == "Sam") {
    console.log("Your name is Sam")
}
else if (name == "Liam") {
    console.log("Your name is Liam")
}
else {
    console.log("What is your name?")
}


let myNumber = "5";

if (myNumber === 5) {
    console.log(myNumber)
}
else {
    console.log("Your number sucks")
}


console.log(3 % 11);


let age = 16

if (age > 17) {
    console.log("Yes I can serve you")
}
else {
    console.log("You aren't old enough")    
}


let age = 17;
let country = "UK";

if (age > 17 && country == "UK") {
    console.log("yes I can serve you")
}
else {
    console.log("You aren't old enough")    
}


let password = "national";

if (password.length == 8) {
    console.log("password ok")
}
else {
    console.log("password not ok")
}



let num = "10";

console.log(10 % 3)
console.log(10 % 5)

if (num % 3 == 0 && num % 5 == 0) {
    console.log("This number is divisible by 3 or 5")
}
else {
    console.log("This number is not divisible by 3 or 5")
}


let num = 11

if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzbuzz")
}
else if (num % 3 == 0) {
    console.log("fizz")
}
else if (num % 5 == 0) {
    console.log("buzz")
}
else {
    console.log(num)
}


let time = 19
let placeOfWork = "Liverpool"
let townOfHome = "Stratford"

if (time > 8 || time < 17) {
    console.log(placeOfWork)
}
else if (time < 8 || time > 18) {
    console.log(placeOfHome)
}



let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = "aeiou"

for(let i = longString.length - 1; i > 0; i--)

    if(vowels.indexOf(longString.toLowerCase().charAt(i)) >= 0)
{
console.log("The last vowel is: " + longString.charAt(i) + " at position: " + i)
}



console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".length)
console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".lastIndexOf("i"))



//Challenge 8

let word = "codenation";
let wordLength = word.length;
let lastChar = word.charAt(wordLength-1);
let firstChar = word.charAt(0);

console.log(lastChar);
console.log(wordLength);
console.log(firstChar);

if (lastChar == firstChar) {
    console.log("true")
}
else {
    console.log("false")
}



let space1 = 'x';
let space2 = 'o';
let space3 = '';
let space4 = 'x';
let space5 = 'x';
let space6 = '';
let space7 = 'o';
let space8 = '';
let space9 = ''


console.log("    |    |    |");
console.log(`  ${space1} | ${space2}  |  ${space3}  |`)
console.log("    |    |    |");
console.log("    |    |    |");
console.log(`  ${space4} | ${space5}  |  ${space6}  |`)
console.log("    |    |    |");
console.log("    |    |    |");
console.log(`  ${space7} | ${space8}  |  ${space9}  |`)
console.log("    |    |    |");



if (space1 == 'x' && space2 == 'x' && space3 == 'x') {
    console.log("x won")
} else if (space1 == 'o' && space2 == 'o' && space3 == 'o') {
    console.log("o won")
} else {console.log("no one won")}



const sayHi  = () => {
    console.log("Hiya");
}

sayHi();



const sayHi = (name) => {
    console.log(`Hiya ${name}`);
}

sayHi("Sam");



const coffeeOrder = (size,type) => {
    console.log(`here is your ${size} ${type} thank you`)
}

coffeeOrder ("large", "latte");
coffeeOrder ("small", "espresso");
 

 const addUp = (num1, num2) => {
     return num1 + num2
 }

 let answer = addUp(4, 5)

 console.log(addUp(answer, 5))

 

function factorial (n) {
    if ((n === 0) || (n === 1)) { return 1;
    } 
    else {
    return (n * factorial(n-1));
    } 
    console.log(factorial(33));

    //changed into arrow function syntax

 const factorial = (n) => {
 };




const logGrid = (space1,space2,space3,space4,space5,space6,space7,space8,space9) => {
    console.log(`   |   |   `)
    console.log(` ${space1} | ${space2} | ${space3}  `)
    console.log("   |   |   ")
    console.log("-----------")
    console.log("   |   |   ")
    console.log("   |   |   ")
    console.log(` ${space4} | ${space5} | ${space6}  `)
    console.log("-----------")
    console.log(` ${space7} | ${space8} | ${space9}  `)
    console.log("   |   |   ")
    console.log("   |   |   ")
}

logGrid("o", "x", "x", "o", " ", "x", "x", "o", " ")



let attemptedPin = 1234
let actualPin = 1234

const checkPin = (attemptedPin, actualPin) => {  

    if (attemptedPin === actualPin){
        return true;
    }  else {
        return false;
    }   
}


//Wednesday

const multiplyNumber = (num1, num2) => {
    return num1 * num2

}
console.log (multiplyNumber(2,5))



//Arrays (list)

let favouriteSongs = ['Cigaro', 'Trimm Trabb', 'Superstition']

favouriteSongs[1]= "Rebel Rebel"


console.log(favouriteSongs);
console.log(favouriteSongs[0]);
console.log(favouriteSongs.length);

favouriteSongs.push("Chemical World");

console.log(favouriteSongs);

favouriteSongs.pop()

console.log(favouriteSongs);



//Array Methods: 
 //shift() - removes the first array element and shifts to lower index

 let fruits = ["banana", "orange", "apple"];

 console.log(fruits);

 fruits.shift(2);

 console.log(fruits)

 

 //unshift() - adds a new elements to an array (at the beginning) and unshifts older elements

 let fruits = ["banana", "orange", "apple"];

 console.log(fruits);

 fruits.unshift("lemon");

 console.log(fruits)

 

 //slice() - slices out a piece of an array into a new array

 let fruits = ["banana", "orange", "apple", "lemon", "mango"];

 //console.log(fruits);

//let citrus = fruits.slice(2);

//console.log(citrus);

let citrus1 = fruits.slice(3, 5);

console.log(citrus1);



//splice() - add new items to an array

let fruits = ["banana", "orange", "apple", "lemon", "mango"];

 console.log(fruits)

 fruits.splice(2, 0, "pineapple", "kiwi");

 console.log(fruits);

 

 //numberToString(Number)

 const numberToString = (n) => {
    return n.toString();

 }
 
console.log(typeof numberToString(10))



//increase(n) by 1

const increaseNumber = (n) => {
    return n+1
}

console.log(increaseNumber(5));



//decrease (n) by 1

const decreaseNumber = (n) => {
    return n-1
}
 console.log(decreaseNumber(5))


 

 //add(x, y)

 const addUp = (x, y) => {
     return x + y
 }
 console.log(addUp(5, 1))

 // subtract(x, y)

 const subtractNo = (x, y) => {
     return x-y
 }
console.log(subtractNo(5, 1));

//multiply(x,y)

const multiplyNo = (x, y) => {
    return x * y
}
console.log(multiplyNo(5, 2))

//divide(x, y)

const divideNo = (x, y) => {
    return x / y
}
console.log(divideNo(6, 3))

//square(x) multiplies number by itself

const squareNo = (x) => {
    return x*x
}
console.log(squareNo(3))



//calculate(operation, x, y) prints out the equation i.e 1 + 5 = 6 or 8/2 = 4. Returns result


const calcNo = (operation, x, y) => {
    if (operation == "add"){
          return x + y
          console.log(``)
    }
    else if (operation == "subtract"){
        return x - y
    }
    else if (operation == "multiply"){
        return x * y
    }
    else if (operation == "divide"){
        return x / y
    }
}
console.log(calcNo("divide", 2, 3));
  

//calcNo("+", 1,2)
//Returned ["1+2=3", 3]


//combine(word1, word2)

console.log("develop".concat(" coding"));



//isGreaterThan(a, b)

let a = 4
let b = 3

if (a > b) {
    console.log("True")
}
else {
    console.log("False")    
}



//isLessThan(a, b)

let a = 2
let b = 3

if (a < b) {
    console.log("True")
}
else {
    console.log("False");
}



//areEqualTo(a, b)

let a = 2
let b = 3

if (a === b) {
    console.log("True, the numbers are equal")
}

else if(a !== b) {
    console.log("False")
}



//loop for numbers 9->0

for (i = 9; i >= 0; i--) {
    console.log(i);
}


let favouriteSongs = ['Cigaro', 'Trimm Trabb', 'Superstition']

        console.log(favouriteSongs)

 favouriteSongs.splice(2, 0, "metal", "music");{

        console.log(favouriteSongs);

 }
    for (songIndex = 0; songIndex < favouriteSongs.length; songIndex++) {
        
        console.log(favouriteSongs[songIndex]);

    }



let fourFilms = ['Groundhog', 'Dogma','Ghostbusters', 'Stepbrothers']

        console.log(fourFilms);

         for(filmsIndex=0; filmsIndex < fourFilms.length; filmsIndex++){

        console.log(fourFilms[filmsIndex]);
     }




const filmCheck = () => {
  
    if (fourFilms[2] == "Ghostbusters"){
        console.log("yey it's Ghostbusters")     
    }
    else {
            console.log("booo, we want Ghostbusters")
    } 
}

filmCheck(2)

//PROBLEM 1:

let total = 0

for (num = 0; num < 1000; num++) {
    if (num % 5 == 0|| num % 3 == 0) {
        total += num
    }
}
console.log(total) 
  //answer 233168

  
//PROBLEM 2:

 console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".indexOf("hi"));

 //answer 25

 console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".lastIndexOf("hi"));

 //answer 77

 //PROBLEM 3:

 console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".length);

 //96 length

 //PROBLEM 4 - 4loop check charAt, find letter "h" find what indexof is. subst or substring try to find "hi"

 
//generates random no between 1-10
 console.log(Math.random()*10);

//generates random no between 0-1
 console.log(Math.random());

 //returns an integer nearest to decimal no
 console.log(Math.floor(Math.random()*10));

 //display 8th char in upper case
 console.log("All Around the World".toUpperCase().charAt(7));

 //variable inside string
let favouriteDrink = "coffee";

    console.log(`My favourite drink is ${favouriteDrink}`);

//FUNCTIONS

let coffeeIsGrinding = false;

const pressGrindBeans = () => {

    if(coffeeIsGrinding) {
        console.log("Stopping the Grind");
        coffeeIsGrinding = false;
    
    } else {
        console.log(`Grinding is about to begin`);
        coffeeIsGrinding = true;
    } 
}
pressGrindBeans();


//PARAMETERS

const cashWithdrawal = (amount, accnum) => {

    console.log(`Withdrawing ${amount} from account number ${accnum}`)
}
cashWithdrawal(300, 12345678);
cashWithdrawal(10, 12345678);


//function that takes 2 parameters and logs result to console:

const takeOrder = (size, type) => {

    console.log(`here is your ${size} ${type}`)

}   
takeOrder("large", "latte")



//one function call on another function and use resultof that function to get result:

const multiplyByNineFifths = (celcius) => {
    return celcius*(9/5);
}

const getFahrenheit = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;
}

console.log(`The temperature is ` + getFahrenheit(15) + `F`);



 //Function Declarations - Function - name -(parameters)
        e.g. function functionName(parameter) {
            doCode
        };

 function square(number) {
     return number * number;
 }

 console.log(square(5));

 

 //Function Factorial - function linked to an identifier; call "factorial" to get it to do something:

 function factorial (n) {

    if ((n===0) || (n === 1)) {
        return 1;
    }  else {
        return (n * factorial(n-1));
    }
 }

 console.log(factorial(33));

 

 //Expression - create variable that stores an anonymous function (have keyword function but no name, hence anonymous)
        e.g. const functionName = function(parameters) {
            doCode
        }:

 const square = function(number) {
     return number * number
 };

 console.log(square(5));

 

 //Arrow function syntax e.g. const functionName = (parameter) => {
                                    //doCode
 //}

 const square = (number) => {
     return number * number
 };

 console.log(square(5));

 

 //Take this code and turn it into an arrow function syntax:

 function factorial (n) {

    if ((n===0) || (n ===1)) {
        return 1;

    } else {
        return (n*factorial(n-1))
    }
 }

 console.log(factorial(33));

 //turn into arrow function syntax:

 const factorial = (n) => {
     
    if ((n === 0) || (n === 1)) {
        return 1;
    }  else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));



//Thursday 
//OBJECTS:

let person = {

    name: "Aimee",
    age: 39,
    faveDrinks: ["Wine", "Whisky", "Ribena"],
    friendlyGreeting (){
         return 'Hi, nice to see you!'},
    meanGreeting () {
        return 'Hi, now go away!' }
        };

console.log(person.friendlyGreeting());




person['favBiscuits'] = 
['custard creams', 'posh biscotti'];

person['favSongs'] = 
['cigaro', 'trimm trabb', 'moog'];

console.log(person);

console.log(person['name']);


let person = {

    name: "Aimee",
    age: 39,
    faveDrinks: ["Wine", "Whisky", "Ribena"],
    mood: "bad",
    greeting () {
        if (this.mood == "good") {
            return "Hi, nice to see you"}
        else {
            return "go away" }
    },
    sayHi () {
        return `Hi my name is ${this.name}`
    }
        };
console.log(person.sayHi());


let rabbit = {

    name: "Sherlock",
    colour: "black and white",
    ears: "uppy",

    bunHop () {
        return `Sherlock is hopping`
    },
    bunChew() {
        return `Sherlock is chewing`
    }
}

console.log(rabbit.bunChew());


let person = {

    name: "Aimee",
    age: 39,
    faveDrinks: ["Wine", "Whisky", "Ribena"],
    mood: "bad",
    greeting () {
        if (this.mood == "good") {
            return "Hi, nice to see you"}
        else {
            return "go away" }
    },
    sayHi () {
        return `My mood is ${this.mood}`
    }
        };

console.log(person.sayHi());


let rabbit = {

    name: "Sherlock",
    colour: "black and white",
    ears: "uppy",

    bunHop () {
        return "Sherlock is hopping"
    },
    bunChew() {
        return "Sherlock is chewing"
    }
}

console.log(rabbit.bunHop());



//console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".indexOf("hi"));
//96 length

//console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".lastIndexOf("hi"));

// PROBLEM 3:

 let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";

console.log(str);

let strArray = str.split("");
  console.log(strArray);

   console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".length);

   

  console.log("jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh".search("hi"));

//PROBLEM 4 

  let strWord = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
  
  let strArray = strWord.split("hi");
  let strPos = 0;

  for (i=0; i < strArray.length; i++) {

    if (strPos != 0) strPos +=2;
    
    strPos += strArray[i].length;

    console.log(strPos);
  }

  console.log(strArray.length);

  //answer - 25, 36, 69, 77, 96, 5

  */
// Problem 5:
// Create a function that checks if a number is a palindrome.
// Use this function to find the biggest palindrome less than 90283743503594

const checkPalindrome = (string) => {
    return string == string.split('').reverse().join('');

}

    for (i = 90283743503594; i > 0; i--) {
        if(checkPalindrome(i.toString()) == true) {
            console.log(i)
            break;
        }
    }






 











    
 










     


