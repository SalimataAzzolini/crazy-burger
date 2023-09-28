import styled from "styled-components";
import Tab from "../../../../components/reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  } = useContext(OrderContext);

  const selectTab = (tab) => {
    setIsCollapsed(false);
    if (tab === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    } else if (tab === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  const tabsConfig = [
    {
      index: "chevronUpDown",
      label: "",
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClickTab: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      index: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClickTab: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      index: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClickTab: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];

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
