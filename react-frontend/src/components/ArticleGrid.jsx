import "../App.css";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleGrid() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/articles")
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <>
            <div className="section-head">
                <h2>Latest Articles</h2>
                <span>{articles.length} articles</span>
            </div>

            <div className="grid">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
}
