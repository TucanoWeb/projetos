import { createContext, useState } from 'react';
import { IContext } from './types';

//Aqui, você cria o contexto
export const Message_data = createContext({} as IContext);


//Aqui, você define o contexto que será utilizado e os valores e funções que o contexto pode receber. No exemplo abaixo, o contexto Message_data recebe os valores e funções que foram criados dentro do componente Context.

// Como children, é renderizado tudo que o componente engloba. Para ver o que o componente está englobando, basta ir no arquivo _app.tsx. O Contexto global está envolta de toda a aplicação.


// Para utilizar qualquer um dos valores ou funções do contexto global (contextAPI), basta desestruturar, por exemplo:

// const { example } = useContext(Message_data) ou
// const { setMessage } = useContext(Message_data)

export const Context = ({ children }: any) => {
  const [message, setMessage] = useState();
  const example = 'somente exemplo'

  return (
    <Message_data.Provider value={{ message, setMessage, example }}>
      {children}
    </Message_data.Provider>
  );
}