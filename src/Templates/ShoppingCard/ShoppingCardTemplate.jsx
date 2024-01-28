// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ShoppingItems } from '../../Redux/Slices/ShoppingItemsSlice';
// const ShoppingCardTemplate = () => {
//   const dispatch = useDispatch();
//   const Items = useSelector((state) => {
//     console.log(state); // Log the entire state object
//     return state.ShoppingItems;
//   });

//   useEffect(() => {
//     dispatch(ShoppingItems());
//   }, [dispatch]);
//   return (
//     <div>
//       hhhhhhhh
//     </div>
//   )
// }

// export default ShoppingCardTemplate
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingItems } from "../../Redux/Slices/ShoppingItemsSlice";
import Container from "./ShoppingCardTemplateStyle";
import OfferSection from "../../Molecules/OfferSection/OfferSection";
import Card from "../../Molecules/Card/Card";

const ShoppingCardTemplate = () => {  
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.Items);

  useEffect(() => {
    dispatch(ShoppingItems());
  }, [dispatch]);

  return (
    <Container>
      {Items.apiStatus === "succeeded" && 
      <>
     
        <Card Item={Items}/>
        <OfferSection Item={Items} />
        </>
       
        }
         
    
    </Container>
  );
};

export default ShoppingCardTemplate;

