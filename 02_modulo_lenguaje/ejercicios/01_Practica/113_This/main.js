var surname = "Pérez";
const person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      console.log(this);
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());

/* Devuelve Jiménez porque se está llamando al método de getSurname 
del objeto wife, por lo que ese this hace referencia a dicho objeto */

var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());

/* Devuelve Pérez pues al guardarse el método en una variable y llamándola 
desde el ámbito global ese this al llamarlo devuelve el valor guardado en 
var surname. 
Es como si se hiciera un console.log(this.name) en el mismo ámbito tras 
definir var surname = "Peréz" */

console.log(surnameFunction.call(person));

/* Devuelve González pues al invocar el método call a la función el this 
hace referencia al objeto que se le pasa como argumento, en este caso el 
objeto definido en la variable person. */