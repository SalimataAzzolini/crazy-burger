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

  products: [],
  setProducts: () => {},

  resetMenu: () => {},

  handleAddProduct: () => {},
  handleEditProduct: () => {},
  handleDeleteProduct: () => {},
});
