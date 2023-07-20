function values(obj) {

    const values = [];
    for (const key in obj) {
        console.log(typeof obj[key])
        values.push(obj[key])
    }

    return values;
}

const values2 = obj => Object.values(obj);


console.log('función values', values({ id: 31, duration: 310, name: "long video", format: "mp4" }));
console.log('función values2', values2({ id: 31, duration: 310, name: "long video", format: "mp4" }));

/* Challenge */
console.log('********** 114 Values Challenge **********');
//No sé si he entendido correctamente el challange, entiendo es evitar obtener los métodos si se le añaden a la clase. Con values2 y con values3 consigo evitarlo.

function Person(name) {
    this.name = name;
}

Person.prototype.walk = function () {
    console.log("I'm walking");
};

var john = new Person("John");

function values3(obj) {

    const values = [];
    for (const key in obj) {

        if (typeof obj[key] !== 'function')
            values.push(obj[key])
    }

    return values;
}

console.log('función values3', values3(john));
console.log('función values2', values2(john));