import { Modal, Box } from "@mui/material"
import { IModals } from "../types/IModals";
import { useState } from "react";
import { DeleteSell } from "../../index";

import { style } from "../styles/style"
import InsertSell from "./InsertSell";



const ModalSells = ({ open, idUser, setOpenState, typeModal }: IModals) => {

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

          {typeModal === "delete" &&
            <DeleteSell
              idUser={idUser as string}
            />
          }
          {typeModal === "insert" &&
            <InsertSell />
          }

        </Box>
      </Modal>
    </>
  )
}

export default ModalSells