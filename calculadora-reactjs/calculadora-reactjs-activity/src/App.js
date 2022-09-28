
import { evaluate } from "mathjs"

import { Container, Content, Row, Column } from "./styles"
import Input from './components/Input'
import Button from './components/Button'
import { useState } from "react"


const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [advanced, setAdvanced] = useState(false)
  const [classic, setClassic] = useState(true)

  const handleAddNumber = (number) => {
    //Se currentNumber for igual a zero, insere apenas o número digitado. Isso retira o zero do input
    if (currentNumber === '0') setCurrentNumber(number)

    //Se o primeiro número não for zero, ele pega o número anterior (prev) e adiciona o número clicado (number)
    else setCurrentNumber(prev => `${prev}${number}`)
  }

  function handleAdvanced() {
    setAdvanced(true)
    setClassic(false)
  }

  function handleClassic() {
    setAdvanced(false)
    setClassic(true)
  }


  function calculateNumbers(value) {

    setCurrentNumber(evaluate(currentNumber))

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="Erase" onClick={() => setCurrentNumber('0')} />
          {classic ?
          ( 
          <Button label="Advanced" onClick={() => handleAdvanced()} />
          )
          :
          (
            <Button label="Classic" onClick={() => handleClassic()} />
          )
          }
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleAddNumber('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleAddNumber('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={() => calculateNumbers(currentNumber)} />
        </Row>
        <Row>
          <Button label="x" onClick={() => handleAddNumber('*')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="/" onClick={() => handleAddNumber('/')} />
          <Button label="%" onClick={() => handleAddNumber('%')} />
        </Row>

        {advanced &&
        <>
          <Row>
            <Button label="(" onClick={() => handleAddNumber('(')} />
            <Button label="[" onClick={() => handleAddNumber('[')} />
            <Button label="{" onClick={() => handleAddNumber('{')} />
            <Button label="Exp" onClick={() => handleAddNumber('^')} />
          </Row>
          <Row>
          <Button label=")" onClick={() => handleAddNumber(')')} />
          <Button label="]" onClick={() => handleAddNumber(']')} />
          <Button label="}" onClick={() => handleAddNumber('}')} />
          <Button label="Pi" onClick={() => handleAddNumber('3.14')} />
        </Row>
        </>
        }
      </Content>
    </Container >
  );
}

export default App;
