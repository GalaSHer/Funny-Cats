import React from "react";
import styles from "./header.module.css"
import { HomePageBtn } from "../homePageBtn/HomePageBtn";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products")
  }

  return (
    <header className={styles.header}>
      <HomePageBtn handleClick={handleClick}/>
      <h1 className={styles.title}>Cat is all we need</h1>
    </header>
  )
}