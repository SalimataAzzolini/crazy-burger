import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAddProduct } = useContext(OrderContext);

  const newProcuct = {
    id: new Date().getTime(),
    title: "New Product",
    imageSource: "https://picsum.photos/200",
    price: 2.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProcuct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview"> img prev</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom du produit" />{" "}
        <input type="text" placeholder="Image URL" />{" "}
        <input type="text" placeholder="Price" />{" "}
      </div>
      <button className="submit-button"> btn </button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 4px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    background: green;
    grid-area: 4 / 2 / 5 / 3;

    width: 50%;
  }
`;
