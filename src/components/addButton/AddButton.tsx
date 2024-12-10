import React from "react";
import styles from "./addButton.module.css";

type TAddButtonProps = {
  color: string;
  width: number;
  height: number;
  onClick?: () => void;
}

export const AddButton: React.FC<TAddButtonProps> = ({ color, width, height, onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="Add Product"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  )
}