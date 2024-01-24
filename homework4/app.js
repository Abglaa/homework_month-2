function myReverse(inputStr) {
    let reversedStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr[i];
    }
    return reversedStr;
}

let inputString = "123456789";
let result = myReverse(inputString);
console.log(result);


//2
//

function capitalizeString(inputStr) {
    if (inputStr.length === 0) {
        return inputStr;
    }

    let capitalizedStr = inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();
    return capitalizedStr;
}

let name1 = "ЕВГЕНИЙ";
let result1 = capitalizeString(name1);
console.log(result1)

let name2 = "иВАНОВ";
let result2 = capitalizeString(name2);
console.log(result2);


//3


function charCount(inputStr, char) {
    const lowerCaseStr = inputStr.toLowerCase();
    const lowerCaseChar = char.toLowerCase();

    let count = 0;

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === lowerCaseChar) {
            count++;
        }
    }

    return count;
}

let str1 = "Abrakadabra";
let char1 = "a";
console.log(charCount(str1, char1));

let str2 = "hello";
let char2 = "z";
console.log(charCount(str2, char2));
