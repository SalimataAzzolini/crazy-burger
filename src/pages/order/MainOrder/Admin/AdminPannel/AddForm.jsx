import { useContext, useState } from "react";

import Button from "../../../../../components/reusable-ui/Button";
import OrderContext from "../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../enums/products";
import SubmitMessage from "./submitMessage";
import Form from "./Form";

export default function AddForm() {
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySucessMessage();
  };

  const displaySucessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  );
}
