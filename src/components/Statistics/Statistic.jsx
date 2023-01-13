import css from './Statistic.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { options, total, positivePercentage } = this.props;
    return (
      <div className={css.statistics}>
        <h2 className={css.statistics__title}>Statistics</h2>
        <ul className={css.statistics__list}>
          {Object.entries(options).map(option => (
            <li
              className={css.statistics__item}
              name={option[0]}
              key={option[0]}
            >
              <span className={css.statistics__name}>
                {option[0][0]} : {option[1]}
              </span>
            </li>
          ))}

          <li className={css.statistics__item}>
            <span>Total: {total}</span>
          </li>
          <li className={css.statistics__item}>
            <span>Positive feedback: {positivePercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
