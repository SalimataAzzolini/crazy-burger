import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../components/reusable-ui/TextInput";
import { getInputTextsConfig } from "./InputTextConfig";

const Form = React.forwardRef(function Form(
  { product, onSubmit, onChange, onFocus, onBlur, children },
  ref
) {
  //input texts config
  const inputTexts = getInputTextsConfig(product);

  const isAvalaibleOptions = [
    { value: "true", label: "En stock" },
    { value: "false", label: "En rupture" },
  ];

  const isPublicisedOptions = [
    { value: "true", label: "Sans pub" },
    { value: "false", label: "Avec pub" },
  ];

  // affichage
  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
            version="minimalist"
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
        <select name="isAvailable" className="is-available" id="3">
          {isAvalaibleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select name="isPublicised" className="is-publicised" id="4">
          {isPublicisedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-footer">{children}</div>
    </FormStyled>
  );
});

export default Form;

Form.propTypes = {
  product: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 10px;

    .title {
      grid-area: 1 / 1 / 2 / 4;
    }
    .image-source {
      grid-area: 2 / 1 / 3 / 4;
    }
    .price {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
