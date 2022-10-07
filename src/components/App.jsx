import {Statistics} from "components/Statistics/Statistics"
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import {Section} from "components/Section/Section"
import {Notification} from "components/Notification/Notification"
import { useState } from "react";


export const App = ()=> {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(good * 100 / countTotalFeedback());
  }
  const handleChange = (name) => {
    switch(name) {
      case "good":
         setGood((prev) => prev + 1);
        break;
      case "neutral":
         setNeutral((prev) => prev + 1);
         break;
      case "bad":
         setBad((prev) => prev + 1);
         break;
      default: 
        return;
    }
    // this.setState((prevState) => {
    //   return({
    //     [name]: prevState[name] + 1
    //   })
    // }) 
  }
  return (
    <div>
        <Section title= "Please leave feedback about us">
          <FeedbackOptions 
          options={["good", "neutral", "bad"]}  onLeaveFeedback={handleChange}/>
        </Section>
        < Section > {!countTotalFeedback() ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> }
        </Section>

    </div>
)
}

