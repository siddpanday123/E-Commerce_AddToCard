import { useEffect, useState } from "react";
import { ImgWrapper } from "../../Molecules/LeftCard/LeftCardStyle";
import { BtnWrapper } from "../../Molecules/RightCard/RightCardStyle";
import StyledButton from "../AppButton/AppButtonStyle";
import {
  Container,
  LeftWrapper,
  RightWrapper,
  Wrapper,
} from "./OfferCardStyle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart, setToCart } from "../../Redux/Slices/AddToCartSlice";

const OfferCard = (props) => {
  const [id, setId] = useState(props.Offer.id);
  
  const { data } = useSelector((state) => state.AddToCart);
  const [TotalItems,setTotalItems] = useState(data.filter((item) => item.id == id))

  const Dispatch = useDispatch();
  const [cardBtnClicked, setCardBtnClicked] = useState(false);
  const [clk,setClk] = useState(false)
  const { Offer, img, cartItems } = props;
  //  console.log(Offer,"prrrr")
  const addToCard = () => {
    setCardBtnClicked(true);
  };

  useEffect(() => {
    setTotalItems(data.filter((item) => item.id === id));
  }, [data, id , ]);


  
  //  const TotalItems = data.filter((item) => item.id == id);
  // const TotalItems = data.reduce((filteredItems, item) => {
  //   if (item.id === id) {
  //     filteredItems.push(item);
  //   }
  //   return filteredItems;
  // }, []);
  
   console.log(TotalItems,"total");
// useEffect(()=>{
//   setTotalItems( data.filter((item) => item.id == id))
//   // if (data.length > 0) {
//   //   setId(data[0].id); 
//   // }
// },[data]);


  const RemoveBtn = () => {
    Dispatch(removeToCart(Offer));
    if (TotalItems.length == 1) {
      // setCardBtnClicked(false);
      setId(Offer.id);
      console.log(Offer.id)
      
    }
  };
  const AddBtn = () => {
    Dispatch(setToCart(Offer));
    // setCardBtnClicked(true);
    setId(Offer.id);
setClk(true)
    console.log(Offer.id)
  };
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <ImgWrapper
            src={img}
            radius={"15px"}
            width={"40px"}
            height={"40px"}
          />
        </LeftWrapper>
        <RightWrapper>
          <div style={{ fontFamily: "cursive", textTransform: "inherit" }}>
            {Offer.title}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "serif", fontWeight: "600" }}>
              {Offer.discountPercentage}%
              <span
                style={{
                  fontFamily: "cursive",
                  fontWeight: "700",
                  color: "#041E42",
                }}
              >
                {" "}
                Off
              </span>
              <span
                style={{
                  fontFamily: "cursive",
                  fontWeight: "700",
                  color: "#041E42",
                }}
              >
                {" "}
                ${Offer.price}
              </span>
            </div>
            <div>
              {/*============================== Condisnal btns========== */}
              {cartItems ? (
                <StyledButton
                  style={{
                    textTransform: "initial",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <span
                    onClick={RemoveBtn}
                    style={{ fontSize: "23px", padding: "5px 5px" }}
                  >
                    -
                  </span>
                  {TotalItems.length}
                  <span
                    onClick={AddBtn}
                    style={{ fontSize: "20px", padding: "5px 5px" }}
                  >
                    +
                  </span>
                </StyledButton>
              ) : (
                <>
                  {!cardBtnClicked ? (
                    <Tooltip title="Buy" placement="top-end">
                      <StyledButton
                        style={{
                          padding: "0px",
                          margin: "0px",
                          background: "#1F305E",
                        }}
                        onClick={addToCard}
                      >
                        <AddShoppingCartIcon />
                      </StyledButton>
                    </Tooltip>
                  ) : (
                    <StyledButton
                      style={{
                        textTransform: "initial",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      <span
                        onClick={RemoveBtn}
                        style={{ fontSize: "23px", padding: "5px 5px" }}
                      >
                        -
                      </span>
                      {TotalItems.length}
                      <span
                        onClick={AddBtn}
                        style={{ fontSize: "20px", padding: "5px 5px" }}
                      >
                        +
                      </span>
                    </StyledButton>
                  )}
                </>
              )}
            </div>
          </div>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};
OfferCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  Offer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  Item: PropTypes.object,
  cartItems: PropTypes.boolean,
};
export default OfferCard;
