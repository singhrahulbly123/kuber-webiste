import { useParams } from "react-router-dom";
import { products } from "../features/products/data";
import ProductSidebar from "../features/products/ProductSidebar";
import ProductInfoTable from "../features/products/ProductInfoTable";
import hero from "../assets/banner1.jpg";
import "../styles/products.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  return (
<>

          {/* HERO */}

            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="contact-hero-overlay">
                    <p>Home / {product.title}</p>
                    <h1>{product.title}</h1>
                </div>
            </section>


    <section className="product-detail-page">
      <div className="product-layout">
        <ProductSidebar />
        <div className="product-content">

          <div className="product-header">
            <img src={product.image} alt={product.title} />
            <div>
              <h1>{product.title}</h1>

              <p>{product.fullDesc}</p>

            </div>
          </div>



          <ProductInfoTable />

        </div>
      </div>
    </section>

    
</>

  );
};

export default ProductDetails;
