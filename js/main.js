"use strict";
// задание 1
function AB(a, b) {
    for (let i = a; i < b; i++) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
}

let a = Number(prompt('введите а'));
let b = Number(prompt('введите b'));
AB(a, b);


// задание 2
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// задание 3
let n = 0;
do {
    n = Number(prompt('Введите число больше 10'));
    if (!n) break;
} while (n <= 10)
    

//задание 4
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let A = Number(prompt('Введите а'));
let B = Number(prompt('Введите b'));
alert(`Меньшее из чисел ${A} и ${B} - это ${min(A, B)}`);



// задание 5
let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);


//задание 6
function checkAge(age) {
    return ((age > 18) ? alert(true) : confirm('Родители согласны?'));
}

let age = prompt('Введите возраст');
checkAge(age);
