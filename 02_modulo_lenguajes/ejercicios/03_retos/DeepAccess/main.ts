console.log('************** Deep Access **************');

console.log('************** Apartado A **************');

let myObject: any = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

const deepGet = (myObj: any, ...keys: string[]) => {

    if (keys.length === 0) return myObj;

    const [currentKey, ...otherKeys] = keys;

    return deepGet(myObj[currentKey], ...otherKeys);
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));

console.log('************** Apartado B **************');

myObject = {};

const deepSet = (value: number, myObj: any, ...keys: string[]) => {

    if (keys.length === 0) return;
    if (keys.length === 1) myObj[keys[0]] = value;
    else {

        const [currentKey, ...otherKeys] = keys;
        if (!myObj.hasOwnProperty(currentKey)) myObj[currentKey] = {};
        deepSet(value, myObj[currentKey], ...otherKeys);
    }
};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));  // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));  // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}