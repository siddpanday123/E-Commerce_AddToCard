import  Container from "./MainPageStyle"
import Header from "../Templates/Header/HeaderTemplate"
import ShoppingCardTemplate from "../Templates/ShoppingCard/ShoppingCardTemplate"

const MainPage = () => {
  return (
    <Container>
        <Header />
       <ShoppingCardTemplate />
    </Container>
  )
}

export default MainPage