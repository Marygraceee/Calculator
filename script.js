

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

function selectValues(){
        document.addEventListener("click", (e) => {
            if (currentValue === "" && e.target.className === "numbers" && operator === null){
                currentValue = currentValue + `${e.target.textContent}`
                
            } else if (currentValue !== "" && operator === null && previousValue === "" && e.target.className === "numbers"){
                currentValue = currentValue + `${e.target.textContent}`
            }
            console.log(currentValue)
          currentNumber.innerText = currentValue
        })
   
   
}

let deleteEverything = document.addEventListener("click", (e) => {
    if (e.target.className === "deleteall"){
        currentValue = ""
        previousValue = ""
       currentNumber.innerText = ""
       previousNumber.innerText = ""
        operator = null
    }
})

selectValues()






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