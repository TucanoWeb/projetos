import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, } from 'react';
import { GetDataProducts } from '../../resources'
import ButtonComp from '../Button/ButtonComp';
import ModalProduct from '../Modals/Products/ModalProduct';

const TablesProducts = () => {

    const [rows, setRows] = useState<React.SetStateAction<any>>([])
    const [IDUser, setIDUser] = useState('')
    const [elementSelected, setElementSelected] = useState<React.SetStateAction<any>>([])
    const [action, setAction] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>

            {rows.length === 0 &&
                <GetDataProducts
                    setRows={setRows}
                />
            }

            {open &&
                <ModalProduct
                    open={open}
                    idUser={elementSelected}
                    setOpenState={setOpen}
                    typeModal={action}
                />
            }

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Produto</TableCell>
                            <TableCell>Preço</TableCell>
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
                                    {rows[key]['product']}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    R$ {rows[key]['price']}
                                </TableCell>
                                <TableCell align="right">

                                    <ButtonComp
                                        variant='outlined'
                                        color='success'
                                        onClick={() => {
                                            setIDUser(String(key))
                                            setAction("edit")
                                            setElementSelected(rows[key])
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
                                            setElementSelected(rows[key])
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

export default TablesProducts