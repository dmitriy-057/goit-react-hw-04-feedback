import css from "./Statistics.module.css"
import PropTypes from "prop-types"
export const Statistics = ({good, neutral,bad,total, positivePercentage})=>{

    return (
        <div>
        <p className={css.p}>Statistics</p>
        <ul>
            <li>
            Good: <span>{good}</span>
            </li>
            <li>
            Neutral: <span>{neutral}</span>
            </li>
            <li>
            Bad: <span>{bad}</span>
            </li>
            <li>
            Total: <span>{total}</span>
            </li>
            <li>
            Possitive feedback: <span>{positivePercentage}</span> %
            </li>
        </ul> 
    </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}
