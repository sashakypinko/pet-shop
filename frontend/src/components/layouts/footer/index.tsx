import {ReactElement, ReactNode} from 'react';
import {Box, Container, Grid, styled, Typography, useTheme} from '@mui/material';

const FooterContainer = styled(Container)(({theme}) => ({
  marginTop: 80,
  marginBottom: 80,
  background: theme.palette.background.default
}));

const StyledCard = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '-webkit-fill-available',
  height: '100%',
  background: theme.palette.secondary.main,
  borderRadius: 12,
  padding: 32,
  gap: 16,
}));

const MapImage = styled('img')({
  width: '100%',
  maxHeight: '350px',
  borderRadius: '12px',
  objectFit: 'cover',
});

interface ContactCardProps {
  title: string,
  children: ReactNode,
}

const ContactCard = ({title, children}: ContactCardProps): ReactElement => {
  const theme = useTheme();

  return (
    <StyledCard>
      <Typography variant="subtitle1" color={theme.palette.text.secondary}>{title}</Typography>
      {children}
    </StyledCard>
  );
};

const Footer = (): ReactElement => {
  const theme = useTheme();

  return (
    <FooterContainer maxWidth="xl">
      <Typography sx={{mb: 2}} variant="h2">Contact</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <ContactCard title="Phone">
            <Typography variant="h3">+49 30 915-88492</Typography>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactCard title="Socials">
            <Box display="flex" gap={2}>
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="
                                    M31.5 3H12.5C7.27546 3 3 7.27361 3 12.5V31.5C3 36.7245 7.27546 41 12.5 41H31.5C36.7245
                                     41 41 36.7245 41 31.5V12.5C41 7.27361 36.7245 3 31.5 3ZM22 29.9164C17.6271 29.9164
                                      14.0832 26.3709 14.0832 22C14.0832 17.6271 17.6271 14.0832 22 14.0832C26.3709 
                                      14.0832 29.9168 17.6271 29.9168 22C29.9168 26.3709 26.3709 29.9164 22 29.9164ZM32.2918 
                                      14.0832C30.9789 14.0832 29.9168 13.0196 29.9168 11.7082C29.9168 10.3967 30.9789
                                       9.33318 32.2918 9.33318C33.6047 9.33318 34.6668 10.3967 34.6668 11.7082C34.6668
                                        13.0196 33.6047 14.0832 32.2918 14.0832Z"
                  fill={theme.palette.text.primary}/>
              </svg>
              <svg width="43" height="43" viewBox="0 0 43 43" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.959 3C11.4824 3 2.95898 11.5228 2.95898 22C2.95898 25.6862 4.01598 29.24
                                     6.02236 32.3263L3.06165 39.2348C2.85755 39.7098 2.96393 40.2628 3.33008 40.6289C3.57253 
                                     40.8714 3.89661 41 4.22565 41C4.39388 41 4.56396 40.9666 4.72477 40.8973L11.6333 
                                     37.936C14.7189 39.9436 18.2728 41 21.959 41C32.4362 41 40.959 32.4772 40.959 22C40.959 
                                     11.5228 32.4362 3 21.959 3ZM31.7113 28.8009C31.7113 28.8009 30.1317 30.8271 28.99 
                                     31.3008C26.088 32.502 21.9911 31.3008 17.324 26.635C12.6581 21.9678 11.4564 17.871 
                                     12.6581 14.969C13.1319 13.826 15.1581 12.2477 15.1581 12.2477C15.7073 11.8197 16.5608 
                                     11.8729 17.0531 12.3652L19.3452 14.6573C19.8376 15.1496 19.8376 15.9561 19.3452 
                                     16.4484L17.9066 17.8858C17.9066 17.8858 17.324 19.6349 20.8234 23.1355C24.3229 26.635
                                      26.0732 26.0523 26.0732 26.0523L27.5105 24.6137C28.0029 24.1214 28.8094 24.1214 
                                      29.3017 24.6137L31.5938 26.9059C32.0861 27.3982 32.1393 28.2505 31.7113 28.8009Z"
                  fill={theme.palette.text.primary}/>
              </svg>
            </Box>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={7}>
          <ContactCard title="Address">
            <Typography variant="h3">Wallstraẞe 9-13, 10179 Berlin, Deutschland</Typography>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactCard title="Working Hours">
            <Typography variant="h3">24 hours a day</Typography>
          </ContactCard>
        </Grid>
        <Grid height="100%" item xs={12}>
          <MapImage src={require('../../../assets/img/map.png')} alt="map"/>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;