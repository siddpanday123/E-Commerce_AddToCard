import axios from "axios";

export const ShoppingItemsData = async () =>{
    const response = await axios.get("https://dummyjson.com/products?skip=0&limit=100")
    const data = response.data
    return data;
}

