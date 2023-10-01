/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useContext, useState } from "react";

import { formatPrice } from "../../../utils/maths";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Card from "../../../components/reusable-ui/Card";
import OrderContext from "../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { products, resetMenu, isModeAdmin, handleDeleteProduct } =
    useContext(OrderContext);

  return (
    <MenuStyled className="menu">
      {products.length === 0 && (
        <div className="empty">
          <span> Aucun produit</span>
          <button onClick={resetMenu}> Générer de nouveaux produits </button>
        </div>
      )}
      {products.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          leftDescription={formatPrice(price)}
          isModeAdmin={isModeAdmin}
          handleRemoveProduct={() => handleDeleteProduct(id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;
