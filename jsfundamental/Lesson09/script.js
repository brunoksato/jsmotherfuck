var foo1 = 5 < 6; //true
var foo2 = 5 > 6; //false
var foo3 =  6 == 6; //true;
var foo4 =  6 != 6; //false;
var foo5 = "6" == 6 //true
var foo6 = "6" === 6 //false
var foo7 = "hello" == "Hello";//false
var foo8 = "hello" === "Hello";//false

if (0) {alert('hi')};//false
if (1) {alert('hi')};//true

if ("") {alert('hi')};//false
if (" ") {alert('hi')};//true

var foo = null; // undefined

if (foo) {
    alert("hi");
}

alert(foo8);
//alert(typeof null);