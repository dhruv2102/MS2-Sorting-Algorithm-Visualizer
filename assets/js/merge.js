// // https://www.geeksforgeeks.org/in-place-merge-sort/

// async function merge(){
//     const elements = document.querySelectorAll('.sort-indentifier');
//     let left = 0;
//     let right = elements.length - 1;
//     await mergesort(elements, left, right)
//     enableElements()
// }

// async function mergesort(elements, l, r){
//     if(l >= r){
//         return
//     }

//     let middle = l + Math.floor((r-l)/2)
//     await mergesort(elements, l, middle)
//     await mergesort(elements, middle+1, r)
//     await merges(elements, l, middle, r)
// }

// async function merges(elements, start, middle, end){
//     let start2 = middle + 1;
//     elements[start].style.background = 'blue'
//     elements[start2].style.background = 'yellow'
//     await timeout(delay)

//     if(parseInt(elements[middle].style.height) <= parseInt(elements[start2].style.height)){
//         elements[middle].style.background = 'lightgreen'
//         return;
//     }

//     while(start <= middle && start2 <= end){

//         if(parseInt(elements[start].style.height) <= parseInt(elements[start2].style.height)){
//             start++;
//             elements[start].style.background = 'blue'
//         }
//         else{
//             let value = elements[start2].style.height;
//             let index = start2;
            
//             await timeout(delay);
//             while(index !== start){
//                 elements[index].style.height = elements[index-1].style.height;
//                 index--;
//             }
//             elements[start].style.height = value
//             start++;
//             middle++;
//             start2++;
//         }
//     }
// }

/**
Merge sort vizualization adapated from geeks for geeks
https://www.geeksforgeeks.org/merge-sort-visualization-in-javascript/
Wasn't able tp vizualize the algorithm properly 
 */

 async function merge(){
    const elements = document.querySelectorAll('.sort-indentifier');
    let left = 0;
    let right = elements.length - 1;
    await mergesort(elements, left, right)
    for(let i=0; i<elements.length; i++){
        console.log('Here')
        elements[i].style.background = 'lightgreen'
    }
    enableElements()
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
    const len1 = middle - start + 1;
    const len2 = end - middle;

    let leftArray = new Array(len1);
    let rightArray = new Array(len2);


    for(let i=0; i<len1; i++){
        elements[start+i].style.background = 'blue'
        leftArray[i] = (elements[start+i].style.height)
        await timeout(delay)
    }
    for(let i=0; i<len2; i++){
        elements[middle+1+i].style.background = 'yellow'
        rightArray[i] = (elements[middle+1+i].style.height);
        await timeout(delay)
    }

    let leftPointer=0, rightPointer=0, pointer = start;

    while(leftPointer < len1 && rightPointer < len2){
        if(parseInt(leftArray[leftPointer]) <= parseInt(rightArray[rightPointer])){
            await timeout(delay)
            elements[pointer].style.background = 'orange'
            elements[pointer].style.height = leftArray[leftPointer];
            pointer++;
            leftPointer++;
        }
        else{
            await timeout(delay)
            elements[pointer].style.background = 'orange'
            elements[pointer].style.height = rightArray[rightPointer];
            pointer++;
            rightPointer++;
        }
    }

    while(leftPointer < len1){
        await timeout(delay)
        elements[pointer].style.background = 'orange'
        elements[pointer].style.height = leftArray[leftPointer];
        pointer++;
        leftPointer++;
    }

    while(rightPointer < len2){
        await timeout(delay)
        elements[pointer].style.background = 'orange'
        elements[pointer].style.height = rightArray[rightPointer];
        pointer++;
        rightPointer++;
    }
    
}
