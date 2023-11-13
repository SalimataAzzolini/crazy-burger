import React from "react";

import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

const EditForm = React.forwardRef(function EditForm() {
  //ici on utilise le forwardRef pour pouvoir utiliser la ref dans le composant parent
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditRef,
  } = useContext(OrderContext);

  // comportements (gestionnaires d'événement:  "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated); // update du formulaire
    handleEditProduct(productBeingUpdated, event); // State handler Update du menu
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
});

export default EditForm;
