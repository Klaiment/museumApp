import "./App.css";
import { PaintingDisplay } from "./components/PaintingDisplay.jsx";
// import database from './data/infosMockAPI.json'
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiConnection } from "./data/ApiConnection.jsx";
import { Paginator } from "./components/Paginator.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { MoreDetails } from "./components/MoreDetails.jsx";
import { FirstLoading } from "./components/FirstLoading.jsx";
function App() {
  const [artObjects, setArtObjects] = useState({});
  const [maxResults, setMaxResults] = useState(20);
  const [resultPage, setResultPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNeedDetails, setIsNeedDetails] = useState(false);
  const [details, setDetails] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    if (isNeedDetails) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isNeedDetails) {
        setIsNeedDetails(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNeedDetails]);

  return (
    <>
      {isNeedDetails && (
        <MoreDetails detail={details} setIsNeedDetails={setIsNeedDetails} />
      )}
      {firstLoad && <FirstLoading setFirstLoad={setFirstLoad} />}

      <div className={`${isNeedDetails && "blur"} ${firstLoad && "hidden"}`}>
        <ApiConnection
          setLoading={setLoading}
          setArtObjects={setArtObjects}
          maxResults={maxResults}
          resultPage={resultPage}
          searchQuery={searchQuery}
        />
        <h1 className="heading-1">
          {" "}
          <a href="/" className={"innertLink"}>
            rijksmuseum{" "}
          </a>
        </h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className={"container"}>
          {loading ? (
            <div className={"loading"}>
              <span className="loader"></span>
            </div>
          ) : (
            artObjects.length > 0 &&
            artObjects.map((artObject) => (
              <PaintingDisplay
                artObject={artObject}
                setDetails={setDetails}
                setIsNeedDetails={setIsNeedDetails}
              />
            ))
          )}
        </div>
        <div className={"paginatorContainer"}>
          <Paginator setResultPage={setResultPage} resultPage={resultPage} />
        </div>
      </div>
    </>
  );
}

export default App;
