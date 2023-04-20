import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const handleGetProducts = async () => {
  const res = await axios.get(url);

  const { data, status } = res;

  return {
    products: data,
    statusCode: status,
  };
};
