import { Link } from "react-router-dom";
import type { Blog } from "./data";

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <>
            <Link to={`/blogs/${blog.slug}`} className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-card-body">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <span className="blog-date">{blog.date}</span>
                </div>
            </Link>

        </>
    );
};

export default BlogCard;