const axios = require("axios");

const LARAVEL_API = "http://127.0.0.1:8000/api/articles";

async function runPhase2() {
    try {
        console.log("Fetching latest article from Laravel...");

        // 1. Get all articles
        const articlesRes = await axios.get(LARAVEL_API);
        const articles = articlesRes.data;

        if (!articles.length) {
            console.log("No articles found.");
            return;
        }

        // Assume latest = last item
        const latestArticle = articles[articles.length - 1];

        console.log("Latest article:", latestArticle.title);

        // 2. Fake Google Search Results
        // TODO: Replace with real Google Search API
        const referenceArticles = [
            {
                title: "Example Reference Article 1",
                content: "This is simulated content from another blog."
            },
            {
                title: "Example Reference Article 2",
                content: "This is another simulated article content."
            }
        ];

        // 3. Fake LLM Processing
        // TODO: Replace with real OpenAI / Claude API call
        const enhancedContent = `
${latestArticle.content}

---  
This article has been enhanced by comparing it with similar high-ranking articles.
It now includes improved structure, clarity, and contextual depth.

References:
1. ${referenceArticles[0].title}
2. ${referenceArticles[1].title}
`;

        // 4. Publish updated article
        console.log("Publishing updated article...");

        await axios.post(LARAVEL_API, {
            title: latestArticle.title + " (Updated)",
            content: enhancedContent,
            source_url: latestArticle.source_url,
            version: "updated"
        });

        console.log("Updated article published successfully.");

    } catch (error) {
        console.error("Error in Phase 2:", error.message);
    }
}

runPhase2();
