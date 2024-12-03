import s from './styles/Paginator.module.css'

export const Paginator = ({setResultPage, resultPage}) => {
    const handleNext = () => {
        setResultPage(resultPage + 1)
    }
    const handlePrevious = () => {
        setResultPage(resultPage - 1)
    }
    const goToPage = (page) => {
        setResultPage(page)
    }
    return (
        <>
        <div className={s.pageButton}>
            <button onClick={handlePrevious}>Previous</button>
            {[...Array(10).keys()].map((num) => (
                <button key={num} onClick={() => goToPage(num + 1)}         className={resultPage === num + 1 ? s.active : ''}
                >{num + 1}</button>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
        </>
    )
}