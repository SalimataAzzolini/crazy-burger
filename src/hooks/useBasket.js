import { useState } from "react";

//import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  findIndexById,
  findObjectById,
  removeObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  //Créer un nouveau produit dans le basket
  // const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
  //   const newBasketProduct = {
  //     ...productToAdd,
  //     quantity: 1,
  //   };
  //   const basketUpdated = [newBasketProduct, ...basketCopy];
  //   setBasket(basketUpdated);
  // };

  // //Incrémenter un produit déjà dans le basket
  // const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
  //   const indexOfBasketProductToIncrement = findIndexById(
  //     productToAdd.id,
  //     basketCopy
  //   );

  //   basketCopy[indexOfBasketProductToIncrement].quantity += 1;
  //   setBasket(basketCopy);
  // };

  //Ajouter un produit au basket v1
  // const handleAddToBasket = (productToAdd) => {
  //   const basketCopy = deepClone(basket);

  //   const isProductAlreadyInBasket = basketCopy.some(
  //     //some retourne true ou false si le produit est déjà dans le basket
  //     (product) => product.id === productToAdd.id
  //   );

  //   // 1er cas : le produit n'est pas déjà dans le basket
  //   if (!isProductAlreadyInBasket) {
  //     createNewProductInBasket(productToAdd, basketCopy, setBasket);
  //     return;
  //   }
  //   // 2ème cas : le produit est déjà dans le basket
  //   incrementProductAlreadyInBasket(productToAdd, basketCopy);
  // };

  // //Supprimer un produit du basket
  // const handleDeleteBasketProduct = (idBasketProduct) => {
  //   const basketCopy = deepClone(basket);

  //   //const basketUpdated = basketCopy.removeObjectById((product) => product.id !== idBasketProduct)
  //   const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

  //   setBasket(basketUpdated);
  // };

  const createNewBasketProduct = (
    idProductToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const incrementProductAlreadyInBasket = (
    idProductToAdd,
    basketCopy,
    username
  ) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  //Ajouter un produit au basket v2
  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy);

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
      return;
    }

    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
  };

  //Supprimer un produit du basket
  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
