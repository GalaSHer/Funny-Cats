import React from "react"
import styles from "./product.module.css"
import { useDispatch } from "react-redux";
import { deleteCard, getProductById, toggleLike } from "../../store/slices/productsSlice";
import { useSelector } from "../../store/store";

type TProductProps = {
  productId: string,
}

export const Product: React.FC<TProductProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => getProductById(productId)(state));

  if(!product){
    return <p>Product not found.</p>;
  }

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleLike(productId));
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch( deleteCard(productId));
  }

  return (
    <li className={styles.card}>
      <img src={product.url} alt="Cat" className={styles.cardImg}>
      </img>
      <button className={styles.cardDeleteBtn} onClick={handleDelete} aria-label="Delete product">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.45781 18.1422C2.51876 18.8126 3.06729 19.3002 3.73772 19.3002H14.2614C14.9318 19.3002 15.4804 18.7923 15.5413 18.1422L16.7197 5.79004H1.27948L2.45781 18.1422Z" fill="white"/>
        <path d="M16.7201 1.93002H11.5801V1.27991C11.5801 0.568849 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.568849 6.44018 1.27991V1.93002H1.27991C0.568849 1.93002 0 2.49887 0 3.20993C0 3.92099 0.568849 4.48984 1.27991 4.48984H16.7201C17.4312 4.48984 18 3.92099 18 3.20993C18 2.49887 17.4312 1.93002 16.7201 1.93002Z" fill="white"/>
        </svg>
      </button>
      <div className={styles.cardDescriptionWrapper}>
        <p className={styles.cardDescription}>{product.tags.join(', ')}</p>
        <button className={styles.cardLikeBtn} onClick={handleLike}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={product.isLiked ? 'red' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M12 21c-1.8-1.45-5.4-4.55-7.6-7.3C2.2 10.7 1 8.4 1 6.5 1 3.42 3.42 1 6.5 1 8.1 1 9.6 1.83 10.5 3.09 11.4 1.83 12.9 1 14.5 1 17.58 1 20 3.42 20 6.5c0 1.9-1.2 4.2-3.4 6.2-2.2 2.75-5.8 5.85-7.6 7.3z" />
            </svg>
        </button>
      </div>
    </li>
  )
}