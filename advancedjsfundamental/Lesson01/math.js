(function(){

function toThePower(num, exp){
	var value = num;

	for (var i = 1; i < exp; i++) {
		value = value * num;
	}
	return value;
}

var power = toThePower(2,3);

var value = Math.power(2,3),
	value2 = Math.pow(2,3),
	value3 = Math.sqrt(2,3),
	value4 = Math.max(2,3),
	value5 = Math.min(2,3),
	value6 = Math.abs(7),
	value7 = Math.sin(30),
	value8 = Math.cos(30),
	value9 = Math.floor(Math.random());

//alert(power);

}());