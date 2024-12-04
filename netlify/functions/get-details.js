import "dotenv/config";
import axios from "axios";

export const handler = async (event) => {
    const params = event.queryStringParameters;
    try {
        const response = await axios.get(
            `https://www.rijksmuseum.nl/api/en/collection/${params?.objectNumber}?key=${process.env.VITE_API_KEY}`
        );
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error('Error fetching data:', error.message || error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message || 'An unknown error occurred',
            }),
        };
    }


};
