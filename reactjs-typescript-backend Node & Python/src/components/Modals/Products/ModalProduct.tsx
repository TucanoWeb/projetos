import { Modal, Box } from "@mui/material"
import { IModals } from "../types/IModals";
import { useState } from "react";
import { DeleteProduct, EditProduct, InsertProduct } from "../../index";

import { style } from "../styles/style"


const ModalProduct = ({ open, idUser, setOpenState, typeModal }: IModals) => {

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
            <EditProduct
              idUser={idUser as string}
            />
          }
          {typeModal === "delete" &&
            <DeleteProduct
              idUser={idUser as string}
            />
          }
          {typeModal === "insert" &&
            <InsertProduct />
          }

        </Box>
      </Modal>
    </>
  )
}

export default ModalProduct