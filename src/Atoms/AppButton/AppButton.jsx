
import  StyledButton  from './AppButtonStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToElectronic ,setToHome,setToFashion,setToCart} from '../../Redux/Slices/ElectronicItemsSlice';

const AppButton = () => {
  const { data}  = useSelector((state) => state.AddToCart);
  const dispatch =useDispatch()
  const navigate = useNavigate()
  const electricItems = () =>{
    navigate("/Electronic-items")
    dispatch(setToElectronic("selectItem"))
  }
  const Home = () =>{
    navigate("/")
    dispatch(setToHome("selectItem"))
  }
  const Fashion = () =>{
    navigate("/Fashion-items")
    dispatch(setToFashion("selectItem"))
  }
  const AddToCart = () =>{
    navigate("/Fashion-items")
    dispatch(setToCart("selectItem"))
  }
  
  return (
    <div>
      <StyledButton onClick={Home}>Home</StyledButton>
      <StyledButton onClick={electricItems}>Electronic</StyledButton>
      <StyledButton onClick={Fashion}>Fashion</StyledButton>
      <StyledButton onClick={AddToCart}>
        <AddShoppingCartIcon />
        <span style={{position:"relative",top:"-9px",color:"#0C2340",fontWeight:"800"}}>{data.length}</span>
       </StyledButton>
    </div>
  );
};

export default AppButton;
