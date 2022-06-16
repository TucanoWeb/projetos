//Declaração das divs onde irão as cartas
const firstLine = document.getElementById('firstLine');
const secondLine = document.getElementById('secondLine');
const thirdLine = document.getElementById('thirdLine');
const fourthLine = document.getElementById('fourthLine');

//Declaração da constante para os elementos dos botões de inicio de jogo e reinicio.
const startGame = document.getElementById('startGame');
const restartGame = document.getElementById('restartGame');


let line1 = 1; //Declaração do controlador para dividir ou limitar a quantidade de cartas do jogo

//Array base para embaralhar cartas. Necessário ajustar os números caso queira um número diferente de cartas
let auxiliarShuffleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Inicialização das arrays para embaralhamento

let newOrder = []; //Puxa através do método Math, utilizando os módulos floor e random, um número da array auxiliarShuffleArray, dentro da sua extensão (length). Mais explicações no bloco de Shuffle

//Declara que inicialmente não há par formado
let par = false;


//Declaração das cartas, com seus respectivos valores (pares) e classes.
let arrayPosicao = [`<input type="checkbox" id="checkbox1" style="display: none;" value="1">
<label id="card1" class="cards" for="checkbox1"></label>`, `<input type="checkbox" id="checkbox2" style="display: none;" value="1">
<label id="card2" class="cards" for="checkbox2"></label>`, `<input type="checkbox" id="checkbox3" style="display: none;" value="2">
<label id="card3" class="cards" for="checkbox3"></label>`, `<input type="checkbox" id="checkbox4" style="display: none;" value="2">
<label id="card4" class="cards" for="checkbox4"></label>`, `<input type="checkbox" id="checkbox5" style="display: none;" value="3">
<label id="card5" class="cards" for="checkbox5"></label>`, `<input type="checkbox" id="checkbox6" style="display: none;" value="3">
<label id="card6" class="cards" for="checkbox6"></label>`, `<input type="checkbox" id="checkbox7" style="display: none;" value="4">
<label id="card7" class="cards" for="checkbox7"></label>`, `<input type="checkbox" id="checkbox8" style="display: none;" value="4">
<label id="card8" class="cards" for="checkbox8"></label>`, `<input type="checkbox" id="checkbox9" style="display: none;" value="5">
<label id="card9" class="cards" for="checkbox9"></label>`, `<input type="checkbox" id="checkbox10" style="display: none;" value="5">
<label id="card10" class="cards" for="checkbox10"></label>`, `<input type="checkbox" id="checkbox11" style="display: none;" value="6">
<label id="card11" class="cards" for="checkbox11"></label>`, `<input type="checkbox" id="checkbox12" style="display: none;" value="6">
<label id="card12" class="cards" for="checkbox12"></label>`, `<input type="checkbox" id="checkbox13" style="display: none;" value="7">
<label id="card13" class="cards" for="checkbox13"></label>`, `<input type="checkbox" id="checkbox14" style="display: none;" value="7">
<label id="card14" class="cards" for="checkbox14"></label>`, `<input type="checkbox" id="checkbox15" style="display: none;" value="8">
<label id="card15" class="cards" for="checkbox15"></label>`, `<input type="checkbox" id="checkbox16" style="display: none;" value="8">
<label id="card16" class="cards" for="checkbox16"></label>`];

//BLOCO SHUFFLE
//Esse bloco é responsável por embaralhar as cartas. Como explicado mais acima, newOrder recebe um número da array auxiliarShuffleArray, que foi populada simplesmente para corresponder a quantidade de índices na array principal, que contêm as cartas, sendo arrayPosicao.
//Dessa forma, quando newOrder recebe um valor, ele acrescenta o valor em firsLine, que é a div da primeira linha, sendo esse valor da arrayPosicao, que contêm as cartas. O valor que newOrder recebeu da array auxiliar... é utilizada como indice. 
//Após isso, o valor que foi utilizado (que newOrder recebeu) é retirado do array auxiliar... pelo método filter.
//Após isso, line1 é incrementado, de forma que, ao chegar em 4, o bloco relacionado a linha dois seja executado, e assim por diante. Veja que em cada repetição, o número utilizado para posicionamento é retirado da array auxiliar.


