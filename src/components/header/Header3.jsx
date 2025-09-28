import { Close, KeyboardArrowRightOutlined, MenuOpen, Window} from '@mui/icons-material';
import { Accordion, AccordionSummary, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography, useTheme } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import React from 'react'

const Header3 = () => {

  const [state, setState] = React.useState({
    top:true,
  });

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme=useTheme();


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container className='flex justify-between items-center'>
      <Box>

       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // @ts-ignore
        sx={{width:222,background:theme.palette.myColor.main,color:theme.palette.text.primary}}
      >
        <Window/>
        <Typography
         sx={{padding:0,textTransform:'capitalize',mx:1}}>
          Categories</Typography>
          <Box  flexGrow={1}/>
        <KeyboardArrowRightOutlined/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
        // @ts-ignore
        sx={{".MuiPaper-root":{width:220,bgcolor:theme.palette.myColor.main}}}
      >
      
          <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <ElectricRickshawOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Bikes</ListItemText>
    
        </MenuItem>

          <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <LaptopChromebookOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Electric</ListItemText>
    
        </MenuItem>

          <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <MenuBookOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Books</ListItemText>
    
        </MenuItem>

         <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>Games</ListItemText>
    
        </MenuItem>
      </Menu>

      </Box>

<IconButton onClick={toggleDrawer("top", true)}>
  <MenuOpen/>
</IconButton>

 <Drawer
            anchor={"top"}
            open={state["top"]}
            sx={{".MuiPaper-root":{ height:'100vh'}}}
          >
          
              <Box sx={{width:444,mx:'auto',mt:6,position:'relative',pt:5}}>
             <IconButton sx={{position:'absolute',top:0,right:0}} onClick={toggleDrawer("top", false)}>
                  <Close/>
                 </IconButton>


     <Accordion elevation={0} sx={{bgcolor:'initial',height:'70% !important'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        
           <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Accordion> 


       <Accordion elevation={0} sx={{bgcolor:'initial',height:'70% !important',mt:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        
           <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Accordion> 




     


     
                 </Box>
           
          </Drawer>

    </Container>
  )
}

export default Header3