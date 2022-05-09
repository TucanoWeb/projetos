function reiniciaJogo() {
    start();
    $("#fim").remove();
    somGameover.pause();



}

function start() { // Inicio da função start()

    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");



    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    var pontos = 0;
    var energiaAtual = 4;

    var jogo = {}

    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }

    jogo.pressionou = [];

    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);

    var podeAtirar = true;

    var fimdejogo = false;

    var somDisparo = document.getElementById("somDisparo");
    var somExplosao = document.getElementById("somExplosao");
    var musica = document.getElementById("musica");
    var somGameover = document.getElementById("somGameover");
    var somResgate = document.getElementById("somResgate");

    //Verifica se o usuário pressionou alguma tecla	

    $(document).keydown(function (e) {
        jogo.pressionou[e.which] = true;
    });


    $(document).keyup(function (e) {
        jogo.pressionou[e.which] = false;
    });


    //Música em loop
    musica.addEventListener("ended", function () { musica.currentTime = 0; musica.play(); }, false);
    musica.play();

    //Game Loop

    jogo.timer = setInterval(loop, 30);

    function loop() {

        movefundo();
        movejogador();
        moveinimigo1();
        colisao();
        placar();
        energia();
        executaDisparo();



    } // Fim da função loop()



    //Função que movimenta o fundo do jogo

    function movefundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position", esquerda - 1);

    } // fim da função movefundo()

    function movejogador() {

        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);

        }

        if (topo <= 0) {

            $("#jogador").css("top", topo + 10);
        }

        if (jogo.pressionou[TECLA.S]) {

            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);
        }

        if (topo >= 434) {
            $("#jogador").css("top", topo - 10);

        }


        if (jogo.pressionou[TECLA.D]) {

            disparo(); //Chama função Disparo	
            somDisparo.play();
        }

    } // fim da função movejogador()


    function moveinimigo1() {

        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidade);
        $("#inimigo1").css("top", posicaoY);

        if (posicaoX <= 0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);

            energiaAtual--;
            somExplosao.play();

        }
    } //Fim da função moveinimigo1()


    function disparo() {

        if (podeAtirar == true) {

            podeAtirar = false;

            topo = parseInt($("#jogador").css("top"))
            posicaoX = parseInt($("#jogador").css("left"))
            tiroX = posicaoX + 190;
            topoTiro = topo + 37;
            $("#fundoGame").append("<div id='disparo'></div");
            $("#disparo").css("top", topoTiro);
            $("#disparo").css("left", tiroX);

            var tempoDisparo = window.setInterval(executaDisparo, 30);

        } //Fecha podeAtirar


        function executaDisparo() {
            posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left", posicaoX + 15);

            if (posicaoX > 900) {

                window.clearInterval(tempoDisparo);
                tempoDisparo = null;
                $("#disparo").remove();
                podeAtirar = true;

            }
        } // Fecha executaDisparo()
    } // Fecha disparo()

    function colisao() {
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));

        if (colisao1.length > 0) {

            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X, inimigo1Y);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);

            energiaAtual--;
            somExplosao.play();
        }


        // Disparo com o inimigo1

        if (colisao3.length > 0) {


            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));

            explosao1(inimigo1X, inimigo1Y);
            $("#disparo").css("left", 950);

            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);

            pontos = pontos + 50;
            velocidade = velocidade + 0.3;
            somExplosao.play();

        }




    } //Fim da função colisao()


    //Explosão 1
    function explosao1(inimigo1X, inimigo1Y) {
        $("#fundoGame").append("<div id='explosao1'></div");
        $("#explosao1").css("background-image", "url(assets/imgs/explosao.png)");
        var div = $("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({ width: 200, opacity: 0 }, "slow");

        var tempoExplosao = window.setInterval(removeExplosao, 1000);

        function removeExplosao() {

            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao = null;

        }

    } // Fim da função explosao1()


    function placar() {

        $("#placar").html("<h2> Pontos: " + pontos + "</h2>");

    } //fim da função placar()


    //Barra de energia

    function energia() {

        if (energiaAtual == 4) {

            $("#energia").css("background-image", "url(assets/imgs/coracoes-full.png)");
        }

        if (energiaAtual == 3) {

            $("#energia").css("background-image", "url(assets/imgs/coracoes-3.png)");
        }

        if (energiaAtual == 2) {

            $("#energia").css("background-image", "url(assets/imgs/coracoes-2.png)");
        }

        if (energiaAtual == 1) {

            $("#energia").css("background-image", "url(assets/imgs/coracoes-1.png)");
        }

        if (energiaAtual == 0) {

            $("#energia").css("background-image", "url(assets/imgs/coracoes-vazio.png)");
            gameOver();

            //Game Over
        }

    } // Fim da função energia()

    //Função GAME OVER
    function gameOver() {
        fimdejogo = true;
        musica.pause();
        somGameover.play();

        window.clearInterval(jogo.timer);
        jogo.timer = null;

        $("#jogador").remove();
        $("#inimigo1").remove();

        $("#fundoGame").append("<div id='fim'></div>");

        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
    } // Fim da função gameOver();

    function reiniciaJogo() {
        fimdejogo = false;
    }


} // Fim da função start