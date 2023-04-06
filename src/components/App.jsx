import FeedbackOptions from './feedbackList/FeedbackOptions ';
import Statistics from './statisticsList/Statistics';
import Section from './feedBackSection/Section';
import React from 'react';
import Notification from './notafication/Notafication';
const btns = ['good', 'neutral', 'bad'];

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedback: false,
  };
  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions btns={btns} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification message="No feedback given yet :)" />
          )}
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
