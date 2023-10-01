import { useContext, useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import TextInput from "../../../../../components/reusable-ui/TextInput";
import PrimaryButton from "../../../../../components/reusable-ui/PrimaryButton";

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
          <div className="empty-image"> Aucune image </div>
        )}
      </div>
      <div className="input-fields">
        <TextInput
          placeholder="Nom du produit"
          name="title"
          value={newProcuct.title}
          onChange={handleNewProductChange}
          Icon={<FaHamburger />}
          version={"minimalist"}
        />
        <TextInput
          placeholder="Image URL"
          name="imageSource"
          value={newProcuct.imageSource}
          onChange={handleNewProductChange}
          Icon={<BsFillCameraFill />}
          version={"minimalist"}
        />
        <TextInput
          placeholder="Prix"
          name="price"
          value={newProcuct.price}
          onChange={handleNewProductChange}
          Icon={<MdOutlineEuro />}
          version={"minimalist"}
        />
      </div>
      <div className="submit">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          Icon={<FiCheck />}
          version={"success"}
        />
        {/* <button className="submit-button">Ajouter </button> */}
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
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  height: 100%;
  width: 70%;

  .image-preview {
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

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

  .input-fields {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
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
