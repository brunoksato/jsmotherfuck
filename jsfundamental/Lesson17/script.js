(function() {

var buttons = document.getElementsByTagName("a");

for (var i = 0, len = buttons.length; i < len; i = i + 1) {
    /*buttons[i].onclick = function() {
        var className = this.innerHTML.toLowerCase();
        
        document.body.className = className;
    };*/
    
    buttons[i].addEventListener("click", function(evt) {
        var className = this.innerHTML.toLowerCase();
        
        evt.preventDefault();
        
        document.body.className = className;
    }, false);    
}

// Function to change the content of t2  
function modifyText() {  
 var t2 = document.getElementById("t2");  
 t2.firstChild.nodeValue = "three";      
}  

// add event listener to t  
var el = document.getElementById("oi");   
// el.addEventListener("click", modifyText, false);   
// el.removeEventListener("click", modifyText, false);   

function checkName(evt) {
            evt.preventDefault();
            alert(
                "Please use lowercase letters only.";
            );
        }
    }
}

el.addEventListener("click", checkName, false);   


}());

