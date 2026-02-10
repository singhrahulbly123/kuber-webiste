import blogImg from "../../assets/Kuber-Dairy-Group-Anhydrous-Milk-Fat.png";

const BlogSection = () => {
    const blogs = [
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
    ];

    return (
        <section className="blog-section">

            <div className="premium-header">
                <span className="premium-subtitle">
                    From the Blog Post
                </span>
                <h2 className="premium-title">
                    Latest News & Articles
                </h2>
                <div className="premium-line"></div>
            </div>

            <div className="blog-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image">
                            <img src={blogImg} alt="blog" />
                            <div className="blog-date">{blog.date}</div>
                        </div>

                        <div className="blog-content">
                            <p className="blog-author">Vidhi Brahmbhatt</p>
                            <h3>{blog.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
