import s from "./styles/FirstLoading.module.css";
export const FirstLoading = ({ setFirstLoad }) => {
  return (
    <div className={s.firstLoading_global_container}>
      {/* Vidéo */}
      <video
        src="https://www.rijksmuseum.nl/_collection/Promo-Eregalerij.CJ-vPZEC.webm"
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onCanPlay={() => {
          const video = document.querySelector("video");
          if (video) {
            video.playbackRate = 3;
          }
        }}
        onEnded={() => setFirstLoad(false)}
      />

      {/* Voile fumé */}
      <div className={s.firstLoading_voile} />

      <div className={s.firstLoading_text_container}>
        <h1 className={s.firstLoading_text_title}>Bienvenue au RIJKSMUSEUM</h1>
        <p className={s.firstLoading_text_subtitle}>
          Nous vous souhaitons une excellente visite !
        </p>
      </div>
    </div>
  );
};
