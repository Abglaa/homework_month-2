const label = document.querySelector('label')
const textArea = document.querySelector('#text')
const counter = document.querySelector('#count')

let count = 100

textArea.oninput= () => {
    let inputValue = textArea.value
    let inputLength = inputValue.length
    counter.textContent = `${inputLength} / ${count}`
    if (inputLength >= 100){
        counter.style.color = 'red'
        textArea.style.border = '3px solid red'
        label.style.color = 'red'
    } else {
        counter.style.color = 'green'
        textArea.style.border = '3px solid green'
        label.style.color = 'green'
    }
}
