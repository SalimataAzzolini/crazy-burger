import styled from "styled-components";
import Total from "./Total";
import BasketBody from "./BasketBody";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: #efa1a1;
`;
