import { useForm, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material"
import '../styles/styles.css'
import ButtonComp from "../../Button/ButtonComp";
import { EditProductResource } from "../../../resources";
import { useState } from "react";
import { IUpdateUser } from "../types/IUpdateUser";

const EditProduct = ({ idUser }: IUpdateUser) => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')

    const productData = idUser

    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <EditProductResource
                    data={dataForm}
                    idUser={idUser.id}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Editar Produto
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="product"
                            defaultValue={productData.product}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Nome do Produto"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                    <Controller
                            name="price"
                            defaultValue={productData.price}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField required={true} onChange={onChange} value={value} label={"Preço do Produto"} />
                            )}
                        />
                    </div>


                    <ButtonComp
                        variant='contained'
                        type="submit"
                        title='Atualizar'
                    />
                </form>
            </div>
        </>
    )
}

export default EditProduct