import styled from "styled-components";
import Total from "./Total";
import EmptyBasket from "./EmptyBasket";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Basket() {
  const { basket, isModeAdmin, handleDeleteBasketProduct } =
    useContext(OrderContext);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <EmptyBasket
        basket={basket}
        isModeAdmin={isModeAdmin}
        handleDeleteBasketProduct={handleDeleteBasketProduct}
      />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: #efa1a1;
`;
