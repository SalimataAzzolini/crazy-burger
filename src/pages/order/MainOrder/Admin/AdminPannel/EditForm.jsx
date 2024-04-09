import React, { useState } from "react";

import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import { useSuccessMessage } from "../../../../../hooks/useSuccessMessage";
import SavingMessage from "./SavingMessage";

const EditForm = React.forwardRef(function EditForm() {
  //ici on utilise le forwardRef pour pouvoir utiliser la ref dans le composant parent
  const {
    username,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setvalueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  // comportements (gestionnaires d'événement:  "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated); // update du formulaire
    handleEditProduct(productBeingUpdated, username); // State handler Update du menu
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setvalueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      console.log("ça a changé !!");
      displaySuccessMessage();
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
});

export default EditForm;
