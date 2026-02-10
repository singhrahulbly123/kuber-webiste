import { blogs } from "./data";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
    return (
        <aside className="blog-sidebar">
            <div className="sidebar-box">
                <h4>Categories</h4>
                <ul>
                    {[...new Set(blogs.map(b => b.category))].map(cat => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-box">
                <h4>Latest Posts</h4>
                {blogs.slice(0, 4).map((blog) => (
                    <Link
                        key={blog.id}
                        to={`/blogs/${blog.slug}`}
                        className="sidebar-post"
                    >
                        <img src={blog.image} alt={blog.title} />
                        <span>{blog.title}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default BlogSidebar;
