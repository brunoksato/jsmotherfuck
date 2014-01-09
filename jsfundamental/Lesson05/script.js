var globalVar = "This is a global variable.";

var globalFunction = function(paramOne) {
    var localVar = "This is a local variable.";

    var localFunction = function() {
        var localVar = "hello, world!";
        
        alert(localVar);
    };
    
    localFunction();
    alert(localVar);
};

globalFunction();


var globalF = function(param){
	var local1 = function(){
		alert('local1');
		var local2 = function(){
			alert('local2');
		}
		local2();
	}
	local1();
	alert('global');
}

//globalF();
