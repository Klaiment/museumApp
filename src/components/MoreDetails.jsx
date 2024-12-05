import s from "./styles/MoreDetails.module.css";
export const MoreDetails = ({ detail, setIsNeedDetails }) => {
  return (
    <div className={s.moreDetailsContainer}>
      <span className={s.closeButton} onClick={() => setIsNeedDetails(false)}>
        ❌
      </span>
      <p className={s.moreDetailsTitle}>{detail?.title}</p>
      <img src={detail.webImage.url} className={s.moreDetailsImage} />
      <p className={s.dimension}>{detail?.subTitle}</p>
      <p className={s.decription}>{detail?.label.description}</p>
      <p className={s.date}>{detail?.dating.presentingDate}</p>
      <p className={s.author}>
        {detail.principalMakers.map((maker) => maker.name).join(", ")}
      </p>
    </div>
  );
};
