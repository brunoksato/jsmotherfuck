(function(){

// doSomething("ola");

// function doSomething(){
// 	//doSomething();
// 	arguments.callee();
// 	//pega quantidade de argumentos da função
// 	//var length = arguments.length;
// 	//retorn a função
// 	//alert(arguments.callee);
// 	//alert(arguments[0]);
// 	//alert('function declaration');
// }

// function doSomething(arg1, arg2){
// 	return function (){
// 		alert(arg1);
// 	};
// }

// var fn = doSomething();
// alert(fn);
// //var fn2 = doSomething("Tchau, closure");

// //fn();
// //fn2();

// var doSomethingElse = function(){
// 	//alert('function expression');
// };

// var i = 0;
// function nameGen(arg){
// 	var name = arg + i;
// 	i++;
// 	return name;
// }

// var name = nameGen("bruno"),
// 	name2 = nameGen("bruno");

// alert(name + " " + name2);



}());

var utility = (function(){

	var i = 0;

	return {

		namegen : function(){
			var name = "custorname" + 1;
			i++;
			return name;
		}
	}
}());

var name = utility.namegen();

alert(name);