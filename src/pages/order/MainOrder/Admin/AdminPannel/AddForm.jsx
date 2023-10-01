import { useContext, useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

import OrderContext from "../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAddProduct } = useContext(OrderContext);

  const [newProcuct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProcuct, [name]: value });
  };

  const displaySucessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProcuct,
      id: crypto.randomUUID(),
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySucessMessage();
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProcuct.imageSource ? (
          <img src={newProcuct.imageSource} alt={newProcuct.title} />
        ) : (
          <div className=""> Aucune image </div>
        )}
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Nom du produit"
          name="title"
          value={newProcuct.title}
          onChange={handleNewProductChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageSource"
          value={newProcuct.imageSource}
          onChange={handleNewProductChange}
        />{" "}
        <input
          type="number"
          placeholder="Prix"
          name="price"
          value={newProcuct.price}
          onChange={handleNewProductChange}
        />{" "}
      </div>
      <div className="submit">
        <button className="submit-button">Ajouter </button>
        {isSubmited && (
          <div className="submit-message">
            <FiCheck />
            <span> Ajouté avec succès</span>
          </div>
        )}
      </div>
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
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit {
    background: green;
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    align-items: center;

    .submit-button {
      width: 50%;
    }

    .submit-message {
      border: solid 1px red;
    }
  }
`;
