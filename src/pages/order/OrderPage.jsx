import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import MainOrder from "./MainOrder/MainOrder";
import { theme } from "../../theme";
import { useState } from "react";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "./MainOrder/Admin/AdminPannel/AddForm";

export default function OrderPage() {
  //Déclaration des states du context OrderContext
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleAddProduct = (newProduct) => {
    const menuCopy = [...products];
    const menuUpdated = [newProduct, ...menuCopy];
    setProducts(menuUpdated);
  };

  const handleDeleteProduct = (productId) => {
    const menuCopy = [...products];
    const menuUpdated = menuCopy.filter((product) => product.id !== productId);
    setProducts(menuUpdated);
  };

  const resetMenu = () => {
    setProducts(fakeMenu.SMALL);
  };

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
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    handleAddProduct,
    handleDeleteProduct,
    resetMenu, //reset du menu à la version initiale
    newProduct,
    setNewProduct,
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
