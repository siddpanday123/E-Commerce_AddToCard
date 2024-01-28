
import PropTypes from "prop-types"; 
import Container, { ImgWrapper, Wrapper } from "./LeftCardStyle";

const LeftCard = (props) => {
  
   const {Item} = props;

  return (
    <Container>
      <Wrapper>
            <ImgWrapper src={Item} radius={"15px"}/>
        </Wrapper>
    </Container>
  );
};

LeftCard.propTypes = {
    data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      
    })
  ),
  Item:PropTypes.string

};

export default LeftCard;
