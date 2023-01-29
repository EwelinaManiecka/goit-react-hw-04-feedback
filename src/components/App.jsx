import React from 'react';
import { useState } from 'react';

import FeedbackOpinions from './Feedback/FeedbackOption';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistic';

const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });

  const btnNames = ['good', 'bad', 'neutral'];

  const onLeaveFeedback = option => {
    option === 'good' &&
      setStats(lastStats => ({
        ...lastStats,
        good: lastStats.good + 1,
      }));
    option === 'neutral' &&
      setStats(lastStats => ({
        ...lastStats,
        neutral: lastStats.neutral + 1,
      }));
    option === 'bad' &&
      setStats(lastStats => ({
        ...lastStats,
        bad: lastStats.bad + 1,
      }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = stats;
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = stats;
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  return (
    <div className="App">
      <section>
        <FeedbackOpinions
          options={btnNames}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
};

export default App;
