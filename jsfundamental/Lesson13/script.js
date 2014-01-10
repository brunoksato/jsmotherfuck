(function() {

var pElements = document.getElementById("p");

var el = document.createElement("p");
document.body.appendChild(el);

var content = document.createTextNode("<strong>Ola dynamically</strong>");
el.appendChild(content);
el.id = "bar";
el.setAttribute("align", "center");

var doc = document,
    pFoo = doc.getElementById("foo");
    
pFoo.parentNode.appendChild(el);
pFoo.parentNode.insertBefore(el);
pFoo.parentNode.replaceChild(el,pFoo);

var html = pFoo.innerHTML;

html = html + "<br/>This was, too";
html = html + "<br/>This was, too 2";
html = html + "<br/>This was, too 3";

pFoo.innerHTML = "";

    
}());

