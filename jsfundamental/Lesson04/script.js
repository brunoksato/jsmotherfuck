var doSomething = function(paramOne, paramTwo, fn) {
    paramOne = paramOne + 3;
    paramOne = paramOne + 1;
    paramOne = paramOne * 8;
    
    return fn(paramOne, paramTwo);
};

function sum(paramOne, paramTwo) {
    return paramOne + paramTwo;
}

function doSomethingSimple(paramOne){
	paramOne = paramOne + 3;
	paramOne = paramOne + 1;
	paramOne = paramOne * 8;
	return paramOne;
}

function doSomethingMultiple(paramOne, paramTwo){
	paramOne = paramOne + 3;
	paramOne = paramOne + 1;
	paramOne = paramOne * 8;
	return paramOne * paramTwo;
}

var foosimple = doSomethingSimple(2); //48
var bar = doSomethingSimple(3); //56


// set one
var foo = doSomething(2, 2, sum); // 96

// set two
var bar = doSomething(3, 2, function(paramOne, paramTwo) {
    return paramOne * paramTwo;    
}); // 112

//alert(foo);
//alert(bar);
//alert(doSomething(1,1, sum));

var doBruno = function(soma1, soma2, fn){
	soma1 = soma1 + 1;
	soma2 = soma2 + 1;
	return fn(soma1, soma2);
};

function somar(soma1, soma2){
	return soma1 + soma2;
}

function multiplicar(mult1, mult2){
	return mult1 * mult2;
}

function subtrair(sub1, sub2){
	return sub1 - sub2;
}

function divisao(div1, div2){
	return div1 / div2;
}

var s = doBruno(2,2, somar);
var m = doBruno(2,2, multiplicar);
var sub = doBruno(2,2, subtrair);
var d = doBruno(2,2, divisao);

alert(s);
alert(m);
alert(sub);
alert(d);