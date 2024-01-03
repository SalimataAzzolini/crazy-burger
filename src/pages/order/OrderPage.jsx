import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import MainOrder from "./MainOrder/MainOrder";
import { theme } from "../../theme";
import { useRef, useState } from "react";
import OrderContext from "../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../enums/products";
import { useMenu } from "../../hooks/useMenu";
import { useBasket } from "../../hooks/useBasket";

export default function OrderPage() {
  //Déclaration des states du context OrderContext
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  // const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  //Fonctions custom hook useMenu
  const {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  } = useMenu();

  //Fonction custom hook useBasket
  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket();

  //Déclaration du context
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };

  const location = useLocation();
  const { state } = location;
  if (!state || !state.username) {
    return <div>Erreur: Nom nom transmis</div>;
  }
  const { username } = state;

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <MainOrder />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
