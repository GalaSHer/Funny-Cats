import React from "react";
import { NewProductForm } from "../../components/newProductForm/NewProductForm";
import { Header } from "../../components/header/Header";

export const NewProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <h2>Add your funny cat</h2>
      <NewProductForm />
    </>
  )
}