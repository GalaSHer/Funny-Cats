import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse, TProduct } from "./types";
import Api from "../../API/api";

export const fetchProducts = createAsyncThunk<TProduct[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
      try {
        const response: ApiResponse = await Api.getProducts();

        if ('error' in response) {
          return thunkAPI.rejectWithValue(response.error);
        }

        return response.payload
      }
      catch (error) {
        console.error('Ошибка при запросе товаров:', error);
        throw error;
      }
  }
);