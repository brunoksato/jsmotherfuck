(function(){

var calculator = {
	calculate : function(x,y,fn){
		return fn(x,y);
	}
};

var sum = function(x,y){
	return x + y;
}, diff = function(x,y){
	return x - y;
};

var sumResult = calculator.calculate(1,2,sum),
	diffResult = calculator.calculate(1,2,diff);


// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray( new Array() );
Array.isArray( Array.prototype );
// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__ : Array.prototype });

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]

var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged
var nums = num1.concat(num2, num3);

function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true

function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9

var a = new Array("Wind","Rain","Fire");
var myVar1 = a.join();      // assigns "Wind,Rain,Fire" to myVar1
var myVar2 = a.join(", ");  // assigns "Wind, Rain, Fire" to myVar2
var myVar3 = a.join(" + "); // assigns "Wind + Rain + Fire" to myVar3

var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before: " + myFish);

var popped = myFish.pop();

console.log("myFish after: " + myFish);
console.log("Removed this element: " + popped);

var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before: " + myFish);

var popped = myFish.pop();

console.log("myFish after: " + myFish);
console.log("Removed this element: " + popped);

var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports); // ["soccer", "baseball", "football", "swimming"]
console.log(total);  // 4

var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
// total == 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]

var myArray = ["one", "two", "three"];
myArray.reverse(); 

console.log(myArray) // ["three", "two", "one"]

var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before: " + myFish);

var shifted = myFish.shift();

console.log("myFish after: " + myFish);
console.log("Removed this element: " + shifted);

// myFish before: angel,clown,mandarin,surgeon
// myFish after: clown,mandarin,surgeon
// Removed this element: angel

// Our good friend the citrus from fruits example
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// puts --> ["Orange","Lemon"]

function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var arr = [1, 2];

arr.unshift(0); //r esult of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

}());
