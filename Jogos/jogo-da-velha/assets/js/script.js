var contadorEventos = 0;
var soma = 0;

const reiniciar = document.getElementById('botaoReiniciar');

const campo1 = document.getElementById('1');
const campo2 = document.getElementById('2');
const campo3 = document.getElementById('3');
const campo4 = document.getElementById('4');
const campo5 = document.getElementById('5');
const campo6 = document.getElementById('6');
const campo7 = document.getElementById('7');
const campo8 = document.getElementById('8');
const campo9 = document.getElementById('9');

const textoP1 = document.getElementById('p1');
const textoP2 = document.getElementById('p2');
const textoP3 = document.getElementById('p3');
const textoP4 = document.getElementById('p4');
const textoP5 = document.getElementById('p5');
const textoP6 = document.getElementById('p6');
const textoP7 = document.getElementById('p7');
const textoP8 = document.getElementById('p8');
const textoP9 = document.getElementById('p9');

const jogadorVencedor = document.getElementById('vencedor');
const vezJogador = document.getElementById('jogadores');


campo1.addEventListener('click', funcaoCampo1);
campo2.addEventListener('click', funcaoCampo2);
campo3.addEventListener('click', funcaoCampo3);
campo4.addEventListener('click', funcaoCampo4);
campo5.addEventListener('click', funcaoCampo5);
campo6.addEventListener('click', funcaoCampo6);
campo7.addEventListener('click', funcaoCampo7);
campo8.addEventListener('click', funcaoCampo8);
campo9.addEventListener('click', funcaoCampo9);

reiniciar.addEventListener('click', reiniciarJogo);


function reiniciarJogo() {

    location.reload();

}



function funcaoCampo1() {
    if (contadorEventos % 2 === 0) {
        textoP1.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'
        if (textoP2.innerHTML == 'X' && textoP3.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';


        } else if (textoP4.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'X' && textoP9.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';

        }


    } else {
        textoP1.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP2.innerHTML == 'O' && textoP3.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';



        } else if (textoP4.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';


        } else if (textoP5.innerHTML == 'O' && textoP9.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        }
    }


    contadorEventos += 1;
    campo1.classList.add('desabilitar-clique');

}






function funcaoCampo2() {
    if (contadorEventos % 2 === 0) {
        textoP2.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP1.innerHTML == 'X' && textoP3.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'X' && textoP8.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';


        }

    } else {
        textoP2.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP1.innerHTML == 'O' && textoP3.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';


        } else if (textoP5.innerHTML == 'O' && textoP8.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';


        }
    }
    contadorEventos += 1;
    campo2.classList.add('desabilitar-clique');

}

function funcaoCampo3() {
    if (contadorEventos % 2 === 0) {
        textoP3.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP2.innerHTML == 'X' && textoP1.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP6.innerHTML == 'X' && textoP9.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';


        }


    } else {
        textoP3.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP2.innerHTML == 'O' && textoP1.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';


        } else if (textoP5.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP6.innerHTML == 'O' && textoP9.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        }
    }
    contadorEventos += 1;
    campo3.classList.add('desabilitar-clique');

}

function funcaoCampo4() {
    if (contadorEventos % 2 === 0) {
        textoP4.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP1.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'X' && textoP6.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';

        }


    } else {
        textoP4.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP1.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'O' && textoP6.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';



        }
    }
    contadorEventos += 1;
    campo4.classList.add('desabilitar-clique');

}

function funcaoCampo5() {
    if (contadorEventos % 2 === 0) {
        textoP5.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP1.innerHTML == 'X' && textoP9.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';


        } else if (textoP2.innerHTML == 'X' && textoP8.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';



        } else if (textoP3.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';



        } else if (textoP4.innerHTML == 'X' && textoP6.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';



        }

    } else {
        textoP5.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP1.innerHTML == 'O' && textoP9.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        } else if (textoP2.innerHTML == 'O' && textoP8.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';




        } else if (textoP3.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';





        } else if (textoP4.innerHTML == 'O' && textoP6.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';



        }
    }
    contadorEventos += 1;
    campo5.classList.add('desabilitar-clique');


}

function funcaoCampo6() {
    if (contadorEventos % 2 === 0) {
        textoP6.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP3.innerHTML == 'X' && textoP9.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        } else if (textoP4.innerHTML == 'X' && textoP5.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';


        }

    } else {
        textoP6.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP9.innerHTML == 'O' && textoP3.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        } else if (textoP4.innerHTML == 'O' && textoP5.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';



        }
    }
    contadorEventos += 1;
    campo6.classList.add('desabilitar-clique');


}



function funcaoCampo7() {
    if (contadorEventos % 2 === 0) {
        textoP7.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP1.innerHTML == 'X' && textoP4.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'X' && textoP3.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';




        } else if (textoP8.innerHTML == 'X' && textoP9.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';



        }

    } else {
        textoP7.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP1.innerHTML == 'O' && textoP4.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';
            document.getElementById('4').style.backgroundColor = 'green';



        } else if (textoP5.innerHTML == 'O' && textoP3.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';



        } else if (textoP8.innerHTML == 'O' && textoP9.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('7').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';


        }
    }
    contadorEventos += 1;
    campo7.classList.add('desabilitar-clique');


}




function funcaoCampo8() {
    if (contadorEventos % 2 === 0) {
        textoP8.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP2.innerHTML == 'X' && textoP5.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';



        } else if (textoP9.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';


        }

    } else {
        textoP8.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP2.innerHTML == 'O' && textoP5.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('2').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';



        } else if (textoP9.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';


        }
    }
    contadorEventos += 1;
    campo8.classList.add('desabilitar-clique');


}


function funcaoCampo9() {
    if (contadorEventos % 2 === 0) {
        textoP9.innerHTML = 'X';
        vezJogador.innerHTML = 'Jogador: O'

        if (textoP5.innerHTML == 'X' && textoP1.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';



        } else if (textoP6.innerHTML == 'X' && textoP3.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';



        } else if (textoP8.innerHTML == 'X' && textoP7.innerHTML == 'X') {

            jogadorVencedor.innerHTML = "Vencedor: X";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';


        }

    } else {
        textoP9.innerHTML = 'O';
        vezJogador.innerHTML = 'Jogador: X'

        if (textoP5.innerHTML == 'O' && textoP1.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('5').style.backgroundColor = 'green';
            document.getElementById('1').style.backgroundColor = 'green';



        } else if (textoP6.innerHTML == 'O' && textoP3.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('6').style.backgroundColor = 'green';
            document.getElementById('3').style.backgroundColor = 'green';



        } else if (textoP8.innerHTML == 'O' && textoP7.innerHTML == 'O') {

            jogadorVencedor.innerHTML = "Vencedor: O";
            document.getElementById('9').style.backgroundColor = 'green';
            document.getElementById('8').style.backgroundColor = 'green';
            document.getElementById('7').style.backgroundColor = 'green';




        }
    }
    contadorEventos += 1;
    campo9.classList.add('desabilitar-clique');


}

