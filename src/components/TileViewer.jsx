import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";
import "./styles/TileViewer.module.css"; // Pour le style du viewer

export const TileViewer = ({ tiles }) => {
    const viewerRef = useRef(null);

    useEffect(() => {
        if (tiles.length > 0 && viewerRef.current) {
            const tileSources = tiles.map(level => ({
                type: "image",
                url: level.tiles[0]?.url, // On utilise la première tuile comme exemple
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
                viewer.destroy(); // Nettoyage
            };
        }
    }, [tiles]);

    return (
        <div className="tile-viewer-container">
            <div ref={viewerRef} className="tile-viewer"></div>
        </div>
    );
};
