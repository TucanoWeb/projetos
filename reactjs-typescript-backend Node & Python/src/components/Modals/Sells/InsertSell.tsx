import { useForm, Controller } from "react-hook-form";
import { MenuItem, TextField, Typography } from "@mui/material"
import '../styles/styles.css'
import ButtonComp from "../../Button/ButtonComp";
import { GetData, GetDataProducts, InsertSellResource } from "../../../resources";
import React, { useContext, useState } from "react";
import { RowsContext } from "../../../resources/context/RowsContext";

const InsertSell = () => {

    const { control, handleSubmit } = useForm({});
    const [dataForm, setDataForm] = useState('')

    // Bloco de estado de clientes e produtos
    const userData = useContext(RowsContext)
    const [productData, setProductData] = useState<React.SetStateAction<any>>([])
    const [productPrice, setProductPrice] = useState<React.SetStateAction<any>>()

    if (userData.length === 0) {
        GetData()
    }

    const onSubmit = (data: any) => setDataForm(data)

    return (
        <>

            {productData.length === 0 &&
                <GetDataProducts
                    setRows={setProductData}
                />
            }

            {dataForm !== '' &&
                <InsertSellResource
                    data={dataForm}
                    spent={productPrice}
                />
            }
            <div className="bodyForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar Venda
                    </Typography>

                    <div className="inputsForm">
                        <Controller
                            name="id_clientes"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    select
                                    fullWidth
                                    required={true}
                                    label={"Selecione o Cliente"}
                                    onChange={onChange}
                                    value={value}
                                >
                                    {userData.map((element: any) => {
                                        return (

                                            <MenuItem value={element.id}>{element.name}</MenuItem>
                                        )
                                    })
                                    }
                                </TextField>
                            )}
                        />
                    </div>


                    <div className="inputsForm">
                        <Controller
                            name="id_produtos"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    select
                                    fullWidth
                                    required={true}
                                    label={"Selecione o Produto"}
                                    onChange={(e) => {
                                        onChange(e.target.value)
                                        productData.map((element: any) => {
                                            if (element.id === e.target.value) {
                                                setProductPrice(element.price)
                                            }
                                        })
                                    }}
                                    value={value}
                                >
                                    {productData.map((element: any) => {
                                        return (

                                            <MenuItem value={element.id}>{element.product}</MenuItem>
                                        )
                                    })
                                    }
                                </TextField>
                            )}
                        />
                    </div>

                    <div className="inputsForm">
                        <Controller
                            name="spent_readOnly"
                            control={control}
                            defaultValue='Preço do produto'
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    fullWidth
                                    required={true}
                                    onChange={onChange}
                                    value={productPrice ? productPrice : 'Aguardando Produto'}
                                    label={'Valor'} />
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

export default InsertSell