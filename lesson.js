//document.getElementById("count-el").innerText = 1000

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0
 console.log(saveEl)

function increment(){

    count += 1
    countEl.innerText = count

    if(count>100){
        count = 0
        countEl.innerText= count
         ;
        alert("Count limit!")
    }
    else if(count == 50){
        alert("You are halfway already!")
    }
    else{
        
    } 


}
  
function save(){

    let countstr = count + "-"
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
    

}

