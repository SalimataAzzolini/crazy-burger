/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState } from "react";

import { formatPrice } from "../../../utils/maths";
import {  fakeMenu2 } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Card from "../../../components/reusable-ui/Card";



export default function Menu() {

    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled className="menu"> 
            {products.map(({id, title, imageSource, price}) => (
                <Card  
                    key={id}
                    title={title}
                    imageSource={imageSource}
                    leftDescription={formatPrice(price)}
                />
                // <Card  {...product} />
            ))}
            
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
  border: 1px solid blue;
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;

`;