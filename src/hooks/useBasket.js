import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, filter, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

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
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );

    console.log(
      "indexOfBasketProductToIncrement",
      indexOfBasketProductToIncrement
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

  //*****Supprimer un produit du basket
  const handleDeleteBasketProduct = (idBasketProduct) => {
    //1. copy du state (optional because filter returns a new array )
    const basketCopy = deepClone(basket);

    //2. manip de la copie state
    //const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    const basketUpdated = filter(idBasketProduct, basketCopy);

    //3. update du state
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
