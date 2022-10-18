import { useState } from 'react'
import { GetUsers } from '../../Resources/index'


import './input.css'

const Input = () => {

    const [input, setInput] = useState()
    const [pullUsers, setPullUsers] = useState(false)
    const [showInput, setShowInput] = useState(true)
    const [msgError, setMsgError] = useState(false)

    function alertError() {
        setTimeout(() => {
            setMsgError(false)
        }, 3000)
    }

    return (
        <div className='inputWrapper'>
            {showInput &&
                <div className='inputSearch'>
                    <input placeholder='@usuario' id='input' onChange={(e) => setInput(e.target.value)} />
                    <div>
                        <button onClick={() => {
                            setPullUsers(true)
                            setShowInput(false)
                        }} > Buscar</button>
                    </div>
                </div>
            }
            <div className='GetUsersWrapper'>
                {msgError &&
                    <div>
                        {alertError()}
                        Nenhum usuário localizado com esse ID
                    </div>
                }
                {pullUsers &&
                    <GetUsers
                        importSetPullUsers={setPullUsers}
                        valueInput={input}
                        importSetMsgError={setMsgError}
                        importSetShowInput={setShowInput}
                    />
                }
            </div>
        </div>
    )
}

export default Input