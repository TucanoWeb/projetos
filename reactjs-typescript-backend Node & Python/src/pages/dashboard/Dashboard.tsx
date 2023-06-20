import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../pages/App.css'


import { CustomerSpentTop, CustomerTopQty, CustomerTailQty, ProductsTopSell, ProductsTopGender } from '../../components';

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Dashboard = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="TOP Clientes Qty" {...a11yProps(0)} />
          <Tab label="TAIL Clientes Qty" {...a11yProps(1)} />
          <Tab label="TOP Produtos Qty" {...a11yProps(2)} />
          <Tab label="TOP Produtos Gender" {...a11yProps(3)} />
          <Tab label="TOP clientes Spent" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CustomerTopQty />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CustomerTailQty />
        </TabPanel>
        <TabPanel value={value} index={2}>
          < ProductsTopSell />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProductsTopGender />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CustomerSpentTop />
        </TabPanel>
      </Box>
    </>
  );
}

export default Dashboard;
