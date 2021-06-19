async function bubble(){
    const elements = document.querySelectorAll('.sort-indentifier')
    
    for(let i=0; i<elements.length-1;i++){
        for(let j=0; j<elements.length-1-i; j++){
            elements[j].style.background =  'blue'
            elements[j+1].style.background =  'blue'
            if(parseInt(elements[j].style.height) > parseInt(elements[j+1].style.height)){
                await timeout(delay)
                swap(elements[j], elements[j+1])
            }
            elements[j].style.background =  'black'
            elements[j+1].style.background =  'black'
        }
        elements[elements.length-1-i].style.background =  'green' 
    }
    elements[0].style.background = 'green'

}