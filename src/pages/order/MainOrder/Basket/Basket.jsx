import styled from "styled-components";
import Total from "./Total";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../theme";
import { isEmpty } from "../../../../utils/array";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  // const isBasketEmpty = isEmpty(basket);

  // const sumToPay = basket.reduce((total, basketProduct) => {
  //   if (isNaN(basketProduct.price)) return total;

  //   total += basketProduct.price * basketProduct.quantity;
  //   return total;
  // }, 0); // 0 is the initial value of total

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
