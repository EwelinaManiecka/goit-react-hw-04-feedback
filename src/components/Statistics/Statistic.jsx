import { number } from 'prop-types';
import css from './Statistic.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statistics}>
      <h2 className={css.statistics__title}>Statistics</h2>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
          <span className={css.statistics__name}>Good : {good}</span>
        </li>
        <li className={css.statistics__item}>
          <span className={css.statistics__name}>Neutral : {neutral}</span>
        </li>
        <li className={css.statistics__item}>
          <span className={css.statistics__name}>Bad : {bad}</span>
        </li>

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

Statistics.propTypes = {
  good: number.isRequired,
  neutral: number.isRequired,
  bad: number.isRequired,
  total: number.isRequired,
  positivePercentage: number.isRequired,
};

export default Statistics;
