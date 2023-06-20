import { Link } from "react-router-dom"

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SellIcon from '@mui/icons-material/Sell';


const Menu = () => {

    return (
        <>


            <List
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >

                <ListItemButton LinkComponent={Link} to='/' >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton LinkComponent={Link} to='/clientes' >
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clientes" />
                </ListItemButton>

                <ListItemButton LinkComponent={Link} to='/produtos' >
                    <ListItemIcon>
                        <BusinessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Produtos" />
                </ListItemButton>


                <ListItemButton LinkComponent={Link} to='/vendas' >
                    <ListItemIcon>
                        <SellIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vendas" />
                </ListItemButton>


            </List>

            <div className="version">
                <p>Version 1.0</p>
            </div>
        </>
    )
}

export default Menu