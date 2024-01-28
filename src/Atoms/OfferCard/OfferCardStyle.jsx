import { styled } from '@mui/system';

export const Container = styled("div")({
width:"100%",
display:"flex",
background:"#4B9CD3",
flexDirection: "column",
border:"1px solid #002244",
marginBottom:"10px",
borderRadius:"6px",
padding:"5px 0px",
boxShadow: "4px 4px 8px #13274F"
});
export const Wrapper = styled("div")({
    width:"95%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    });
    export const LeftWrapper = styled("span")({
    display:"flex",
    width:"25%",
    justifyContent:"center",
    alignItems:"center"
   
    });
    export const RightWrapper = styled("span")({
    width:"75%",
   justifyContent:"center",
    alignItems:"center"
   
    });