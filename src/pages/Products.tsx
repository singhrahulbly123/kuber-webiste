import { products } from "../features/products/data";
import ProductCard from "../features/products/ProductCard";
import hero from "../assets/banner1.jpg";
import "../styles/products.css";

const Products = () => {
    return (

        <>
            {/* HERO */}

            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="contact-hero-overlay">
                    <p>Home / Products</p>
                    <h1>Products</h1>
                </div>
            </section>

            <section className="products-page">
                {/* <div className="products-header">
                    <h1>Products</h1>
                    <div className="line"></div>
                </div> */}

                <div className="products-grid">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>


        </>
    );
};

export default Products;
