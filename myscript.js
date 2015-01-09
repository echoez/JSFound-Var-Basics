 /* JavaScript Foundations: Variables */
/* LESSON 4: ARRAYS */







































/* LESSON 3: NUMBERS */



/*

var u = Math.round(Math.random() * 10);
var v = Math.round(2.7);
var v = Math.floor(3.7); //round down
var x = Math.ceil(6.2); //round up
var p = Math.pow(2,5); // exponent
var q = Math.sqrt(4); //square root


console.log("When rounding it's " + u + "\nWhen flooring down it's " + v + "\nWhen exponenting, it's " + p + "\nWhen square rooting, it's " + q);






var j = parseInt("197");

var a = 11,
	b = -123;

var c = 1.5, 
	d = 123456;

var e = 0.1, 
	f = 0.2;

var result = e * f;

var g = 1E6;

var h = 012;

*/











/*LESSON 2: Strings */

/*
var first = "Hello"
var second = "hello"

// lowercase to improve comparison
if (first.toLowerCase() === second.toLowerCase()) {
	console.log("yes they are equal");
} else {
	console.log("hell no they different");
}

function compare(a, b) {
	console.log(a + " < " + b, a <= b);
}

//uses ascii table to find ranking of characters and casing
compare('a','b');
compare('a','A');

compare('apples', 'oranges');
compare('apples', 'applications');
compare('app', 'apples');
compare('hello','hello');





var name = "Jim";
console.log(name);

var name2 = 'tommy';
console.log(name2);

var statement = "This is Jim's String";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said \"This is Jim\'s String\"';
console.log(statement3);

var path = "C:\\folder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\n " + 
				"This is line 2\n " + 
				"This \tis line 3";
console.log(multiline);

//Length method counts length of string
var length = multiline.length;
console.log(multiline, length);

//indexOf method searches for string AND if it does not find that strings, it returns -1 !!!!!!!!!
var index = multiline.indexOf("line");
console.log(index);


if (multiline.indexOf("4") !== -1) {
	console.log("It does EXIST");
}
else {
	console.log("You failed homie");
}


//CharAt finds characters from start 0
console.log(multiline.charAt(2));



//subStr will copy a part of a string. The arguments are (Startpoint, Length)

var bacon = multiline.substr(5, 2);
console.log(bacon);

console.log(multiline.toLowerCase());
console.log(multiline.toUpperCase());


*/






/* LESSON 1: Variables

var myVar;

console.log(typeof myVar === "undefined");


var x = null;

if(myVar == null){
	console.log("if")
}
else {
	console.log("Else")
}

var world = "World";



function sayHello() {
	var hello = "Hello ";
	console.log(hello + world);

		function inner () {
		var extra = " there is more!"
		console.log(hello + world + extra);
	}

	inner();
}

sayHello();
*/
