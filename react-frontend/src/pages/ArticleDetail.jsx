import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/ArticleDetail.css"

export default function ArticleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/articles/${id}`)
            .then(res => res.json())
            .then(data => setArticle(data));
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [article]);

    if (!article) {
        return <div className="loader-wrapper">
            <div className="loader"></div>
        </div>;
    }

    return (<>
        <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to articles
        </button>
        <div className="article-detail page">


            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta badge">
                {article.version === "updated" ? "Updated Article" : "Original Article"}
            </div>

            <div className="article-content">
                {article.content}
            </div>
        </div>
    </>
    );
}
