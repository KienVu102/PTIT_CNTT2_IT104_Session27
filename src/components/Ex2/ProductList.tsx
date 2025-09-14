import { Link } from "react-router-dom";
import { products } from "./product";

function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              width: "200px",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>{product.name}</h3>
            <p>Giá: {product.price}</p>
            <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
