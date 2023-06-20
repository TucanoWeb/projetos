import { useForm, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material"
import '../styles/styles.css'
import ButtonComp from "../../Button/ButtonComp";
import { InsertProductResource } from "../../../resources";
import { useState } from "react";

const InsertProduct = () => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')


    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <InsertProductResource
                    data={dataForm}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar Produto
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="product"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Nome do Produto"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="price"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField type="number" required={true} onChange={onChange} value={value} label={"Preço do Produto"} />
                            )}
                        />
                    </div>

                    <ButtonComp
                        variant='contained'
                        type="submit"
                        title='Cadastrar'
                    />
                </form>
            </div>
        </>
    )
}

export default InsertProduct