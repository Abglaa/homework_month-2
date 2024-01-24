const myRevers = (reverse) => {
    let newStr = ''
    for (let i = reverse.length-1; i>=0; i--){
        newStr+=reverse[i]
    }
    return newStr
}
console.log(myRevers('ilol'))

//2
const capitalize = (string) => {
    console.log(string[0].toUpperCase() + string.slice(1).toLowerCase())
}
capitalize('dfvdfvjmvk')


//3

const charCount = (str, str1)=> {
    const lowerInput = str.toLowerCase()
    const charInput = str1.toLowerCase()
    let count = 0
    for (let i =0;i <lowerInput.length;i++){
        if (lowerInput[i]===charInput){
            count++
        }
    }
    return count
}
console.log(charCount('nfjwenfesjnfwen', 's'))