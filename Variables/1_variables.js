//one line comment


/*
here is multiple-line comments
another comment here
 */
console.log("Hello ");

//1------VAR------
var number =10;
var oddNumber=10;
var odd_number=10;

console.log(oddNumber);

var evenNumber;
evenNumber=20;
console.log(evenNumber);


var specialVariable=null;
console.log(specialVariable);


//do not recommend
var num1=100, num2=101, num3=103;
var num1=100;
var num2=101;
var num3=102;


//variable redeclaration
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);

//varialbe reassignment

var myNumber = 9;
myNumber =19;


//--------2.LET--------
let firstName='Bronco';
// wrong to do this again     let firstName="CPP";
let lastName="CPP";
let name= 'Bronco @ CPP';
let anotherFullName= 'Full name is ' + firstName+" " + lastName;

let fulName='Full name is ${firstName} ${lastName}';
console.log(fulName);

let magicNumber;
magicNumber = 13;


//-------3. CONST------
// can't declare and assgin later for CONST: const piNumber;
//                                            piNumber = 3.14; 
// and reassign it                            piNumber = 3.1415; 

const PI_NUMBER = 3.14;



