import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

const ProductDaitals = () => {

  return (
    <Box sx={{display:'flex',alignItems:'center',gap:2.5,padding:2,flexDirection:{xs:'column',sm:'row'}}}>

        <Box>
            <img className='rounded-xl' width={400} src="/images/product-1.jpg" alt="product-1" />
        </Box>

     <Box sx={{textAlign:'center'}}>
    <Typography variant="h5">WOMEN'S FASHION</Typography>
    
    <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="body1">
        $12.99
    </Typography>

    <Typography variant="body1">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica.
    </Typography>

    <Stack justifyContent={{xs:'center',sm:'left'}} direction={"row"} gap={1} my={2}>
        {['/images/product-1.jpg','/images/product-2.jpg'].map((item)=>(
            <img style={{borderRadius:3}} height={100} width={90} src={item} alt="" />


        ))}
    </Stack>
     <Button
        sx={{ textTransform: "capitalize" }} 
        variant="contained"                 
        onClick={() => console.log('Buying now...')}
    >
        <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" /> 
        Buy now
    </Button>
</Box>

    </Box>
  )
}

export default ProductDaitals