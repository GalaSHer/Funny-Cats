import React, { ReactNode } from "react";
import styles from "./productsList.module.css"

interface ProductsListProps {
  children: ReactNode;
}

export const ProductsList: React.FC<ProductsListProps> = ({ children }) => {
  return (
    <ul className={styles.list}>{children}</ul>
  )
}