var resultVisor = document.getElementById('prompt');

var number1 = document.getElementById('1');
var number2 = document.getElementById('2');
var number3 = document.getElementById('3');
var number4 = document.getElementById('4');
var number5 = document.getElementById('5');
var number6 = document.getElementById('6');
var number7 = document.getElementById('7');
var number8 = document.getElementById('8');
var number9 = document.getElementById('9');
var number0 = document.getElementById('0');

var clearButton = document.getElementById('clear');
var resultButton = document.getElementById('same');

var pushSoma = document.getElementById('soma');
var pushLess = document.getElementById('less');
var pushDivision = document.getElementById('divison');
var pushMultiplique = document.getElementById('multiplique');



number1.addEventListener('click', um);
number2.addEventListener('click', dois);
number3.addEventListener('click', tres);
number4.addEventListener('click', quatro);
number5.addEventListener('click', cinco);
number6.addEventListener('click', seis);
number7.addEventListener('click', sete);
number8.addEventListener('click', oito);
number9.addEventListener('click', nove);
number0.addEventListener('click', zero);


pushSoma.addEventListener('click', somar);
pushMultiplique.addEventListener('click', multiplique);
pushLess.addEventListener('click', less);
pushDivision.addEventListener('click', divison);

resultButton.addEventListener('click', resultFinal);
clearButton.addEventListener('click', reset);



let result;
let operator;
var resultFinalOperator;
var value;
var resultadoOperator;





function zero() {

    document.getElementById('prompt').value += 0;

}

function um() {

    document.getElementById('prompt').value += 1;

}

function dois() {

    document.getElementById('prompt').value += 2;

}

function tres() {

    document.getElementById('prompt').value += 3;
}

function quatro() {

    document.getElementById('prompt').value += 4;
}

function cinco() {

    document.getElementById('prompt').value += 5;
}

function seis() {

    document.getElementById('prompt').value += 6;
}

function sete() {

    document.getElementById('prompt').value += 7;
}

function oito() {

    document.getElementById('prompt').value += 8;
}

function nove() {

    document.getElementById('prompt').value += 9;
}

function somar() {

    document.getElementById('prompt').value += '+';
}

function less() {

    document.getElementById('prompt').value += '-';
}

function multiplique() {

    document.getElementById('prompt').value += '*';
}

function divison() {

    document.getElementById('prompt').value += '/';
}



function convertString(fn) {

    return new Function('return ' + fn)();


}

function resultFinal() {

    resultFinalOperator = document.getElementById('prompt').value;
    resultadoOperator = convertString(resultFinalOperator);

    printPrompt();

    return resultadoOperator;



}


function printPrompt() {

    document.getElementById('prompt').value = resultadoOperator
    
}


if (document.getElementById('prompt').value > 0) {

    document.getElementById('prompt').value = resultFinalOperator;

} else {
    document.getElementById('prompt').value = null;
}


function reset () {
    document.getElementById('prompt').value = null;
}
