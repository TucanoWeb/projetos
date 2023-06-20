import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useContext } from 'react';
import { RowsContext } from '../../resources/context/RowsContext';
import { GetData } from '../../resources'
import ButtonComp from '../Button/ButtonComp';
import ModalUser from '../Modals/ModalUser';

const TablesComp = () => {

  const rows = useContext(RowsContext)
  const [IDUser, setIDUser] = useState('')
  const [action, setAction] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);


  if (rows.length === 0) {
    GetData()
  }

  return (
    <>
      {open &&
        <ModalUser
          open={open}
          idUser={IDUser}
          setOpenState={setOpen}
          typeModal={action}
        />
      }

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>

            {rows.map((index: any, key: number) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rows[key]['name']}
                </TableCell>
                <TableCell align="right">

                  <ButtonComp
                    variant='outlined'
                    color='success'
                    onClick={() => {
                      setIDUser(String(key))
                      setAction("edit")
                      handleOpen()
                    }
                    }
                    title='Editar'
                  />

                  <ButtonComp
                    variant='outlined'
                    color='error'
                    onClick={() => {
                      setIDUser(String(key))
                      setAction('delete')
                      handleOpen()
                    }
                    }
                    title='Excluir'
                  />

                 

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default TablesComp