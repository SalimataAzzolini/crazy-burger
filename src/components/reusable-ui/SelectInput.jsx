import PropTypes from "prop-types";
import styled from "styled-components";

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default function SelectInput({ value, options, name, className, id }) {
  return (
    <SelectInputStyled value={value} name={name} className={className} id={id}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
