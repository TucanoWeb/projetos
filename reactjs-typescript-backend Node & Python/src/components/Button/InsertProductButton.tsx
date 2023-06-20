import { useState } from "react";
import { ButtonComp } from "../index"
import ModalProduct from "../Modals/Products/ModalProduct";


const InsertProductButton = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)

    const [action, setAction] = useState('')


    return (
        <>
            {open &&
                <ModalProduct
                    open={open}
                    setOpenState={setOpen}
                    typeModal={action}
                />
            }
            <ButtonComp
                variant='contained'
                onClick={() => {
                    handleOpen()
                    setAction('insert')
                }}
                title='Cadastrar'
            />
        </>
    )
}

export default InsertProductButton