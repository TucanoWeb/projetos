import { useState } from 'react';
import { Header, Input, Profile, Repos } from '../../components';
import Context from '../../Context';

import './App.css';

function App() {

  const [dataUser, setDataUser] = useState(0)

  return (
    <div className="bodyWrapper">
      <Header />
      <div className='containerWrapper'>
        <div className='containerLeft'>
        </div>
        <Context.Provider value={[dataUser, setDataUser]}>
          <div className='containerRight'>
            <Input />
            <div className='profileWrapper'>
              <Profile data={dataUser} />
            </div>
            <div className='reposWrapper'>
              <Repos data={dataUser} />
            </div>
          </div>
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
