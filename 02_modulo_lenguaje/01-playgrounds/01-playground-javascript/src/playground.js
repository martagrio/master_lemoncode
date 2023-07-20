console.log("This is you dsa dsar playground, experiment with JS code and check the console");

/********** 101 Biggest Word **********/

console.log('********* 101 Biggest Word **********');

function biggestWord(phrase) {

    const words = phrase.split(" ");
    let biggestWordLength = 0;
    let biggestWord = "";

    words.forEach(word => {
        const currentWord = word.replaceAll(/[&#,+()~%.;'":*¡!¿?]/g, "");
        const wordLength = word.length;

        biggestWord = (biggestWordLength < wordLength) ? currentWord : biggestWord;
        biggestWordLength = (biggestWordLength < wordLength) ? wordLength : biggestWordLength;
    });

    return biggestWord;
};

console.log(biggestWord("Esta frase es para comprobar que se está ejecutando correctamente la función biggestWord y funciona."));

/********** 114 Values **********/

console.log('********** 114 Values **********');

function values(obj) {

    const values = [];
    for (const key in obj) {
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

/********** 102 Califications **********/

console.log('********** 102 Califications **********');

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function getClassAverage(marks) {
    let averageMark = 0;
    const studentsNumber = marks.length;
    averageMark = marks.reduce((marksSum, mark) => mark + marksSum, 1) / studentsNumber;
    return averageMark.toFixed(2);
}

const inRange = (mark, min, max) => mark >= min && mark < max;

function getTextualAverage(averageNum) {

    let averageString = "";

    if (averageNum === 10)
        averageString = 'matrícula de honor';
    else if (inRange(averageNum, 9, 10))
        averageString = 'sobresaliente';
    else if (inRange(averageNum, 7, 9))
        averageString = 'notable';
    else if (inRange(averageNum, 6, 7))
        averageString = 'bien';
    else if (inRange(averageNum, 5, 6))
        averageString = 'suficiente';
    else if (inRange(averageNum, 4, 5))
        averageString = 'insuficiente';
    else
        averageString = 'muy deficiente';

    return averageString;
}

function printAverage(classResults) {

    const marks = values2(classResults ?? []);

    if (marks.length === 0)
        return 'Nadie ha venido a clase en todo el año :(';

    const averageMark = getClassAverage(marks);
    const averageString = getTextualAverage(averageMark);
    return `La nota media de la clase ha sido: ${averageString} (${averageMark})`;
}

console.log(printAverage(eso2o));

/********** 104 Check Arguments **********/

console.log('********** 104 Check Arguments **********');

function f(input) {
    var result = (input === undefined ? "Unkown" : input) || "";
    return result;
}

function f2(input = "Uknown") {
    var result = input || "";
    return result;
}

function f3(input = "Uknown") {
    var result = input ?? "";
    return result;
}

console.log('Función f con Undefined:', f());
console.log('Función f con Null:', f(null));
console.log('Función f con String:', f('Paquito el chocolatero'));

console.log('Función f2 con Undefined:', f2());
console.log('Función f2 con Null:', f2(null));
console.log('Función f2 con String:', f2('Paquito el chocolatero'));

console.log('Función f3 con Undefined:', f3());
console.log('Función f3 con Null:', f3(null));
console.log('Función f3 con String:', f3('Paquito el chocolatero'));