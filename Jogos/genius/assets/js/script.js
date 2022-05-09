var arraySequencia = [1, 2, 3, 4];
var sequenciaInicial = [];
var sequenciaFinal = [];
var sequencia;
var validaSequencia = [];
var numeroSequencia = 4;
var cliques = 1;
var contadorValidaSequencia = -1;
var acertos = 0;
var indexValidaCores = 0;
var cor = 1;
var vitoria = 0;

var numeroRandomico = 0;
var numeroRandomicoArray = 0;

var i = 0;



const quadrado1 = document.getElementById('quadro1');
const quadrado2 = document.getElementById('quadro2');
const quadrado3 = document.getElementById('quadro3');
const quadrado4 = document.getElementById('quadro4');

const iniciarDesafio = document.getElementById('botaoIniciar');
const notificacaoSequencia = document.getElementById('validar');
const reiniciarDesafio = document.getElementById('botaoReiniciar');
const continuarDesafio = document.getElementById('continuarDesafio');
const sequenciaVitorias = document.getElementById('sequenciasCorretas');

iniciarDesafio.addEventListener('click', iniciarJogo);
reiniciarDesafio.addEventListener('click', reiniciar);
continuarDesafio.addEventListener('click', proximoDesafio);



function iniciarJogo() {
    sequenciaInicial = arraySequencia.sort(() => Math.random() - 0.5);
    mostrarSequencia();
    document.getElementById('botaoIniciar').style.display = 'none';
    reiniciarDesafio.classList.replace('btn-danger', 'btn-danger-mostrar');

}


function reiniciar() {
    location.reload();

}

function proximoDesafio() {

    numeroRandomico = Math.floor(Math.random() * 4) + 1;
    verificaFinalArray = sequenciaInicial.length - 1;



    if (sequenciaInicial[verificaFinalArray] == numeroRandomico) {

        if (numeroRandomico == 1) {
            numeroRandomico = numeroRandomico + 1;
        }


        if (numeroRandomico == 2) {
            numeroRandomico = numeroRandomico + 1;
        }


        if (numeroRandomico == 3) {
            numeroRandomico = numeroRandomico + 1;
        }


        if (numeroRandomico == 4) {
            numeroRandomico = numeroRandomico - 1;
        }
    }

    arraySequencia.push(numeroRandomico);

    numeroSequencia++;
    i = 0;
    cor = 1;
    validaSequencia = [];
    contadorValidaSequencia = -1;
    acertos = 0;
    reiniciarDesafio.classList.replace('btn-danger', 'btn-danger-mostrar');
    document.getElementById('botaoIniciar').style.display = 'none';
    continuarDesafio.classList.replace('btn-success-mostrar', 'btn-success');
    console.log('proximo desafio');
    mostrarSequencia();


}

function mostrarSequencia() {

    setTimeout(function () {



        sequenciaFinal[i] = sequenciaInicial[i];

        if (i <= numeroSequencia) {

            if (sequenciaFinal[i] == '1') {
                quadrado1.classList.add("anima1");
                quadrado2.classList.remove("anima2");
                quadrado3.classList.remove("anima3");
                quadrado4.classList.remove("anima4");
                console.log('sequencia 1');


            }

            if (sequenciaFinal[i] == '2') {
                quadrado1.classList.remove("anima1");
                quadrado2.classList.add("anima2");
                quadrado3.classList.remove("anima3");
                quadrado4.classList.remove("anima4");
                console.log('sequencia 2');

            }

            if (sequenciaFinal[i] == '3') {
                quadrado1.classList.remove("anima1");
                quadrado2.classList.remove("anima2");
                quadrado3.classList.add("anima3");
                quadrado4.classList.remove("anima4");
                console.log('sequencia 3');

            }

            if (sequenciaFinal[i] == '4') {
                quadrado1.classList.remove("anima1");
                quadrado2.classList.remove("anima2");
                quadrado3.classList.remove("anima3");
                quadrado4.classList.add("anima4");
                console.log('sequencia 4');

            }

            i++;
            mostrarSequencia();

        }
    }, 500)



    if (i > numeroSequencia) {
        quadrado1.classList.remove("anima1");
        quadrado2.classList.remove("anima2");
        quadrado3.classList.remove("anima3");
        quadrado4.classList.remove("anima4");

        inicioJogador();
    }

}


function inicioJogador() {

    notificacaoSequencia.classList.replace('alert-primary', 'alert-warning');
    notificacaoSequencia.innerHTML = 'Inicie a Sequência. Boa Sorte!';

    quadrado1.addEventListener('click', sequenciaCores1);
    quadrado2.addEventListener('click', sequenciaCores2);
    quadrado3.addEventListener('click', sequenciaCores3);
    quadrado4.addEventListener('click', sequenciaCores4);


}


function testeFinal() {

    if (validaSequencia[contadorValidaSequencia] == sequenciaInicial[contadorValidaSequencia]) {


        notificacaoSequencia.classList.replace('alert-warning', 'alert-success');
        notificacaoSequencia.innerHTML = 'A Cor ' + cor + ' está correta';


        acertos++;
        cor++;

        if (acertos == sequenciaInicial.length) {

            vitoria++;

            notificacaoSequencia.innerHTML = 'Parabéns, você completou o Desafio!';
            sequenciaVitorias.innerHTML = 'Número de sequências corretas: ' + vitoria + '';

            continuarDesafio.classList.replace('btn-success', 'btn-success-mostrar');
            reiniciarDesafio.classList.replace('btn-danger-mostrar', 'btn-danger');


        }




    } else {

        notificacaoSequencia.classList.replace('alert-success', 'alert-danger');
        notificacaoSequencia.classList.replace('alert-warning', 'alert-danger');
        notificacaoSequencia.innerHTML = 'Sequência Incorreta. Reinicie o Jogo!';

        document.getElementById('quadro1').style.pointerEvents = 'none';
        document.getElementById('quadro2').style.pointerEvents = 'none';
        document.getElementById('quadro3').style.pointerEvents = 'none';
        document.getElementById('quadro4').style.pointerEvents = 'none';

    }

}


function sequenciaCores1() {

    validaSequencia.push(1);
    console.log('Quadrado1');

    contadorValidaSequencia++;
    testeFinal();


}

function sequenciaCores2() {

    validaSequencia.push(2);
    console.log('Quadrado2');

    contadorValidaSequencia++;
    testeFinal();


}

function sequenciaCores3() {

    validaSequencia.push(3);
    console.log('Quadrado3');

    contadorValidaSequencia++;
    testeFinal();


}

function sequenciaCores4() {

    validaSequencia.push(4);
    console.log('Quadrado4');

    contadorValidaSequencia++;
    testeFinal();


}