(function(){

var date = new Date(1997, 5, 1, 22);
var date2 = new Date(865220700000);

var months = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho"
];

var month = months[date.getMonth()];

date.getFullYear();
date.getMonth();
date.getDate();
date.getTimezoneOffset() /60;
date.setFullYear(date.getFullYear() - 1);
date.setDate(date.getDate() - 1);

alert(date2);

}());