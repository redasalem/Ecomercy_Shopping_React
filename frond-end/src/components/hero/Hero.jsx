import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';


const mySlider =[
  {text:'hero.slider.men',src:'/images/banner-15.jpg',alt:'banner-15'},
  {text:'hero.slider.women',src:'/images/banner-25.jpg',alt:'banner-25'},
];

import useTranslationContext from '../../context/useTranslationContext';

const Hero = () => {
  const { t } = useTranslationContext();

  return (
    <Container sx={{pt:3,mt:2.5,display:'flex',alignItems:'center',gap:2}}>
        <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mySlider.map((item,index)=>(

          <SwiperSlide key={index}>
            <img src={item.src} alt={item.alt} className='sm:block hidden' />

            <Box className="sm:absolute sm:left-[10%] text-left">
              <Typography
  sx={{
    color: "#222",
  }}
  variant="h5"
>
  {t('hero.slider.lifestyle_collection')}
</Typography>

<Typography
  sx={{
    color: "#222",
    fontWeight: 400,
    my: 1,
  }}
  variant="h3"
>
  {t(item.text)}
</Typography>

<Stack
  sx={{
    justifyContent: "center",
  }}
  direction="row"
  alignItems="center"
>
  <Typography color="#333" mr={1} variant="h4" className='sm:!text-[30px] text-[20px]'>
    {t('hero.slider.sale_up')}
  </Typography>
  <Typography color="#D23F57" variant="h4" className='sm:!text-[30px] text-[20px]'>
    {t('hero.slider.percent_off')}
  </Typography>
</Stack>
<Typography
    sx={{
      color: "#000",
      fontWeight: 300,
      my: 1,
    }}
    variant="body1"
  >
    {t('hero.slider.free_shipping')}
  </Typography>

  <Button
    sx={{
      px: 5,
      py: 1,
      mt: 2,
      backgroundColor: "#222",
      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
      color: "#fff",
      borderRadius: "1px",
      "&:hover": {
        bgcolor: "#151515",
        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
      },
    }}
    variant="contained"
  >
    {t('hero.slider.cta')}
  </Button>

            </Box>


        </SwiperSlide>

        ))}
        

       
      </Swiper>

     {/* images */}
      <Box sx={{display:{xs:'none', md:'block',width:'38%'}}}>
     {/* image1 */}
     <Box className='relative !w-full !h-full'>

     <img src="\images\banner-17.jpg" alt="banner-17"/>

     <Stack className='absolute top-60% transform -translate-y-50 left-4' sx={{display:{md:'none',lg:'block'}}}>

     <Typography
     variant='caption'
     sx={{
        color:'#283445',
        fontSize:'18px'
     }}
     >
        {t('hero.side1.new_arrivals')}
     </Typography>

      <Typography
     variant='h6'
     sx={{
        color:'#283445',
        lineHeight:"16px",
        mt:1
     }}
     >
        {t('hero.side1.summer')}
     </Typography>

     <Typography
        variant="h6"
        sx={{
          color: "#2B3445",
        }}
      >
        {t('hero.side1.sale20')}
      </Typography>

      <Link
        sx={{
          color: "#2B3445",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          transition: "0.2s",
          ":hover": {
            color: "#D23F57",
          },
        }}
        href="#"
        underline="none"
      >
        {t('hero.side1.shop_now')}
        <ArrowForward sx={{ fontSize: "13px" }} />
      </Link>

     </Stack>

     </Box>

       {/* image2 */}
     <Box className='relative'>
       <img src="\images\banner-16.jpg" alt="banner-16"/>

       <Stack className='absolute top-60% transform -translate-y-50 left-4' sx={{display:{md:'none',lg:'block'}}}>

  <Typography
    variant='caption'
    sx={{
      color:'#283445',
      fontSize:'18px'
    }}
  >
    {t('hero.side2.exclusive_deals')}
  </Typography>

  <Typography
    variant='h6'
    sx={{
      color:'#283445',
      lineHeight:"16px",
      mt:1
    }}
  >
    {t('hero.side2.winter')}
  </Typography>

  <Typography
    variant="h6"
    sx={{
      color: "#2B3445",
    }}
  >
    {t('hero.side2.save50')}
  </Typography>

  <Link
    sx={{
      color: "#2B3445",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      transition: "0.2s",
      ":hover": {
        color: "#D23F57",
      },
    }}
    href="#"
    underline="none"
  >
    {t('hero.side2.discover_now')}
    <ArrowForward sx={{ fontSize: "13px" }} />
  </Link>

        </Stack>

     </Box>

        </Box>

       
       
 </Container>
  )
}

export default Hero