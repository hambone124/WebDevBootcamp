function printReverse(array) {
    console.log("printReverse()")
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }  
}

function isUniform(array) {
    console.log("isUniform()")
    let result = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[0]) {
            result = false;
            break;
        }        
    }
    console.log(result);
}

function sumArray(array) {
    console.log("sumArray()");
    let result = 0;
    array.forEach(element => {
        result += element;
    });
    console.log(result);
}

function max(array) {
    console.log("max()");
    let result = array[0];
    array.forEach(element => {
        if (element > result) {
            result = element;
        }
    });
    console.log(result);
}

// let arr = [9,5,7,1,3,10];
let arr = [1,1,1,1,1];

printReverse(arr);
isUniform(arr);
sumArray(arr);
max(arr);