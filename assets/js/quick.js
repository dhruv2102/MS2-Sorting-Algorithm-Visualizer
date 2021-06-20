// https://www.geeksforgeeks.org/quick-sort/

async function quicksort(elements, l, r){
    let pivot;
    if(l<r){
        pivot = await partition(elements, l, r)
        await quicksort(elements, l, pivot-1)
        await quicksort(elements, pivot+1, r)
    }else{
        if(l>=0 && r>=0 && l < elements.len && r < elements.len)
        elements[r].style.background = 'green'
        elements[l].style.background = 'green'
    }
}

async function partition(elements, low, high){
    let piv = elements[high].style.height;
    let i = low -1
    
    // Selecting color of pivot element
    elements[high].style.background = 'red'

    for(let j=low; j<high; j++){
        // Select color for current element
        elements[j].style.background = 'blue'
        await timeout(delay)
        if(parseInt(elements[j].style.height) < parseInt(piv)){
            i++;
            swap(elements[i], elements[j]);
            // Less than pivot
            elements[i].style.background = 'orange'

            if(i != j){
                elements[j].style.background = 'orange'
            }
            await timeout(delay)
        }
        else{
            // Greater than pivot
             elements[j].style.background = 'pink'
        }
    }
    await timeout(delay)
    swap(elements[i+1], elements[high]);
    elements[high].style.background = 'pink'
    elements[i+1].style.background = 'green'

    // Turning color back to black for unsorted
    for(let c = 0; c<elements.length; c++){
        if(elements[c].style.background !== 'green'){
            elements[c].style.background = 'black'
        }
    }
    return i+1

}

async function quick(){
    let l, r
    const elements = document.querySelectorAll('.sort-indentifier'); 
    l = 0;
    r = elements.length - 1;
    await quicksort(elements, l, r)
    enableElements()
}