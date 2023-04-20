import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { handleGetProducts } from "../hooks/get-all-product";
import { product } from "../types/product";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState<product[]>();

  useEffect(() => {
    const getProduct = async () => {
      const { products, statusCode } = await handleGetProducts();

      if (statusCode == 200) {
        setProducts(products);
      }
    };

    getProduct();
  }, [products]);
  return (
    <div className="mb-[10rem] mt-[10px]">
      <div>
        <Hero />
      </div>
      <div className="px-[10rem]">
        <div className="w-full h-[1px] bg-[#f9f9f9] mt-4 mb-4"></div>
      </div>
      <div className="flex px-1 flex-wrap justify-center">
        {products &&
          products.map((product) => (
            <ProductCard
              title={product.title}
              imgurl={product.image}
              price={product.price}
              id={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
