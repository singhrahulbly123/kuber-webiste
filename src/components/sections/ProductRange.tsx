import React from "react";
import p1 from "../../assets/UNSALTED-SWEET-CREAM-BUTTER.jpg";
import p2 from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";
import p3 from "../../assets/UNSALTED-SWEET-CREAM-BUTTER.jpg";
import p4 from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";
import p5 from "../../assets/UNSALTED-SWEET-CREAM-BUTTER.jpg";
import p6 from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";
import p7 from "../../assets/UNSALTED-SWEET-CREAM-BUTTER.jpg";
import p8 from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";
import { FileText } from "lucide-react";
import "../../styles/productRange.css";

interface Product {
  id: number;
  title: string;
  img: string;
}

const products: Product[] = [
  { id: 1, title: "Sweet Cream Butter", img: p1 },
  { id: 2, title: "Anhydrous Milk Fat", img: p2 },
  { id: 3, title: "Butter Consumer Packs", img: p3 },
  { id: 4, title: "Buttermilk Powder", img: p4 },
  { id: 5, title: "Cheddar Cheese", img: p5 },
  { id: 6, title: "Demineralized Whey Powder", img: p6 },
  { id: 7, title: "Evaporated Milk", img: p7 },
  { id: 8, title: "Fat Filled Milk Powder", img: p8 },

];

const ProductRange: React.FC = () => {
  return (
    <section className="premium-products">
      <div className="premium-header">
        <span className="premium-subtitle">
          Welcome to KUBER Dairy
        </span>
        <h2 className="premium-title">
          Our Range of Products
        </h2>
        <div className="premium-line"></div>
      </div>

      <div className="premium-grid">
        {products.map((item) => (
          <div key={item.id} className="premium-card">
            <div className="premium-img">
              <img src={item.img} alt={item.title} />
              <div className="premium-overlay"></div>
            </div>

            <div className="premium-icon">
              <FileText size={20} />
            </div>

            <div className="premium-content">
              <h3>{item.title}</h3>
              <p>
                Crafted with excellence and global quality standards
                to deliver unmatched dairy purity.
              </p>

              <button className="premium-btn">
                View Product →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
