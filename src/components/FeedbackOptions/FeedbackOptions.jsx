import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <>
        {options.map(option => {
        return (
            <button className={css.button}

                key={option} 
                type="button"
                name={option}
                onClick={() => {
                onLeaveFeedback(option);
                }}
            > {option} </button>
        );
        })}
    </>
);
}
FeedbackOptions.propTypes = {
    button: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}