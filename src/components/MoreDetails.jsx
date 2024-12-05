import s from "./styles/MoreDetails.module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {TileViewer} from "./TileViewer.jsx";
import {TileGrid} from "./TileGrid.jsx";

export const MoreDetails = ({ detail, setIsNeedDetails }) => {
    const [tiles, setTiles] = useState([]);
    const viewerRef = useRef(null);


        useEffect(() => {
            async function getTiles() {
                try {
                    const response = await axios.get(`/.netlify/functions/get-tiles?objectNumber=${detail?.objectNumber}`);
                    // console.log(response.data.levels[0] )
                    setTiles(response.data.levels[0] || []);
                } catch (error) {
                    console.error("Erreur lors de la récupération des tuiles :", error);
                }
            }
            getTiles();
        }, [detail]);


    return (
        <div className={s.moreDetailsContainer}>
            <span className={s.closeButton} onClick={() => setIsNeedDetails(false)}>
                ❌
            </span>
            <p className={s.moreDetailsTitle}>{detail?.title}</p>
            {/*<img src={detail.webImage.url} className={s.moreDetailsImage}/>*/}
            <div className={s.moreDetailsImage}>
                {tiles.width  &&             <TileGrid tiles={tiles}/>}
            </div>
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
