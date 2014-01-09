var person = new Object();

person.firstName = "Jeremy";
person.lastName = "McPeak";
person.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

var person = {
    firstName : "Jeremy",
    lastName : "McPeak",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

//alert(person.getFullName());

var nome = {
	primero : "Bruno",
	segundo : "Kenji",
	terceiro: "Sato",
	quarto: "Romeu",
	quinto: "Yassuda",
	sexto: "",
	sete : "",
	oito : "",
	nove : "",
	dez : "", 
	getNomeCompleto : function(){
		return this.primero + " " + 
			   this.segundo + " " + 
			   this.terceiro + " " +
			   this.quarto + " " + 
			   this.quinto + " " + 
			   this.sexto + " " + 
			   this.sete + " " + 
			   this.oito + " " + 
			   this.nove + " " + 
			   this.dez;
	}
};

alert(nome.getNomeCompleto());