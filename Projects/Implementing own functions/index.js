// Implementing my own versions of map, filter and reduce functions

const arr = [
    { item: "Milk", quantity: 1, price: 3.5 },
    { item: "Bread", quantity: 2, price: 2.25 },
    { item: "Eggs", quantity: 1, price: 4.0 },
    { item: "Apples", quantity: 6, price: 1.2 },
    { item: "Rice", quantity: 1, price: 8.5 }
];

// mapping function

arr.mapping = function(operation) {

    const returnArray = [];
    for (let i of this) {
        i = operation(i);
        returnArray.push(i);
    }
    return returnArray;
}

const newArr1 = arr.mapping((element)=> ({item: element.item, price: element.price}))

console.log(newArr1);

// filtering function 

arr.filtering = function(compare) {

    const returnArray = []
    for (let i of this) {
        if (compare(i)) {
            returnArray.push(i)
        }
    }
    return returnArray;
}

const newArr2 = arr.filtering((element)=> element.price > 3);

console.log(newArr2);

// reducer function

const arr2 = [1,2,3,4,5,6];

arr2.reducer = function(returnValue, accValue) {

    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError("Reducing empty array with no initial value") 
    }

    let start = 0
    if (arguments.length < 2) {
        accValue = this[0];
        start = 1;
    }

    for (let i=start; i<this.length; i++) {
        accValue = returnValue(accValue, this[i]);
    }
    return accValue;
}

const result = arr2.reducer((accumulator,currentVal)=> accumulator+currentVal,1);

console.log(result);