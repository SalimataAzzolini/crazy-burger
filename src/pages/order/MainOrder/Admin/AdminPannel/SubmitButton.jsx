import PropType from "prop-types";
import Button from "../../../../../components/reusable-ui/Button";
import SubmitMessage from "./submitMessage";

SubmitButton.propTypes = {
  isSubmitted: PropType.bool.isRequired,
};

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
