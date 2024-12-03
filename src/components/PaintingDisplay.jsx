import s from './styles/PaintingDisplay.module.css'

export const PaintingDisplay = (key, ...artObject) => {
    const isLandscape = key.webImage.width > key.webImage.height;
    return (
        <>
            <div className={`${s.paintContainer} ${isLandscape ? s.landscape : ''}`}>
                <img className={s.image}
                     src={key.webImage.url}
                     alt=""/>
                <p className={s.title}>{key.title}</p>
                <p className={s.author}>{key.principalOrFirstMaker}</p>
            </div>
        </>
    )
}