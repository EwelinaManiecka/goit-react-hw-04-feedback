import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOpinion.module.css';

class FeedbackOpinions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.feedback}>
        <h1 className={css.feedback__title}>Please leave feedback</h1>
        <div className={css.feedback__buttons}>
          {options.map(option => {
            return (
              <button
                className={css.feedback__buttons}
                value={option}
                key={option}
                type="button"
                onClick={event => onLeaveFeedback(event)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

FeedbackOpinions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOpinions;
