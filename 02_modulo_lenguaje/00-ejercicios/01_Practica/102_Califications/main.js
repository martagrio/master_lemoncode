const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const values = obj => Object.values(obj);

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

    const marks = values(classResults ?? []);

    if (marks.length === 0)
        return 'Nadie ha venido a clase en todo el año :(';

    const averageMark = getClassAverage(marks);
    const averageString = getTextualAverage(averageMark);
    return `La nota media de la clase ha sido: ${averageString} (${averageMark})`;
}

console.log(printAverage(eso2o));