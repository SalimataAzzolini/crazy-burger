import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function getTabsConfig(
  isCollapsed,
  setIsCollapsed,
  isAddSelected,
  isEditSelected,
  selectTab
) {
  return [
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
}
