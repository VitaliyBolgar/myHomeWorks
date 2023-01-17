// ------ I S S U E S ------ //
//1) Не обнуляет экран, когда после "=" нажимаешь следующую цифру. После рассчетов надо нажимать С
//2) Не меняет знак выражения, если перепутали. В таком случае снова надо нажимать С и считать заново
//3) Не прибавляет последнее введеное число, если нажимать = несколько раз

// ------ C A L C  C L A S S ------ // (для хранения информации)
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        // Переменные для этого класса:
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    // O P E R A T I O N S //
    //(какие есть кнопки: удаление всего, удаление элемента, нажатие кнопок, кнопки математических операций, обновление экрана)
    clear() { // очистить экран
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; // если экран пуст, никакая операция не будет выбираться, если мы нажимаем на очистку
    }
    delete() { // удалить последний написанный элемент
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        // currentOperand приводим в строку, далее с помощью slice убираем все с 0 индекса включительно, до последнего не включительно и выводим. Иными словами: удаляем последний элемент о_о
    }
    appendNum(number) { // нажатие кнопок 
        if (number === '.' && this.currentOperand.includes('.')) return; // чтобы не добавлялись точки много раз. если параметр number равен . или операнд уже содержит ., то прекращаем     добавлять точки -_-   
        this.currentOperand = this.currentOperand + number;
    }
    

    chooseOperation(operation) { // что будет происходить, когда происходит нажатие кнопок математической операции
        if (this.currentOperand === '') return; // если нажали на (+ - х /, то не будет происходить то, что прописали под ифами
      
        if (this.previousOperand !== '') { // если наверху не пусто, то продолжай выполнять ту мат операцию, которую выбрал дальше
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {// математические функции
        let computation; //(результат)
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // через parseFloat - возвращаем переменным тип число (они были строками (!))
        if (isNaN(prev) || isNaN(current)) return; // отменяет, если числа не числа =_= (тип данных не число)
        switch(this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '*':
                computation = prev * current
                break;
            case '/':
                computation = prev / current
                break;
            
            default: 
                return; // в случае, если ни один из символов не выбран
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
   

    updateDisplay() { // обновление экрана
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand; // чтобы убирался контент из верха дисплея
        if (this.operation != null) { // чтобы выводился наверх знак, который мы выбрали
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`; // в строке появляется переменная число и переменная со знаком выражения
        }
    }
}


// ------ V A R I A B L E S ------ // 
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Что должны делать наши переменные 
numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText); // сначала выполняет нажатие кнопки через функцию appendNumber
        calculator.updateDisplay(); // после выполнения appendNumber, обновляет экран через функцию updateDisplay
    })
    
})
operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText); // сначала выполняет выбор математической операции через функцию chooseOperation
        calculator.updateDisplay(); // после выполнения appendNumber, обновляет экран через функцию updateDisplay
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute(); 
    calculator.updateDisplay();
   
})

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
