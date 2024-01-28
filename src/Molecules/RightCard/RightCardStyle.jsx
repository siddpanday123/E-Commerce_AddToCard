import { fontSize, fontWeight, styled } from "@mui/system";

const Container = styled("span")({
  width: "80%",

});
export const LeftSectionWrapper = styled("span")({
  width: "35%",
  padding:"10px 0px",
  justifyContent:"center"
});

export const RightSectionWrapper = styled("span")({
  width: "65%",
  padding:"10px 0px",
    justifyContent:"center"
});
export const Wrapper = styled("span")({
  display: "flex",
//   height: "100px",
//   backgroundColor:"green"
});

export const TextWrapper = styled('span')(({ fontSize="16px",fontWeight="600px", fontStyle="oblique",color="#5072A7"}) => ({
    fontSize: fontSize,
    fontWeight:fontWeight,
    color:color,
    fontStyle:fontStyle,
    
  }));

export const BtnWrapper = styled("span")({
  display: "flex",
  justifyContent: "end",
  position: "relative", 
  bottom:"-7px"
//   height: "100px",
//   backgroundColor:"green"
});
export default Container;
