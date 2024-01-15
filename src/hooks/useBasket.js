import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findIndexById, removeObjectById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  //Créer un nouveau produit dans le basket
  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
  };

  //Incrémenter un produit déjà dans le basket
  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
      productToAdd.id,
      basketCopy
    );

    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  //Ajouter un produit au basket
  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = basketCopy.some(
      //some retourne true ou false si le produit est déjà dans le basket
      (product) => product.id === productToAdd.id
    );

    // 1er cas : le produit n'est pas déjà dans le basket
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    // 2ème cas : le produit est déjà dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };

  //Supprimer un produit du basket
  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketCopy = deepClone(basket);

    //const basketUpdated = basketCopy.removeObjectById((product) => product.id !== idBasketProduct)
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
