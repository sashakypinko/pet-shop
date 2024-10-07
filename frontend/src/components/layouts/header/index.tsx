import {ReactElement, useEffect, useState} from 'react';
import {Badge, Box, Container, IconButton, styled, useTheme} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import NavbarDesktop from './navbar-desktop';
import NavbarMobile from './navbar-mobile';
import useIsMobile from '../../../hooks/use-is-mobile.hook';
import {RouteEnum} from '../../../routes/enums/route.enum';
import {getActiveRoute} from '../../../helpers/url-helper';
import ThemeSwitcher from './theme-switcher';
import {NavLink} from './types';
import {useSelector} from 'react-redux';
import {selectCart} from '../../../store/selectors';

const HEADER_DEFAULT_PADDING = '28px';
const HEADER_SCROLLED_PADDING = '4px';

interface HeaderBoxProps {
  scrolled: 1 | 0;
  mobile: 1 | 0;
}

const HeaderContainer = styled(Container)<HeaderBoxProps>(({theme, scrolled, mobile}) => ({
  display: 'flex',
  position: 'sticky',
  zIndex: 1000,
  top: 0,
  width: '100%',
  margin: '0 auto',
  justifyContent: 'space-between',
  borderBottom: '1px solid',
  borderColor: theme.palette.text.disabled,
  background: theme.palette.background.default,
  boxShadow: scrolled ? theme.shadows[2] : 'none',
  transition: 'padding 0.5s ease, box-shadow 0.5s ease',
  padding: `${scrolled ? HEADER_SCROLLED_PADDING : HEADER_DEFAULT_PADDING} ${mobile ? '0' : '40px'}`,
}));

const Logo = (): ReactElement => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="35" fill="#0D50FF"/>
    <path
      d="M33.4445 21.0557H37.5557M49.8891 35.4447C48.5187 46.4077 45.0927 51.8892 39.6112
                    51.8892H31.3889C25.9074 51.8892 22.4815 46.4077 21.1111 35.4447"
      stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M35.4999 47.778V51.8891M31.3887 33.389V33.4096M39.611 33.389V33.4096M33.4443 43.6669C33.4443 
                    45.0372 34.1295 45.7224 35.4999 45.7224C37.5554 45.7224 37.5554 45.0379 37.5554 43.6669H33.4443ZM21.1109 
                    19L33.4443 20.9939L20.6216 34.7416C20.2617 35.1469 19.7588 35.397 19.2184 35.4396C18.6781 35.4821 18.1422 
                    35.3137 17.7233 34.9697C17.4385 34.7389 17.2244 34.4326 17.1055 34.0858C16.9866 33.739 16.9678 33.3657 
                    17.0511 33.0087L21.1109 19ZM49.8889 19L37.5554 20.9939L50.3781 34.7416C51.114 35.5802 52.4111 35.683 53.2764
                    34.9697C53.5613 34.7389 53.7754 34.4326 53.8942 34.0858C54.0131 33.739 54.0319 33.3657 53.9486 33.0087L49.8889 19Z"
      stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartIcon = (): ReactElement => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M26 0C20.4961 0 16.0565 4.37372 16.0565 9.79592V11.7551H8.19492L8.10169 12.6122L4.12429 46.898L4
                        48H48L47.8757 46.898L43.8983 12.6122L43.8051 11.7551H35.9435V9.79592C35.9435 4.37372 31.5039 0 26
                        0ZM26 1.95918C30.4396 1.95918 33.9548 5.42219 33.9548 9.79592V11.7551H18.0452V9.79592C18.0452
                        5.42219 21.5604 1.95918 26 1.95918ZM9.99717 13.7143H16.0565V15.949C15.4622 16.2895 15.0621 
                        16.9094 15.0621 17.6327C15.0621 18.7156 15.9516 19.5918 17.0508 19.5918C18.1501 19.5918 19.0395
                        18.7156 19.0395 17.6327C19.0395 16.9094 18.6395 16.2895 18.0452 15.949V13.7143H33.9548V15.949C33.3605
                        16.2895 32.9605 16.9094 32.9605 17.6327C32.9605 18.7156 33.8499 19.5918 34.9492 19.5918C36.0484
                        19.5918 36.9379 18.7156 36.9379 17.6327C36.9379 16.9094 36.5378 16.2895 35.9435
                        15.949V13.7143H42.0028L45.7627 46.0408H6.23729L9.99717 13.7143Z"
        fill={theme.palette.text.primary}/>
    </svg>
  );
};

const navLinks: NavLink[] = [
  {label: 'Main Page', url: RouteEnum.MAIN},
  {label: 'Categories', url: RouteEnum.CATEGORIES},
  {label: 'All Products', url: RouteEnum.PRODUCTS},
  {label: 'All Sales', url: RouteEnum.SALES},
];

const Header = (): ReactElement => {
  const [page, setPage] = useState<RouteEnum>(RouteEnum.MAIN);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const { totalCount } = useSelector(selectCart);
  
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const location = useLocation();

  const handlePageChange = (newPage: RouteEnum) => {
    navigate(newPage);
    setPage(newPage);
  };

  const handleCartClick = () => {
    navigate(RouteEnum.SHOPPING_CART);
    setPage(RouteEnum.SHOPPING_CART);
  };

  const handleScroll = (): void => {
    const scrollY = window.scrollY;
    setIsScrolled(!!scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setPage(getActiveRoute());
  }, [location]);

  return (
    <HeaderContainer maxWidth="xl" scrolled={isScrolled ? 1 : 0} mobile={isMobile ? 1 : 0}>
      <Box display="flex" alignItems="center" gap={2}>
        {isMobile && <NavbarMobile links={navLinks} page={page} onPageChange={handlePageChange}/>}
        <Logo/>
      </Box>
      {!isMobile && <NavbarDesktop links={navLinks} page={page} onPageChange={handlePageChange}/>}
      <Box>
        <IconButton onClick={handleCartClick}>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              '& .MuiBadge-badge': {
                left: 12,
                top: 20,
                minWidth: '26px',
                height: '26px',
                borderRadius: 20,
              },
            }}
            color="primary"
            badgeContent={totalCount}
          >
            <CartIcon/>
          </Badge>
        </IconButton>
        <ThemeSwitcher/>
      </Box>
    </HeaderContainer>
  );
};

export default Header;