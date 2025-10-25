import { Box, Button, Typography } from '@mui/material'
import useTranslationContext from '../../context/useTranslationContext';


const Footer = () => {
  const { t } = useTranslationContext();
  return (
    <Box
    sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    }}
>
    <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
    >
        {t('Designed and developed by')}
            <Button
      variant="contained"              
      size="large"              
      
      sx={{
        // 1. اللون الأساسي
        bgcolor: '#FF4081', // لون وردي/أحمر جذاب (A700-Accent)
        color: 'white',
        fontWeight: 'bold',
        padding: '10px',
        mx:1,
        borderRadius:'10px',    // شكل دائري/كبسولة
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // ظل ليعطي إحساسًا بالرفع
        
        // 2. تأثير الـ Hover (عندما يمرر الماوس فوقه)
        '&:hover': {
          bgcolor: '#F50057', // لون أغمق قليلاً عند التفاعل
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // زيادة الظل
          transform: 'translateY(-2px)', // تأثير رفع طفيف
          transition: 'all 0.3s ease',  // لجعل الحركة سلسة
        },
      }}
    >
      {t('Reda Salem')}
    </Button>

        ©{t('2023')}
    </Typography>
    </Box>

  )
}

export default Footer