import s from './styles/PaintingDisplay.module.css'

export const PaintingDisplay = () => {
    return (
        <>
            <div className={s.paintContainer}>
                <img className={s.image}
                     src="https://lh3.googleusercontent.com/SwwiVAxnwFE_s-k7-bPOZ6jnGfcuVDJoZ-ofLb0Zispb-mJdsfasrE1nTPRcGDPwyEqY0txKpjPcAWaIIltYvvPtDA8=s0"
                     alt=""/>
                <p className={s.title}>Portrait of Don Ramón Satué</p>
                <p className={s.author}>Francisco de Goya</p>
            </div>
        </>
    )
}