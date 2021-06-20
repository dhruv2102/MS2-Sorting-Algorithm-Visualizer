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
        // getting width
        // https://stackoverflow.com/questions/11927844/get-width-in-pixels-from-element-with-style-set-with
        let totalWidth = document.getElementById('graph').clientWidth
        elementWidth = totalWidth/sizeOfArray
        
        const element = document.createElement('div')
        element.style.height = `${array[i]*3}px`
        element.style.width = `${elementWidth}px`
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
    disableElements()
    if(selectedOption === 'bubble'){
        bubble()
    }
    else if(selectedOption === 'insertion'){
        insertion()
    }
    else if(selectedOption === 'merge'){
        merge()
    }
    else if(selectedOption === 'quick'){
        quick()
    }
    else if(selectedOption === 'selection'){
        selection()
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

// Block other elements while sorting
function disableElements(){
    document.getElementById('size').disabled = true;
    document.getElementById('algorithms').disabled = true;
    document.getElementById('sort').disabled = true;
}

function enableElements(){
    document.getElementById('size').disabled = false;
    document.getElementById('algorithms').disabled = false;
    document.getElementById('sort').disabled = false;
}

// Getting updated speed
let delay = 1000
// Reference - https://stackoverflow.com/questions/28932238/how-to-get-input-range-during-change-with-jquery/28932277
$(document).on('input', '#speed', function(){
    speed = document.getElementById('speed').value
    delay = 1000 - speed
})