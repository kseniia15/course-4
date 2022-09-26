// //Мінімум

// //Напиши всі можливі варіанти створення функцій.
// //function definition expression
const x = function (a, b) {
    return a * b;
}
//arrow function expression
let func = function (arg1, arg2, argN) {
    return expression;
};

//function declaration statement
function myFunction(a, b) {
    return a * b;
}

//2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function argumentCount() {
    return arguments.length;
}
console.log(argumentCount(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
function checkNumber(a = 0, b = 0) {
    a = +a;
    b = +b;
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
console.log(checkNumber(5, 3));

//4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(a) {
    if (a <= 0) return console.error('Incorrect input ');
    for (let i = a - 1; i > 0; i--) {
        a = a * i;
    }
    return a;
}
console.log(factorial(3));

//5. Напиши функцію, яка приймає три окремі цифри і перетворює їх 
//в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function threeNumbers(a = 0, b = 0, c = 0) {
    return a * 100 + b * 10 + c;
}
console.log(threeNumbers(3, 4, 5));

//6. Напиши функцію, яка приймає довжину і ширину прямокутника і 
//обчислює його площу. Якщо в функцію передали 1 параметр, 
//то вона обчислює площу квадрата.
function square(a, b = a) {
    a = +a;
    b = +b;
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else {
        console.log('Enter a number');
        return undefined
    }
}

console.log(square(7, 9));

// Counter (додаткове завдання);
function baz(firstCount) {
    let count = firstCount;
    return function (text) {
        if (Boolean(text) !== Boolean(1)) {
            return count++;
        } else {
            count = firstCount;
            return firstCount;
        }
    }
}

const secondCount = baz(10);
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount('stop'));
console.log('=========');
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
console.log(secondCount());
