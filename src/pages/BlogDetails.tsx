import { useParams } from "react-router-dom";
import { blogs } from "../features/blogs/data";
import BlogSidebar from "../features/blogs/BlogSidebar";
import hero from "../assets/banner1.jpg";
import "../styles/blogs.css";

const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return <p>Blog not found</p>;

    return (
        <>
            {/* HERO */}

            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="contact-hero-overlay">
                    <p>Home / {blog.title}</p>
                    <h1>{blog.title}</h1>
                </div>
            </section>

            <section className="blog-detail-page">
                <div className="blog-detail-container">

                    <article className="blog-article">
                        <span className="blog-category-tag">{blog.category}</span>

                        <h1 className="blog-title">{blog.title}</h1>

                        <div className="blog-meta">
                            <span>{blog.date}</span>
                            <span>• 5 min read</span>
                        </div>

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="blog-featured-image"
                        />

                        <div
                            className="blog-content-html"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </article>

                    <BlogSidebar />
                </div>
            </section>

        </>
    );
};

export default BlogDetails;
