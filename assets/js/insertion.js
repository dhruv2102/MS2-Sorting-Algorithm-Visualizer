// https://www.geeksforgeeks.org/insertion-sort/
async function insertion(){
    const elements = document.querySelectorAll('.sort-indentifier');

    elements[0].style.background = 'green';
    for(let i=1; i<elements.length; i++){
        let j = i-1;
        let key = elements[i].style.height;
        elements[i].style.background = 'blue'
        await(timeout(delay))
        while(j >= 0 && parseInt(elements[j].style.height) > parseInt(key)){
            elements[j].style.background = 'blue'
            elements[j+1].style.height = elements[j].style.height;
            j--;
            await timeout(delay)

            for(let k=i; k>=0; k--){
                elements[k].style.background = 'green'
            }
        }
        
        elements[j+1].style.height = key;
        elements[i].style.background = 'green'
    }
}