//Bloco linha 1 posicionamento
do {

    newOrder = auxiliarShuffleArray[Math.floor(Math.random() * auxiliarShuffleArray.length)];
    firstLine.innerHTML += arrayPosicao[newOrder];

    auxiliarShuffleArray = auxiliarShuffleArray.filter(function (value) {
        return value != newOrder;
    });

    line1++;

} while (line1 <= 4);


//Bloco linha 2 posicionamento
do {

    newOrder = auxiliarShuffleArray[Math.floor(Math.random() * auxiliarShuffleArray.length)];
    secondLine.innerHTML += arrayPosicao[newOrder];

    auxiliarShuffleArray = auxiliarShuffleArray.filter(function (value) {
        return value != newOrder;
    });

    line1++;

} while (line1 <= 8);


//Bloco linha 3 posicionamento
do {

    newOrder = auxiliarShuffleArray[Math.floor(Math.random() * auxiliarShuffleArray.length)];
    thirdLine.innerHTML += arrayPosicao[newOrder];

    auxiliarShuffleArray = auxiliarShuffleArray.filter(function (value) {
        return value != newOrder;
    });

    line1++;

} while (line1 <= 12);


//Bloco linha 4 posicionamento
do {

    newOrder = auxiliarShuffleArray[Math.floor(Math.random() * auxiliarShuffleArray.length)];
    fourthLine.innerHTML += arrayPosicao[newOrder];

    auxiliarShuffleArray = auxiliarShuffleArray.filter(function (value) {
        return value != newOrder;
    });

    line1++;

} while (line1 <= 16);


// APÓS EMBARALHAR, É NECESSÁRIO INICIAR O JOGO PARA QUE AS CARTAS FIQUEM CLICÁVEIS
document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

//BLOCO DE DECLARAÇÕES DE EVENTLISTENER
//Essas declarações devem ser inseridas a inserção dos elementos em suas respectivas divs.
const card1 = document.getElementById('card1');

document.getElementById('checkbox1').addEventListener('change', checkbox1Selection);
document.getElementById('checkbox2').addEventListener('change', checkbox2Selection);
document.getElementById('checkbox3').addEventListener('change', checkbox3Selection);
document.getElementById('checkbox4').addEventListener('change', checkbox4Selection);
document.getElementById('checkbox5').addEventListener('change', checkbox5Selection);
document.getElementById('checkbox6').addEventListener('change', checkbox6Selection);
document.getElementById('checkbox7').addEventListener('change', checkbox7Selection);
document.getElementById('checkbox8').addEventListener('change', checkbox8Selection);
document.getElementById('checkbox9').addEventListener('change', checkbox9Selection);
document.getElementById('checkbox10').addEventListener('change', checkbox10Selection);
document.getElementById('checkbox11').addEventListener('change', checkbox11Selection);
document.getElementById('checkbox12').addEventListener('change', checkbox12Selection);
document.getElementById('checkbox13').addEventListener('change', checkbox13Selection);
document.getElementById('checkbox14').addEventListener('change', checkbox14Selection);
document.getElementById('checkbox15').addEventListener('change', checkbox15Selection);
document.getElementById('checkbox16').addEventListener('change', checkbox16Selection);

startGame.addEventListener('click', start);
restartGame.addEventListener('click', restart);

let verifySelect = 1;
let cardID1 = 0;
let cardID2 = 0;
let cardSelected1 = 0;
let cardSelected2 = 0;
let statusCursor1 = 0;
let statusCursor2 = 0;
let pares = 0;
let parErrado = 0;
let cronometro = 0;

//Bloco de início de jogo
//Retira o valor do atributo pointerEvents, do elemento gamePartWrapper, que contempla todo o bloco de cartas.
//Esconde o botão de iniciar jogo.
//Invoca a função beginTimer, para inicio do cronometro
function start() {

    document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';
    document.getElementById('startGame').style.display = 'none';
    beginTimer();
}



//Inicia o cronometro, mostrando para o usuário. O cronometro é executado enquanto o par não chega a 8, ou seja, 16 cartas combinadas. Esse número deve ser alterado em caso de alteração de número de cartas. setTimeout executa o acréscimo de uma unidade em cronometro++, a cada 1 segundo, invocando novamente a própria função. Em else, após completar os 8 pares, o bloco timer é escondido e mostrado o botão para reiniciar o jogo
function beginTimer() {

    document.getElementById('timer').style.display = 'unset';

    if (pares != 8) {

        setTimeout(() => {

            cronometro++;
            document.getElementById('timer').innerHTML = `Tempo: ${cronometro}`;

            beginTimer();

        }, 1000);

    } else {
        document.getElementById('timer').style.display = 'none';
        restartGame.style.display = "unset";
    }





}

