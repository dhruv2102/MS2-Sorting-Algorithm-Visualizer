// https://www.geeksforgeeks.org/selection-sort/
// Deciding Colors - https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
async function selection(){
    let i, j, min_index;

    const elements = document.querySelectorAll('.sort-indentifier');
    for(i = 0; i<elements.length-1; i++){
        elements[i].style.background = 'blue';

        min_index = i;
        for(j=i+1; j<elements.length; j++){
            elements[j].style.background = 'red'
            await timeout(delay)
            if(parseInt(elements[j].style.height) < parseInt(elements[min_index].style.height)){
                if(min_index !== i){
                    elements[min_index].style.background = 'black'
                }
                min_index = j;
                
            }
            else{
                elements[j].style.background = 'black'
            }
        }
        await timeout(delay)
        swap(elements[min_index], elements[i]);
        elements[min_index].style.background = 'black'
        elements[i].style.background = 'green'
    }
    enableElements()
}