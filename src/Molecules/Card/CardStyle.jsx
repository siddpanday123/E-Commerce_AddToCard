import { styled } from '@mui/system';

const Container = styled("div")({
width:"70%",
display:"flex",
// background:"#E1EBEE",
flexDirection: "column",


});
export const Wrapper = styled("div")({

display:"flex",
width:"100%",
background:"#E1EBEE",
border: "2px solid #1E2952",
borderRadius:"6px",
margin:"3px 0px",
boxShadow: "3px 3px 6px #13274F",
// flexDirection: "column"
 transition: "transform 0.3s ease-in-out", 
  "&:hover": {
    transform: "scale(1.03)", 
  },
});

export default Container;