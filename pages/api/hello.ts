import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export const getAllProduct = async () => {
  try {
    const fetchProd = await instance.get(`/`);
    return fetchProd.data;
  } catch (err) {
    throw err;
  }
};

export const fewProduct = async (id: number) => {
  try {
    const fetchProd = await instance.get(`?limit=${id}`);
    return fetchProd.data;
  } catch (err) {
    throw err;
  }
};
