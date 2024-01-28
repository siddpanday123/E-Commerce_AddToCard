import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const StyledAppBar = styled(AppBar)({
  background: '#5D8AA8', 
   borderRadius:"6px",
   height:"auto",
  //  position:"sticky"
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledTypography = styled(Typography)({
  color: 'white',
});

export const Logo = styled('img')(({ src,radius }) => ({
    width: '50px',
    height: 'auto', 
    src: src, 
    borderRadius:radius
  }));
