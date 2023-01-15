import React from 'react';
import { useState, useEffect } from 'react';

import FeedbackOpinions from './Feedback/FeedbackOpinion';
import Statistics from './Statistics/Statistic';
import Notification from './Notification/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const name = event.target.name;
    console.log(name);
    name === 'good' && setGood(10 + 1);
    name === 'neutral' && setNeutral(neutral + 1);
    name === 'bad' && setBad(bad + 1);

    console.log(good, bad, neutral);
  };

  useEffect(() => {
    console.log(good, neutral, bad);
  }, [good, neutral, bad]);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

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
            // options={actualState}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </section>
    </div>
  );
};

export default App;
