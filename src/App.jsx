import "./App.css";
import { PaintingDisplay } from "./components/PaintingDisplay.jsx";
// import database from './data/infosMockAPI.json'
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiConnection } from "./data/ApiConnection.jsx";
import { Paginator } from "./components/Paginator.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
function App() {
  const [artObjects, setArtObjects] = useState({});
  const [maxResults, setMaxResults] = useState(20);
  const [resultPage, setResultPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ApiConnection
        setLoading={setLoading}
        setArtObjects={setArtObjects}
        maxResults={maxResults}
        resultPage={resultPage}
        searchQuery={searchQuery}
      />

      <>
          <a href="/" className={"innertLink"}><h1 className="heading-1">rijksmuseum</h1></a>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <div className={"container"}>
              {loading ? (
                  <div className={"loading"}><span className="loader"></span></div>
              ) : (
                  artObjects.length > 0 &&
                  artObjects.map((artObject) => (
                      <PaintingDisplay key={artObject.id} {...artObject} />
                  ))
              )}
          </div>
          <div className={"paginatorContainer"}>
              <Paginator setResultPage={setResultPage} resultPage={resultPage}/>
          </div>
      </>
      </>
        );
        }

        export default App;
