// ------ V A R I A B L E S ------ //
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');
const btnTimes = document.querySelector('.btn-times');
const btnDivide = document.querySelector('.btn-divide');
const btnPercent = document.querySelector('.btn-percent');
const allClear = document.querySelector('.clear');
const output = document.querySelector('.par')
const calc = document.querySelector('.calculator')
const btnRow = document.querySelector('.buttons')

// ------ S T Y L E S ------ //
calc.style = "display: flex; align-items: center; flex-direction: column; background: linear-gradient(to right, #FBEAEB, #2F3C7E);; border: 1px solid black; border-radius: 50px; padding: 50px"
btnRow.style = "padding: 10px; "
num1.style = "border-radius: 50px; text-align: center; height: 50px"
num2.style = "border-radius: 50px; text-align: center; height: 50px"
output.style = 'width: 150px; height: 90px; background-color: white; border-radius: 10px; text-align: center; display: flex; justify-content: center; align-items: center'
allClear.style = "padding:10px; margin-top: 10px; border-radius: 15px;"
btnPlus.style = "width: 50px; height: 30px; font-size: 20px"
btnMinus.style =  "width: 50px; height: 30px; font-size: 20px"
btnTimes.style =  "width: 50px; height: 30px; font-size: 20px"
btnDivide.style =  "width: 50px; height: 30px; font-size: 20px"
btnPercent.style =  "width: 50px; height: 30px; font-size: 20px"




// ------ F U N C T I O N S ------ //
function clear() { // function for Clear button
    output.innerHTML = '';
    num1.value = ''
    num2.value = ''
}

// ------ E V E N T S ------ //
btnPlus.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    output.innerHTML = +a + +b;
})
btnMinus.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    output.innerHTML = a - b;
})
btnTimes.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    output.innerHTML = a * b;
})
btnDivide.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    output.innerHTML = a / b;
})
btnPercent.addEventListener("click", () => {
    const a = num1.value;
    const b = num2.value;
    output.innerHTML = a / 100;
})
allClear.addEventListener("click", () => {
    clear()
})


// --------- Не получилось.... ----------
//------HTML for buttons with the same class
// <button class="btn">+</button>
// <button class="btn">-</button>
// <button class="btn">*</button>
// <button class="btn">/</button>
// <button class="btn">%</button> 

//------JS variable for all elements with class=btn
// const btn = document.querySelectorAll('.btn')
//------function with Switch to choose symbol
// let op
// function operation() {
//     let result 
//     let a = num1.value;
//     let b = num2.value;

//     switch(op) {
//         case '+':
//             result = +a + +b
//             break;
//         case '-':
//             result = a - b
//             break;
//         case '*':
//             result = a * b
//             break;
//         case '/':
//             result = a / b
//             break;
        
//     }
//     output.innerHTML = result;
    
// }
//------event for operation buttons
// btn.forEach(button => {
//     button.addEventListener("click", () => {
//         operation()
//     })
// })