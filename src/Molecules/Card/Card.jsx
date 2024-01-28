import LeftCard from "../LeftCard/LeftCard";
import RightCard from "../RightCard/RightCard";

import PropTypes from "prop-types";
import Container, { Wrapper } from "./CardStyle";
import { useSelector } from "react-redux";
const Card = (props) => {
  const { selectItem } = useSelector((state) => state.ElectronicItems);
  // console.log(selectItem)
  const { Item } = props;
  const { products } = Item.data;

  
  // console.log(products);
  const ElectronicData = products.filter(
    (itm) =>
      itm.category === "smartphones" ||
      itm.category === "laptops" ||
      itm.category === "mens-watches" ||
      itm.category === "womens-watches" ||
      itm.category === "lighting"
  );
  const FashionData = products.filter(
    (itm) =>
      itm.category === "fragrances" ||
      itm.category === "skincare" ||
      itm.category === "tops" ||
      itm.category === "womens-shoes" ||
      itm.category === "sunglasses" ||
      itm.category === "womens-bags"
  );

  const result =
    selectItem === "ideal"
      ? products
      : selectItem === "electronicItem"
      ? ElectronicData
      : selectItem === "Fashion"
      ? FashionData
      : products;

  return (
    <Container>
      {result.map((data, Id) => (
        <Wrapper key={Id}>
          <LeftCard Item={data.images[0]} />
          <RightCard item={data} />
        </Wrapper>
      ))}
    </Container>
  );
};
Card.propTypes = {
  Item: PropTypes.object,
};
export default Card;
