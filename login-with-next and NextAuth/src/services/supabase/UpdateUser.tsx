import axios from "axios"
import { IUpdateUser } from './types';


const UpdateUser = ({ values }: IUpdateUser) => {

    //console.log(values)
    

    let controller = 1

    if (controller === 1){
        var data = JSON.stringify({ "Name": values.firstName, "Sobrenome": values.lastName, "email": values.email, "profissao": values.profissao, "telephone": values.telephone });

        var config = {
            method: 'patch',
            url: `${process.env.NEXT_PUBLIC_API_URL}/user?email=eq.${values.email}`,
            headers: {
                'apikey': `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
        .then( async () => {
            //console.log('Cadastro atualizado')
           setTimeout(() => {
            window.location.reload()
           }, 1000)
        })
        .catch((error) => {
             alert('Erro na requisição. Por favor, tente novamente')
             window.location.reload()
        })

        controller++

    }

    return (
        <>
        </>
    )

}

export default UpdateUser