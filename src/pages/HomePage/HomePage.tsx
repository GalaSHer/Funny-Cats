import { ChangeEvent, useEffect, useState } from "react";
import styles from "./homePage.module.css";
import { Product } from "../../components/product/Product";
import { ProductsList } from "../../components/productsList/ProductsList";
import { SelectProducts } from "../../components/selectProducts/SelectProducts";
import { getProductsSelector, likedProductsSelector } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { AddButton } from "../../components/addButton/AddButton";
import { fetchProducts } from "../../store/slices/asyncThunk";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const products = useSelector(getProductsSelector);
  const likedProducts = useSelector(likedProductsSelector);
  
  const [productList, setProductList] = useState(products);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductList(filter === "all" ? products : likedProducts);
  }, [products, likedProducts, filter]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleAddButton = () => {
    navigate("/create-product");
  };

 return (
  <>
    <Header />
    <div className={styles.optionsWrapper}>
        <SelectProducts value ={filter} onChange = {handleChange} options={
            [
              { value: "all", label: "All cats" },
              { value: "liked", label: "My lovely cats" },
            ]}
        />
        <AddButton width={20} height={20} color="#060606" onClick={handleAddButton} />
    </div>
    <ProductsList>
        {productList.map((product, index) => (
          <Link to={`/product/${product._id}`} className={styles.link} key={index}>
            <Product key={product._id} productId={product._id} />
          </Link>
          ))}
     </ProductsList>
  </>
 )
}