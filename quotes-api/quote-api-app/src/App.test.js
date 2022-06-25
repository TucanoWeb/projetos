import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { fireEvent, render, screen } from '@testing-library/react';
import {quote} from './components/quotes/Quote.test'
import App from './App';



//Nesse arquivo para teste, inserimos o que queremos que o usuário veja para que possamos realizar o teste após a inserção dos elementos. Ou seja, criamos as regras de teste antes da produção propriamente da aplicação
test('renders a button, a text and an image', () => {
  render(<App />); //O que vai ser renderizado
  
  //O elementos que devem ser verificados
  const buttonEL = screen.getByRole('button');
  const imageEL = screen.getByRole('img');
  const textEl = screen.getByText(quote); //Em caso de teste, verificar se a variável em quote.test tem o mesmo valor que o parâmetro fornecido em app.js

  //O que se espera que seja renderizado
  expect(textEl).toBeInTheDocument();
  expect(buttonEL).toBeInTheDocument();
  expect(imageEL).toBeInTheDocument();
  

});





const response = { speaker: 'Speaker', quote: 'test quote'};

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) =>{
      return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('call api on button click and update its text', async () => {
render(<App />);

const buttonEl = screen.getByRole('button');

fireEvent.click(buttonEl);

const quoteEl = await screen.findByText(response.quote);

expect(quoteEl).toBeInTheDocument();

  

})


test('first quote of the api in start render page', async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();

})
