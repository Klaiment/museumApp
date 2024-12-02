import s from './styles/PaintingDisplay.module.css'

export const PaintingDisplay = (key) => {
    return (
        <>
            <div className={s.paintContainer}>
                <img className={s.image}
                     src={key.webImage.url}
                     alt=""/>
                <p className={s.title}>{key.title}</p>
                <p className={s.author}>{key.principalOrFirstMaker}</p>
            </div>
        </>
    )
}