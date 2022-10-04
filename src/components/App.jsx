import React from "react";
import { Section } from "./Feedback/Section/Section";
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions'
import { Statistics } from './Feedback/Statistics/Statistics'
import { Notification } from './Feedback/Notification/Notification'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleBtnClick = (event) => {
    const tartgetBtn = event.target.name;
    
    this.setState(prevState => ({
      [tartgetBtn]: prevState[tartgetBtn] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Number((((good + neutral) / total) * 100).toFixed());

    return (
      <Section title="Please, leave your feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleBtnClick} />
        {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification />}
      </Section>
    )
  }
};

export default App;