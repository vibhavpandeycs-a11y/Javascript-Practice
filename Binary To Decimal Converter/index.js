// Binary to decimal converter

let binNum = "1101";

function binaryToDecimalConverter() {
    sum = 0;
    for (let i of binNum) {
        if ((Number.isNaN(Number(i))) || (Number(i) > 1 || Number(i) < 0)) {
            return "The digits must be in 0's and 1's";
        }
    }

    for (let i=binNum.length-1; i>=0; i--) {
        sum += Number(binNum[i]) * 2**(binNum.length - 1 - i);
    }
    return sum;
}

if (binNum.length > 8) {
    console.log("The number must has less than or equal to 8 digits");
}
else if (binNum.length == 0) {
    console.log("Enter atleast one digit to continue");
}
else {
    decNum = binaryToDecimalConverter();
    console.log(decNum);
} 
