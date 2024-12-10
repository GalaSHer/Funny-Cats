import { TProduct } from "../store/slices/types";

type ApiResponse = { payload: TProduct[] } | { error: string } ;

const baseUrl = 'https://cataas.com';


export default class Api {
  static async getProducts(tag?: string): Promise<ApiResponse> {
    const apiUrl = `${baseUrl}/api/cats?limit=365`;
    const response = await fetch(apiUrl);

    if(!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }

    const data: TProduct[] = await response.json()

    const dataWithUrls = data.map((item) => ({
      ...item,
      url: `${baseUrl}/cat/${item._id}`,
      isLiked: false,
    }))

    return { payload: dataWithUrls }
  }
}