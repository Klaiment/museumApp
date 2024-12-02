import './App.css'
import {PaintingDisplay} from "./components/PaintingDisplay.jsx";
import database from './data/infosMockAPI.json'
function App() {
  const artObjects = database.artObjects;

  return (
    <>
    <div className={"container"}>
      {
        artObjects.map((artObject) => (
          <PaintingDisplay key={artObject.id} {...artObject} />
        ))
      }
    </div>
    </>
  )
}

export default App
