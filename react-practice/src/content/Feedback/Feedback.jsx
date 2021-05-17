import React from "react";
import styles from "./Feedback.module.css";

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

const Feedback = ({
  feedbackData,
  onFeedbackChange,
  getTotalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={styles.feedback}>
      <h1 className={styles.title}>Feedback Box</h1>
      <div>
        <h3>Please, leave your feedback</h3>
        {Object.keys(feedbackData).map((item) => {
          return (
            <button
              key={item}
              type="button"
              name={item}
              onClick={onFeedbackChange}
              className={styles.btn}
            >
              {item}
            </button>
          );
        })}
      </div>
      {getTotalFeedback() ? (
        <Statistics
          feedbackData={feedbackData}
          getTotalFeedback={getTotalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback found" />
      )}
    </div>
  );
};

export default Feedback;
