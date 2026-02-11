import React from "react";
import blogImg from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";
import "../../styles/blogSection.css";

interface Blog {
    id: number;
    date: string;
    title: string;
}

const BlogSection: React.FC = () => {
    const blogs: Blog[] = [
        {
            id: 1,
            date: "26 Sep",
            title: "Best Global Dairy Company: Why Kuber Dairy is Best?",
        },
        {
            id: 2,
            date: "26 Sep",
            title: "Whole Milk Powder: Buy Online for Convenience and Quality",
        },
        {
            id: 3,
            date: "07 Nov",
            title: "High-Quality Dairy Products by Kuber – Dairy Products Online",
        },
        {
            id: 4,
            date: "07 Nov",
            title: "High-Quality Dairy Products by Kuber – Dairy Products Online",
        },
    ];

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="premium-header">
                    <span className="premium-subtitle">From The Blog</span>
                    <h2 className="premium-title">
                        Latest News & Insights
                    </h2>
                    <div className="premium-line"></div>
                </div>

                <div className="blog-grid">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="blog-card">
                            <div className="blog-image">
                                <img src={blogImg} alt={blog.title} />
                                <div className="blog-date">{blog.date}</div>
                            </div>

                            <div className="blog-content">
                                <span className="blog-author">
                                    By Vidhi Brahmbhatt
                                </span>
                                <h3 className="blog-title">{blog.title}</h3>
                                <button className="blog-btn">
                                    Read More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
