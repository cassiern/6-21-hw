//1. VARIABLES & DATATYPES 	
//A. Q+A
	// 1. We assign a value to a variable using const and let.
	// What is on the right of the "=" is the value assigned
	// to what's on the left of the "=".
	// 2. We change the value of a variable using
	// let. Then we declare whatever variable we want to change,
	// equal to what we want to change it to.
	// It looks like this let Variable = 1; Variable = 2; 
	// 3. We assign an existing variable to a new variable
	// by putting the new variable on the let side of the
	// "=" and the old variable. 
	// 4. Declaring a variable is the 'let' or 'const'. You're
	// declaring a variable. The assigning is th '='.
	// And the defining is what you put on the right side
	// of the '='. That is seting the value to the variable.
	// 5. Pseudocoding is writing out what exact steps you
	// are wanting to take in order to do your code. 
	// Pseudocode is writen in plain engligh, not in code. 
	// And for that reason pseudocode is a great way to break
	// down complicated code.
	// Probably 70% of your time should be committed to
	// planning and solving your code. 

//B. STRINGS
//1. 
let firstVariable = "Hello World";
firstVariable = 9; 
console.log(firstVariable)
secondVariable = firstVariable;
secondVariable = "This is great!";
console.log(secondVariable)

//2.
const myName = "Cassie Nichols";
console.log(`Hello my name is ${myName}`);

//C. BOOLEANS
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e == 'Kevin');
  console.log(a !== b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a === a || d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

//D. THE FARM
const animal = "chicken";
if (animal === "cow"){
	console.log("Mooooo");
} else {
	console.log("Hey! You're not a cow!")
}

//E. DRIVERS ED
const personsAge = 15;

 	if (personsAge > 16){
		console.log("Here are the keys!");
	} else {
		console.log("sorry you're too young")
		}

// 2. A. THE BASICS

// 1.
for (let i = 0; i <= 10; i++){
	console.log(i);
};

// 2.
for(let i= 40; i <= 400; i++){
	console.log(i);
}

// 3.
for(let i = 11; i <= 4000; i +=2){
	console.log(i);
}

//B. GET EVEN
// 1.
for (let i= 0; i <= 100; i+=2){ 
	console.log(`${i} <---- is an even number`);
}

// 2.
//C. HIGH FIVE
for (let i = 3; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0){
		console.log(`I found a ${i}, a multiple of both!`);
	} 
	else if (i % 3 === 0){
		console.log(`I found a ${i}! Three is a crowd`);
	} 
	else if (i % 5 === 0){
		console.log(`I found a ${i}. High five!`)
	} else {
		console.log('false');
	}
} 	

//D. SAVINGS ACCOUNT
//loop through each number up to 10.
//add each number it loops through to a variable

let bank_account = 0;
for (let i = 0; i <= 10; i++){
	bank_account += i
}
console.log(bank_account);

let bank_account2 = 0;
for (let i = 0; i <= 100; i++){
	bank_account2 += (i * 2);
}
console.log(bank_account2)

// //E. MULTIPLES OF 3 & 5
let sumOfNaturalNumbers = 0;

for (let i = 0; i <= 1000; i++){
	if (i % 3 === 0 && i % 5 === 0){
		sumOfNaturalNumbers += i;
	} else if (i % 3 === 0){
		sumOfNaturalNumbers += i;
		
	} else if (i % 5 === 0){
		sumOfNaturalNumbers += i;
		
	} else {
		console.log('false');
	}
}
console.log(sumOfNaturalNumbers);

// I read through the whole question and realize
// we didn't have to do this problem again. 
// I just liked the practice. :)

// 3) A.
// 1. The things in an array are called indices (index).
// 2. Arrays do not garentee that the indices will be in order.
// 3. A real thing you could model with an array would be
// 		logging wins and loses in a game. The score could
//		gets pushed into the array. 

// B.
const quotes = ["hey there", "how's it going?", "Got plans today?"];


// C.
const randomThings = [1, 10, "Hello", true];
//1.
// To access the first thing we would write:
randomThings[0];

//2.
randomThings[2]= "World";
console.log(randomThings);

// D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1.
ourClass[2];
// 2.
ourClass[4] = "Octocat";
// 3. 
ourClass.push("Cloud City");
console.log(ourClass)

// E.
const myArray = [5, 10, 500, 20]

myArray.push("Egon", "Yellow");
console.log(myArray);
myArray.splice(0, 5);
console.log(myArray);
myArray.unshift("Bob Marley")
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
// 5. 
// The .reverse() didn't change anything in the array. 
// Although, I only have one itm in my array, the string.
// If I had two items, it would've swapped them.


// F.
const number = 102;

	if (number < 100){
		console.log("little number");
	} else if (number => 100){
		console.log("big number");
	} else {
		false;
	}

// G.

const number1 = 12;
if (number1 < 5){
	console.log("Little number.");
} else if( number1 > 10) {
	console.log("big number.");
} else {
	console.log("monkey");
}

// H. 

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// newArray = kristynsCloset.slice(0, 6)
// newArray.push("raybans", "marshmallow peeps");
// console.log(newArray);

