import { useEffect, useState } from "react";
import axios from "axios";

export const ApiConnection = ({
  setArtObjects,
  maxResults,
  resultPage,
  searchQuery,
  setLoading,
}) => {
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios
        .get(
          `https://www.rijksmuseum.nl/api/en/collection?key=${import.meta.env.VITE_API_KEY}&ps=${maxResults}&p=${resultPage}${searchQuery ? `&q=${searchQuery}` : ""}`,
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
