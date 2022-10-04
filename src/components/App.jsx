import {useState} from "react";
import { Section } from "./Feedback/Section/Section";
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions'
import { Statistics } from './Feedback/Statistics/Statistics'
import { Notification } from './Feedback/Notification/Notification'

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = (event) => {
    const tartgetBtn = event.target.name;
    
    switch (tartgetBtn) {
      case 'good':
        setGood(state => state + 1)
        break;
      case 'neutral':
        setNeutral(state => state + 1)
        break;
      case 'bad':
        setBad(state => state + 1)
        break;
      default:
        return;
    }
  }

  const total = good + neutral + bad;
  const positivePercentage = Number((((good + neutral) / total) * 100).toFixed());

  return (
    <Section title="Please, leave your feedback">
      <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={handleBtnClick} />
      {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> : <Notification />}
    </Section>
  )
};