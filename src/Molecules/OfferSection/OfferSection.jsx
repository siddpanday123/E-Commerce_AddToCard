import { useSelector } from "react-redux";
import OfferCard from "../../Atoms/OfferCard/OfferCard";
import { ImgWrapper } from "../LeftCard/LeftCardStyle";
import Container, { EmptyCartWrapper, SellWrapper } from "./OfferSectionStyle";
import PropTypes from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const OfferSection = (props) => {
  const { data } = useSelector((state) => state.AddToCart);
  const { selectItem } = useSelector((state) => state.ElectronicItems);

  // console.log(data, "OfferSection");
  let uniqueArray = [...new Set(data)];
  // console.log(uniqueArray, "unq");
  const { Item } = props;
  const { products } = Item.data;
  const sortedDiscounts = products.filter(
    (value) => value.discountPercentage > 10
  );
  return (
    <>
      {selectItem === "CartItems" ? (
        <Container>
          <SellWrapper>
            <span>Cart Items ({data.length})  </span>

            <AddShoppingCartIcon />
            
          </SellWrapper>
          {data.length == 0 ? (
            <EmptyCartWrapper>Cart is Empty (0-items)</EmptyCartWrapper>
          ) : (
            <>
              {" "}
              {uniqueArray.map((data, id) => (
                <div key={id}>
                  <OfferCard Offer={data} img={data.images[0]} cartItems={true} />
                </div>
              ))}
            </>
          )}
        </Container>
      ) : (
        <Container>
          <SellWrapper>
            <span>Sale is On</span>
            <span>
              <ImgWrapper
                src={
                  "http://stampingmadly.com/images/2013/11/Christmas-Sale-cropped-23061791.jpg"
                }
                height={"28px"}
                width={"48px"}
                style={{ padding: "4px 0px 0px 0px" }}
              ></ImgWrapper>
            </span>{" "}
          </SellWrapper>
          {sortedDiscounts.map((data, id) => (
            <div key={id}>
              <OfferCard Offer={data} img={data.images[0]} />
            </div>
          ))}
        </Container>
      )}
    </>
  );
};

OfferSection.propTypes = {
  Item: PropTypes.shape({
    data: PropTypes.shape({
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          // Add more PropTypes for other properties in your 'products' data
          images: PropTypes.arrayOf(PropTypes.string),
          discountPercentage: PropTypes.number, // Assuming discountPercentage is a number
          // Add other PropTypes as needed
        })
      ),
      // Add more PropTypes for other properties in your 'data' object
    }),
  }),
};

export default OfferSection;
