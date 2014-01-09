var names = [];

for(var i = 0; len = names.length; i < len; i++){
	var name = name[i];
	alert(name);
}

var names2 = ["bruno", "kenji", "sato"];

while(names2.length > 0){
	var element = names2.pop();

	alert(element);
}

var names = [];

do  {
    var element = names.pop();
    
    alert(element);
} while (names.length > 0);

alert("this is outside of the loop");