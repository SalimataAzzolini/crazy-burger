import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  //Gestionnaire de state Ajout de produit
  const handleAddProduct = (newProduct, username) => {
    // 1. copie du state (deep clone)
    const menuCopy = [...menu];
    // 2. manip de la copie du state
    const menuUpdated = [newProduct, ...menuCopy];
    // 3. update du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  //Gestionnaire de state Suppression de produit
  const handleDeleteProduct = (idOfProductToDeleteproduct, username) => {
    const menuCopy = [...menu];
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDeleteproduct
    );
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEditProduct = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const menuCopy = deepClone(menu);
    // 2. manip de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited; //assignation d'une nouvelle valeur à l'index du produit à éditer par le produit édité
    // 3. update du state
    setMenu(menuCopy);
  };

  //Reset du menu à la version initiale
  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetMenu,
  };
};
