// getting the array size
let arraySize = document.getElementById('size').value

// Getting upaded value of input size
// Reference - https://stackoverflow.com/questions/28932238/how-to-get-input-range-during-change-with-jquery/28932277
$(document).on('input', '#size', function(){
    arraySize = document.getElementById('size').value
    createArray(arraySize)
})

// Creating an array of random numbers
let array = []

createArray(arraySize)
function createArray(sizeOfArray){
    // Create a function to delete the existing elements
    deleteArray()

    array = []
    for(let i=0; i<sizeOfArray; i++){
        array.push(Math.ceil(Math.random() * 100))
    }


    // Logic here should be for every element add a bar-style
    for(let i=0; i<sizeOfArray; i++){
        const element = document.createElement('div')
        element.style.height = `${array[i]*2}px`
        element.classList.add('bar-style')
        element.classList.add(`barNumber${i}`)
        document.getElementById('graph').appendChild(element)
    }
}

function deleteArray(){
    document.getElementById('graph').innerHTML = ''
}