import PropType from "prop-types";
import styled from "styled-components";

import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/products";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../../Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../theme/animation";

BasketProducts.propTypes = {
  basket: PropType.array,
  isModeAdmin: PropType.bool,
  handleDeleteBasketProduct: PropType.func,
};

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu); //ici on va chercher le produit qui a l'id du basketProduct dans le menu
        return (
          <CSSTransition
            key={basketProduct.id}
            appear={true}
            timeout={{ enter: 500, exit: 500 }}
            classNames={"animation-basket"}
          >
            <div className="card-container">
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
                className="card"
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

{
  /* <BasketProductsStyled>
{basket.map((basketProduct) => (
  <div className="basket-card" key={basketProduct.id}>
    <BasketCard
      {...basketProduct}
      imageSource={
        basketProduct.imageSource
          ? basketProduct.imageSource
          : IMAGE_COMING_SOON
      }
      onDelete={() => handleOnDelete(basketProduct.id)}
      isClickable={isModeAdmin}
    />
  </div>
))}
</BasketProductsStyled> */
}
const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    margin: 10px 16px;
    height: 90px;
    box-sizing: border-box;
  }
  ${basketAnimation}
`;

// :last-child {
//     margin-bottom: 20px;
//   }
// :first-child {
//   margin-top: 20px;
//   /* border: 1px solid red; */
// }
