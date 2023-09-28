import styled from "styled-components";
import Tab from "../../../../components/reusable-ui/Tab";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import getTabsConfig from "./tabsConfigs";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  // const selectTab = (tab) => {
  //   setIsCollapsed(false);
  //   if (tab === "add") {
  //     setIsAddSelected(true);
  //     setIsEditSelected(false);
  //   } else if (tab === "edit") {
  //     setIsEditSelected(true);
  //     setIsAddSelected(false);
  //   }
  // };

  const selectTab = (tab) => {
    setIsCollapsed(false);

    const tabStates = {
      add: [setIsAddSelected, setIsEditSelected],
      edit: [setIsEditSelected, setIsAddSelected],
    };

    if (tabStates[tab]) {
      tabStates[tab][0](true);
      tabStates[tab][1](false);
    }
  };

  const tabsConfig = getTabsConfig(
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    isEditSelected,
    selectTab
  );

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab, index) => (
        <Tab key={index} {...tab} />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  /* border : solid 2px green; */
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`;
