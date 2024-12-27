import * as C from './styles'

type CardProps = {
    title: string;
    description: string;
    currentDate: string;
    startedDate: string;
}

export const Card = ({ title, description, currentDate, startedDate}: CardProps) => {
    return (
        <C.CardArticle>
            <h3>
                {title}
            </h3>
            <p>{description}</p>
            <footer>
                <span><strong>{currentDate}</strong></span>
                <span>{startedDate}</span>
            </footer>
        </C.CardArticle>
    )
}