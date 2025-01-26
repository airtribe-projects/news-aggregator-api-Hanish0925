const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
console.log('NEWS_API_KEY:', NEWS_API_KEY); // Log the API key to verify it is loaded correctly

const NEWS_API_URL = `https://newsapi.org/v2/everything`;

const getNews = async (query, dateStart, dateEnd) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                from: dateStart,
                to: dateEnd,
                sortBy: 'publishedAt',
                language: 'en',
                apiKey: NEWS_API_KEY,
            },
        });
        const articles = response.data.articles || [];
        return {
            totalResults: response.data.totalResults,
            articles: articles.map(article => ({
                title: article.title,
                description: article.description || 'No description available',
                url: article.url,
                publishedAt: article.publishedAt,
            })),
        };
    } catch (error) {
        console.error('Error fetching news:', error.message);
        throw new Error('Unable to fetch news at this time');
    }
};

module.exports = { getNews };