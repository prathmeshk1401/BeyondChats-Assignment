import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/a1.jpg";
import img2 from "../assets/images/a2.jpeg";
import img3 from "../assets/images/a3.jpg";
import img4 from "../assets/images/a4.jpg";
import img5 from "../assets/images/a5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function ArticleCard({ article, index }) {
    const navigate = useNavigate();

    return (
        <div
            className="card"
            onClick={() => navigate(`/articles/${article.id}`)}
        >
            <img
                src={images[index % images.length]}
                alt={article.title}
                loading="lazy"
            />

            <div className="card-body">
                <span className="badge">
                    {article.version === "updated" ? "Updated" : "Original"}
                </span>

                <h3>{article.title}</h3>

                <p>
                    {article.content.length > 120
                        ? article.content.slice(0, 120) + "…"
                        : article.content}
                </p>
            </div>
        </div>
    );
}
