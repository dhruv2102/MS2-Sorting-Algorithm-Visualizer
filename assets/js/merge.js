// https://www.geeksforgeeks.org/in-place-merge-sort/

async function merge(){
    const elements = document.querySelectorAll('.sort-indentifier');
    let left = 0;
    let right = elements.length - 1;
    await mergesort(elements, left, right)
}

async function mergesort(elements, l, r){
    if(l >= r){
        return
    }

    let middle = l + Math.floor((r-l)/2)
    await mergesort(elements, l, middle)
    await mergesort(elements, middle+1, r)
    await merges(elements, l, middle, r)
}

async function merges(elements, start, middle, end){
    let start2 = middle + 1;

    if(parseInt(elements[middle].style.height) <= parseInt(elements[start2].style.height)){
        return;
    }

    while(start <= middle && start2 <= end){

        if(parseInt(elements[start].style.height) <= parseInt(elements[start2].style.height)){
            start++;
        }
        else{
            let value = elements[start2].style.height;
            let index = start2;
            
            await timeout(delay);
            while(index !== start){
                elements[index].style.height = elements[index-1].style.height;
                index--;
            }
            elements[start].style.height = value
            start++;
            middle++;
            start2++;
        }
    }
}
