import { Fragment } from "react"
import './ddd.css'


const ShowDataDdd = (props) => {

const { valueDataDddCities, valueValueDdd, valueDataDddState, valueErrorDDD} = props

function renderCities (index, key){

return (

    <Fragment key={key}>
    <div>{valueDataDddCities[key]}</div>
    </Fragment>

)}

return (

<>
{valueErrorDDD === 'DDD não encontrado' ? (

<div className="errorNotification">
    {valueErrorDDD}

</div>

)
:
(
<div className="dataDDD">
<div className='wrapperDDDEstado'>
<div><strong>DDD: </strong>{valueValueDdd}</div>
<div><strong>ESTADO: </strong>{valueDataDddState}</div>

<p></p>
<div><strong>CIDADES:</strong> </div>
</div>
<div className="dataCities">{valueDataDddCities.map(renderCities)}</div>
</div>
)}

</>
)}

export default ShowDataDdd