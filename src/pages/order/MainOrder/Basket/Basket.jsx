import styled from "styled-components";
import Total from "./Total";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket, isModeAdmin, handleDeleteBasketProduct } =
    useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

  // const sumToPay = basket.reduce((total, basketProduct) => {
  //   total += basketProduct.price * basketProduct.quantity
  //   return total
  // }, 0)

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basket={basket}
          isModeAdmin={isModeAdmin}
          handleDeleteBasketProduct={handleDeleteBasketProduct}
        />
      )}

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: #efa1a1;
`;
