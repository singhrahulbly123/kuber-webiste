import BlogCard from "../features/blogs/BlogCard";
import BlogSidebar from "../features/blogs/BlogSidebar";
import hero from "../assets/banner1.jpg";
import { blogs } from "../features/blogs/data";
import "../styles/blogs.css";

const Blogs = () => {
    return (
        <>
            {/* HERO */}

            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="contact-hero-overlay">
                    <p>Home / Blogs</p>
                    <h1>Blogs</h1>
                </div>
            </section>


            <section className="blog-page">
                <div className="blog-layout">
                    <div className="blog-grid">
                        {blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                    <BlogSidebar />
                </div>
            </section>

        </>
    );
};

export default Blogs;
