import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ElectricBolt, Title } from "@mui/icons-material";
import { WorkspacePremiumOutlined } from "@mui/icons-material";
import { CreditScoreOutlined } from "@mui/icons-material";
import { AccessAlarmsOutlined } from "@mui/icons-material";
import useTranslationContext from '../../context/useTranslationContext';

const IconSection = () => {
  const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width:600px)');
  const { t } = useTranslationContext();
  return (
    <Container sx={{mt:3,bgColor:theme.palette.mode === 'dark' ? '#000':'#fff'}}>
      <Stack  divider={!isSmallScreen ? <Divider orientation="vertical" flexItem /> : null}  direction={"row"} alignItems={"center"} flexWrap={'wrap'} mt={2}>
        <MyBox
          icon={<ElectricBolt />}
          title={t('hero_iconSection.speed')}
          SubTitle={t('hero_iconSection.speed_sub')}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={t('hero_iconSection.professionalism')}
          SubTitle={t('hero_iconSection.professionalism_sub')}
        />
        <MyBox
          icon={<AccessAlarmsOutlined />}
          title={t('hero_iconSection.punctuality')}
          SubTitle={t('hero_iconSection.punctuality_sub')}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={t('hero_iconSection.trust')}
          SubTitle={t('hero_iconSection.trust_sub')}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, SubTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "200px",
        flex: 1,
        gap: 3,
        justifyContent: "center",
        padding: 1.6,
      }}
    >
      {icon}

      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {SubTitle}
        </Typography>
      </Box>
    </Box>
  );
};
