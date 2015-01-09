 /* JavaScript Foundations: Variables */
/* LESSON 4: ARRAYS */

/*
var my_array = ["bacon", 42, true, "YOLO"];


var word = my_array[0];
var answer = my_array[1];


console.log(word + " + "+ answer);

my_array[1] = 144;
var new_answer = my_array[1];
console.log(new_answer);

// add new elements without knowing the index by using myarray.length as an argument for myarray[]

my_array[4] = "A new string";


console.log(my_array.toString());

my_array.push(6);

console.log(my_array.toString());

var value = my_array.pop();
console.log("you have successfully removed the " + value + " array");
console.log(my_array.toString());


var value2 = my_array.pop();
console.log("you have successfully removed the " + value2 + " array");
console.log(my_array.toString());


// PUSH and POP should take you back to assembly days.....

console.log(my_array.toString());
my_array.unshift(1);
console.log(my_array.toString());

var value4 = my_array.shift(1);
console.log(my_array.toString());

*/

var my_array = [10,91,32,101,57,44,3,14, 44];

console.log(my_array.toString());

my_array.sort();
// They became sorted like if it were strings...
//10,100,14,3,32,44,44,57,91"
console.log(my_array.toString());


// this sorts an array using a compareFunction to determine the order
my_array.sort(function (a, b) {
	//return a - b;
	return Math.random() - 0.5;
})

console.log(my_array.toString());




















