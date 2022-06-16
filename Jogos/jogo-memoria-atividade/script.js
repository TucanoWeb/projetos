const cards = document.querySelectorAll('.card');
//cria a constante para cada elemento .card dentro do arquivo html englobando todas

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//Insere a classe flip para cada elemento quando a função é invocada
function flipCard() {

    if (lockBoard) return;
    if (firstCard === this) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);



}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

//Função auto invocável (encapsulada com o parenteses + () ao final, que embaralha as cartas. Utilizando o método forEach, para cada card (sendo a constante cards recebido o valor mais acima, em querySelectionAll('.card'), ele altera a propriedade order de cada elemento, utilizando o método floor para arredondar um número aleatório até 12, definido em random). Dessa forma, cada card (pois é utilizado o forEach) recebe um valor diferente.
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })

})();


//Percorre, através do forEach, todos os elementos, de forma que se qualquer um dos itens for clicado, a função flipCard é invocada e a classe flip adicionada ao elemento. O this na função contextualiza o clique, para que uma função não precise ser criada para cada carta.
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})





