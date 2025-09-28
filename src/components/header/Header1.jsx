import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const options = [
  'AR',
  'EN',
];


const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{bgcolor:'#19183B',py:'4px',borderBottomRightRadius:5,borderBottomLeftRadius:5}}>

      <Stack direction={'row'} alignContent={'center'} alignItems={'center'} mx={2}>
      <Typography
  sx={{
    mr: 2,
    p:"5px 10px",
    bgcolor: "#D23F57",
    borderRadius: "12px",
    fontSize: "10px",
    fontWeight: "bold",
    color: "#fff",
  }}
  variant="body2"
>
  HOT
</Typography>

<Typography
  sx={{
    fontSize: "12px",
    fontWeight: 300,
    color: "#fff",
  }}
  variant="body2"
>
  Free Express Shipping
</Typography>


<Box flexGrow={1}/>



      <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined sx={{color:'white'}} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined />
        </IconButton>
      )}
    </div>

    {/* change icon */}

     <List
        component="nav"
        aria-label="Device settings"
        sx={{m:0 , p:0,px:1 }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{'&:hover':{cursor:'pointer'}}}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{".MuiTypography-root":{color:'white',fontWeight:'bold'}}}
          />
          <ExpandMore className="text-[16px] hover:rotate-180 duration-300 transition-all text-white"/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:'15px', p:'3px 10px', minHeight:'10px'}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>






    <TwitterIcon className="text-[16px] text-white"/>
    <FacebookIcon className="text-[16px] text-white mx-2"/>
    <InstagramIcon className="text-[16px] text-white"/>

    </Stack>


      </Box>
  )
}

export default Header1