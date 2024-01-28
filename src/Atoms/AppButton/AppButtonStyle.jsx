
import { styled } from '@mui/system';
import Button from '@mui/material/Button';


const  StyledButton = styled(Button)({
  background: "#5D8AA8",
  border: 0,
  borderRadius: 3,
  // boxShadow: '0 1px 3px 2px #367588',
  color: 'white',
  height: 28,
  padding: '18px 30px',
  margin:"0px 30px",
  '&:hover': {
    boxShadow: '0 1px 5px 2px #367588',
    background:"#6699CC"
  },
});

export default StyledButton;