// import "dotenv/config";
import axios from "axios";

export const handler = async (event) => {
  const params = event.queryStringParameters;
  console.log(process.env.VITE_API_KEY);
  await axios.get(
          `https://www.rijksmuseum.nl/api/en/collection?key=${import.meta.env.VITE_API_KEY}${params}`,
      )
  return {
    statusCode: 200,
    body: JSON.stringify(params),
  };
};
