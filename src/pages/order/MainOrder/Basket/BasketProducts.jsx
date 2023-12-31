import PropType from "prop-types";
import styled from "styled-components";

import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../enums/products";

BasketProducts.propTypes = {
  basket: PropType.array,
  isModeAdmin: PropType.bool,
  handleDeleteBasketProduct: PropType.func,
};

export default function BasketProducts({
  basket,
  isModeAdmin,
  handleDeleteBasketProduct,
}) {
  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource
                ? basketProduct.imageSource
                : IMAGE_COMING_SOON
            }
            onDelete={() => handleOnDelete(basketProduct.id)}
            isModeAdmin={isModeAdmin}
          />
        </div>
      ))}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 90px;
    box-sizing: border-box;

    /* :last-child {
      margin-bottom: 20px;
    } */
  }
`;

// :first-child {
//   margin-top: 20px;
//   /* border: 1px solid red; */
// }
