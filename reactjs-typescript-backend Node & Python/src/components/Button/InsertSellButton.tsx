import { useState } from "react";
import { ButtonComp, ModalSells } from "../index"
import ModalProduct from "../Modals/Products/ModalProduct";


const InsertSellButton = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)

    const [action, setAction] = useState('')


    return (
        <>
            {open &&
                <ModalSells
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

export default InsertSellButton