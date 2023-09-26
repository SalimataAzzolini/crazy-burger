import styled from "styled-components";
import AdminPannel from "./AdminPannel";
import AdminTabs from "./AdminTabs";
import { useState } from "react";



export default function Admin() {

  const [isCollapsed, setIsCollapsed] = useState (false);

  return (
    <AdminStyled >
        <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {!isCollapsed &&<AdminPannel />}
    </AdminStyled>
  )
}


const AdminStyled = styled.div`
    
    
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
  
`;