"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somarNumeros(numero1, numero2) {
    if (typeof numero1 === 'number' && typeof numero2 === 'number') {
        return numero1 + numero2;
    }
    else {
        return Number(numero1) + Number(numero2);
    }
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(somarNumeros(Number(input1.value), Number(input2.value)));
    });
}
