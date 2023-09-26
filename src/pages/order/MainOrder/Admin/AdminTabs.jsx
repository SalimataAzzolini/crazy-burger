import styled from "styled-components";
import Tab from "../../../../components/reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {AiOutlinePlus} from "react-icons/ai";
import PropTypes from 'prop-types';
import { theme } from "../../../../theme";


AdminTabs.propTypes = {
    isCollapsed : PropTypes.bool,
    setIsCollapsed : PropTypes.func,
}


export default function AdminTabs({isCollapsed, setIsCollapsed}) {

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
            onClickTab={() => setIsCollapsed(!isCollapsed)}
            className={isCollapsed ? "is-active" : ""}
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
