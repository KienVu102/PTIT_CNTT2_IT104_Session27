import React from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "./products";

const ProductList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value ? { search: e.target.value } : {});
  };

  return (
    <div>
      <input value={search} onChange={handleChange} placeholder="Tìm kiếm" />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}đ
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
