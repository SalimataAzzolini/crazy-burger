import styled from "styled-components";

import { theme } from "../../../../theme";
import Header from "../../../../components/reusable-ui/Header";
import { calculateSumToPay } from "./Helper";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { formatPrice } from "../../../../utils/maths";
import CasinoEffect from "../../../../components/reusable-ui/casinoEffect";

export default function Total() {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
        <CasinoEffect count={formatPrice(sumToPay)} className="amount" />
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