//Função de restart
function restart() {
    location.reload();
}

//BLOCO QUE CONTROLA A SELEÇÃO DAS CARTAS
//Vou realizar a explicação de um bloco, pois os outros seguem a mesma lógica.
//Inicia-se verificando se foram selecionadas 2 cartas. Senão, a carta clicada recebe o valor de 1 em cardID1 e verifySelect é acrescido de 1, ou seja, no próximo clique, a confição de verificação de par será verdadeira.
//Enquanto isso, como foi vinculado input do tipo checkbox para cada carta, é atribuído em cardSelected1 e cardSelected2 os elementos respectivos de checkbox, de modo que eles possam ser desmarcados e as cartas desviradas se não foram pares corretos.
//Em statusCursor2 é atribuído o valor para que não seja possível realizar cliques na própria carta durante verificação ou caso seja o par correto.
//É invocada a função para verificação do par, em verifyElven
//Se o par não for correto, setTimeout vai desviar as cartas e torná-las clicáveis novamente após 2 segundos. Veja que logo acima de setTimeou o código bloqueio o clique em todas as cartas, de como que o usuário tenha que esperar as cartas serem desviradas.


function checkbox1Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox1';
        cardID2 = 1;

        statusCursor2 = 'card1';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card1').style.border = '1px solid green';
            document.getElementById('card2').style.border = '1px solid green';


        } else {

            console.log('uncheck');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {
        cardSelected1 = 'checkbox1';
        cardID1 = 1;

        statusCursor1 = 'card1';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox2Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox2';
        cardID2 = 1;

        statusCursor2 = 'card2';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card1').style.border = '1px solid green';
            document.getElementById('card2').style.border = '1px solid green';


        } else {

            console.log('uncheck2');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox2';
        cardID1 = 1;

        statusCursor1 = 'card2';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}


function checkbox3Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox3';
        cardID2 = 2;

        statusCursor2 = 'card3';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card3').style.border = '1px solid green';
            document.getElementById('card4').style.border = '1px solid green';


        } else {

            console.log('uncheck3');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox3';
        cardID1 = 2;

        statusCursor1 = 'card3';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}


