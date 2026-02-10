import { Link, useParams } from "react-router-dom";
import { products } from "./data";

const ProductSidebar = () => {
  const { slug } = useParams();

  return (
    <aside className="product-sidebar">
      <div className="sidebar-box">
        <h4>All Products</h4>
        <ul>
          {products.map((p) => (
            <li key={p.id} className={slug === p.slug ? "active" : ""}>
              <Link to={`/products/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-box">
        <h3>LET'S CONNECT AND ELEVATE YOUR PRODUCT RANGE</h3>
        <p>+91 93270 67397</p>
      </div>
    </aside>
  );
};

export default ProductSidebar;
