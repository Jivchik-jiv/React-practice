import React from "react";
import styles from "./Feedback.module.css";
import {feedbackApi} from "./../../services/api";

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

const Statistics = ({ feedbackData, getTotalFeedback, positiveFeedback }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <ul className={styles.list}>
        {Object.keys(feedbackData).map((item) => {
          return (
            <li key={item}>
              {item}: {feedbackData[item]}
            </li>
          );
        })}
        <li>Total: {getTotalFeedback()}</li>
        <li>Positive feedback: {positiveFeedback}&#37;</li>
      </ul>
    </div>
  );
};


class Feedback extends React.Component {

  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }

  componentDidMount() {
    feedbackApi.fetchFeedback().then(feedback=> {
      this.setState({feedback})
    })
  }

  getTotalFeedback=() =>{
    return Object.values(this.state.feedback).reduce(
      (acc, item) => acc + item,
      0
    );
  };

  handleFeedbackChange = (e) =>{
    const name = e.currentTarget.name;
    const value = this.state.feedback[name];
    const updateObj = {[name]: value +1};

    feedbackApi.updateFeedback(updateObj).then(feedback=>{
      this.setState({feedback})
    })

   
  };


  render() {
    const positiveFeedback = this.state.feedback.good
      ? ((this.state.feedback.good / this.getTotalFeedback()) * 100).toFixed(2)
      : 0;
    return (
      <div className="mainBox">
        <h1 className={styles.title}>Feedback Box</h1>
        <div>
          <h3>Please, leave your feedback</h3>
          {Object.keys(this.state.feedback).map((item) => {
            return (
              <button
                key={item}
                type="button"
                name={item}
                onClick={this.handleFeedbackChange}
                className={styles.btn}
              >
                {item}
              </button>
            );
          })}
        </div>
        {this.getTotalFeedback() ? (
          <Statistics
            feedbackData={this.state.feedback}
            getTotalFeedback={this.getTotalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback found" />
        )}
      </div>
    );
  }
}



export default Feedback;
