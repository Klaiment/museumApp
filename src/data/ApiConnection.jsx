import { useEffect } from "react";
import axios from "axios";

export const ApiConnection = ({
  setArtObjects,
  maxResults,
  resultPage,
  searchQuery,
  setLoading,
}) => {
  useEffect(() => {
    if (searchQuery && searchQuery.length < 3) {
      return;
    }
    async function fetchData() {
      setLoading(true);
      await axios
        .get(
          `/.netlify/functions/get-collection?ps=${maxResults}&p=${resultPage}${searchQuery ? `&q=${searchQuery}` : ""}`,
        )
        .then((response) => {
          setArtObjects(response.data.artObjects);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, [resultPage, maxResults, searchQuery]);

  return false;
};
