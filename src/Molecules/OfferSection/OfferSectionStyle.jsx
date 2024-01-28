
import { styled } from '@mui/system';

const Container = styled("div")({
width:"30%",
margin:"3px 5px 0px 10px "
// background:"red"
});
export const SellWrapper = styled("div")({
display:"flex",
width:"100%",
height:"30px",
margin:"auto",
border:"1px solid #002244", 
boxShadow: "4px 4px 8px #13274F",
borderRadius:"7px",
justifyContent:"space-around",
fontSize:"18px",
fontFamily:"cursive",
marginBottom:"8px",
alignItems:"center",
color:"#ff2400",
textShadow:"2px 3px 4px #002244 ",
fontWeight:"700",



});
export const EmptyCartWrapper = styled("div")({
width:"100%",
display:"flex",
background:"#E0FFFF",
flexDirection: "column",
border:"1px solid #002244",
marginBottom:"10px",
borderRadius:"6px",
padding:"5px 0px",
boxShadow: "4px 4px 8px #13274F",
textAlign:"center"

});
export default Container;