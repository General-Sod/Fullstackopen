import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const avg = (good - bad) / total;
  if (total > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="total" value={total} />
            <Statistic text="average" value={avg} />
            <Statistic text="positive" value={`${(100 * good) / total} %`} />
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <p>Leave some feeback</p>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
  };

  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };

  const badHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={goodHandler} text="good" />
      <Button onClick={neutralHandler} text="neutral" />
      <Button onClick={badHandler} text="bad" />

      <h2>Statistics test</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
