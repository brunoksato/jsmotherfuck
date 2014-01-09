(function () {

var pElements = document.getElementByTagName("p"),
	lastPElement = pElements[pElements.length -1];

var pElementId = document.getElementById("foo");

var pElementQuery = document.querySelector("#foo");
var pElementQuery = document.querySelectorAll("p");
alert(pElementQuery.parentNode.tagName);

}());