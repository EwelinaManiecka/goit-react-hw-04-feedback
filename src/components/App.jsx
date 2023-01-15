import React from 'react';
import { useState } from 'react';

import FeedbackOpinions from './Feedback/FeedbackOpinion';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const name = event.target.name;
    name === 'good' && setGood(good + 1);
    name === 'neutral' && setNeutral(neutral + 1);
    name === 'bad' && setBad(bad + 1);
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / countTotalFeedback()) * 100);
  };

  const btnNames = ['good', 'bad', 'neutral'];

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
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
};

export default App;
