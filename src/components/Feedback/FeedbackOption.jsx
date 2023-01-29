import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';

const FeedbackOpinions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={css.feedback}>
      <h1 className={css.feedback__title}>Please leave feedback</h1>
      <div className={css.feedback__buttons}>
        {options.map(option => {
          return (
            <button
              className={css.feedback__buttons}
              name={option}
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FeedbackOpinions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOpinions;
