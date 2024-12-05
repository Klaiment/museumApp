import s from "./styles/MoreDetails.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { TileGrid } from "./TileGrid.jsx";
import OpenSeadragon from "openseadragon";

export const MoreDetails = ({ detail, setIsNeedDetails }) => {
    const [tiles, setTiles] = useState([]);
    const [isZoomed, setIsZoomed] = useState(false);  // État pour contrôler le zoom
    const viewerRef = useRef(null);

    useEffect(() => {
        async function getTiles() {
            try {
                const response = await axios.get(`/.netlify/functions/get-tiles?objectNumber=${detail?.objectNumber}`);
                setTiles(response.data.levels[0] || []);
            } catch (error) {
                console.error("Erreur lors de la récupération des tuiles :", error);
            }
        }
        getTiles();
    }, [detail]);

    const handleImageClick = () => {
        setIsZoomed(true); // Quand l'image est cliquée, on active l'agrandissement
    };

    useEffect(() => {
        if (isZoomed && viewerRef.current) {
            // Initialisation d'OpenSeadragon lorsque le zoom est activé
            const viewer = OpenSeadragon({
                id: viewerRef.current,
                prefixUrl: "https://openseadragon.github.io/openseadragon/images/",  // Préfixe pour les icônes de navigation
                tileSources: tiles, // On passe les tuiles ici
            });

            // Nettoyer le viewer quand le zoom est désactivé
            return () => viewer.destroy();
        }
    }, [isZoomed, tiles]);

    return (
        <div className={s.moreDetailsContainer}>
            <span className={s.closeButton} onClick={() => setIsNeedDetails(false)}>
                ❌
            </span>
            <p className={s.moreDetailsTitle}>{detail?.title}</p>

            {/* Conteneur pour l'image */}
            {/*            <div
                className={s.moreDetailsImage}
                style={{
                    maxWidth: "400px",
                    maxHeight: "400px",
                    cursor: "pointer",  // Clic pour zoomer
                }}
                // onClick={handleImageClick}  // Gestion du clic
            >
                <img src={detail.webImage.url} className={s.moreDetailsImage}/>
                {tiles?.width && <TileGrid tiles={tiles}  />}
            </div>*/}
            <img src={detail.webImage.url} className={s.moreDetailsImage}/>


            <p className={s.dimension}>{detail?.subTitle}</p>
            <p className={s.decription}>{detail?.label.description}</p>
            <p className={s.date}>{detail?.dating?.presentingDate}</p>
            <p className={s.author}>
                {detail?.principalMakers.map((maker) => maker.name).join(", ")}
            </p>

            {/* Viewer OpenSeadragon */}
            {isZoomed && (
                <div
                    ref={viewerRef}
                    className={s.viewer}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",  // Fond sombre
                        zIndex: 1000,  // Mettre au-dessus du contenu
                    }}
                />
            )}
        </div>
    );
};
