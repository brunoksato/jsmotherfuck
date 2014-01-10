(function() {

var divFoo = document.getElementById("foo"),
    style = divFoo.style;
    
divFoo.className = "css-class css-class2";
divFoo.classList.add("css-class");
divFoo.classList.remove("css-class");
divFoo.classList.contains("css-class");
divFoo.classList.toggle("css-class");
divFoo.classList.item("css-class");

//var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");

function getTheStyle(){
    var elem = document.getElementById("elem-container");
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
   }

var getStyle = function(el, cssProperty) {
    if (typeof getComputedStyle !== "undefined") {
        return window.getComputedStyle(el, null).getPropertyValue(cssProperty);
    } else {
        return el.currentStyle[cssProperty];
    }
};

var color = getStyle(divFoo, "color");


alert(color);

//alert(style.color);

}());

