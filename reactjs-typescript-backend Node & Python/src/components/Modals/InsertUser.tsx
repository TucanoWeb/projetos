import { useForm, Controller } from "react-hook-form";
import { MenuItem, Select, TextField, Typography } from "@mui/material"
import './styles/styles.css'
import ButtonComp from "../Button/ButtonComp";
import { Insert } from "../../resources";
import { useState } from "react";

const InsertUser = () => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')






    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <Insert
                    data={dataForm}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar Usuário
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="name"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField fullWidth required={true} onChange={onChange} value={value} label={"Nome"} />
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    select
                                    fullWidth
                                    required={true}
                                    label={"Selecione"}
                                    onChange={onChange}
                                    value={value}
                                >
                                    <MenuItem value='F'>Feminino</MenuItem>
                                    <MenuItem value='M'>Masculino</MenuItem>
                                </TextField>
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

export default InsertUser