function checkbox4Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox4';
        cardID2 = 2;

        statusCursor2 = 'card4';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card3').style.border = '1px solid green';
            document.getElementById('card4').style.border = '1px solid green';


        } else {

            console.log('uncheck4');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox4';
        cardID1 = 2;

        statusCursor1 = 'card4';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox5Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox5';
        cardID2 = 3;

        statusCursor2 = 'card5';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card5').style.border = '1px solid green';
            document.getElementById('card6').style.border = '1px solid green';


        } else {

            console.log('uncheck5');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox5';
        cardID1 = 3;

        statusCursor1 = 'card5';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox6Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox6';
        cardID2 = 3;

        statusCursor2 = 'card6';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card5').style.border = '1px solid green';
            document.getElementById('card6').style.border = '1px solid green';


        } else {

            console.log('uncheck6');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox6';
        cardID1 = 3;

        statusCursor1 = 'card6';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox7Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox7';
        cardID2 = 4;

        statusCursor2 = 'card7';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card7').style.border = '1px solid green';
            document.getElementById('card8').style.border = '1px solid green';


        } else {

            console.log('uncheck7');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox7';
        cardID1 = 4;

        statusCursor1 = 'card7';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox8Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox8';
        cardID2 = 4;

        statusCursor2 = 'card8';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card7').style.border = '1px solid green';
            document.getElementById('card8').style.border = '1px solid green';


        } else {

            console.log('uncheck8');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox8';
        cardID1 = 4;

        statusCursor1 = 'card8';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox9Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox9';
        cardID2 = 5;

        statusCursor2 = 'card9';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card9').style.border = '1px solid green';
            document.getElementById('card10').style.border = '1px solid green';


        } else {

            console.log('uncheck9');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox9';
        cardID1 = 5;

        statusCursor1 = 'card9';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox10Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox10';
        cardID2 = 5;

        statusCursor2 = 'card10';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card9').style.border = '1px solid green';
            document.getElementById('card10').style.border = '1px solid green';


        } else {

            console.log('uncheck10');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {
        cardSelected1 = 'checkbox10';
        cardID1 = 5;

        statusCursor1 = 'card10';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox11Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox11';
        cardID2 = 6;

        statusCursor2 = 'card11';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card11').style.border = '1px solid green';
            document.getElementById('card12').style.border = '1px solid green';


        } else {

            console.log('uncheck11');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox11';
        cardID1 = 6;

        statusCursor1 = 'card11';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox12Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox12';
        cardID2 = 6;

        statusCursor2 = 'card12';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card11').style.border = '1px solid green';
            document.getElementById('card12').style.border = '1px solid green';


        } else {

            console.log('uncheck12');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox12';
        cardID1 = 6;

        statusCursor1 = 'card12';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox13Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox13';
        cardID2 = 7;

        statusCursor2 = 'card13';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card13').style.border = '1px solid green';
            document.getElementById('card14').style.border = '1px solid green';


        } else {

            console.log('uncheck13');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox13';
        cardID1 = 7;

        statusCursor1 = 'card13';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox14Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox14';
        cardID2 = 7;

        statusCursor2 = 'card14';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card13').style.border = '1px solid green';
            document.getElementById('card14').style.border = '1px solid green';


        } else {

            console.log('uncheck14');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox14';
        cardID1 = 7;

        statusCursor1 = 'card14';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox15Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox15';
        cardID2 = 8;

        statusCursor2 = 'card15';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card15').style.border = '1px solid green';
            document.getElementById('card16').style.border = '1px solid green';

        } else {

            console.log('uncheck15');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox15';
        cardID1 = 8;

        statusCursor1 = 'card15';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}

function checkbox16Selection() {

    if (verifySelect == 2) {

        cardSelected2 = 'checkbox16';
        cardID2 = 8;

        statusCursor2 = 'card16';
        document.getElementById(statusCursor2).style.pointerEvents = 'none';

        verifyElven();

        if (par == true) {

            document.getElementById('card15').style.border = '1px solid green';
            document.getElementById('card16').style.border = '1px solid green';


        } else {

            console.log('uncheck16');

            document.getElementById('gamePartWrapper').style.pointerEvents = 'none';

            setTimeout(() => {

                document.getElementById('gamePartWrapper').style.pointerEvents = 'unset';

                document.getElementById(statusCursor1).style.pointerEvents = 'unset';
                document.getElementById(statusCursor2).style.pointerEvents = 'unset';

                document.getElementById(cardSelected1).checked = false;
                document.getElementById(cardSelected2).checked = false;

            }, 2000);



        }


    } else {

        cardSelected1 = 'checkbox16';
        cardID1 = 8;

        statusCursor1 = 'card16';
        document.getElementById(statusCursor1).style.pointerEvents = 'none';

        verifySelect++;

    }


}


//BLOCO DE VERIFICAÇÃO DE PARIDADE
//Se os valores de cardID1 e cardID2 foram iguais, sendo que esses valores foram atribuídos nos itens na própria array principal, retorna verifySelect para 1, para novos cliques e incrementa 1 em pares++, retornando também o valor true para par, indicando sucesso.
//Dentro da verificação, se pares for igual à 8, invoca a função statisticGama()
//Senão, de qualquer forma, verifySelect retorna para 1, para habilitar novos cliques e validações e a função retorna false para par. Nesse caso, é também incrementado 1 em parErrado, para cálcudo de pontuação final

function verifyElven() {

    if (cardID1 == cardID2) {

        console.log('Par certo');
        verifySelect = 1;

        pares++;

        if (pares == 8) {

            statisticGame();


        }

        return par = true;



    } else {

        console.log('Par errado');
        verifySelect = 1;

        parErrado++;

        return par = false;


    }

}


//BLOCO DE FINALIZAÇÃO DO JOGO
//Esse bloco define a pontuação final, informando o número de erros, tempo passado e pontuação, ao qual foi informado um valor inicial e retirados baseados na expressão matemática abaixo.
const error = document.getElementById('error');
const points = document.getElementById('points');
const totalTime = document.getElementById('cronometro');

function statisticGame() {
    error.innerHTML = `Erros: ${parErrado}`;
    totalTime.innerHTML = `Tempo: ${cronometro}`;
    points.innerHTML = `Pontuação: ${3000 - (cronometro * 10) - (parErrado * 10)}`;

}
