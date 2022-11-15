import axios from 'axios';
import { useEffect } from 'react';

const CreateUsers = ({ values }: any) => {

    var controller = 1
    useEffect(() => {

        if (controller === 1) {
            var data = JSON.stringify({ "Name": values.firstName, "Sobrenome": values.lastName, "email": values.email, "profissao": values.profissao, "telephone": values.telephone });

            var config = {
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_API_URL}/user`,
                headers: {
                    'apikey': `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    //console.log(JSON.stringify(response.data));
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                })
                .catch(function (error) {
                    //console.log(error);
                });

            controller++
        }

    })




    return (
        <>
        </>
    )
}

export default CreateUsers