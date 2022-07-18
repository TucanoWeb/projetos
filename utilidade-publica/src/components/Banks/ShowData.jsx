import './banks.css'

const ShowData = (props) => {


    console.log(props.exportDataBank)



    return (
<>

        
            {props.valueStatusError === true ? (
                <div className='errorNotification'>
                    <div>A opção selecionada não é um Banco, mas uma entidade ou ferramenta utilizada pelo Banco Central.</div>

                </div>


            )
                :

                (
                    <div className='wrapperShowData'>
                        <div><strong>NOME DO BANCO:</strong> {props.exportDataBank['fullName']}</div>
                        <p></p>
                        <div><strong>CÓDIGO DO BANCO: </strong>{props.exportDataBank['code']}</div>
                        <p></p>
                        <div><strong>ISPB: </strong>{props.exportDataBank['ispb']}</div>

                    </div>

                )}


        
</>

    )


}

export default ShowData