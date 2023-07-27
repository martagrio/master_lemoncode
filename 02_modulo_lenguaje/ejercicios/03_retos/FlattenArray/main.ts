console.log('************** Flatten Array **************');

console.log('************** Apartado A **************');

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const FlatArray = (array: any[]) => { return array.flat(Infinity) };

console.log(FlatArray(sample));
console.log(sample);


/* console.log('************** Apartado B **************');

const sample2 = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const FlatArray2 = <T>(array: Readonly<T[]>): T[] => {
    let flatArray: number[] = array.flat(Infinity);
    return flatArray;
};

console.log(FlatArray2(sample)); */