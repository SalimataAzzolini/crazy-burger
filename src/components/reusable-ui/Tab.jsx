import styled from 'styled-components';
import { theme } from '../../theme';
import PropTypes from 'prop-types';


Tab.propTypes = {
    Icon : PropTypes.element,
    onClickTab : PropTypes.func,
    className : PropTypes.string,
}


export default function Tab({Icon, onClickTab, className}) {


  return (
    <TabStyled onClick={onClickTab} className={className}>
      <div className="icon">
          {Icon}
      </div>
      
    </TabStyled>
  )
}

const TabStyled = styled.button`

    height: 43px;
    padding: 0 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left : 5%;
    top : 1px;

    cursor: pointer;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greyDark};

    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};


    //border
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
   

    //border-radius
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &:hover{
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon{
      display: flex;
    }


`;