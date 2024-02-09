import { objectOperations } from "./funciones.js"
// SELECCIONANDO ELEMENTOS HTML
const inferior = document.querySelector('.pInferior')
const superior = document.querySelector('.pSuperior')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const deleteButton = document.querySelector('.delete')
let valueCurrent = ''
let valuePrevious = ''
let operation = undefined
let sign = ''

deleteButton.addEventListener('click', deleteData)

operations.forEach((operation) => operation.addEventListener('click', executeOperation))

numbers.forEach((number) => number.addEventListener('click', printNumber))

function executeOperation(e) {
        let operationType = e.target.textContent
        console.log(sign);
        console.log(operationType);
        if(operationType == '='){
             if(valuePrevious.length < 1 || valueCurrent.length < 1 || sign == '') return 
             console.log(sign);
             const result = objectOperations[sign](valuePrevious, valueCurrent)  
             valuePrevious = result
             valueCurrent = ''
             superior.innerHTML = valuePrevious
             inferior.innerHTML = valueCurrent
             sign = ''
        }

        else{
              operation = operationType
              valuePrevious = valueCurrent || valuePrevious
              superior.innerHTML = valuePrevious + ' ' + operation 
              inferior.innerHTML = ''
              valueCurrent =''
              sign = e.target.value
              console.log(sign);   
  
        }

}


function printNumber(e) {
        let numberValue = e.target.textContent
       // console.log(numberValue);
        if(numberValue === '.' && valueCurrent.length < 1) {
                valueCurrent =`${0+numberValue}`
                inferior.innerHTML = `${valueCurrent}`         
              
        }  
        else if( numberValue === '.' && !valueCurrent.includes('.') ) {
                valueCurrent +=`${numberValue}`
                inferior.innerHTML = valueCurrent      
                   
        } 
        else if(numberValue !== '.') {
                valueCurrent += `${numberValue}`
                inferior.innerHTML = valueCurrent
                 
        }
}


function deleteData() {
    valueCurrent = ''
    valuePrevious = ''
    operation = undefined
    sign = '' 
    inferior.innerHTML = '' 
    superior.innerHTML = '' 
}


