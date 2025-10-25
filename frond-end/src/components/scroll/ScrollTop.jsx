import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';



const ScrollTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold:100})}>
         <Fab
         onClick={()=>{
            window.scrollTo({top:0,behavior:'smooth'})
         }}
          sx={{position:'fixed',right:33,bottom:33}} variant='extended' size='small' color="primary" aria-label="add">
        <KeyboardArrowUp/>
      </Fab>
    </Zoom>
  )
}

export default ScrollTop