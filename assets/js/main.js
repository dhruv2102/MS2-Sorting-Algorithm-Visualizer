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

    array = []
    for(let i=0; i<sizeOfArray; i++){
        array.push(Math.ceil(Math.random() * 100))
    }
    console.log(array)
}