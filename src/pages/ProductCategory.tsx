import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../types/product";
import { handleGetProductsByCategory } from "../hooks/get-all-products-by-category";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const [products, setProducts] = useState<product[]>();

  const { category } = useParams<string>();

  useEffect(() => {
    const getProductByCategory = async () => {
      const { products, statusCode } = await handleGetProductsByCategory(
        category || ""
      );

      if (statusCode === 200) {
        setProducts(products);
      }
    };

    getProductByCategory();
  }, [products]);
  return (
    <div>
      <div></div>
      <div className="flex px-1 flex-wrap justify-center min-h-[100vh]">
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

export default ProductCategory;
