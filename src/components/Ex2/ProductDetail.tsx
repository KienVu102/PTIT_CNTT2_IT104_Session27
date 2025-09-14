import { useParams, Link } from "react-router-dom";
import { products } from "./product";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Sản phẩm không tồn tại.</h2>
        <Link to="/products">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Sản phẩm không tồn tại.</h2>
        <Link to="/products">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết sản phẩm</h2>
      <h3>{product.name}</h3>
      <p>Giá: {product.price}</p>
      <p>Mô tả: {product.description}</p>
      <Link to="/products">Quay lại danh sách sản phẩm</Link>
    </div>
  );
}

export default ProductDetail;
