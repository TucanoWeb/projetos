import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import {ShowData} from '../index';
import { LocationBank } from '../../resources/index';
import './banks.css'


const SearchBanks = (props) => {

    const [listBanks, setListBanks] = useState()
    const [codeBank, setCodeBank] = useState(1)
    const [statusError, setStatusError] = useState(false)

    const [dataBank, setDataBank] = useState({})

    

    useEffect(() => {

        setListBanks(props.getBank)

    }, [props.getBank])




    function renderBanks(index, key) {

        return (

            <Fragment key={key}>
                <option value={listBanks[key]['code']}> {listBanks[key]['name']}</option>
            </Fragment>

        )

    }



    return (

        <div className='wrapperBank'>

        
             {listBanks !== undefined && (
                <div className='searchField'>
                    <select onClick={(e) => setCodeBank(e.target.value)}>
                        {listBanks.map(renderBanks)}

                    </select>

                <LocationBank valueCode={codeBank} exportSetDataBank={setDataBank} exportSetStatusError={setStatusError} />

                
                <ShowData exportDataBank={dataBank} valueStatusError={statusError} />



                </div>
            )}



        </div>

    )

}

export default SearchBanks