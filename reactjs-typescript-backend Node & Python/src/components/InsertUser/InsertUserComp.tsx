import { useState } from "react";
import { ButtonComp } from "../index"
import ModalUser from "../Modals/ModalUser";


const InsertUserComp = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)

    const [action, setAction] = useState('')


    return (
        <>
            {open &&
                <ModalUser
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

export default InsertUserComp