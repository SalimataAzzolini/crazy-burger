import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export default function AdminPannel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  return (
    <AdminPannelStyled>
      {isAddSelected && <AddForm />}
      {isEditSelected && <EditForm />}
    </AdminPannelStyled>
  );
}

const AdminPannelStyled = styled.div`
  border: 2px solid green;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
