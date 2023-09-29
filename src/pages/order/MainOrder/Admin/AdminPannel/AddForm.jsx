import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview"> img prev</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom du produit" />{" "}
        <input type="text" placeholder="Image URL" />{" "}
        <input type="text" placeholder="Price" />{" "}
      </div>
      <div className="submit-button"> btn </div>
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
  }
`;