// newArray[5]= "stained knit hat";
// console.log(newArray);

// thomsCloset;
// thomsCloset.pop();
// console.log(thomsCloset)
const thomShirt = thomsCloset[0][0];
const thomsPants = thomsCloset[1][1];
const thomsExtra = thomsCloset[2][2];

console.log(`Thom is looking fierse in a ${thomShirt}, 
	${thomsPants}, and ${thomsExtra}.`)
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);



// 4. FUNCTIONS
// A. printGreetings

// Skip this question because it has
// already been done. 

// B.
const printCool = (name) => {
	console.log(name + " is cool.");
}
printCool("Captain Reynolds");

// C.
const calculateCube = (number) => {
	return number * number * number;
}
console.log(calculateCube(5))

// D.

const isVowel = (letter) => {
	if (letter === "a"|| letter === "e"|| letter === "i"||
		letter === "o"|| letter ==="u"){
		console.log("It's a vowel!");
	} else {
		console.log("It's a consonant.");
	}
}
isVowel("e");

// E.
// it first needs to split up the word given
// then convert each letter into a number (array index?)
// then add up each letter of said word
// and return the number it added up

thisISTheRealArray = [];

const getTwoLengths = (arr) => {

	for (i = 0; i < arr.length; i++){
		numberOfLetters = arr;
		newArray = numberOfLetters.split('');
		thisISTheRealArray = newArray;
	}
		return newArray;
}
console.log(getTwoLengths("hank", "hi"));

// F.
const getMultipleLengths = (arr) => {
	const arrayLength = arr.length
	for (let i = 0; i < arrayLength; i++){
		console.log(arr[i].length);
	}
}

console.log(getMultipleLengths(["hi", "Hank", "Wazzup"]));


// G.
const maxOfThree = (num1, num2, num3) => {
	if (num1 < num2){
			return num2;
		} else if (num2 < num3){
			return num3;
		} else if (num3 < num1){
			return num1;
		} else if (num1 === num2 && num2 === num3){
			return num1;
		} else if (num1 === num2){
			return num1;
		} else if (num2 === num3){
			return num2;
		} else if (num3 === num1){
			return num3;
		} else {
			return false;
		}
}
// // There's probably a great loop answer to this...?
// // It's way too many if/else's. 
console.log(maxOfThree(3, 3, 12));

// H. 
function printLongestWord(str){
	let strSplit = str.split(' ');
	let longestWord = 0;
	for(let i = 0; i < strSplit.length; i++){
		if(strSplit[i].length > longestWord){
			longestWord = strSplit[i].length;
		}
	} return longestWord;
}
console.log(printLongestWord("Hello universe you're beeeeawesome"));
// Gives the length of the longest word. Not sure how to keep or turn it
// back into the word that the number belongs too. 

// I.
const transmogrify = (thing1, thing2, thing3) => {
	const answer = Math.pow((thing1 * thing2), thing3);
		return answer;
}

console.log(transmogrify(5, 3, 2));

// J.
let newReversedString = "";
function reverseWordOrder(str){ 
		let newString = "";
		for (let i = str.length - 1; i >= 0; i--){
			newString += str[i];
		} 	
		return newString;
 }
console.log(reverseWordOrder("hello"));

// K.
const mathProblem = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


console.log(mathProblem(10, 100))
//5. 

const quotes = ["hey there", 
		"how's it going?", 
		"Got plans today?"];
quotes.push("It's raining cats and dogs!", "It's five o'clock somewhere.")

//console.log(quotes)

const getRandomElement = (arr) => {
	for (i = 0; i < arr.length; i++){
	let randomArray = arr[Math.floor(Math.random() * arr[i].length)];
}
};

console.log(getRandomElement("hi", "hank", "How's it going?"));

Math.floor(Math.random() * 
		const arrayLength = arr.length
	for (let i = 0; i < arrayLength; i++){
		console.log(arr[i].length);
// OBJECTS
// A.
const user = {
	name: "bartha",
	email: "superOldUser@yahoo.com",
	age: 87,
	purchase: []
}

user.email = "newUser@gmail.com";
user.age = user.age +=1;
user.location = "Washington, D.C.";
user.purchase.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchase[2]);
user.friend = {
	name: "Billy Jean",
	age: 85,
	location: "Jamica",
	purchase: []
}
user.friend.age = 55;
user.friend.purchase.push("The One Ring", "A latte.");
console.log(user.friend.purchase[1]);

// F. 
for (let i = 0; i <= user.purchase.length; i++){
		console.log(user.purchase[i]);
		i++;
	}

//console.log(user.purchase[i])

for (let i = 0; i < user.friend.purchase.length; i++){
	console.log(user.friend.purchase[i]);
	
}
console.log(user.friend.purchase[i]);


// G.
const updateUser = () => {
	 let i = 0;
	 let newAge = user.age += 1;
	 let newName = user.name.toUpperCase();
	 i++;
	 console.log(newAge);
	 console.log(newName);
};
updateUser();



















