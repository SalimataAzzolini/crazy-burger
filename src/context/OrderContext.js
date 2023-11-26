import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsmodeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddSelected: false,
  setIsAddSelected: () => {},

  isEditSelected: false,
  setIsEditSelected: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  setMenu: () => {},

  resetMenu: () => {},

  handleAddProduct: () => {},
  handleEditProduct: () => {},
  handleDeleteProduct: () => {},

  newProduct: [],
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: {},

  basket: [],
  handleDeleteBasketProduct: () => {},
});
