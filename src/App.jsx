import './App.css'
import {PaintingDisplay} from "./components/PaintingDisplay.jsx";
// import database from './data/infosMockAPI.json'
import axios from "axios";
import {useEffect, useState} from "react";
import {ApiConnection} from "./data/ApiConnection.jsx";
import {Paginator} from "./components/Paginator.jsx";
function App() {
    const [artObjects, setArtObjects] = useState({});
    const [maxResults, setMaxResults] = useState(20);
    const [resultPage, setResultPage] = useState(1);


    return (
      <>
          <ApiConnection setArtObjects={setArtObjects} maxResults={maxResults} resultPage={resultPage}/>
        <div className={"container"}>
          { artObjects.length > 0 &&
            artObjects.map((artObject) => (
                <PaintingDisplay key={artObject.id} {...artObject} />
            ))
          }
        </div>
          <div className={"paginatorContainer"}>
              <Paginator setResultPage={setResultPage} resultPage={resultPage}/>
          </div>
      </>
  )
}

export default App
