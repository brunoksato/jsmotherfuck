(function(){

var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName: function(){
      return this.firstName + " " + this.lastName;
  };

  this.greet: function(person){
    if (typeof person.getFullName !== "undefined") {
      return "Hello," + peson.get
    }
    else{
      return "Hello, there!";
    }
  };
};

var bruno = new Person("Bruno", "Sato"),
    lari = new Person("Larissa", "Fava")

// function createPerson(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     getFullName: function(){
//       return this.firstName + " " + this.lastName;
//     },
//     greet: function(person){
//       if (typeof person.getFullName !== "undefined") {
//         return "Hello," + peson.get
//       }
//       else{
//         return "Hello, there!";
//       }
//     }
//   };
// }



// alert(person.greet({ getFullName: "This is a string" }))

// var person - = {
//   firstName: "Bruno"
//   lastName: "Sato"
//   full name : function(){
//     return this.firstName + " " + this.lastName;
//   }
// };

// var person2 - = {
//   firstName: "Lari"
//   lastName: "Fava"
//   full name : function(){
//     return this.firstName + " " + this.lastName;
//   }
// };


}())
