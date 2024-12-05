import s from "./styles/MoreDetails.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import OpenSeadragon from "openseadragon";

export const MoreDetails = ({ detail, setIsNeedDetails }) => {
    const [tiles, setTiles] = useState([]);
    const viewerRef = useRef(null);

    useEffect(() => {
        async function getTiles() {
            try {
                const response = await axios.get(`/.netlify/functions/get-tiles?objectNumber=${detail?.objectNumber}`);
                console.log(response.data);
                setTiles(response.data.levels);
            } catch (error) {
                console.error(error);
            }
        }
        getTiles();
    }, [detail]);

    useEffect(() => {
        if (tiles.length > 0 && viewerRef.current) {
            // Initialiser OpenSeadragon
            const tileSources = tiles.map(level => ({
                type: "image",
                url: level.tiles[0].url,
                width: level.width,
                height: level.height,
            }));

            const viewer = OpenSeadragon({
                element: viewerRef.current,
                tileSources: tileSources,
                prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
                showNavigator: true,
                defaultZoomLevel: 1,
            });

            return () => {
                viewer.destroy(); // Nettoyage pour éviter les conflits
            };
        }
    }, [tiles]);

    return (
        <div className={s.moreDetailsContainer}>
            <span className={s.closeButton} onClick={() => setIsNeedDetails(false)}>
                ❌
            </span>
            <p className={s.moreDetailsTitle}>{detail?.title}</p>
            <p className={s.dimension}>{detail?.subTitle}</p>
            <p className={s.decription}>{detail?.label.description}</p>
            <p className={s.date}>{detail?.dating?.presentingDate}</p>
            <p className={s.author}>
                {detail?.principalMakers.map((maker) => maker.name).join(", ")}
            </p>
            <div ref={viewerRef} className={s.viewer}></div>
        </div>
    );
};
