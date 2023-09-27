import styled from "styled-components";
import Tab from "../../../../components/reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import {MdModeEditOutline} from "react-icons/md";
import PropTypes from 'prop-types';
import { theme } from "../../../../theme";
import { useState } from "react";


AdminTabs.propTypes = {
    isCollapsed : PropTypes.bool,
    setIsCollapsed : PropTypes.func,
}


export default function AdminTabs({isCollapsed, setIsCollapsed}) {

  const [isAddSelected , setIsAddSelected] = useState (true);
  const [isEditSelected , setIsEditSelected] = useState (false);
  

  const selectAddTab = () => {
    setIsCollapsed(false)
    setIsAddSelected(true);
    setIsEditSelected(false);
  }

  const selectEditTab = () => {
    setIsCollapsed(false)
    setIsEditSelected(true);
    setIsAddSelected(false);
  }

  return (
    <AdminTabsStyled >
        <Tab
            label=""
            Icon={ isCollapsed ? <FiChevronUp/> : <FiChevronDown/> }
            onClickTab={() => setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""}
        />

        <Tab
            label="Ajouter un produit"
            Icon={ <AiOutlinePlus/> }
            onClickTab={selectAddTab}
            className={isAddSelected ? "is-active" : ""}
        />
        <Tab
            label="Modifier un produit"
            Icon={ <MdModeEditOutline/> }
            onClickTab={selectEditTab}
            className={isEditSelected ? "is-active" : ""}
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    /* border : solid 2px green; */
    display: flex;
    padding: 0 20px;

    .is-active{
      background: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-color: ${theme.colors.white};
    }

    button{
      margin-left: 1px;
    }
`;
