import './App.css';
import { Menu, Ddd, SearchBanks } from '../index'
import GetAllBanks from '../../resources/api/GetAllBanks';
import React, { useState } from 'react';

function App() {

  // Estados de Renderização
  const [renderSearchBanks, setSearchBanks] = useState(false)
  const [renderDdd, setRenderDdd] = useState(false)


  return (

    <div className='wrapperAll'>
      <div className='wrapperApp'>

      <Menu exportRenderSearchBanks={setSearchBanks} exportRenderDdd={setRenderDdd} />

      {renderSearchBanks && (
        <GetAllBanks>
          {getBank => (
              <SearchBanks getBank={getBank} />
          )}
        </GetAllBanks>
      )}

      {renderDdd && (
        <Ddd />
      )}
      </div>

    </div>
  );
}

export default App;
