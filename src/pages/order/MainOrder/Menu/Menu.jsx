/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useContext, useState } from "react";

import { formatPrice } from "../../../../utils/maths";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "../../../../components/reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    products,
    resetMenu,
    isModeAdmin,
    handleDeleteProduct,
    setProductSelected,
  } = useContext(OrderContext);

  // affichage gestion du menu vide
  if (products.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  const handleCardClick = (idProductClicked) => {
    const productSelected = products.find(
      (product) => product.id === idProductClicked
    );
    setProductSelected(productSelected);
  };

  return (
    <MenuStyled className="menu">
      {products.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          leftDescription={formatPrice(price)}
          isModeAdmin={isModeAdmin}
          handleRemoveProduct={() => handleDeleteProduct(id)}
          onClick={() => handleCardClick(id)}
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
