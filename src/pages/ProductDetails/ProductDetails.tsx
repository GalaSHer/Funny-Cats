import { useParams } from "react-router-dom"
import { useSelector } from "../../store/store";
import { getProductById } from "../../store/slices/productsSlice";
import styles from "./productDetails.module.css";
import { Header } from "../../components/header/Header";

export const ProductDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const product = useSelector((state) => (id ? getProductById(id)(state) : null));

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
          <img src={product.url} alt="Cat" className={styles.image}></img>
          <p className={styles.description}>Tags: {product.tags.join(', ')}</p>
          <p className={styles.description}>Size: {product.size} kb</p>
      </div>
    </>
  )
}