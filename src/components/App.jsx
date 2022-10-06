import {Statistics} from "components/Statistics/Statistics"
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import {Section} from "components/Section/Section"
import {Notification} from "components/Notification/Notification"
import React from "react";
import { useState } from "react";


export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = this.countTotalFeedback()
    if(!countTotalFeedback) {
      return 0 
    }
    const possitiveValue = this.state.good 
    const result =  (possitiveValue / countTotalFeedback) * 100
    return Number(result.toFixed(0));
  }
  const handleChange = (name) => {
    switch(name) {
      case "good":
        return setGood((prev) => prev + 1);
      case "neutral":
        return setNeutral((prev) => prev + 1);
      case "bad":
        return setBad((prev) => prev + 1);
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
          <FeedbackOptions options={Object.keys(this.state)}  onLeaveFeedback={handleChange}/>
        </Section>
        < Section > {!countTotalFeedback ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> }
        </Section>

    </div>
)
}

// export class App  extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

// handleChange = (name) => {
//   this.setState((prevState) => {
//     return({
//       [name]: prevState[name] + 1
//     })
//   }) 
// }
// countTotalFeedback(){
//   return this.state.good + this.state.neutral + this.state.bad
// }
// countPositiveFeedbackPercentage(){
//   const countTotalFeedback = this.countTotalFeedback()
//   if(!countTotalFeedback) {
//     return 0 
//   }
//   const possitiveValue = this.state.good 
//   const result =  (possitiveValue / countTotalFeedback) * 100
//   return Number(result.toFixed(0));
//   }
// render () {
//   const {good, neutral, bad} = this.state
//   const countTotalFeedback = this.countTotalFeedback()
//   const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage()
    // return (
    //     <div>
    //         <Section title= "Please leave feedback about us">
    //           <FeedbackOptions options={Object.keys(this.state)}  onLeaveFeedback={this.handleChange}/>
    //         </Section>
    //         < Section > {!countTotalFeedback ? <Notification message="There is no feedback" /> : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> }
    //         </Section>

    //     </div>
    // )
// }
// }
