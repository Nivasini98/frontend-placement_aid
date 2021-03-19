import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Fuinstructions from '../playquiz/Functions/Fuinstructions';
import Operatorsinstructions from '../playquiz/Operators/Operatorsinstructions';
import Pointersinstructions from '../playquiz/Pointers/Pointersinstructions';
import Dtinstructions from '../playquiz/Datatypes/Dtinstructions';
import Scinstructions from '../playquiz/Storageclass/Scinstructions';
import '../styles/aptitude_sidenav_style.css'


function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   /*  marginTop:'20px',
    padding:'30px 10px 30px 10px',    
    */ 
    display: 'flex',
    height: 200,
    

  },

  tabs: {
    border: `1px solid #999`,
    background:'#343a40',
    color:'#fff',
    height:'500px',      
    borderRadius:'5px',
    boxShadow:'1px 2px 5px 0px rgba(0,0,0,0.75)'
   //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },

}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 return (
    <div className={classes.root}>
      
         <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="    Data Types   " {...a11yProps(0)} />
        <Tab label="    Operators    " {...a11yProps(1)} />
        <Tab label="    Functions    " {...a11yProps(2)} />
        <Tab label="    Pointers    " {...a11yProps(3)} />
        <Tab label="    Storage Class    " {...a11yProps(4)} />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
       */}</Tabs>
      <TabPanel value={value} index={0}>
        <Dtinstructions/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Operatorsinstructions/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fuinstructions/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Pointersinstructions/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Scinstructions/>
      </TabPanel>
    
    </div>
  );
}
