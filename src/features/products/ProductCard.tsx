import { Link } from "react-router-dom";
import type { Product } from "./data";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.slug}`} className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-body">
        <h3>{product.title}</h3>
        <p>{product.shortDesc}</p>
        <button className="view-product">View Product →</button>
      </div>
    </Link>
  );
};

export default ProductCard;


