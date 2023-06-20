import { Modal, Box } from "@mui/material"
import { IModals } from "./types/IModals";
import { useState } from "react";
import { DeleteUser, EditUser, InsertUser, ViewUser } from '../index'
import { style } from "./styles/style"


const ModalUser = ({ open, idUser, setOpenState, typeModal }: IModals) => {

  const [openM, setOpen] = useState(open);
  const handleClose = () => {
    setOpen(false)
    setOpenState(false)
  };

  return (
    <>
      <Modal
        open={openM}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {typeModal === "edit" &&
            <EditUser
              idUser={idUser as string}
            />
          }
          {typeModal === "delete" &&
            <DeleteUser
              idUser={idUser as string}
            />
          }
          {typeModal === "insert" &&
            <InsertUser />
          }
          {typeModal === "ver" &&
            <ViewUser
              idUser={idUser as string}
            />
          }
        </Box>
      </Modal>
    </>
  )
}

export default ModalUser