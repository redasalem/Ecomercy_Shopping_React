import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import useTranslationContext from '../../context/useTranslationContext';


const Links = ({title}) => {
    const { t } = useTranslationContext();

    return (
        <Box sx={{
            ":hover .show-in-hover": { display: 'block' },
             ":hover": {cursor:'grab'},
            display: 'flex', alignItems: 'center', gap: 1, cursor: 'grab', position: 'relative',zIndex:1000
        }}>

            <Typography
                // @ts-ignore
                variant='boby1'>{title}</Typography>

            <ExpandMoreIcon sx={{ fontSize: '16px' }} />


            <Box className='show-in-hover' sx={{ position: 'absolute', top: '100%', left: '50%', minWidth: '170px', transform: 'translateX(-50%)', display: 'none'}}>
                <Paper sx={{ mt: 2}}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{
                                            ".MuiTypography-root": { fontSize: '15px' }
                                        }} primary={t('header3.links.dropdown.dashboard')} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ ":hover .showHover": { display: 'block' },transition:'all .4s'}}>
                                <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5}}>
                                    <ListItemText
                                        sx={{
                                            ".MuiTypography-root": { fontSize: '15px' }
                                        }} primary={t('header3.links.dropdown.products')} />

                                    <ExpandMoreIcon sx={{ fontSize: '16px', ml: 1, transform: 'rotate(-90deg)' }} />
                                </ListItemButton>

                                <Box className='showHover' sx={{position:'absolute',top:0,left:'100%',minWidth:'170px',bgcolor:'background.paper',boxShadow:3,mt:1,display:'none'}}>
                                <Paper sx={{ml:1}}>
                                <nav aria-label="secondary mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary={t('header3.links.dropdown.add_product')} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton component="a" href="#simple-list">
                                                <ListItemText primary={t('header3.links.dropdown.edit_product')} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                                </Paper>
                                </Box>

                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{
                                            ".MuiTypography-root": { fontSize: '15px' }
                                        }} primary={t('header3.links.dropdown.orders')} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: 'flex', p: 0, px: 1.5 }}>
                                    <ListItemText
                                        sx={{
                                            ".MuiTypography-root": { fontSize: '15px' }
                                        }} primary={t('header3.links.dropdown.profile')} />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                </Paper>

            </Box>

        </Box>
    )
}

export default Links