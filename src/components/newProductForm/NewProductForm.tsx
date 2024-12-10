import React, { useState } from "react";
import styles from "./newProductForm.module.css";
import { useDispatch } from "../../store/store";
import { addNewProduct } from "../../store/slices/productsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";


export const NewProductForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState('');
  const [tags, setTags] = useState('');
  const [mimetype, setMimetype] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = nanoid();
    
    const newProduct = { 
      _id: id,
      mimetype: mimetype,
      size: Number(size),
      tags: [tags],
      url: url,
      isLiked: false
    };

    dispatch(addNewProduct(newProduct));

    setUrl('');
    setSize('');
    setTags('');
    setMimetype('');

    navigate("/products");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <input
          id="url"
          required
          className={styles.input} 
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label htmlFor="url">Url for your cat picture: </label>
      </div>

      <div className={styles.inputField}>
        <input
            id="size"
            required 
            className={styles.input} 
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
        />
        <label htmlFor="size">Size of your cat picture: </label>
      </div>

      <div className={styles.inputField}>
        <input 
          id="tags"
          required
          className={styles.input} 
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <label htmlFor="tags">Any tags: </label>
      </div> 

      <div className={styles.radioWrapper}>
          <p>Choose mimetype: </p>
          <input 
              id="mimetype-jpeg"
              name="mimetype"
              type="radio" 
              value="img/jpeg" 
              checked={mimetype === "img/jpeg"}
              onChange={(e) => setMimetype(e.target.value)}
              required
          />
          <label htmlFor="mimetype-jpeg">.jpeg/jpg/png</label>
          <input 
              id="mimetype-gif" 
              name="mimetype"
              type="radio" 
              value="img/gif" 
              checked={mimetype === "img/gif"}
              onChange={(e) => setMimetype(e.target.value)}
              required
          />
          <label htmlFor="mimetype-gif">.gif </label>
        </div>
      
      <button type="submit" className={styles.submitBtn}>Submit</button>
    </form>
  )
}