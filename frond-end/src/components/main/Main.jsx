import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Close, ShoppingCart } from "@mui/icons-material";
import ProductDaitals from "./ProductDaitals";
import { useGetproductByNameQuery } from "../../redux/product";

const Main = () => {
  
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allproductsAPI='products?populate=*'

  const menCategoryAPI = 'products?populate=*&filters[category][$eq]=men'

  const womenCategoryAPI = 'products?populate=*&filters[category][$eq]=women'

  const [products,setproducts]=React.useState(allproductsAPI)

    const {data, error, isLoading } = useGetproductByNameQuery(products)

    if(isLoading){
      return(
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-green-500 text-2xl font-bold">loading.....</h2>
        </div>
      )
    }

    if(error){
      return(
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-red-800 text-2xl font-bold">Error:{error.
// @ts-ignore
          message}</h2>
        </div>
      )
    }

    

    if(data){

      return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>

          <Typography fontWeight={300} variant="body1">
            All Our New arrival is brand section
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={products}
          exclusive
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233,69,0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={allproductsAPI}
            aria-label="left aligned"
            onClick={()=>{setproducts(allproductsAPI)}}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton !mx-3"
            value={menCategoryAPI}
            aria-label="centered"
            onClick={() => setproducts(menCategoryAPI)}
          >
            MEN category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value={womenCategoryAPI}
            aria-label="right aligned"
            onClick={()=>{setproducts(womenCategoryAPI)}}
          >
            WOMEN category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.data.map((item) => (
          <Card
          key={item.id}
            sx={{
              maxWidth: 333,
              mt: 5,
              ":hover .MuiCardMedia-root": {
                scale: 1.1,
                rotate: "1deg",
                transition: "all 0.3s ease",
              },
            }}
          >
            <CardMedia
              sx={{ height: 277 }}
              // @ts-ignore
              image={`${import.meta.env.VITE_BASE_URL}${item.productimg[1].formats.thumbnail.url}`}
              title="green iguana"
            />

            <CardContent>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.productTitle}
                </Typography>

                <Typography variant="subtitle1" component="p">
                  ${item.productPrice}
                </Typography>
              </Stack>

              <Typography variant="body2" color="text.secondary">
               {item.productDescription}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                sx={{ textTransform: "capitalize" }}
                size="small"
                onClick={handleClickOpen}
              >
                <ShoppingCart sx={{ mr: 1 }} fontSize="small" />
                Add to Cart
              </Button>
              <Rating
                name="read-only"
                defaultValue={item.productRating}
                precision={0.5}
                readOnly
              />
            </CardActions>
          </Card>
        ))}
      </Stack>

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800} }}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{ position: "absolute", top: 0, right: 10 }}
          onClick={handleClose}
        >
          <Close
            sx={{
              "&:hover": {
                color: "red",
                transform: "rotate(180deg)",
                transition: "all .4s",
              },
            }}
          />
        </IconButton>
        <ProductDaitals/>

        
      </Dialog>
    </Container>
  );
    }


};

export default Main;
