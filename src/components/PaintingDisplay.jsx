import s from "./styles/PaintingDisplay.module.css";
import axios from "axios";
import { useState } from "react";

export const PaintingDisplay = ({
  artObject,
  setDetails,
  setIsNeedDetails,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isLandscape =
    artObject?.webImage?.width &&
    artObject?.webImage?.height &&
    artObject.webImage.width > artObject.webImage.height;

  const showDetails = async () => {
    await axios
      .get(
        `/.netlify/functions/get-details?objectNumber=${artObject?.objectNumber}`,
      )
      .then((response) => {
        setDetails(response.data.artObject);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsNeedDetails(true);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    artObject?.hasImage &&
    artObject?.webImage?.url.includes("http") && (
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
              alt={`Photo - ${artObject.title}`}
              loading="lazy"
              onLoad={handleImageLoad}
            />
            {isImageLoaded ? (
              <div className={s.overlay}>
                <p className={s.title}>{artObject.title}</p>
                <p className={s.author}>{artObject.principalOrFirstMaker}</p>
              </div>
            ) : (
              <span className="loader"></span>
            )}
          </div>
        </div>
      </>
    )
  );
};
