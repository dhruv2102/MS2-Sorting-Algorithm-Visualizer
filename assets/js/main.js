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
        element.style.height = `${array[i]*3}px`
        element.classList.add('bar-style')
        element.classList.add(`barNumber${i}`)
        // Adding the class below to identify while sorting
        element.classList.add('sort-indentifier')
        document.getElementById('graph').appendChild(element)
    }
}

// Adding event listner for sorting array

$("#sort").click(function(){
    var selectedOption = document.getElementById('algorithms').value;
    
    if(selectedOption === 'bubble'){
        bubble()
    }
    else if(selectedOption === 'insertion'){
        insertion()
    }
})



// ------------------------------------------- Helper functions
function deleteArray(){
    document.getElementById('graph').innerHTML = ''
}

function swap(element1, element2){
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

let delay = 1000

// Reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
async function timeout(t){
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, t)
    })
}


// Reference - https://stackoverflow.com/questions/31968490/bootstrap-dropdown-text-not-changing-when-selected
$('.dropdown-menu').on( 'click', 'a', function() {
    var text = $(this).html();
    var htmlText = text + ' <span class="caret"></span>';
    $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
});


