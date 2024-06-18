import PropTypes from "prop-types";
import styled from "styled-components";

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
};

export default function SelectInput({ options }) {
  return (
    <SelectInputStyled name="isAvailable" className="is-available" id="3">
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
