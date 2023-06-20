import { useForm, Controller } from "react-hook-form";
import { MenuItem, Select, TextField, Typography } from "@mui/material"
import './styles/styles.css'
import ButtonComp from "../Button/ButtonComp";
import { UpdateUser } from "../../resources";
import { useContext, useState } from "react";
import { IUpdateUser } from "./types/IUpdateUser";
import { RowsContext } from "../../resources/context/RowsContext";

const EditUser = ({ idUser }: IUpdateUser) => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')

    const element = useContext(RowsContext)
    const user = element[idUser]

    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>
            {dataForm !== '' &&
                <UpdateUser
                    data={dataForm}
                    idUser={idUser}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Editar Usuário
                    </Typography>
                    <div className="inputsForm">
                        <Controller
                            name="name"
                            defaultValue={user.name}
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
                            defaultValue={user.gender}
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
                        title='Atualizar'
                    />
                </form>
            </div>
        </>
    )
}

export default EditUser