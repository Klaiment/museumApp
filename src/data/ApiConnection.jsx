import {useEffect} from "react";
import axios from "axios";

export const ApiConnection = ({setArtObjects, maxResults, resultPage}) => {
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8QQ9KcWz&ps=${maxResults}&p=${resultPage}`);
            setArtObjects(response.data.artObjects);
        }
        fetchData();
    }, [resultPage, maxResults]);


    return false
}