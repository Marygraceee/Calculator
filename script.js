

let numbers = document.querySelectorAll(".numbers")
let operations = document.querySelectorAll(".operations")
let equal = document.querySelector(".equal")
let decimal = document.querySelector(".decimal")
let deleteall = document.querySelector(".deleteall")
let del = document.querySelector(".delete")
let output = document.getElementById("output")
let currentNumber = document.querySelector(".currentnumber")
let previousNumber = document.querySelector(".previousnumber")


let currentValue = ""
let previousValue = ""
let operator = null
let result = ""

function selectFirstValue(){
        document.addEventListener("click", (e) => {
            if (currentValue === "" && e.target.className === "numbers" && operator === null){
                currentValue = currentValue + `${e.target.textContent}`
                
            } else if (currentValue !== "" && operator === null && previousValue === "" && e.target.className === "numbers"){
                currentValue = currentValue + `${e.target.textContent}`
            }
          
          updateOutput()
        })
   }

   function selectOperator() {
       document.addEventListener("click", (e) => {
           if (currentValue !== "" && e.target.className === "operations" && operator === null){
               operator = `${e.target.textContent}`

           } else if (operator !== null) return
        updateOutput()     
       })  
   }


function selectPrevious(){
    document.addEventListener("click", (e) => {
        if (currentValue !== "" && operator !== null && e.target.className === "numbers" && previousValue === ""){
            previousValue = previousValue + `${e.target.textContent}`
        } else if (currentValue !== "" && operator !== null && e.target.className === "numbers" && previousValue !== ""){
            previousValue = previousValue + `${e.target.textContent}`
        }
        updateOutput()
    })
}



function deleteEverything(){
currentValue = ""
previousValue = ""
operator = null
currentNumber.innerText = ""
previousNumber.innerText = ""
result = ""
}




function updateOutput(){
    if (currentValue !== ""){
    currentNumber.innerText = currentValue 
    }
 if (currentValue !== "" && operator !== null){
    currentNumber.innerText = currentValue + " " + operator
} 
if (currentValue !== "" && operator !== null && previousValue !== ""){
    previousNumber.innerText = currentValue + " " + operator
    currentNumber.innerText = previousValue
}
}


function math(){
    document.addEventListener("click", (e) => {
        if (e.target.className === "equal" && operator === "+" && result === "" && currentValue !== "" && previousValue !== ""){
            result = parseInt(currentValue) + parseInt(previousValue)
            currentNumber.innerText = `${result}`
            previousNumber.innerText = ""
        } 
        if (e.target.className === "equal" && operator === "/" && result === "" && currentValue !== "" && previousValue !== "" && previousValue !== "0"){
            result = parseInt(currentValue) / parseInt(previousValue)
            currentNumber.innerText = `${result}`
            previousNumber.innerText = ""
        } 
        if (e.target.className === "equal" && operator === "/" && result === "" && currentValue !== "" && previousValue === "0"){
        
            currentNumber.innerText = "Can't divide by 0!"
            previousNumber.innerText = ""
        } 
        
        if (e.target.className === "equal" && operator === "*" && result === "" && currentValue !== "" && previousValue !== ""){
            result = parseInt(currentValue) * parseInt(previousValue)
            currentNumber.innerText = `${result}`
            previousNumber.innerText = ""
        } 
        if (e.target.className === "equal" && operator === "-" && result === "" && currentValue !== "" && previousValue !== ""){
            result = parseInt(currentValue) - parseInt(previousValue)
            currentNumber.innerText = `${result}`
            previousNumber.innerText = ""
        }    
    })   
}
        


selectFirstValue()
selectOperator()
selectPrevious()
math()




/*
let firstNumberSelection = document.addEventListener("click",  (e) => {
    if (e.target.className === "numbers"){
        currentNumber.innerText = currentNumber.innerText + `${e.target.innerText}`
    }
    })



  let operatorSelection = document.addEventListener("click", (e) => {
    if(e.target.className === "add" || e.target.className === "subtract" ||e.target.className === "multiply" || e.target.className === "divide"){
        previousNumber.innerText = currentNumber.innerText + " " + `${e.target.innerText}`
        currentNumber.innerText = "";
    }
    })   
    
    let secondNumberSelection = document.addEventListener("click",  (e) => {
        if (e.target.className === "numbers"  && firstNumberSelection !== undefined){
            currentNumber.innerText = `${e.target.innerText}`
        }
        })


console.log(firstNumberSelection)
    */