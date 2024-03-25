// import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import MainOrder from "./MainOrder/MainOrder";
import { theme } from "../../theme";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../enums/products";
import { useMenu } from "../../hooks/useMenu";
import { useBasket } from "../../hooks/useBasket";
import { findObjectById } from "../../utils/array";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";

export default function OrderPage() {
  //Déclaration des states du context OrderContext
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);

  //const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT); //ici on déclare le produit vide
  const titleEditRef = useRef();

  const { username } = useParams();

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
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();

  //event handler basket card clické (pour l'edit)
  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu); // on récupère le produit cliqué
    await setIsCollapsed(false);
    await setIsAddSelected(false);
    await setIsEditSelected(true);
    //await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn); //on set le produit cliqué dans le state productSelected
    titleEditRef.current.focus();
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, [username, setMenu, setBasket]);

  //Déclaration du context
  const orderContextValue = {
    username,
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
    handleProductSelected,
  };

  // const location = useLocation();
  // const { state } = location;
  // if (!state || !state.username) {
  //   return <div>Erreur: Nom nom transmis</div>;
  // }
  // const { username } = state;

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
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
