var foo = new Array(11, "hello", true);
var foo2 = [11, "hello", true];
var length = foo.length;

var value = foo[0];
foo[0] = 12;
foo[1] = 13;
foo[2]= false
foo[3] = "ola";

foo[foo.length] = "a new value";
foo.push("a new value");

var names = ["Jeremy", "Jeffrey"],
    names2 = ["Jennifer", "Jackie"];
    
var people = names.concat(names2);

var joined = people.join(", ");

var reversed = people.reverse();

var sorted = people.sort();

alert(foo);