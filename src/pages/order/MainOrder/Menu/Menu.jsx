import styled from "styled-components";
import { useContext } from "react";

import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import Card from "../../../../components/reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../enums/products";
import { isEmpty } from "../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../theme/animation";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    username,
    menu,
    resetMenu,
    isModeAdmin,
    handleDeleteProduct,
    setProductSelected,
    productSelected,
    setIsCollapsed,
    setIsAddSelected,
    setIsEditSelected,
    titleEditRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);

  //event handler card clické (pour l'edit)
  const handleCardClick = async (idProductClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setIsAddSelected(false);
    await setIsEditSelected(true);

    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked // on récupère le produit cliqué
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  //event handler card delete
  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDeleteProduct(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT); //gestion du produit vide pour l'affichage du hint message
    titleEditRef.current.focus();
  };

  // //event handler add button
  // const handleAddButton = (event, idProductToAdd) => {
  //   event.stopPropagation();
  //   //const productToAdd = menu.findObjectById((menuProduct) => menuProduct.id === idProductToAdd)
  //   const productToAdd = findObjectById(idProductToAdd, menu);
  //   console.log("productToAdd", productToAdd);
  //   handleAddToBasket(productToAdd);
  // };

  //event handler add button (avec le hook useBasket)
  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  // AFFICHAGE

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(
        (
          { id, title, imageSource, price } //on map sur le menu avec les props de chaque produit
        ) => (
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
            <Card
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              leftDescription={formatPrice(price)}
              isModeAdmin={isModeAdmin}
              onClick={() => handleCardClick(id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsClicked(id, productSelected.id)}
              onDeleteCard={(event) => handleCardDelete(event, id)}
              onAdd={(event) => handleAddButton(event, id)} //au moment du click sur le bouton add du menu vers le panier, on récupère l'id du produit cliqué
            />
          </CSSTransition>
        )
      )}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;

  ${menuAnimation}
`;
