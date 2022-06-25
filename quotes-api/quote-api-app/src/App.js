import { useState, useEffect, useRef } from 'react';
import naruto from './assets/images/naruto.png';
import Quotes from './components/quotes/Quotes'
import SpeakerButton from './components/buttons/SpeakerButton';
import './App.css';
import { getQuote } from './services/quotesServices/quotesService';
import jutsuSound from './assets/sounds/src_sounds_jutso.mp3'

const audio = new Audio(jutsuSound);


function App() {

const isMounted = useRef(true);

console.log(isMounted.current);

  //Desestruturando a array, pois ela possui no primeiro indice um objeto com chave quote e valor das frases e uma chave speaker, que traz os valores dos autores e no segundo indice a função para atualizar

  //useState define um estado. Ou seja, ele armazena um valor nas chaves quote e speaker
const [quoteState, setQuoteState] = useState({quote: 'Carregando quote...', speaker: 'Carregando Speaker...'});




const outUpdate = async () => {
  const quote = await getQuote();

  
    setQuoteState(quote);
    audio.play();

  
      

};


useEffect(() => {
outUpdate();

return () => {
  isMounted.current = false;
};

}, [])


  return (
    <div className='wrapper'>
      <div className='wrapperQuote'>
        <Quotes {...quoteState}
        // Ao utilizar o spread ... é a mesma coisa de utilizar o item abaixo: 
        //quote={quoteState.quote} speaker={quoteState.speaker}, pois se for no componente Quotes.jsx, verá que os parâmetros são quote e speaker. 
          />
        <div>
          <SpeakerButton outUpdate={outUpdate}/>
        </div>
      </div>

      <div className='wrapperImg'>
        <img src={naruto} alt='Naruto' />
      </div>
    </div>
  );
}

export default App;
