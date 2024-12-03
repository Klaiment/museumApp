import s from "./styles/PaintingDisplay.module.css";

export const PaintingDisplay = (key, ...artObject) => {
  const isLandscape = key?.webImage?.width > key?.webImage?.height;
  return (
    <>
      <div className={`${s.paintContainer} ${isLandscape ? s.landscape : ""}`}>
        <img
          className={s.image}
          src={
            key?.webImage?.url ||
            "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          }
          alt=""
        />
        <p className={s.title}>{key.title}</p>
        <p className={s.author}>{key.principalOrFirstMaker}</p>
      </div>
    </>
  );
};
