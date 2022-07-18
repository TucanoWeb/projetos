import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GetDdd } from '../../resources/index'
import { ShowDataDdd } from '../index'
import './ddd.css'

const Ddd = () => {

    const [valueDdd, setValueDdd] = useState(false)
    const [dataDddCities, setDataDddCities] = useState(false)
    const [dataDddState, setDataDddState] = useState()
    const [errorDDD, SetErrorDDD] = useState(false)

    const { register, handleSubmit, whatch, formState: { errors } } = useForm()
    const onSubmit = data => setValueDdd(data.dddValue)

    return (

        <div className='wrapperForm'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='inputDDD' placeholder='Insira um DDD' {...register('dddValue', { required: true })} />
                {errors.dddValue && <div className='errorNotification' >Valor Obrigatório</div>}

                <input className='styleSubmit' type="submit" />
            </form>

            {valueDdd && (
                <>
                    <GetDdd exportCodeDdd={valueDdd} exportSetDataDddCities={setDataDddCities} exportSetDataDddState={setDataDddState} exportErrorDDD={SetErrorDDD}/>
               
                {dataDddCities && (
                    <ShowDataDdd valueValueDdd={valueDdd} valueDataDddCities={dataDddCities} valueDataDddState={dataDddState} valueErrorDDD={errorDDD}/>
                )}

                </>
            )}

        </div>

    )

}

export default Ddd