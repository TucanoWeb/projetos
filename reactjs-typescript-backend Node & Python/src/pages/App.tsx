import './App.css';
import { Header, Menu } from "../components"
import { RowsContextProps } from '../resources/context/RowsContext';
import { useState } from 'react';
import { RowsContext } from '../resources/context/RowsContext';
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Clientes, Produtos, Vendas } from '../pages'

const App = () => {

  const [rowsData, setRowsData] = useState([])


  return (
    <div className='wrapperBody'>

      <div className='header'>
        <Header
          title='Sistema Atividade Salão'
        />
      </div>

      <div className='wrapperContent'>

        <div className='menuWrapper'>
          <Menu />
        </div>

        <RowsContextProps.Provider value={[rowsData, setRowsData] as any}>
          <RowsContext.Provider value={rowsData}>

            <div className="appBody">
              <Routes >

                <Route path="/" element={<Dashboard />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/vendas" element={<Vendas />} />

              </Routes>
            </div>

          </RowsContext.Provider>
        </RowsContextProps.Provider>

      </div>
    </div>
  );
}

export default App;
