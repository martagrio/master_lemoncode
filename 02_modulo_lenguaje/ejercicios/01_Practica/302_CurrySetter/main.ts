console.log('********** 302 Curry Setter **********');

interface PersonInfo {
    name: string;
    surname: string;
    age: number;
}

const julia: PersonInfo = { name: "Julia", surname: "Álvarez", age: 19 };

const set = (person: PersonInfo, propName: string, propValue: string | number): PersonInfo => {
    const personUpdated = { ...person };
    personUpdated[propName] = propValue;
    return personUpdated;
};

const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia);