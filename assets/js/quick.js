// https://www.geeksforgeeks.org/quick-sort/

async function quicksort(elements, l, r){
    let pivot;
    if(l<r){
        pivot = await partition(elements, l, r)
        await quicksort(elements, l, pivot-1)
        await quicksort(elements, pivot+1, r)
    }
}

async function partition(elements, low, high){
    let piv = elements[high].style.height;
    let i = low -1
    await timeout(delay)

    for(let j=low; j<high; j++){
        if(parseInt(elements[j].style.height) < parseInt(piv)){
            i++;
            swap(elements[i], elements[j]);
            await timeout(delay)
        }
    }
    await timeout(delay)
    swap(elements[i+1], elements[high]);
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