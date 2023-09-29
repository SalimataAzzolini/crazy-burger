import styled from "styled-components";
import AdminPannel from "./AdminPannel/AdminPannel";
import AdminTabs from "./AdminTabs";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPannel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
