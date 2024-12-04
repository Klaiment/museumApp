import s from "./styles/PaintingDisplay.module.css";
import axios from "axios";

export const PaintingDisplay = ({
  artObject,
  setDetails,
  setIsNeedDetails,
}) => {
  const isLandscape =
    artObject?.webImage?.width &&
    artObject?.webImage?.height &&
    artObject.webImage.width > artObject.webImage.height;

  const showDetails = async () => {
    await axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection/${artObject?.objectNumber}?key=${import.meta.env.VITE_API_KEY}`,
      )
      .then((response) => {
        setDetails(response.data.artObject);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsNeedDetails(true);
  };
  return (
      artObject?.hasImage && artObject?.webImage?.url.includes('http') && (
          <>
      <div
        className={`${s.paintContainer} ${isLandscape ? s.landscape : ""}`}
        onClick={showDetails}
      >
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={
              artObject?.webImage?.url ||
              "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
            }
            alt=""
          />
          <div className={s.overlay}>
            <p className={s.title}>{artObject.title}</p>
            <p className={s.author}>{artObject.principalOrFirstMaker}</p>
          </div>
        </div>
      </div>
    </>
      )
  );
};
