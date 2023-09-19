import styled from "styled-components";
import { useState } from "react";
import {  fakeMenu2 } from "../../../fakeData/fakeMenu";


export default function Menu() {

    const [products, setProducts] = useState(fakeMenu2);


    return (
        <MenuStyled className="menu"> 
            {products.map((product) => (
                <div className="product" key={product.id}>
                    {product.title}
                </div>
            ))}
            
        </MenuStyled>
    )
}


const MenuStyled = styled.div`
  
    background: #632657;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;

    .product{
        background: red ;
        width: 240px;
        height: 330px;
    }

`;