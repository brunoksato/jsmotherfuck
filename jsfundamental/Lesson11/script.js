var foo = "hello, window";
window.alert(foo);

var bar = function(){
	var foo = "hello, function";

	alert(window.foo);
}

bar();

(function() {

if (confirm("Do you want to go to Google.com")) {
    location = "http://www.google.com";
} else {
    alert("You'll stay here");
    
}
    
}());

