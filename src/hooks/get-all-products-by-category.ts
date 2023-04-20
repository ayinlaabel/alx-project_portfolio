import axios from "axios";

const url = "https://fakestoreapi.com/products/category/";

export const handleGetProductsByCategory = async (category: string) => {
  const res = await axios.get(url + category);

  const { data, status } = res;

  return {
    products: data,
    statusCode: status,
  };
};
