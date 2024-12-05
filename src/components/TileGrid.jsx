export const TileGrid = ({ tiles }) => {
    const tileWidth = (tiles?.width && tiles?.tiles?.length > 0)
        ? Math.floor(tiles.width / Math.max(...tiles.tiles.map(tile => tile.x + 1), 1))
        : 0;

    const tileHeight = (tiles?.height && tiles?.tiles?.length > 0)
        ? Math.floor(tiles.height / Math.max(...tiles.tiles.map(tile => tile.y + 1), 1))
        : 0;

    if (tileWidth === 0 || tileHeight === 0) {
        return <div>Aucune tuile à afficher</div>;
    }

    return (
        <div
            style={{
                position: "relative",
                width: `${tiles.width}px`,
                height: `${tiles.height}px`,
                backgroundColor: "transparent",
            }}
        >
            {tiles?.tiles.map((tile, index) => (
                <img
                    key={index}
                    src={tile?.url}
                    alt={`Tile (${tile.x}, ${tile.y})`}
                    style={{
                        position: "absolute",
                        top: `${tile.y * tileHeight}px`,
                        left: `${tile.x * tileWidth}px`,
                        width: `${tileWidth}px`, // Réduction légère pour ajouter un espace
                        height: `${tileHeight}px`, // Idem pour la hauteur
                        objectFit: "fill", // Garder l'image sans chevauchement
                        backgroundColor: "transparent",
                    }}
                />
            ))}
        </div>
    );
};
