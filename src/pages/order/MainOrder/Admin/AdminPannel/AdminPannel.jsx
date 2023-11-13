import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { EMPTY_PRODUCT } from "../../../../../enums/products";
import HintMessage from "./HintMessage";

export default function AdminPannel() {
  const { isAddSelected, isEditSelected, productSelected } =
    useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;

  return (
    <AdminPannelStyled>
      {isAddSelected && <AddForm />}
      {isEditSelected && (
        <>{hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />}</>
      )}
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box; // Pour ne pas faire grossir le panel
  padding: 30px 5%; // ajouter au panel et non dans les form car sinon va faloir le mettre dans les deux form : AddForm et EditForm
  // les 5% c'est pour les aligner avec le tab.
`;
