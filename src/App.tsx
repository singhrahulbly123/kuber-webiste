import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Director from "./pages/Director";
import TechSlider from "./pages/TechSlider";
import PrivateLabel from "./pages/PrivateLabel";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AchievementsPage from "./pages/Achievements";

function App() {
  return (

    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/managing-director-desk" element={<Director />} />
        <Route path="/technology" element={<TechSlider />} />
        <Route path="/private-label" element={<PrivateLabel />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/our-achievements" element={<AchievementsPage/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
