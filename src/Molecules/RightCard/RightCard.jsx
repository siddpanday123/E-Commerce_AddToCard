import StyledButton from "../../Atoms/AppButton/AppButtonStyle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Container, {
  BtnWrapper,
  LeftSectionWrapper,
  RightSectionWrapper,
  TextWrapper,
  Wrapper,
} from "./RightCardStyle";
import PropTypes from "prop-types";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { removeToCart, setToCart,removeAllToCart } from "../../Redux/Slices/AddToCartSlice";
import { useDispatch, useSelector } from "react-redux";


const RightCard = (props) => {
  const [id,setId]= useState("")
  const { data } = useSelector((state) => state.AddToCart);
  const [cardBtnClicked, setCardBtnClicked] = useState(false);
  const { item } = props;
  const Dispatch = useDispatch()


  const TotalItems = data.filter(item=>item.id==id)
  // console.log(TotalItems,"TotalItems")
  // console.log(id)


  const btnClicked = () => {
    setCardBtnClicked(true);
    Dispatch(setToCart(item))
    setId(item.id)
  };
  const AddToCartBtn = () =>{
    Dispatch(setToCart(item))
    setCardBtnClicked(true);
    setId(item.id)
  }
  const RemoveFromCart = () =>{
    Dispatch(removeAllToCart(item))
    setCardBtnClicked(false);
  }
  const RemoveBtn = () =>{
    Dispatch(removeToCart(item));
    if(TotalItems.length==1){
      setCardBtnClicked(false);
    }

    
  }
  const AddBtn = () =>{
    Dispatch(setToCart(item))
    setCardBtnClicked(true);
  }

  return (
    <Container>
      <Wrapper>
        <LeftSectionWrapper>
          <div>
            <TextWrapper fontWeight={"800"}>Brand: {item.brand}</TextWrapper>
          </div>
          <div>
            <TextWrapper fontWeight={"800"}>
              {" "}
              Discount:
              <TextWrapper
                fontWeight={"800"}
                fontSize={"18px"}
                color={"#2c3968"}
              >
                {" "}
                {item.discountPercentage}%
              </TextWrapper>{" "}
              Off
            </TextWrapper>{" "}
          </div>
          <TextWrapper fontWeight={"600"}>Price: ${item.price}</TextWrapper>

          {!cardBtnClicked ? (
          
              <BtnWrapper
                style={{ justifyContent: "left" }}
                onClick={btnClicked}
              >
                  < Tooltip title="buy this item"  placement="top-start">
                <StyledButton
                  style={{
                    textTransform: "initial",
                    margin: "0px 5px 5px 0px",
                  }}
                >
                  <AddShoppingCartIcon />
                </StyledButton>
                </Tooltip>
              </BtnWrapper>
            
          ) : (
            <BtnWrapper style={{ justifyContent: "left" }}>
              <StyledButton
                style={{
                  textTransform: "initial",
                  margin: "0px 5px 5px 0px",
                  paddingRight: "8px",
                  paddingLeft: "8px",
                }}
              >
                <span onClick={RemoveBtn} style={{ fontSize: "28px", padding: "5px 5px" }}> -</span>
                <span style={{ width: "40px", padding: "5px 5px" }}>
                  <span style={{fontSize:"19px"}}>
                  {TotalItems.length}
                  </span>
                 
                  <AddShoppingCartIcon
                    style={{ fontSize: "medium", paddingTop: "5px" , paddingLeft:"2px" }}
                  />
                </span>
                <span onClick={AddBtn}  style={{ fontSize: "28px", padding: "5px 5px" }}>
                  +
                </span>
              </StyledButton>
            </BtnWrapper>
          )}
        </LeftSectionWrapper>


        {/* ===========================================Add To Cart Btn =======================*/}


        <RightSectionWrapper>
          <div>
            <TextWrapper color={"#1F305E"} fontWeight={"800"}>
              {item.title}
            </TextWrapper>
          </div>

          <div>
            <TextWrapper>{item.description}</TextWrapper>
          </div>
          {!cardBtnClicked ?  <BtnWrapper>
            <Tooltip title="add to cart list"  placement="top-start">
            <StyledButton onClick={AddToCartBtn} style={{textTransform:"initial"}}>Add To Cart</StyledButton>
            </Tooltip>
           
          </BtnWrapper> :  <BtnWrapper>
          <Tooltip title="delete from cart list"  placement="top-start">
            <StyledButton onClick={RemoveFromCart} style={{textTransform:"initial"}}>Remove From Card</StyledButton>
            </Tooltip>
          </BtnWrapper>}
          
        </RightSectionWrapper>
      </Wrapper>
      {/* {products.map((item, id) => (
        <Wrapper key={id}>
          <LeftSectionWrapper>
          <div>{item.discountPercentage}</div>
            <div>{item.price}</div>
          </LeftSectionWrapper>
          <RightSectionWrapper>
            <div>
              {item.title}
            </div>
            <div>
              {item.brand}
            </div>
            <div>
              {item.description}
            </div>
          </RightSectionWrapper>
            
        </Wrapper>
      ))} */}
    </Container>
  );
};
RightCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  Item: PropTypes.object,
};
export default RightCard;
