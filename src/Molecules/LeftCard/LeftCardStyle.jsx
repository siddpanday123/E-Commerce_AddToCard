
import { styled } from '@mui/system';

const Container = styled("div")({
width:"20%",
 margin:"5px 0px"
});
export const ImgWrapper = styled('img')(({ src,radius="5px",width="90px",height="90px" }) => ({
    width: width,
    height: height,
    maxHeight:"100px", 
    src: src, 
    borderRadius:radius,
   
  }));
   export const Wrapper = styled("span")({
     display:"flex",
     height:"100px",
     alignItems:"center",
      justifyContent: "center",
      
        });
export default Container;