/* Apartado A */
console.log('Apartado A');

let user = { name: "María", age: 30 };
let clonedUser = { name: "María", age: 30 };

//console.log(user === clonedUser); // false

function isEqual(a, b) {

    for (const key in a) {
        if (!b.hasOwnProperty(key) || a[key] !== b[key])
            return false;
    }

    return true;
}

const isEqual2 = (a, b) => Object.keys(a).every(key => b.hasOwnProperty(key) && a[key] === b[key]);


console.log('función isEqual', isEqual(user, clonedUser));
console.log('función isEqual2', isEqual2(user, clonedUser));

/* Apartado B */
console.log('Apartado B');

user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};

function isDeepEqual(a, b) {

    for (const key in a) {

        if (
            !b.hasOwnProperty(key) ||
            typeof a[key] !== typeof b[key] ||
            (typeof a[key] !== 'object' && a[key] !== b[key]) ||
            (typeof a[key] === 'object' && !isDeepEqual(a[key], b[key]))
        ) {
            return false;
        }
    }
    return true;
}

console.log('Función isDeepEqual', isDeepEqual(user, clonedUser));