import { Close, KeyboardArrowRightOutlined, MenuOpen, Window} from '@mui/icons-material';
import { Accordion, AccordionSummary, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from './Links';
import React from 'react';
import useTranslationContext from '../../context/useTranslationContext';

const Header3 = () => {
   const { t } = useTranslationContext();

  const [state, setState] = React.useState({
    top:false,
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
    <Container className='flex justify-between items-center mt-5'>
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
          {t('header3.categories_button')}</Typography>
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

          <ListItemText>{t('header3.menu.bikes')}</ListItemText>
    
        </MenuItem>

          <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <LaptopChromebookOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>{t('header3.menu.electric')}</ListItemText>
    
        </MenuItem>

          <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <MenuBookOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>{t('header3.menu.books')}</ListItemText>
    
        </MenuItem>

         <MenuItem onClick={handleClose}>

          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText>{t('header3.menu.games')}</ListItemText>
    
        </MenuItem>
      </Menu>

      </Box>

{/* links and dropdown menu */}
{useMediaQuery('(min-width:1200px)') &&(
  <Stack direction={'row'} alignItems={'center'} gap={4}>
   <Links title={t('header3.links.home')}/>
    <Links title={t('header3.links.mega_menu')}/>
    <Links title={t('header3.links.full_screen_menu')}/>
    <Links title={t('header3.links.pages')}/>
    <Links title={t('header3.links.user_account')}/>
    <Links title={t('header3.links.vendor_account')}/>
</Stack>
)}
   

{useMediaQuery('(max-width:1000px)') && (
  <IconButton onClick={toggleDrawer("top", true)}>
  <MenuOpen/>
</IconButton>
)}



 <Drawer
            anchor={"top"}
            open={state["top"]}
            sx={{".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper":{ height:'100vh'}}}
          >
          
              <Box sx={{width:444,mx:'auto',mt:6,position:'relative',pt:5}}>
    <IconButton sx={{position:'absolute',top:0,right:10}} onClick={toggleDrawer("top", false)}>
                  <Close sx={{"&:hover":{color:'red',transform:'rotate(180deg)',transition:'all .4s'}}}/>
                 </IconButton>


    {[
      {mainLink:'header3.links.home',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
       {mainLink:'header3.links.mega_menu',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
      {mainLink:'header3.links.full_screen_menu',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
       {mainLink:'header3.links.pages',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
        {mainLink:'header3.links.user_account',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
         {mainLink:'header3.links.vendor_account',subLink:['header3.sublinks.link1','header3.sublinks.link2','header3.sublinks.link3']},
    ].map((item)=>{
      return(
         <Accordion key={item.mainLink} elevation={0} sx={{bgcolor:'initial',mb:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{t(item.mainLink)}</Typography>
        </AccordionSummary>
        
           <List sx={{mx:0,my:2}}>
         {item.subLink.map((subItem)=>(
           <ListItem sx={{mx:0,my:2}} key={subItem}>
            <ListItemButton>
              <ListItemText primary={t(subItem)} />
            </ListItemButton>
          </ListItem>
         ))}
        </List>
      </Accordion> 
      )

    })}


       
     
                 </Box>
           
 </Drawer>

    </Container>
  )
}

export default Header3