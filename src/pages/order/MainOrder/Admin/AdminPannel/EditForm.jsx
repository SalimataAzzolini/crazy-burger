import styled from "styled-components";
// import HintMessage from "./HintMessage";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../../components/reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./InputTextConfig";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEditProduct } =
    useContext(OrderContext);

  // comportements (gestionnaires d'événement:  "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated); // update du formulaire
    handleEditProduct(productBeingUpdated, event); // State handler Update du menu
  };

  const inputTexts = getInputTextsConfig(productSelected);

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  );
}
const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  height: 100%;
  width: 70%;

  .input-fields {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    /* .submit-button {
      height: 0%;
    } */
  }
`;
