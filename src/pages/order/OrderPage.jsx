import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import MainOrder from "./MainOrder/MainOrder";
import { theme } from "../../theme";
import { useRef, useState } from "react";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../enums/products";
import { deepClone } from "../../utils/array";

export default function OrderPage() {
  //Déclaration des states du context OrderContext
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  // const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();

  //Gestionnaire de state Ajout de produit
  const handleAddProduct = (newProduct) => {
    const menuCopy = [...products];
    const menuUpdated = [newProduct, ...menuCopy];
    setProducts(menuUpdated);
  };

  //Gestionnaire de state Suppression de produit
  const handleDeleteProduct = (productId) => {
    const menuCopy = [...products];
    const menuUpdated = menuCopy.filter((product) => product.id !== productId);
    setProducts(menuUpdated);
  };

  // const handleEdit = (productBeingEdited) => {
  //   const menuCopy = JSON.parse(JSON.stringify(menu))
  //   const indexOfProducToEdit = products.indexOf(productSelected)
  //   menuCopy[indexOfProducToEdit] = productBeingEdited
  //   setMenu(menuCopy)
  // }

  const handleEditProduct = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuCopy = deepClone(products);
    // 2. manip de la copie du state
    const indexOfProductToEdit = products.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited; //assignation d'une nouvelle valeur à l'index du produit à éditer par le produit édité
    // 3. update du state
    setProducts(menuCopy);
  };

  //Reset du menu à la version initiale
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
    products,
    setProducts,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    titleEditRef,
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
