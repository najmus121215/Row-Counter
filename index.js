let count = 0
let myCounter=document.getElementById('counter') 
let mySaver=document.getElementById('registry')
function counter(){
    count +=1 
    myCounter.textContent = count 

}


function save(){
    mySaver.textContent += + count + " - " ; 
    count = 0 ;
    myCounter.textContent = count ;    
}
