(function() {

var speed = 10,
    moveBox = function(moveBy) {
        var el = document.getElementById("box"),
            left = el.offsetLeft;
            
        
        if ((moveBy > 0 && left > 1000) || (moveBy < 0 && left < 1)) {
            clearTimeout(timer);
            timer = setInterval(function() {
                moveBox(moveBy * -1);
            }, speed);
        }
        
        el.style.left = left + moveBy + "px";
 
    };

var timer = setInterval(function () {
        moveBox(1);
    }, speed);

// var doSomething = function(){
//     console.log("doSomething() executed");

//     setTimeout(doSomething,2000);
// };

// var time = setTimeout(doSomething,2000);
// clearTimeout(time);

}());

